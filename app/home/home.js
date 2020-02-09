'use strict';
//1. create app module 
var studentApp = angular.module('studentApp.home', ['ngRoute','firebase']);

studentApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'studentController'
    });
}])

//2. create controller
studentApp.controller("studentController", ['$scope','$firebase',function($scope,$firebase) {

    //3. attach originalStudent model object
    $scope.originalStudent = {
        /*firstName: 'James',
        lastName: 'Bond',
        DoB: new Date('01/31/1980'),
        EmailId: 'jamesbond@gmail.com',
        gender: 'male',
        trainingType: 'online',
        maths: false,
        physics: true,
        chemistry: true*/
        firstName: ' ',
        lastName: ' ',
        DoB:'',
        EmailId: '',
        gender: '',
        trainingType: '',
        maths: false,
        physics: false,
        chemistry: false
    };
    //console.log('try--->',$scope.student.EmailId);
    //4. copy originalStudent to student. student will be bind to a form 
    //$scope.student = angular.copy($scope.originalStudent);

    //5. create submitStudentForm() function. This will be called when user submits the form
    $scope.submitStudnetForm = function () {
        /*var firstName = $scope.student.firstName;
        var lastName = $scope.student.lastName;
        var DoB = $scope.student.DoB;
        var EmailId = $scope.student.EmailId;
        var gender =  $scope.student.gender;
        var trainingType = $scope.student.trainingType;*/
        var maths= false;
        var physics= false;
        var chemistry= false;
        if ($scope.student.maths){
            var maths= $scope.student.maths;
        }
        
        if ($scope.student.physics){
            var physics=$scope.student.physics;
        }
        
        if ($scope.student.chemistry){
            var chemistry= $scope.student.chemistry;
        }
       

        console.log('try--->',$scope.student.EmailId);
        var firebaseObj = new Firebase("https://airy-bit-255318.firebaseio.com/");
        var fb = $firebase(firebaseObj);

        var onSuccess = function (data, status, headers, config) {
            alert('Details saved successfully.');
        };

        var onError = function (data, status, headers, config) {
            alert('Error occured.');
        }
        fb.$push({firstName: $scope.student.firstName, lastName: $scope.student.lastName, DoB: $scope.student.DoB, EmailId: $scope.student.EmailId, gender: $scope.student.gender, trainingType: $scope.student.trainingType, maths: maths, physics: physics, chemistry: chemistry}).then(function(ref) {
            console.log(ref);
            $scope.student = angular.copy($scope.OriginalStudent);
        }, function(error) {
            console.log("Error:", error);
        });

        /*$http.post('/student/submitData', {})
            .success(onSuccess)
            .error(onError);*/

    };

    //6. create resetForm() function. This will be called on Reset button click.  
    $scope.resetForm = function () {
        $scope.student = angular.copy($scope.OriginalStudent);
    };
}]);
