Foods = new Mongo.Collection("foods");
if (Meteor.isClient) {
    angular.module('officefood', ['angular-meteor', 'ui.router']);
    angular.module('officefood').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home></home>'
            })
            .state('menu', {
                url: '/menu',
                template: '<menu-list></menu-list>'
            })
            .state('food', {
                url: '/food/:foodId',
                template: '<food-details></food-details>'
            })
            .state('shoppingcart', {
                url: '/shoppingcart',
                template: '<shooping-cart><shopping-cart/>'
            })
            .state('subscribe', {
                url: 'subscribe',
                template: '<subscribe></subscribe>'
            });
        $urlRouterProvider.otherwise("/menu");
    });

    angular.module('officefood').directive('home', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/home.html',
            controllerAs: 'home',
            controller: function($scope, $reactive) {
                // TODO /home
            }
        };
    });

    angular.module('officefood').directive('menuList', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/menu.html',
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
    angular.module('officefood').directive('shoppingCart', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/cart.html',
            controllerAs: 'shoopingCart',
            controller: function($scope, $reactive) {
                // TODO /shopping-cart
            }
        };
    });

    angular.module('officefood').directive('subscribe', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/subscribe.html',
            controllerAs: 'subscribe',
            controller: function($scope, $reactive) {
                // TODO /subscribe
            }
        };
    });

    angular.module('officefood').directive('foodDetails', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/food.html',
            controllerAs: 'foodDetails',
            controller: function ($scope, $stateParams, $reactive) {
                $reactive(this).attach($scope);
                this.food = Foods.findOne({_id: $stateParams.foodId});
                //this.helpers({
                //    food: function () {
                //        return Foods.findOne({_id: $stateParams.foodId});
                //    }
                //});

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
