/**
 * Calculator controller.
 */

myApp.controller('CalculatorController', function($scope) {

    /**
     * setting firstValue, secondValue and memory to empty string and zero before starting calculations
     * @type {string}
     */
    $scope.firstValue = "";
    $scope.secondValue = "";
    $scope.memory = 0;

    /**
     * adding new value to calculator
     * if operator wasn't set yet, entered value will be assigned to firstValue
     * otherwise entered value will be assigned to secondValue
     * @param value
     */
    $scope.addValue = function (value) {
        if (!$scope.operator) {
            $scope.firstValue +=  value.toString();
            $scope.value = $scope.firstValue;
        } else {
            $scope.secondValue += value.toString();
            $scope.value =  $scope.secondValue;
        }
    };

    /**
     * adding operator into calculation
     * if firstValue, secondValue and operator were already set,
     * next action of clicking any operator will calculate previous expression
     * clicked operator (o) will be assigned to operator
     * @param o
     */
    $scope.addOperator = function (o) {
        if ($scope.firstValue && $scope.secondValue && typeof $scope.operator === "string"){
            $scope.total();
        }
        $scope.operator = o;
    };

    /**
     * making calculations depending on which operator was clicked,
     * with saving the result of calculations to $scope.result variable
     */
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

        /**
         * assigning $scope.result (result of calculating) into $scope.value variable,
         * for further assigning the $scope.value as firstValue for further calculations
         * resetting secondValue for further calculations
         * resetting operator for further calculations
         * @type {*}
         */
        $scope.value = $scope.result;
        $scope.secondValue = '';
        $scope.firstValue = $scope.value;
        $scope.operator = undefined;

    };

    /**
     * AC button resets all values and operator, if user wants to clear/start new calculations
     */
    $scope.resetValue = function () {
        $scope.value = "";
        $scope.firstValue = "";
        $scope.secondValue = "";
        $scope.operator = undefined;
    };

    /**
     * DEL button evokes deleteSymbol function which will delete last entered symbol
     * if operator wasn't set yet this function will delete the last entered symbol of firstValue on the screen
     * otherwise this function will delete the last entered symbol of secondValue on the screen
     */
    $scope.deleteSymbol = function () {
        if (!$scope.operator) {
            $scope.firstValue = $scope.firstValue.slice(0, -1);
            $scope.value = $scope.firstValue;
        } else {
            $scope.secondValue = $scope.secondtValue.slice(0, -1);
            $scope.value = $scope.secondValue;
        }
    };

    /**
     * square root button evokes squareRoot function
     * which will calculate square root of entered value and assign it to firstValue (if operator wasn't set)
     * or will calculate square root of entered value and assign it to secondValue (if operator was already set)
     * for further assigning the $scope.root as $scope.value for further calculations
     */
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

    /**
     * Magic button evokes doTheMagic function
     * which alerts message
     */
    $scope.doTheMagic = function () {
        alert("Alla you are going a great job");
    };

    /**
     * MC button evokes clearMemory function
     * which will set $scope.memory value to zero (clear the memory)
     */
    $scope.clearMemory = function () {
        $scope.memory = 0;
    };

    /**
     * M+ buuton evokes addToMemory function
     * which will memorize firstValue (if operator wasn't set yet)
     * otherwise it will memorize secondValue (if operator was already set)
     * after that it will clear all values and operator
     */
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

    /**
     * MR button evokes memoryResult function
     * which will assign memorized value ($scope.memory) into firstValue (if operator wasn't set yet)
     * otherwise it will assign memorized value ($scope.memory) into secondValue (if operator was already set)
     */
    $scope.memoryResult = function () {
        if (!$scope.operator) {
            $scope.firstValue = $scope.memory;
        } else {
            $scope.secondValue = $scope.memory;
        }
        $scope.value = $scope.memory;
    };

});