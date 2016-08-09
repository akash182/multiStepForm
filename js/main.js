(function(){
      angular.module('app',['ngRoute'])
      

      .controller('tabCtrl',function($scope){
         

         $scope.tabs=[
             {'title' : 'Stage1',
             'url' : '#Stage1',
             'disabled' : false
         },
         {'title' : 'Stage2',
             'url' : '#Stage2',
             'disabled' : true
         },
         {'title' : 'Stage3',
             'url' : '#Stage3',
             'disabled' : true
         },
         {'title' : 'Stage4',
             'url' : '#Stage4',
             'disabled' : true
         },
         {'title' : 'Stage5',
             'url' : '#Stage5',
             'disabled' : true
         }] ;
        
          $scope.addReview = function(pageNumber){
              var pn=pageNumber;
    	     $scope.tabs[pn].disabled=false;
          };
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
     