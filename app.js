if (Meteor.isClient) {
    angular.module('officefood', ['angular-meteor']);

      angular.module('officefood').controller('menuList', ['$scope', function ($scope) {
      $scope.foods = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.'
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'
      }
    ];
  }]);


}