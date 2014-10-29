demoApp.factory('simpleFactory', function() {
    var factory = {}
    var customers = [{name:'Lin', city:'Mountain View'},
                     {name:'Chen', city:'Mountain View'},
                     {name:'Shijin', city:'New York'}];
    factory.getCustomers = function () {
        // this should be an async call in real life.
        return customers
    }
    return factory
})