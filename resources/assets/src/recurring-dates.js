import Vue from 'vue';
import VCalendar from 'v-calendar';

import RecurringDates from './components/RecurringDates.vue';
import { namespaceInputId, namespaceInputName } from './helpers';

// Register custom filters
Vue.filter('namespaceInputId', namespaceInputId);
Vue.filter('namespaceInputName', namespaceInputName);
Vue.filter('t', (text, context = 'recurring-dates', params = []) => Craft.t(context, text, params));
Vue.filter('dateRaw', (date) => date.toISOString());

// Register v-calendar
Vue.use(VCalendar);

// Add input field to Craft global
Craft.RecurringDates = Garnish.Base.extend({
  init(idPrefix) {
    new Vue({
      el: `#${idPrefix}-field`,
      delimiters: ['${', '}'],
      components: {
        RecurringDates,
      },
    });
  },
});
