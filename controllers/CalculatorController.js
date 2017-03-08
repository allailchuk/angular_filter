myApp.controller('CalculatorController', function($scope) {

        $scope.firstValue = "";
        $scope.secondValue = "";
        $scope.memory = 0;

        $scope.addValue = function (value) {
            if (!$scope.operator) {
                $scope.firstValue +=  value.toString();
                $scope.value = $scope.firstValue;
            } else {
                $scope.secondValue += value.toString();
                $scope.value =  $scope.secondValue;
            }
        };

        $scope.addOperator = function (o) {
            if ($scope.firstValue && $scope.secondValue && typeof $scope.operator === "string"){
                $scope.total();
            }
            $scope.operator = o;
        };

        $scope.total = function () {
            if ($scope.operator == '+') {
                $scope.result = +$scope.firstValue + +$scope.secondValue;
            } else if ($scope.operator == '-') {
                $scope.result = +$scope.firstValue - +$scope.secondValue;
            } else if ($scope.operator == '*') {
                $scope.result = +$scope.firstValue * +$scope.secondValue;
            } else if ($scope.operator == '/') {
                $scope.result = +$scope.firstValue / +$scope.secondValue;
            }

            $scope.value = $scope.result;
            $scope.secondValue = '';
            $scope.firstValue = $scope.value;
            $scope.operator = undefined;

        };

        $scope.resetValue = function () {
            $scope.value = "";
            $scope.firstValue = "";
            $scope.secondValue = "";
            $scope.operator = undefined;

        };

        $scope.deleteSymbol = function () {
            if (!$scope.operator) {
                $scope.firstValue = $scope.firstValue.slice(0, -1);
                $scope.value = $scope.firstValue;
            } else {
                $scope.secondValue = $scope.secondtValue.slice(0, -1);
                $scope.value = $scope.secondValue;
            }
        };

        $scope.squareRoot = function () {
            if (!$scope.operator) {
                $scope.root = Math.sqrt($scope.firstValue);
                $scope.firstValue = $scope.root;
            } else {
                $scope.root = Math.sqrt($scope.secondValue);
                $scope.secondValue = $scope.root;
            }
            $scope.value = $scope.root;
        };

        $scope.doTheMagic = function () {
            alert("Alla you are going a great job");
        };

        $scope.clearMemory = function () {
            $scope.memory = 0;
        };

        $scope.addToMemory = function () {
            if (!$scope.operator) {
                $scope.memory += $scope.firstValue;
            } else {
                $scope.memory += +$scope.secondValue;
            }
            $scope.value = "";
            $scope.firstValue = "";
            $scope.secondValue = "";
            $scope.operator = undefined;
        };

        $scope.memoryResult = function () {
            if (!$scope.operator) {
                $scope.firstValue = $scope.memory;
            } else {
                $scope.secondValue = $scope.memory;
            }
            $scope.value = $scope.memory;
        };

});