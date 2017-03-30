
myApp.directive('dropdown', function () {
    return {
        restrict: 'E',
        scope: {
            ngModel: '=',
            options: '='
        },
        templateUrl: 'views/directives/dropdown.html',
        link: function  ($scope) {
            $scope.$watch('ngModel', function () {
                for (var i = 0; i < $scope.options.length; i++) {
                    $scope.option = $scope.options[i];
                    if ($scope.option.id == $scope.ngModel) {
                        $scope.label = $scope.options[i].label;
                    }
                }
            });

            $scope.optionClick = function (option, e) {
                $scope.ngModel = option.id;
                $scope.showOptions = !$scope.showOptions;
                $scope.label = option.label;
            };

            $scope.show = function () {
                $scope.showOptions = true;
            };



            var documentClick = function() {
                $scope.showOptions = false;
                $scope.$digest();
            };

            $(document).on('click', documentClick);

            $scope.$on('$destroy', function() {
                $(document).off('click', documentClick);
            });

        }

    };
});