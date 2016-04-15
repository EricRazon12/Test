var app = angular.module('EmployeeController', ['EmployeeService']);
app.controller('EmployeeController', function ($scope, EmployeeFactory, $location, $rootScope) {
    $scope.name = 'Employee';

    $scope.employee = {
        data: {
            employees: '',
            departments: ''
        },
        //static: {
        //    firstname: '',
        //    lastname: '',
        //    middlename: '',
        //    birthdate: '',
        //    address: ''
        //},
        selected: {
            department: ''
        },
        transactions: {
            getEmployees: function () {
                EmployeeFactory.requestEmployee()
                .success(function (data) {
                    //console.log(data);
                    $scope.employee.data.employees = data;
                })
                .error(function (data) {
                })
            },
            getDept: function () {
                EmployeeFactory.requestDepartment()
                .success(function (data) {
                   // console.log(data);
                    $scope.employee.data.departments = data;
                })
                .error(function (data) {
                })
            },
            gotoAddEmp: function(){
                $rootScope.static = {
                    firstname: '',
                    lastname: '',
                    middlename: '',
                    birthdate: '',
                    address: ''
                }
                $location.path('/employees/add');
            },
            addEmployee: function () {
                var s = $scope.employee.static;
                console.log(s);
                //console.log($scope.employee.selected.department);
                EmployeeFactory.addEmployee(s.firstname, s.lastname, s.middlename, s.birthdate, s.address, $scope.employee.selected.department.id)
                .success(function (data) {
                    //console.log(data);
                    $location.path('/employees');
                })
                .error(function (data) {
                })
            },
            GetEmployeeToUpdate: function (employee) {
                
                
               // var s = $scope.employee.static;
                var e = employee;
                //console.log(e);
                $rootScope.static = {
                    firstname: e.Firstname,
                    lastname: e.Lastname,
                    middlename: e.Middlename,
                    birthdate: e.Birthdate,
                    address: e.Address
                }
                //$scope.static.firstname = e.Firstname;
                //$scope.static.lastname = e.Lastname;
                //$scope.static.middlename = e.Middlename;
                //$scope.static.birthdate = e.Birthdate;
                //$scope.static.address = e.Address;
                
                console.log($rootScope.static);

                $location.path('/employees/add');
               // console.log($scope.employee.static);
                //$scope.$apply();
            }
        }
    }




})