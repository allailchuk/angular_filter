
myApp.directive('checkbox', function () {
    return {
        restrict: 'E',
        template: '<i ng-class="{checked:ngModel}" ng-click="ngModel=!ngModel"></i>',
        scope: {
            ngModel: '='
        }
    };
});
