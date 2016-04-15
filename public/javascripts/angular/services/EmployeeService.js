var baseURL = "../api/";
var employeeUrl = "employee/";

var app = angular.module('EmployeeService', []);
app.factory('EmployeeFactory', function ($http, $cacheFactory) {
    var requestEmployee = function () {
        return $http({
            method: 'GET',
            url: baseURL + employeeUrl,
            cache: false
        });
    }

    var requestDepartment = function () {
        return $http({
            method: 'GET',
            url: baseURL + employeeUrl + 'dept',
            cache: true
        });
    }

    var addEmployee = function (Firstname, Lastname, Middlename, Birthdate, Address, DepartmentId) {
        return $http({
            method: 'POST',
            url: baseURL + employeeUrl,
            params: {
                Firstname: Firstname,
                Lastname: Lastname,
                Middlename: Middlename,
                Birthdate: Birthdate,
                Address: Address,
                DepartmentId: DepartmentId
            }
        });
    }
 
    return {
        requestEmployee: function () {
            return requestEmployee();
        },
        requestDepartment: function () {
            return requestDepartment();
        },
        addEmployee: function (Firstname, Lastname, Middlename, Birthdate, Address, DepartmentId) {
            return addEmployee(Firstname, Lastname, Middlename, Birthdate, Address, DepartmentId);
        }
    }
});