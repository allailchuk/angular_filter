myApp.controller('DirectivesController', function($scope) {

    $scope.linkHint = 'Counter #';
    $scope.counter = 1;

    $scope.products = [
        {id: '1', name: 'Mac Pro', category: 'computers', price: '1300'},
        {id: '2', name: 'Macbook Pro', category: 'computers', price: '1500'},
        {id: '3', name: 'Macbook Air', category: 'computers', price: '1200'},
        {id: '4', name: 'Ipad Pro', category: 'tablets', price: '549'},
        {id: '5', name: 'Ipad Air', category: 'tablets', price: '308'},
        {id: '6', name: 'Ipad Mini', category: 'tablets', price: '280'},
        {id: '7', name: 'Watch', category: 'wearable', price: '200'},
        {id: '8', name: 'AirPods', category: 'wearable', price: '119'},
        {id: '9', name: 'Thunderbolt Display', category: 'displays', price: '1250'},
        {id: '10', name: 'Ipod Mini', category: 'wearable', price: '50'}

    ];


    $scope.options = [
        {id: 'p1', label: 'Mac Pro'},
        {id: 'p2', label: 'Macbook Pro'},
        {id: 'p3', label: 'Macbook Air'},
        {id: 'p4', label: 'Ipad Pro'},
        {id: 'p5', label: 'Ipad Air'},
        {id: 'p6', label: 'Ipad Mini'},
        {id: 'p7', label: 'Watch'},
        {id: 'p8', label: 'AirPods'},
        {id: 'p9', label: 'Thunderbolt Display'},
        {id: 'p10', label: 'Ipod Mini'},
        {id: 'p11', label: 'Mac Pro'},
        {id: 'p12', label: 'Macbook Pro'},
        {id: 'p13', label: 'Macbook Air'}
    ];

    $scope.selectedOption = 'p3';

});


