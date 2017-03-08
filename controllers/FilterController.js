myApp.controller('FilterController', function($scope) {
    $scope.products = [
        {name: 'Mac Pro', category: ['computers', 'electronics'], price: '1300'},
        {name: 'Macbook Pro', category: ['computers', 'laptops', 'electronics'], price: '1500'},
        {name: 'Macbook Air', category: ['computers', 'laptops', 'electronics'], price: '1200'},
        {name: 'Ipad Pro', category: ['tablets', 'electronics'], price: '549'},
        {name: 'Ipad Air', category: ['tablets', 'electronics'], price: '308'},
        {name: 'Ipad Mini', category: ['tablets', 'electronics'], price: '280'},
        {name: 'Watch', category: ['wearable', 'electronics'], price: '200'},
        {name: 'AirPods', category: ['wearable', 'electronics'], price: '119'},
        {name: 'Thunderbolt Display', category: ['displays', 'electronics'], price: '1250'},
        {name: 'Ipod Mini', category: ['wearable', 'music', 'electronics'], price: '50'},
        {name: 'Ipod Touch', category: ['wearable', 'music', 'electronics'], price: '90'},
        {name: 'Iphone 5', category: ['phones', 'electronics'], price: '450'},
        {name: 'Iphone 5s', category: ['phones', 'electronics'], price: '500'},
        {name: 'Iphone 6', category: ['phones', 'electronics'], price: '570'},
        {name: 'Iphone 6s', category: ['phones', 'electronics'], price: '600'},
        {name: 'Iphone 7', category: ['phones', 'electronics'], price: '749'},
        {name: 'Time Capsule', category: ['networking', 'electronics'], price: '350'},
        {name: 'Air Port', category: ['networking', 'electronics'], price: '120'},
        {name: 'Apple TV', category: ['home', 'electronics'], price: '180'},
        {name: 'Pencil', category: ['accessories', 'electronics'], price: '40'},
        {name: 'Beats Headset', category: ['accessories', 'electronics'], price: '400'}
    ];

    $scope.fields = ['name', 'category', 'price'];

});

myApp.filter('SearchByField', function() {
    return function (list, field, value) {
        if (!field || !value) {
            return list;
        }
        value = value.toLowerCase();
        var filtered = [];
        for (var i=0; i<list.length; i++) {
            var item = list[i];
            if (typeof (item[field]) == 'string' && item[field].toLowerCase().indexOf(value)!=-1){
                filtered.push(item);
            } else if (item[field] instanceof Array){
                for(var ii=0; ii<item[field].length; ii++){
                    if (item[field][ii].toLowerCase().indexOf(value)!=-1) {
                        filtered.push(item);
                    }
                }

            }
        }
        return filtered;
    };
});







// myApp.filter('searchByField', function() {
//     return function(list, field, value) {
//         if(!field || !value) {
//             return data;
//         }
//         return list.filter(function(item) {
//             if(item[field] instanceof Array) {
//                 return item[field].filter(function(i) {
//                     return i.indexOf(value) != -1;
//                 }).length;
//             } else if(typeof(item[field])=='string') {
//                 return item[field].indexOf(value)!=-1;
//             } else {
//                 return true;
//             }
//         });
//     }
// });
