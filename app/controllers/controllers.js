demoApp.controller('SimpleController', function ($scope, simpleFactory) {
    $scope.names = []
    init()
    function init() {
        $scope.names = simpleFactory.getCustomers()
    }
    $scope.addPerson = function() {
        window.alert('hello world!!!')
        $scope.names.push({name: $scope.newPerson.name,
                           city: $scope.newPerson.city })
    }
})
demoApp.controller('SimpleController2', function ($scope) {
    $scope.names = [{name:'Foo', city:'Mountain View'},
                    {name:'Bar', city:'Mountain View'},
                    {name:'Baz', city:'New York'}]
})