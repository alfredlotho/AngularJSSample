'use strict';
angular.module('confusionApp', [])
     .controller('menuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
        this.tab = 1;
        this.filtText = '';
        this.dishes = menuFactory.getDishes();

        this.select = function(setTab) {
            this.tab = setTab;
            if (setTab === 2) {
                this.filtText = "appetizer";
            }
            else if (setTab === 3) {
                this.filtText = "mains";
            }
            else if (setTab === 4) {
                this.filtText = "dessert";
            }
            else {
                this.filtText = "";
            }
        };
        this.isSelected = function (checkTab) {
            return (this.tab === checkTab);
        };
    }])
    .controller('dishDetailController', ['$scope', 'menuFactory', function($scope, menuFactory) {
        this.dish = menuFactory.getDish(3);
    }]);