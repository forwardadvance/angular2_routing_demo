webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(246);
	__webpack_require__(258);
	var platform_browser_dynamic_1 = __webpack_require__(260);
	var app_module_1 = __webpack_require__(282);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 282:
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
	var core_1 = __webpack_require__(262);
	var router_1 = __webpack_require__(283);
	var platform_browser_1 = __webpack_require__(280);
	var app_component_1 = __webpack_require__(313);
	var cat_component_1 = __webpack_require__(314);
	var cat_list_component_1 = __webpack_require__(315);
	var cat_service_1 = __webpack_require__(316);
	var appRoutes = [
	    { path: 'cat', component: cat_component_1.CatComponent }
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
	            declarations: [app_component_1.AppComponent, cat_component_1.CatComponent, cat_list_component_1.CatListComponent],
	            bootstrap: [app_component_1.AppComponent],
	            providers: [cat_service_1.CatService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 313:
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
	var core_1 = __webpack_require__(262);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.miowCount = 0;
	        this.name = 'Mikey the Cat';
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n      <catList></catList>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 314:
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
	var core_1 = __webpack_require__(262);
	var CatComponent = (function () {
	    function CatComponent() {
	        this.miow = new core_1.EventEmitter();
	    }
	    CatComponent.prototype.handleClick = function () {
	        this.miow.emit();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CatComponent.prototype, "name", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], CatComponent.prototype, "miow", void 0);
	    CatComponent = __decorate([
	        core_1.Component({
	            selector: 'cat',
	            template: "\n      <h1 (click)=\"handleClick()\">Hello {{name}}</h1>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CatComponent);
	    return CatComponent;
	    var _a;
	}());
	exports.CatComponent = CatComponent;


/***/ },

/***/ 315:
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
	var core_1 = __webpack_require__(262);
	var cat_service_1 = __webpack_require__(316);
	var CatListComponent = (function () {
	    function CatListComponent(catService) {
	        this.cats = catService.cats;
	    }
	    CatListComponent = __decorate([
	        core_1.Component({
	            selector: 'catList',
	            template: "\n      <ul>\n      <li *ngFor=\"let cat of cats\">\n        {{cat.name}}\n      </li>\n    </ul>\n    "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof cat_service_1.CatService !== 'undefined' && cat_service_1.CatService) === 'function' && _a) || Object])
	    ], CatListComponent);
	    return CatListComponent;
	    var _a;
	}());
	exports.CatListComponent = CatListComponent;


/***/ },

/***/ 316:
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
	var core_1 = __webpack_require__(262);
	var CatService = (function () {
	    function CatService() {
	        this.cats = [
	            { name: "Danger Moog" },
	            { name: "Pippa T. Floof" },
	            { name: "Sniff Weasel" }
	        ];
	    }
	    CatService.prototype.get = function () {
	        return this.cats;
	    };
	    CatService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], CatService);
	    return CatService;
	}());
	exports.CatService = CatService;


/***/ }

});