function stateProvider($stateProvider, $urlRouterProvider, $authProvider, toastrConfig) {
  $authProvider.loginUrl = '/api/users/login';
  $authProvider.signupUrl = '/api/users/register';

  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'html/about.html',
    controller: 'splashController',
  })
  .state('portfolio', {
    url: '/portfolio',
    templateUrl: 'html/portfolio.html',
    controller: 'homeController',
  })
  .state('register', {
    url: '/register',
    templateUrl: 'html/sign_in/register.html',
    controller: 'registerController',
  })
  .state('skills', {
    url: '/skills',
    templateUrl: 'html/skills.html',
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'html/contact.html',
  })
  .state('unverified', {
    url: '/unverified',
    templateUrl: 'html/sign_in/unverified.html',
  })
  .state('login', {
    url: '/login',
    templateUrl: 'html/sign_in/login.html',
    controller: 'loginController'
  })
  .state('logout', {
    url: '/logout',
    controller: 'logoutController',
    resolve: {
      logoutUser(Auth, $scope, $state) {
        Auth.logoutUser()
        .then(() => {
          $scope.$emit('loggedOut');
          $scope.go('/');
        })
        .catch(() => $state.go('/'));
      },
    },
  })
  .state('forgot', {
    url: '/forgot',
    templateUrl: 'html/sign_in/forgot.html',
    controller: 'forgotController',
  })
  // .state('profile', {
  //   url: '/profile/:id',
  //   templateUrl: 'html/profile.html',
  //   controller: 'profileController',
  //   resolve: {
  //     dbProfile(Auth, $q, $state) {
  //       return Auth.getProfile()
  //       .catch(() => {
  //         $state.go('login');
  //         return $q.reject();
  //       });
  //     },
  //   },
  // })
  .state('profile.thing1', {
    url: '/thing1',
    templateUrl: 'html/thing1.html',
    controller: 'thing1Controller',
  })
  .state('profile.thing2', {
    url: '/profile/thing2',
    templateUrl: 'html/thing2.html',
    controller: 'thing2Controller',
  })
  .state('profile.allThings', {
    url: '/profile/allThings',
    templateUrl: 'html/allThings.html',
    controller: 'allThingsController',
  })
  .state('profile.details', {
    url: '/bio',
    templateUrl: 'html/profileDetails.html',
    controller: 'profileDetailsController',
  })
  .state('profile.account', {
    url: '/account',
    templateUrl: 'html/account.html',
    controller: 'accountController'
  });

  $urlRouterProvider.otherwise('/');
  angular.extend(toastrConfig, {
    allowHtml: false,
    closeButton: false,
    closeHtml: '<button>&times;</button>',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning',
    },
    messageClass: 'toast-message',
    onHidden: null,  // cb()'s
    onShown: null,   //
    onTap: null,     //
    progressBar: false,
    tapToDismiss: true,
    templates: {
      toast: 'directives/toast/toast.html',
      progressbar: 'directives/progressbar/progressbar.html',
    },
    timeOut: 5000,
    titleClass: 'toast-title',
    toastClass: 'toast',
  });
  // Detailed Info @ https://github.com/Foxandxss/angular-toastr
}

angular.module('fullStackTemplate').config(stateProvider);
