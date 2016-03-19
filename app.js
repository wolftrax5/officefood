Foods = new Mongo.Collection("foods");
if (Meteor.isClient) {
    angular.module('officefood', ['angular-meteor']);

    angular.module('officefood').directive('menuList', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/menu-list.html',
            controllerAs: 'menuList',
            controller: function ($scope, $reactive) {
                $reactive(this).attach($scope);

                this.helpers({
                    foods: function () {
                        return Foods.find({});
                    }
                })
                ;
            }
        }
    });
}
