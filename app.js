Foods = new Mongo.Collection("foods");
if (Meteor.isClient) {
    angular.module('officefood', ['angular-meteor', 'ui.router']);
    angular.module('officefood').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('menu', {
                url: '/menu',
                template: '<menu-list></menu-list>'
            })
            .state('food', {
                url: '/food/:foodId',
                template: '<food-details></food-details>'
            });
        $urlRouterProvider.otherwise("/menu");
    });
    angular.module('officefood').directive('menuList', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/menu-list.html',
            controllerAs: 'menuList',
            controller: function ($scope, $reactive) {
                $reactive(this).attach($scope);
                this.newFood = {};
                this.helpers({
                    foods: function () {
                        return Foods.find({});
                    }
                });
                this.addFood = function () {
                    Foods.insert(this.newFood);
                    this.newFood = {};
                };
                this.removeFood = function (food) {
                    Foods.remove({_id: food._id});
                };
            }
        }
    });
    angular.module('officefood').directive('foodDetails', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/food-details.html',
            controllerAs: 'foodDetails',
            controller: function ($scope, $stateParams, $reactive) {
                $reactive(this).attach($scope);
                this.helpers({
                    food: function () {
                        return Foods.findOne({_id: $stateParams.foodId});
                    }
                });
                this.save = function () {
                    Foods.update({
                            _id: $stateParams.foodId
                        },
                        {
                            $set: {
                                name: this.food.name,
                                description: this.food.description
                            }
                        },
                        function (error) {
                            if (error) {
                                console.log('Oops, unable to update the food');
                            } else {
                                console.log('Done!');
                            }
                        });
                }
            }
        }
    });
}
