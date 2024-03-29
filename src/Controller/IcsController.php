<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Controller;

use Craft;
use craft\base\ElementInterface;
use craft\web\Controller;
use Gewerk\RecurringDates\Plugin;
use yii\web\NotFoundHttpException;
use yii\web\Response;

/**
 * Renders events as ICS calender feed
 *
 * @package Gewerk\RecurringDates\Controller
 */
class IcsController extends Controller
{
    /**
     * @inheritdoc
     */
    protected array|int|bool $allowAnonymous = ['make'];

    /**
     * Generates an iCalendar file
     *
     * @param int $elementId
     * @param int $siteId
     * @param string $fieldHandle
     * @return Response
     */
    public function actionMake(int $elementId, int $siteId, string $fieldHandle): Response
    {
        /** @var ElementInterface|null */
        $element = Craft::$app->getElements()->getElementById($elementId, null, $siteId);
        if (!$element) {
            throw new NotFoundHttpException();
        }

        if (!$element->getFieldLayout()->getFieldByHandle($fieldHandle)) {
            throw new NotFoundHttpException();
        }

        $ics = Plugin::$plugin->getIcsService()->generate($element, $fieldHandle);

        return Craft::$app->getResponse()->sendContentAsFile(
            $ics,
            sprintf('%d-%s.ics', $element->id, $element->slug),
            [
                'inline' => false,
                'mimeType' => 'text/calendar',
            ],
        );
    }
}
