"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('../services/auth.service');
var SigninComponent = (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.login = {};
        this.loginError = null;
    }
    SigninComponent.prototype.signin = function (login) {
        var _this = this;
        this.authService.login(login.username, login.password).subscribe(function (user) { return _this.router.navigate(['home']); }, function (error) { return _this.loginError = error; });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'signin',
            templateUrl: 'app/auth/components/signin.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map