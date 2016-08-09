(function(){
      angular.module('app',['ngRoute'])
      
.controller("ReviewController", function(){
    	  
    		  
      })
      .controller('tabCtrl',function($scope){
         $scope.tabs=[
             {'title' : 'Stage1',
             'url' : '#Stage1'
         },
         {'title' : 'Stage2',
             'url' : '#Stage2'
         },
         {'title' : 'Stage3',
             'url' : '#Stage3'
         },
         {'title' : 'Stage4',
             'url' : '#Stage4'
         },
         {'title' : 'Stage5',
             'url' : '#Stage5'
         }] 
      })
      .config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'form.html',
                
            })

            // route for the about page
            .when('/Stage1', {
                templateUrl : 'form.html'
            
            }).when('/Stage2', {
                templateUrl : 'form2.html'
            
            }).when('/Stage3', {
                templateUrl : 'form3.html'
            
            }).when('/Stage4', {
                templateUrl : 'form4.html'
            
            }).when('/Stage5', {
                templateUrl : 'form5.html'
            
            })
          
      });
      })();
     