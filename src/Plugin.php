<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates;

use Craft;
use craft\base\Element;
use craft\base\Plugin as BasePlugin;
use craft\db\MigrationManager;
use craft\elements\db\ElementQuery;
use craft\events\DefineBehaviorsEvent;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterTemplateRootsEvent;
use craft\i18n\PhpMessageSource;
use craft\services\Fields;
use craft\web\twig\variables\CraftVariable;
use craft\web\View;
use Gewerk\RecurringDates\Behavior\ElementBehavior;
use Gewerk\RecurringDates\Behavior\ElementQueryBehavior;
use Gewerk\RecurringDates\Field\RecurringDatesField;
use Gewerk\RecurringDates\Migration\InstallMigration;
use Gewerk\RecurringDates\Service\FieldService;
use Gewerk\RecurringDates\Service\FormatService;
use Gewerk\RecurringDates\Service\IcsService;
use Gewerk\RecurringDates\Twig\Variable\RecurringDatesVariable;
use yii\base\Event;

/**
 * Inits the plugins and acts as hub for all services
 *
 * @package Gewerk\RecurringDates
 */
class Plugin extends BasePlugin
{
    /**
     * Database tables
     */
    public const DATES_TABLE = '{{%recurring_dates}}';
    public const OCCURRENCES_TABLE = '{{%recurring_dates_occurrences}}';

    /**
     * Current plugin instance
     *
     * @var self
     */
    public static $plugin;

    /**
     * @inheritdoc
     */
    public string $schemaVersion = '0.6.1';

    /**
     * @var string
     */
    private $rootPath;

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();

        // Save current instance
        self::$plugin = $this;

        // Set controller namespaces
        if (Craft::$app->getRequest()->getIsConsoleRequest()) {
            $this->controllerNamespace = 'Gewerk\\RecurringDates\\Console\\Controller';
        } else {
            $this->controllerNamespace = 'Gewerk\\RecurringDates\\Controller';
        }

        // Set alias
        Craft::setAlias('@recurring-dates', $this->getRootPath());

        // Load translations
        Craft::$app->getI18n()->translations['recurring-dates'] = [
            'class' => PhpMessageSource::class,
            'sourceLanguage' => 'en',
            'basePath' => '@recurring-dates/translations',
            'forceTranslation' => true,
            'allowOverrides' => true,
        ];

        // Register components
        $this->setComponents([
            'field' => FieldService::class,
            'ics' => IcsService::class,
            'format' => FormatService::class,
        ]);

        // Register all events
        $this->registerFields();
        $this->registerTemplateRoots();
        $this->registerBehaviors();
        $this->registerTwigVariables();
    }

    /**
     * Returns the plugin root path
     *
     * @return string
     */
    public function getRootPath()
    {
        if ($this->rootPath === null) {
            $this->rootPath = dirname(dirname(__FILE__));
        }

        return $this->rootPath;
    }

    /**
     * Returns the plugin resource path
     *
     * @return string
     */
    public function getResourcePath()
    {
        return $this->getRootPath() . DIRECTORY_SEPARATOR . 'resources';
    }

    /**
     * Returns the field service
     *
     * @return FieldService
     */
    public function getFieldService()
    {
        return $this->get('field');
    }

    /**
     * Returns the ICS service
     *
     * @return IcsService
     */
    public function getIcsService()
    {
        return $this->get('ics');
    }

    /**
     * Returns the format service
     *
     * @return FormatService
     */
    public function getFormatService()
    {
        return $this->get('format');
    }

    /**
     * @inheritdoc
     */
    public function getMigrator(): MigrationManager
    {
        /** @var MigrationManager */
        $migrationManager = $this->get('migrator');
        $migrationManager->migrationPath = $this->getBasePath() . DIRECTORY_SEPARATOR . 'Migration';
        $migrationManager->migrationNamespace = 'Gewerk\\RecurringDates\\Migration';

        return $migrationManager;
    }

    /**
     * @inheritdoc
     */
    protected function createInstallMigration(): ?\craft\db\Migration
    {
        return new InstallMigration();
    }

    /**
     * Registers all fields
     *
     * @return void
     */
    private function registerFields()
    {
        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            function(RegisterComponentTypesEvent $event) {
                $event->types[] = RecurringDatesField::class;
            }
        );
    }

    /**
     * Registers the template root paths
     *
     * @return void
     */
    private function registerTemplateRoots()
    {
        Event::on(
            View::class,
            View::EVENT_REGISTER_CP_TEMPLATE_ROOTS,
            function(RegisterTemplateRootsEvent $event) {
                $event->roots[$this->id] = $this->getResourcePath() . DIRECTORY_SEPARATOR . 'templates';
            }
        );
    }

    /**
     * Registers all custom behaviors
     *
     * @return void
     */
    private function registerBehaviors()
    {
        Event::on(
            ElementQuery::class,
            ElementQuery::EVENT_DEFINE_BEHAVIORS,
            function(DefineBehaviorsEvent $event) {
                $event->behaviors['recurring-dates'] = ElementQueryBehavior::class;
            }
        );

        Event::on(
            Element::class,
            Element::EVENT_DEFINE_BEHAVIORS,
            function(DefineBehaviorsEvent $event) {
                $event->behaviors['recurring-dates'] = ElementBehavior::class;
            }
        );
    }

    /**
     * Registers all twig variables
     *
     * @return void
     */
    private function registerTwigVariables()
    {
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function(Event $event) {
                /** @var CraftVariable $variables */
                $variables = $event->sender;
                $variables->set('recurringDates', RecurringDatesVariable::class);
            }
        );
    }
}
