Foods = new Mongo.Collection("foods");
var globalinit = function(obj, scope, reactive, root) {
    if (typeof root.shoppingCart == 'undefined') {
        root.shoppingCart = {};
        root.DicLength = function(dic) {
            return Object.keys(dic).length
        };
    }
    reactive(obj).attach(scope);
};
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
                url: '/subscribe',
                template: '<subscribe></subscribe>'
            })
            .state('today_food', {
                url: '/today',
                template: '<today-food></today-food>'
            })
            .state('subscribePlan', {
                url: '/plan',
                template: '<plan></plan>'
            });
        $urlRouterProvider.otherwise("/home");
    });
    angular.module('officefood').directive('todayFood', function()
    {
        return {
            restrict: 'E',
            templateUrl: 'template/today.html',
            controllerAs: 'todayFood',
            controller: function($scope, $reactive, $rootScope) {
                if (typeof $rootScope.shoppingCart == 'undefined') {
                    $rootScope.shoppingCart = {};
                    $rootScope.DicLength = function(dic) {
                        Object.keys(dic).length
                    };
                }
                $reactive(this).attach($scope);
                this.helpers({
                    foods: function () {
                        return Foods.find({});
                    }
                });
            }
        }
    }
    );
    angular.module('officefood').directive('home', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/home.html',
            controllerAs: 'home',
            controller: function($scope, $reactive, $rootScope) {
                globalinit(this, $scope, $reactive, $rootScope);
                //if (typeof $rootScope.shoppingCart == 'undefined') {
                //    $rootScope.shoppingCart = {};
                //    $rootScope.DicLength = function(dic) {
                //        Object.keys(dic).length
                //    };
                //}
                //$reactive(this).attach($scope);
                // TODO /home
            }
        };
    });

    angular.module('officefood').directive('menuList', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/menu.html',
            controllerAs: 'menuList',
            controller: function ($scope, $reactive, $rootScope) {
                globalinit(this, $scope, $reactive, $rootScope);
                this.helpers({
                    foods: function () {
                        return Foods.find({});
                    }
                });
                this.addToCart = function(food) {
                    if (typeof $rootScope.shoppingCart[food.name] == 'undefined') {
                        console.log("new food");
                        $rootScope.shoppingCart[food.name] = 1
                    } else {
                        console.log("++ food");
                        $rootScope.shoppingCart[food.name] += 1
                    }
                };
            }
        }
    });
    angular.module('officefood').directive('shoppingCart', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/cart.html',
            controllerAs: 'cart',
            controller: function($scope, $reactive, $rootScope) {
                globalinit(this, $scope, $reactive, $rootScope);
                this.helpers({
                    foods: function() {
                        var food_array = [];
                        for (var key in $rootScope.shoppingCart) {
                            var food = Foods.findOne({name : key});
                            food.quantity = $rootScope.shoppingCart[key];
                            food.total = food.quantity * food.price;
                            food_array.push(food);
                        }
                        return food_array;
                    }
                });
            }
        };
    });

    angular.module('officefood').directive('subscribe', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/subscribe.html',
            controllerAs: 'subscribe',
            controller: function($scope, $reactive, $rootScope) {
                globalinit(this, $scope, $reactive, $rootScope);
                // TODO /subscribe
            }
        };
    });

    angular.module('officefood').directive('plan', function() {
        return {
            restrict: 'E',
            templateUrl: 'template/plan.html',
            controllerAs: 'plan',
            controller: function($scope, $reactive, $rootScope) {
                if (typeof $rootScope.shoppingCart == 'undefined') {
                    $rootScope.shoppingCart = {};
                }
                $reactive(this).attach($scope);
                // TODO /subscribe
            }
        };
    });

    angular.module('officefood').directive('foodDetails', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/food.html',
            controllerAs: 'foodDetails',
            controller: function ($scope, $stateParams, $reactive, $rootScope) {
                globalinit(this, $scope, $reactive, $rootScope);
                $scope.food = Foods.findOne({_id: $stateParams.foodId});
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
