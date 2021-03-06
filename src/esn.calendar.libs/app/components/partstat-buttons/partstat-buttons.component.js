'use strict';

angular.module('esn.calendar.libs').component('calPartstatButtons', {
  template: require('./partstat-buttons.pug'),
  bindings: {
    event: '=',
    changePartstat: '&?',
    onParticipationChangeSuccess: '&',
    onParticipationChangeError: '&',
    showDateSuggestion: '&'
  },
  controller: 'CalPartstatButtonsController',
  controllerAs: 'ctrl'
});
