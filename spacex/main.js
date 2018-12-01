(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-family: 'Brandon Grotesque', 'brandon-grotesque', Helvetica, sans-serif;\n}\n\n.gallery {\n    display: flex;\n    min-height: 100vh;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.gallery img {\n    margin: 10px;\n    box-shadow: 4px 7px 45px -10px rgba(0, 0, 0, 0.4);\n    border-radius: 7px;\n}\n\napp-nav {\n    width: 100%;\n}\n\nh3 {\n    text-align: center;\n    padding: 2em;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; display:flex; width: 100%;\">\n    <!-- Navigation component -->\n    <app-nav></app-nav>\n    <router-outlet></router-outlet>\n</div>\n<app-carousel></app-carousel>\n<h3 class=\"h3\">\n    SPACEX DESIGNS, MANUFACTURES AND LAUNCHES ADVANCED ROCKETS AND SPACECRAFT\n</h3>\n<app-card></app-card>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "spacex";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_draganddrop_draganddrop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/draganddrop/draganddrop.component */ "./src/app/components/draganddrop/draganddrop.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: "card", component: _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"] },
    { path: "grid", component: _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _components_draganddrop_draganddrop_component__WEBPACK_IMPORTED_MODULE_8__["DraganddropComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
            ],
            imports: [
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/card/card.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-shadow {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);\n}\n\n.card-spacing {\n    margin: .75em;\n}\n\n.card-padding {\n    padding: 2em;\n}\n\n.thumbnail img {\n    max-width: 100%;\n    height: 256px;\n}\n\n.card-flex {\n    flex: 1 1 20em;\n}\n\n.learn-more {\n    color: #3569a4;\n    text-decoration: none;\n}\n\n.learn-more:hover {\n    transition: border-bottom .5s;\n    border-bottom: 2px solid #3569a4;\n}\n\n.arrow {\n    color: black;\n}\n\n@media (max-width: 800px) {\n    .card {\n        flex-direction: column;\n    }\n    .thumbnail {\n        text-align: center;\n    }\n}"

/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"cards flex-container flex-justify-center display-flex\">\n    <div class=\"flex-item caption-bg flex-grow-2\"></div>\n    <div class=\"flex-item flex-grow-1\">1</div>\n    <div class=\"flex-item flex-grow-1\">2</div>\n    <div class=\"flex-item flex-grow-1\">3</div>\n    <div class=\"flex-item caption-bg flex-grow-2\"></div>\n</div> -->\n\n<div class=\"card flex-container flex-justify-center display-flex\">\n    <div class=\"flex-item flex-grow-2\"></div>\n    <div *ngFor=\"let item of Cards let i = index\" class=\"flex-item flex-grow-1 card-shadow card-spacing card-flex\">\n        <div class=\"flex-container flex-space-around center-text\">\n            <div class=\"thumbnail card-padding\">\n                <img class=\"thumbnail\" src={{item.src}} alt=\"spacex launch\">\n                <div>\n                    <h3>{{item.description}}</h3>\n                    <a class=\"learn-more\" href=\"google.com\">Learn More<span class=\"arrow\">-></span></a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"flex-item flex-grow-2\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.Cards = src_app_data__WEBPACK_IMPORTED_MODULE_1__["CarouselData"];
    }
    CardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "Cards", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-card",
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/components/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n    display: flex;\n    height: 100%;\n    align-self: center;\n    position: relative;\n}\n\n.carousel img {\n    max-width: 100%;\n    flex: 1 1 auto;\n    height: 600px;\n}\n\n.carousel .footer {\n    position: absolute;\n    color: white;\n    bottom: 0;\n    width: 100%;\n    background: rgba(0, 0, 0, .7);\n}\n\n.footer .img-desc {\n    margin: 1.5em 0;\n}\n\n.footer .learn-more {\n    width: 180px;\n    height: 36px;\n    line-height: 34px;\n    padding: 0;\n    background: white;\n    border-color: white;\n    border-radius: 2px;\n}\n\n/* Remove default margin */\n\n.footer h1 {\n    margin: 0;\n}\n\n.footer .carousel-caption {\n    height: 60px;\n}\n\n.caption-bg {\n    background-color: #21272b;\n    padding-top: 1em;\n}\n\n.transparent-bg {\n    background-color: transparent;\n}\n\n.numeric {\n    color: gray;\n    padding-right: .5em;\n    padding-left: 2em;\n}\n\n.carousel-caption>span {\n    border-left: 1px solid grey;\n}\n\n.desc {\n    text-align: center;\n}\n\n@media (max-width: 500px) {\n    .footer .carousel-caption {\n        height: 80px;\n    }\n}"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n    <img src=\"{{CarouselImgSrc}}\">\n    <div class=\"footer\">\n        <div class=\"img-desc flex-container flex-justify-space-evenly display-flex\">\n            <h1 class=\"flex-item\">{{CarouselDesc}}</h1>\n            <button class=\"flex-item learn-more\">Learn More</button>\n        </div>\n        <div class=\"carousel-caption flex-container flex-justify-center display-flex\">\n            <span class=\"flex-item caption-bg flex-grow-2\"></span>\n            <span class=\"flex-item caption-bg flex-grow-1\" *ngFor=\"let item of Carousel let i = index\" [class.transparent-bg]=\"TransBg === item\" (click)=\"changeCarousel(item); \">\n        <span class=\"numeric\">0{{i +1}}</span>\n            <span class=\"desc\">{{item.description}}</span>\n            </span>\n            <span class=\"flex-item caption-bg flex-grow-2\"></span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.CarouselImgSrc = src_app_data__WEBPACK_IMPORTED_MODULE_1__["CarouselData"][2].src;
        this.CarouselDesc = src_app_data__WEBPACK_IMPORTED_MODULE_1__["CarouselData"][2].description;
        this.Iterate = 0;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Carousel = src_app_data__WEBPACK_IMPORTED_MODULE_1__["CarouselData"];
        setInterval(function () {
            _this.changeCarousel(_this.Carousel[_this.Iterate]);
            if (_this.Iterate === _this.Carousel.length - 1) {
                _this.Iterate = 0;
            }
            else {
                _this.Iterate++;
            }
        }, 10000);
    };
    CarouselComponent.prototype.changeCarousel = function (item) {
        this.TransBg = item;
        this.CarouselImgSrc = item.src;
        this.CarouselDesc = item.description;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "Carousel", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-carousel",
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/draganddrop/draganddrop.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/draganddrop/draganddrop.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/draganddrop/draganddrop.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/draganddrop/draganddrop.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"drag-drop-demo\">\n    <cdk-drop class=\"drop-zone\">\n        <div cdkDrag>\n            <div class=\"drag-handle\" cdkDragHandle>\n                +\n            </div>\n        </div>\n    </cdk-drop>\n</div>"

/***/ }),

/***/ "./src/app/components/draganddrop/draganddrop.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/draganddrop/draganddrop.component.ts ***!
  \*****************************************************************/
/*! exports provided: DraganddropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraganddropComponent", function() { return DraganddropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DraganddropComponent = /** @class */ (function () {
    function DraganddropComponent() {
    }
    DraganddropComponent.prototype.ngOnInit = function () { };
    DraganddropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-draganddrop",
            template: __webpack_require__(/*! ./draganddrop.component.html */ "./src/app/components/draganddrop/draganddrop.component.html"),
            styles: [__webpack_require__(/*! ./draganddrop.component.css */ "./src/app/components/draganddrop/draganddrop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DraganddropComponent);
    return DraganddropComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    height: 170px;\n    background: #181c1f;\n    padding-top: 1em;\n    margin-top: 10em;\n}\n\n.footer-social {\n    height: 50px;\n    background-color: #0e1112;\n}\n\n.footer-social {\n    align-items: center;\n}\n\n.footer ul,\n.footer-social span {\n    text-transform: uppercase;\n    color: #8b939b;\n    font-size: 12px;\n}\n\n.footer li {\n    list-style-type: none;\n    color: gray;\n}\n\n.footer ul th {\n    color: white;\n}\n\n.footer .flex-container {\n    display: flex;\n}\n\n.footer ul span {\n    color: gray;\n    display: block;\n}\n\n.footer .right-border {\n    height: 100px;\n    border-right: 2px dashed gray;\n}\n\n.footer-social .follow-spacex {\n    color: gray;\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer flex-container\">\n    <div class=\"flex-item flex-grow-3\">\n    </div>\n    <div class=\"flex-item flex-grow-1 right-border\">\n        <ul>\n            <th>Rockets & Spacecraft</th>\n            <li>Falcon 9</li>\n            <li>Falcon Heavy</li>\n            <li>Dragon</li>\n        </ul>\n    </div>\n    <div class=\"flex-item flex-grow-1 right-border\">\n        <ul>\n            <th>Updates</th>\n            <li>News</li>\n            <li>Launch Mainfest</li>\n        </ul>\n    </div>\n    <div class=\"flex-item flex-grow-1 right-border\">\n        <ul>\n            <th>About Spacex</th>\n            <li>Company</li>\n            <li>Careers</li>\n            <li>Gallery</li>\n            <li>Shop</li>\n        </ul>\n    </div>\n    <div class=\"flex-item flex-grow-1\">\n        <ul>\n            <div><img class=\"logo\" src=\"src/app/img/spacexlogopng.png\" alt=\"Home\"></div>\n            <span>Rocket Road</span>\n            <span>Hawthorne, California</span>\n        </ul>\n    </div>\n    <div class=\"flex-item flex-grow-3\"></div>\n</div>\n<div class=\"footer-social flex-container flex-space-between\">\n    <div class=\"flex-item flex-grow-2\"></div>\n    <div class=\"flex-item flex-grow-1\"><span><span class=\"follow-spacex\">Follow Spacex |</span> Twitter Youtube Flickr Instagram\n        </span>\n    </div>\n    <div class=\"flex-item flex-grow-1 copyright\"><span>&copy; 2017 Space Exploration Technoligies Corp.</span></div>\n    <div class=\"flex-item flex-grow-2\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/grid/grid.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/grid/grid.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/grid/grid.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    grid works!\n</p>"

/***/ }),

/***/ "./src/app/components/grid/grid.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () { };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-grid",
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/components/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.css */ "./src/app/components/grid/grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n    height: 75px;\n    width: 100%;\n}\n\n.nav .nav-bg {\n    height: 75px;\n    background: #181c1f;\n}\n\n.nav .main-nav {\n    padding-top: 2em;\n}\n\n.nav .main-nav a {\n    padding: 0 .5em;\n}\n\n.nav .main-nav a.nav-gallery {\n    padding-right: 1em;\n}\n\n.nav .logo {\n    vertical-align: middle;\n}\n\n.nav .flex-item {\n    justify-content: space-around;\n}\n\n.nav .flex-container {\n    justify-content: center;\n}\n\n.nav .flex-container a {\n    text-transform: uppercase;\n    font-size: 14px;\n    color: #fff;\n    text-decoration: none;\n}\n\n.nav .main-nav a.about-separation {\n    padding-left: 4em;\n}\n\n.nav .inline-flex {\n    display: inline-flex;\n}\n\n.nav .inline-flex a {\n    color: #8b939b;\n}\n\n.nav .shop-border {\n    margin: -6px 0 0 -6px;\n    padding: 4px 12px 3px;\n    background: #0b0b0b;\n    display: inline-block;\n    border-radius: 16px;\n    border: 2px solid #0b0b0b;\n    transition: all 0.2s ease-out;\n}\n\n@media (max-width: 925px) {\n    .nav,\n    .nav .nav-bg {\n        height: 100px;\n    }\n}\n\n@media (max-width: 525px) {\n    .nav,\n    .nav .nav-bg {\n        height: 115px;\n    }\n}"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n    <div class=\"nav-bg\">\n        <div class=\"flex-container\" style=\"display: flex\">\n            <div class=\"main-nav\">\n                <img class=\"logo\" src=\"src/app/img/spacexlogopng.png\" alt=\" Home \">\n                <a class=\"flex-item\" href=\"http://www.google.com\">Falcon 9</a>\n                <a class=\"flex-item\" href=\"http://www.google.com\">Falcon Heavy</a>\n                <a class=\"flex-item\" href=\"http://www.google.com\">Dragon</a>\n                <a class=\"flex-item\" href=\"http://www.google.com\">Updates</a>\n\n                <div class=\"nav-right flex-item inline-flex nav-right\">\n                    <a class=\"flex-item about-separation\" href=\"http://www.google.com\">About Spacex</a>\n                    <a class=\"flex-item\" href=\"http://www.google.com\">Careers</a>\n                    <a class=\"flex-item nav-gallery\" href=\"http://www.google.com\">Gallery</a>\n                    <span class=\"shop-border\"><a class=\"flex-item\" href=\"http://www.google.com\">Shop</a></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-nav",
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: CarouselData, CardData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselData", function() { return CarouselData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardData", function() { return CardData; });
var CarouselData = [
    {
        src: "https://www.trbimg.com/img-5b846dd6/turbine/os-spacex-telstar18-launch-20180827",
        description: "Nasa Astronauts on crew dragon"
    },
    {
        src: 
        // tslint:disable-next-line:max-line-length
        "https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3My85MTUvb3JpZ2luYWwvZmFsY29uLWhlYXZleS1zcGFjZXgtYnVpbGRpbmcuanBn",
        description: "First passanger on lunar bfr mission"
    },
    {
        src: 
        // tslint:disable-next-line:max-line-length
        "https://mediadc.brightspotcdn.com/dims4/default/b1b254f/2147483647/strip/true/crop/1920x1080+0+0/resize/1920x1080!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F74%2F73%2F4c2b67b3e5e6fdc65dff3dedebb6%2F74aa12b9888e1ff8c6c5feb7f3f51268.jpg",
        description: "Making life Multiplanetary"
    }
];
var CardData = [
    {
        src: "https://www.trbimg.com/img-5b846dd6/turbine/os-spacex-telstar18-launch-20180827",
        description: "Nasa Astronauts on crew dragon"
    },
    {
        src: 
        // tslint:disable-next-line:max-line-length
        "https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3My85MTUvb3JpZ2luYWwvZmFsY29uLWhlYXZleS1zcGFjZXgtYnVpbGRpbmcuanBn",
        description: "First passanger on lunar bfr mission"
    },
    {
        src: 
        // tslint:disable-next-line:max-line-length
        "https://mediadc.brightspotcdn.com/dims4/default/b1b254f/2147483647/strip/true/crop/1920x1080+0+0/resize/1920x1080!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F74%2F73%2F4c2b67b3e5e6fdc65dff3dedebb6%2F74aa12b9888e1ff8c6c5feb7f3f51268.jpg",
        description: "Making life Multiplanetary"
    }
];



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justinleggett/workspace/angular/spacex/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map