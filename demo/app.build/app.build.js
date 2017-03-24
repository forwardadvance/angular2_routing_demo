webpackJsonp([0],{

/***/ 0:
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(/*! core-js/es6 */ 1);
	__webpack_require__(/*! core-js/es7/reflect */ 246);
	__webpack_require__(/*! zone.js/dist/zone */ 258);
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 260);
	var app_module_1 = __webpack_require__(/*! ./app.module */ 282);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 282:
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 262);
	var router_1 = __webpack_require__(/*! @angular/router */ 287);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 280);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 283);
	var cat_page_component_1 = __webpack_require__(/*! ./cat.page.component */ 284);
	var home_page_component_1 = __webpack_require__(/*! ./home.page.component */ 285);
	var appRoutes = [
	    { path: '', component: home_page_component_1.HomePageComponent },
	    { path: 'cat', component: cat_page_component_1.CatPageComponent }
	];
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                router_1.RouterModule.forRoot(appRoutes)
	            ],
	            declarations: [app_component_1.AppComponent, cat_page_component_1.CatPageComponent, home_page_component_1.HomePageComponent],
	            bootstrap: [app_component_1.AppComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 283:
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 262);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.miowCount = 0;
	        this.name = 'Mikey the Cat';
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n      <header>\n        <a routerLink=\"\">Home</a>\n        <a routerLink=\"cat\">Cat</a>\n      </header>\n      <router-outlet></router-outlet>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 284:
/*!***********************************!*\
  !*** ./app/cat.page.component.ts ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 262);
	var CatPageComponent = (function () {
	    function CatPageComponent() {
	        this.miow = new core_1.EventEmitter();
	    }
	    CatPageComponent.prototype.handleClick = function () {
	        this.miow.emit();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CatPageComponent.prototype, "name", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], CatPageComponent.prototype, "miow", void 0);
	    CatPageComponent = __decorate([
	        core_1.Component({
	            selector: 'catPage',
	            template: "\n      <h1>This is the cat page</h1>\n      <p>All about cats</p>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CatPageComponent);
	    return CatPageComponent;
	    var _a;
	}());
	exports.CatPageComponent = CatPageComponent;


/***/ },

/***/ 285:
/*!************************************!*\
  !*** ./app/home.page.component.ts ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 262);
	var HomePageComponent = (function () {
	    function HomePageComponent() {
	    }
	    HomePageComponent = __decorate([
	        core_1.Component({
	            selector: 'catPage',
	            template: "\n      <h1>Welcome to the app</h1>\n      <p>Here is the home page</p>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomePageComponent);
	    return HomePageComponent;
	}());
	exports.HomePageComponent = HomePageComponent;


/***/ }

});
//# sourceMappingURL=app.build.js.map