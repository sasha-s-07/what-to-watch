(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/project-code-and-learning-documentations-team-7/src/main.ts */"zUnb");


/***/ }),

/***/ "1XXE":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\n  text-align: center;\n  background-color: #222;\n  padding-top: 10px;\n  /*border-top: 1px solid gray;*/\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgLypib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTsqL1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() {
        this.movie = true;
        this.show = false;
    }
    ngOnInit() {
    }
    onMovieClick() {
        if (this.show === true) {
            this.show = false;
        }
        //toggle 
        //this.movie = !this.movie;
        this.movie = true;
    }
    onShowClick() {
        if (this.movie === true) {
            this.movie = false;
        }
        //toggle
        //this.show = !this.show;
        this.show = true;
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "DN7M":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');\n\n.navbar {\n  border-radius:0;\n  margin: 0;\n}\n\n#nav-item li a:link,\n#nav-item li a:visited,\n#logo:link,\n#logo:visited {\n  color: #fff;\n}\n\n#nav-item li a:hover,\n#nav-item li a:active,\n#logo:hover,\n#logo:active {\n  color: #9d9d9d;\n}\n\n#logo {\n  font-family: 'Pacifico', cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUNBOzs7O0VBSUUsV0FBVztBQUNiOztBQUNBOzs7O0VBSUUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCcpO1xuXG4ubmF2YmFyIHtcbiAgYm9yZGVyLXJhZGl1czowO1xuICBtYXJnaW46IDA7XG59XG4jbmF2LWl0ZW0gbGkgYTpsaW5rLFxuI25hdi1pdGVtIGxpIGE6dmlzaXRlZCxcbiNsb2dvOmxpbmssXG4jbG9nbzp2aXNpdGVkIHtcbiAgY29sb3I6ICNmZmY7XG59XG4jbmF2LWl0ZW0gbGkgYTpob3ZlcixcbiNuYXYtaXRlbSBsaSBhOmFjdGl2ZSxcbiNsb2dvOmhvdmVyLFxuI2xvZ286YWN0aXZlIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG59XG4jbG9nbyB7XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xufSJdfQ== */");

/***/ }),

/***/ "F8DU":
/*!**********************************************************!*\
  !*** ./src/app/tv-shows-list/tv-shows-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TvShowsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsListComponent", function() { return TvShowsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tv_shows_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tv-shows-list.component.html */ "h50C");
/* harmony import */ var _tv_shows_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tv-shows-list.component.css */ "jM8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shows.service */ "mAJ2");







let TvShowsListComponent = class TvShowsListComponent {
    constructor(route, showsService, location) {
        this.route = route;
        this.showsService = showsService;
        this.location = location;
        this.year = "";
        this.filter = [];
    }
    ngOnInit() {
        this.getParams();
        this.getTrendingShows();
        //console.log(this.movies);
    }
    goBack() {
        this.location.back();
    }
    /* retrieve parameters on the url */
    getParams() {
        this.filter = []; // clear the filter
        this.route.queryParams.subscribe(params => {
            if (params['genre']) {
                this.filter.push('genres=' + params['genre']);
            }
            if (params['year']) {
                this.filter.push('years=' + params['year']);
                this.year = params['year'];
            }
            if (params['language']) {
                this.filter.push('languages=' + params['language']);
            }
            if (params['country']) {
                this.filter.push('countries=' + params['country']);
            }
            //console.log(this.filter);
        });
    }
    getTrendingShows() {
        this.showsService.getTrendingShows(this.filter)
            .subscribe(tvshows => this.tvshows = tvshows);
    }
};
TvShowsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shows_service__WEBPACK_IMPORTED_MODULE_6__["ShowsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
TvShowsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tv-shows-list',
        template: _raw_loader_tv_shows_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tv_shows_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TvShowsListComponent);



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<main id=\"home\">\n  <div class=\"home-bg\"></div>\n  <div class=\"home-main\">\n    <div class=\"title\">\n      <h2>Wondering what to watch?</h2>\n      <p>Let's help you find movies/shows that match with your expectations.</p>\n    </div>\n    <button id=\"movie-btn\" (click)=\"onMovieClick()\" [ngClass]=\"movie ? 'active' : ''\">Movie</button>\n    <button id=\"show-btn\" (click)=\"onShowClick()\" [ngClass]=\"show ? 'active' : ''\">Show</button>\n  \n    <div *ngIf=\"movie\" class=\"output\">\n      <app-movies-search-form></app-movies-search-form>\n    </div>\n  \n    <div *ngIf=\"show\" class=\"output\">\n      <app-shows-search-form></app-shows-search-form>\n    </div>\n  </div>  \n</main>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div class=\"container\">\n    &copy; 2021 by Franck Cheuzem, Sasha Srinivas, Braydon Viragh, Ikumi Mine.\n  </div>\n</footer>");

/***/ }),

/***/ "LjAB":
/*!**********************************!*\
  !*** ./src/app/safe-url.pipe.ts ***!
  \**********************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
SafeUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeUrl'
    })
], SafeUrlPipe);



/***/ }),

/***/ "NTbO":
/*!*********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* styling for movie details page */\nmain{\n  padding-bottom: 1em;\n  background-color: white\n}\nh1{\n font-size: 2em;\n  margin-bottom: 0px;\n  text-transform: capitalize;\n}\n#synopsis{\n  margin-top: 40px;\n}\niframe{\n  display: block;\n  height: 30em;\n  width: 60%;\n  margin: auto;\n}\n#movie-status{\n  color: gray;\n  text-transform: capitalize;\n  padding: 0px;\n  margin-bottom: 1em;\n}\nh2{\n  text-transform: capitalize;\n}\n@media only screen and (max-width: 600px) {\n\n  iframe{\n    width: 100%;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQztFQUNFLG1CQUFtQjtFQUNuQjtBQUNGO0FBQ0E7Q0FDQyxjQUFjO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0FBRUYiLCJmaWxlIjoibW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsaW5nIGZvciBtb3ZpZSBkZXRhaWxzIHBhZ2UgKi9cbm1haW57XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG59XG5oMXtcbiBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiNzeW5vcHNpc3tcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbmlmcmFtZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzBlbTtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuI21vdmllLXN0YXR1c3tcbiAgY29sb3I6IGdyYXk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuaDJ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gIGlmcmFtZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ "O8I9":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shows-search-form/shows-search-form.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container search-form\">\n  <h2>Trending shows</h2>\n  <form #showsSearchForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"show-genre\" class=\"form-label\">Genre:</label>\n      <select id=\"show-genre\" name=\"show-genre\" class=\"form-control\" [(ngModel)]=\"genre\">\n        <option value=\"\">select a genre</option>\n        <option *ngFor=\"let g of genres\" [value]=\"g.slug\">{{ g.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"show-year\" class=\"form-label\">Year:</label>\n      <select id=\"show-year\" name=\"show-year\" class=\"form-control\" [(ngModel)]=\"year\">\n        <option value=\"\">select a year</option>\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{y}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"show-lang\" class=\"form-label\">Language:</label>\n      <select id=\"show-lang\" name=\"show-lang\" class=\"form-control\" [(ngModel)]=\"language\">\n        <option value=\"\">select a language</option>\n        <option *ngFor=\"let l of languages\" [value]=\"l.code\">{{ l.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"show-country\" class=\"form-label\">Country:</label>\n      <select id=\"show-country\" name=\"show-country\" class=\"form-control\" [(ngModel)]=\"country\">\n        <option value=\"\">select a country</option>\n        <option *ngFor=\"let c of countries\" [value]=\"c.code\">{{ c.name }}</option>\n      </select>\n    </div>\n    \n    <button type=\"submit\" class=\"btn search-btn\">Search</button>\n  </form>\n</section>");

/***/ }),

/***/ "Q5eE":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies-list/movies-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div class=\"content-wrapper\">\n  <main class=\"container\" id=\"main-content\">\n    <a (click)= \"goBack()\" class=\"return-link\"> new search</a>\n    <h1>Top 10 trending movies</h1>\n\n    <ul *ngIf=\"movies?.length > 0; else noResult\">\n      <li *ngFor=\"let movie of movies; let i=index\">\n        <figure>\n          <a routerLink=\"/movie-detail/{{movie.movie.ids.trakt}}\">\n            <img src=\"{{moviesImages[i]}}\" alt=\"{{movie.movie.title}} poster\">\n          </a>\n          <figcaption>{{movie.movie.title}}</figcaption>\n        </figure>\n      </li>\n    </ul>\n    <ng-template  #noResult>\n      <div class=\"no-result\">\n        No result found !\n      </div>\n    </ng-template>\n  </main>\n</div>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home {\n  background-color: #222;\n  min-height: 100vh;\n  overflow: hidden;\n  position: relative;\n}\n.home-bg {\n  background-image: url('bg.302f2afd619a3f6ff57d.jpg');\n  background-repeat: no-repeat;\n  background-position-x: 40%;\n  background-size: contain;\n  height: 100vh;\n  width: 1920px;\n  transform: skewX(-20deg);\n  z-index: 5;\n}\n.home-main {\n  height: 100vh;\n  width: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-top: 3%;\n  padding-left: 5%;\n  z-index: 10;\n}\n.title {\n  color: #fff;\n  margin-bottom: 15px;\n}\n.title h2 {\n  margin: 0;\n}\n/* movie and show button */\n#movie-btn, \n#show-btn {\n  width: 25%;\n  background-color: rgba(255, 255, 255, 0.918);\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid rgba(187, 187, 187, 0.918) 2px;\n  padding: 10px 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n#movie-btn:hover, \n#show-btn:hover {\n  background-color: rgba(187, 187, 187, 0.918);\n  border-bottom: solid rgba(187, 187, 187, 0.918) 2px;\n}\n#movie-btn.active,\n#show-btn.active {\n  background-color:rgba(187, 187, 187, 0.918);\n  color: #fff;\n  border-top: 5px solid #f48c06;\n  border-left: solid rgba(187, 187, 187, 0.918) 2px;\n  border-right: solid rgba(187, 187, 187, 0.918) 2px;\n  border-bottom: solid rgba(187, 187, 187, 0.918) 2px;\n}\n/* output */\n.output {\n  padding-bottom: 15px;\n  background-color: rgba(187, 187, 187, 0.918);\n  color: #fff;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n@media only screen and (max-width: 800px) {\n  .home-main {\n    width: 70%;\n  }\n  .home-bg {\n    background-position-x: 20%;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .home-main {\n    width: 90%;\n    padding-left: 10%;\n  }\n  .home-bg {\n    background-position-x: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0RBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0EsMEJBQTBCO0FBQzFCOztFQUVFLFVBQVU7RUFDViw0Q0FBNEM7RUFDNUMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtREFBbUQ7RUFDbkQsZUFBZTtFQUNmLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSw0Q0FBNEM7RUFDNUMsbURBQW1EO0FBQ3JEO0FBQ0E7O0VBRUUsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsaURBQWlEO0VBQ2pELGtEQUFrRDtFQUNsRCxtREFBbUQ7QUFDckQ7QUFDQSxXQUFXO0FBQ1g7RUFDRSxvQkFBb0I7RUFDcEIsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2ltYWdlcy9iZy5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDQwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTkyMHB4O1xuICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XG4gIHotaW5kZXg6IDU7XG59XG4uaG9tZS1tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgei1pbmRleDogMTA7XG59XG4udGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi50aXRsZSBoMiB7XG4gIG1hcmdpbjogMDtcbn1cbi8qIG1vdmllIGFuZCBzaG93IGJ1dHRvbiAqL1xuI21vdmllLWJ0biwgXG4jc2hvdy1idG4ge1xuICB3aWR0aDogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTE4KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCByZ2JhKDE4NywgMTg3LCAxODcsIDAuOTE4KSAycHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuI21vdmllLWJ0bjpob3ZlciwgXG4jc2hvdy1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODcsIDAuOTE4KTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgcmdiYSgxODcsIDE4NywgMTg3LCAwLjkxOCkgMnB4O1xufVxuI21vdmllLWJ0bi5hY3RpdmUsXG4jc2hvdy1idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE4NywgMTg3LCAxODcsIDAuOTE4KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZjQ4YzA2O1xuICBib3JkZXItbGVmdDogc29saWQgcmdiYSgxODcsIDE4NywgMTg3LCAwLjkxOCkgMnB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIHJnYmEoMTg3LCAxODcsIDE4NywgMC45MTgpIDJweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgcmdiYSgxODcsIDE4NywgMTg3LCAwLjkxOCkgMnB4O1xufVxuLyogb3V0cHV0ICovXG4ub3V0cHV0IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxODcsIDE4NywgMC45MTgpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuaG9tZS1tYWluIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIC5ob21lLWJnIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaG9tZS1tYWluIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICB9XG4gIC5ob21lLWJnIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular trakt API test';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UAjv":
/*!**************************************************************!*\
  !*** ./src/app/tv-shows-detail/tv-shows-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: TvShowsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsDetailComponent", function() { return TvShowsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tv_shows_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tv-shows-detail.component.html */ "eQow");
/* harmony import */ var _tv_shows_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tv-shows-detail.component.css */ "eJzW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shows.service */ "mAJ2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







let TvShowsDetailComponent = class TvShowsDetailComponent {
    constructor(route, showsService, location) {
        this.route = route;
        this.showsService = showsService;
        this.location = location;
    }
    ngOnInit() {
        this.getShow();
    }
    goBack() {
        this.location.back();
    }
    getShow() {
        const id = String(this.route.snapshot.paramMap.get('id'));
        this.showsService.getShow(id)
            .subscribe(show => this.show = show);
    }
};
TvShowsDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shows_service__WEBPACK_IMPORTED_MODULE_5__["ShowsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
TvShowsDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tv-shows-detail',
        template: _raw_loader_tv_shows_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tv_shows_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TvShowsDetailComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "W/Td":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-detail/movie-detail.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div class=\"content-wrapper\">\n  <main *ngIf=\"movie\" class=\"container\" id>\n    <a (click)= \"goBack()\" class=\"return-link\"> return to list</a>\n  <h1>Movie: {{movie.title}}</h1>\n  <p id=\"movie-status\">{{movie.status}} - {{movie.year}}</p>\n  <iframe *ngIf=\"movie.trailer; else elseBlock\"\n  [src] =\"(movie.trailer).replace('http','https').replace('watch?v=','embed/') | safeUrl\" allow=\"fullscreen\"></iframe>\n\n  <ng-template #elseBlock>\n    <div class=\"no-result\">\n      No trailer available!\n    </div>\n  </ng-template>\n\n  <section id=\"synopsis\">\n    <h2>Synopsis</h2>\n\n    {{movie.overview}}\n  </section>\n  </main>\n\n</div>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "Z09o":
/*!******************************************************************!*\
  !*** ./src/app/shows-search-form/shows-search-form.component.ts ***!
  \******************************************************************/
/*! exports provided: ShowsSearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsSearchFormComponent", function() { return ShowsSearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shows_search_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shows-search-form.component.html */ "O8I9");
/* harmony import */ var _shows_search_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shows-search-form.component.css */ "r8po");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shows.service */ "mAJ2");






let ShowsSearchFormComponent = class ShowsSearchFormComponent {
    constructor(showsService, router) {
        this.showsService = showsService;
        this.router = router;
        this.countries = [];
        this.genres = [];
        this.languages = [];
        this.years = ["2017", "2018", "2019", "2020", "2021"];
        //Data will be retrieved from the form submission
        //userModel: Filter = {genre: "", year: "", language: "", country: ""}; //Object
        this.filter = {};
        this.genre = "";
        this.year = "";
        this.language = "";
        this.country = "";
    }
    ngOnInit() {
        this.getShowsCountries();
        this.getShowsGenres();
        this.getShowsLanguages();
    }
    onSubmit() {
        //I was trying to parse values through object but it didn't work
        /*
        this.showsService.getTrendingShows(this.userModel)
          .subscribe(
            data => console.log("Success", data),
            error => console.log("Error", error)
            );
        */
        this.filter = {}; // clear the filter
        //console.log(this.genre,this.language,this.country,this.year);
        // add filter params
        if (this.genre) {
            this.filter.genre = this.genre;
        }
        if (this.year) {
            this.filter.year = this.year;
        }
        if (this.language) {
            this.filter.language = this.language;
        }
        if (this.country) {
            this.filter.country = this.country;
        }
        console.log(this.filter);
        this.router.navigate(['/tv-shows-list'], { queryParams: this.filter });
    }
    getShowsCountries() {
        this.showsService.getShowsCountries().subscribe(countries => this.countries = countries);
    }
    getShowsGenres() {
        this.showsService.getShowsGenres().subscribe(genres => this.genres = genres);
    }
    getShowsLanguages() {
        this.showsService.getShowsLanguages().subscribe(languages => this.languages = languages);
    }
};
ShowsSearchFormComponent.ctorParameters = () => [
    { type: _shows_service__WEBPACK_IMPORTED_MODULE_5__["ShowsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ShowsSearchFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shows-search-form',
        template: _raw_loader_shows_search_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shows_search_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShowsSearchFormComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies-search-form/movies-search-form.component */ "dMOQ");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "fb62");
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./safe-url.pipe */ "LjAB");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "n2lM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shows_search_form_shows_search_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shows-search-form/shows-search-form.component */ "Z09o");
/* harmony import */ var _tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tv-shows-list/tv-shows-list.component */ "F8DU");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _tv_shows_detail_tv_shows_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tv-shows-detail/tv-shows-detail.component */ "UAjv");



















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_8__["MoviesSearchFormComponent"],
            _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_9__["MoviesListComponent"],
            _safe_url_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeUrlPipe"],
            _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_11__["MovieDetailComponent"],
            _shows_search_form_shows_search_form_component__WEBPACK_IMPORTED_MODULE_13__["ShowsSearchFormComponent"],
            _tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_14__["TvShowsListComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
            _tv_shows_detail_tv_shows_detail_component__WEBPACK_IMPORTED_MODULE_18__["TvShowsDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "a6zj":
/*!*******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1{\n font-size: 2em;\n  \n  text-transform: capitalize;\n}\nmain{\n  padding-bottom: 1em;\n  background-color: white;\n\n}\nul li a{\n  color: #687980\n}\nul{\n  padding: 0px;\n}\nul li {\n  margin-top: 2em;\n  margin-bottom: 0.5em;\n  list-style-type: none;\n  display: inline-block;\n  width: 50%;\n  vertical-align: top;\n  padding: 0em 1em;\n}\nimg{\n  display: block;\n  height: 300px;\n  margin: auto;\n}\nfigure{\n  height: 400px;\n}\nfigcaption{\n  text-transform: capitalize;\n  font-size: 1.3em;\n  margin-top: 0.6em;\n  text-align: center;\n}\n@media screen and (max-width: 650px) {\n\n  ul li {\n    width: 100%\n  }\n\n  img{\n    margin: auto;\n  }\n\n  figcaption{\n    text-align: center;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsY0FBYzs7RUFFYiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7O0FBRXpCO0FBRUE7RUFDRTtBQUNGO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUU7SUFDRTtFQUNGOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGIiwiZmlsZSI6Im1vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgxe1xuIGZvbnQtc2l6ZTogMmVtO1xuICBcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5tYWlue1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG51bCBsaSBhe1xuICBjb2xvcjogIzY4Nzk4MFxufVxudWx7XG4gIHBhZGRpbmc6IDBweDtcbn1cbnVsIGxpIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDBlbSAxZW07XG59XG5cbmltZ3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbmZpZ3VyZXtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuZmlnY2FwdGlvbntcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbi10b3A6IDAuNmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgdWwgbGkge1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cblxuICBpbWd7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgZmlnY2FwdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxufVxuIl19 */");

/***/ }),

/***/ "dMOQ":
/*!********************************************************************!*\
  !*** ./src/app/movies-search-form/movies-search-form.component.ts ***!
  \********************************************************************/
/*! exports provided: MoviesSearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesSearchFormComponent", function() { return MoviesSearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_movies_search_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./movies-search-form.component.html */ "mUxQ");
/* harmony import */ var _movies_search_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-search-form.component.css */ "f8zo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movies.service */ "ny8X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let MoviesSearchFormComponent = class MoviesSearchFormComponent {
    constructor(moviesService, router) {
        this.moviesService = moviesService;
        this.router = router;
        this.genre = ""; // movie Genre
        this.year = ""; // movie Year
        this.language = ""; // movie language
        this.country = ""; // movie country
        this.years = ["2017", "2018", "2019", "2020", "2021"];
        this.genres = [];
        this.languages = [];
        this.countries = [];
        this.filter = {};
    }
    ngOnInit() {
        this.getMoviesCountries();
        this.getMoviesGenres();
        this.getMoviesLanguages();
    }
    /* handle the search form submission */
    onSubmit() {
        this.filter = {}; // clear the filter
        //console.log(this.genre,this.language,this.country,this.year);
        // add filter params
        if (this.genre) {
            this.filter.genre = this.genre;
        }
        if (this.year) {
            this.filter.year = this.year;
        }
        if (this.language) {
            this.filter.language = this.language;
        }
        if (this.country) {
            this.filter.country = this.country;
        }
        //console.log(this.filter);
        //location.href = this.moviesListUrl;
        this.router.navigate(['/movies-list'], { queryParams: this.filter });
    }
    getMoviesCountries() {
        this.moviesService.getMoviesCountries()
            .subscribe(countries => this.countries = countries);
    }
    getMoviesLanguages() {
        this.moviesService.getMoviesLanguages()
            .subscribe(languages => this.languages = languages);
    }
    getMoviesGenres() {
        this.moviesService.getMoviesGenres()
            .subscribe(genres => this.genres = genres);
    }
};
MoviesSearchFormComponent.ctorParameters = () => [
    { type: _movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MoviesSearchFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-movies-search-form',
        template: _raw_loader_movies_search_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_movies_search_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MoviesSearchFormComponent);



/***/ }),

/***/ "eJzW":
/*!***************************************************************!*\
  !*** ./src/app/tv-shows-detail/tv-shows-detail.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main{\n  padding-bottom: 1em;\n  height: 1000px;\n}\nh1{\n\n  margin-bottom: 0px;\n}\niframe{\n  display: block;\n  height: 30em;\n  width: 60%;\n  margin: auto;\n}\n#movie-status{\n  color: gray;\n  text-transform: capitalize;\n  padding: 0px;\n  margin-bottom: 1em;\n}\nh2{\n  text-transform: capitalize;\n}\n@media only screen and (max-width: 600px) {\n\n  iframe{\n    width: 100%;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LXNob3dzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTs7RUFFRTtJQUNFLFdBQVc7RUFDYjs7QUFFRiIsImZpbGUiOiJ0di1zaG93cy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGhlaWdodDogMTAwMHB4O1xufVxuaDF7XG5cbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaWZyYW1le1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMGVtO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG59XG4jbW92aWUtc3RhdHVze1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5oMntcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgaWZyYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "eQow":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tv-shows-detail/tv-shows-detail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<main *ngIf=\"show\" class=\"container\" id>\n  <a (click)= \"goBack()\" class=\"return-link\"> return to list</a>\n  <h1>TV Show: {{show.title}}</h1>\n  <p class=\"tv-status\">Show Status: {{show.status}} - {{show.year}}</p>\n  <p class=\"tv-status\">Network: {{show.network}}</p>\n\n  <ng-template #elseBlock>\n    <div class=\"no-result\">\n      No trailer available!\n    </div>\n  </ng-template>\n\n  <h2>Synopsis</h2>\n\n  {{show.overview}}\n</main>\n\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "f8zo":
/*!*********************************************************************!*\
  !*** ./src/app/movies-search-form/movies-search-form.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nform{\n  width: 40%;\n  margin: 1em auto;\n}\nmain{\n  padding-bottom: 1em;\n}\n*/\n.search-form {\n  width: 100%;\n  border-radius: 5px;\n  padding-top: 20px; \n}\n.search-form h2 {\n  font-weight: 400;\n  text-transform: uppercase;\n  width: 80%;\n  margin: 0 auto;\n}\n.search-form label {\n  font-weight: 300;\n}\nform{\n  width: 80%;\n  margin: 0 auto;\n}\n.search-btn {\n  width: 100%;\n  color: #fff;\n  background-color: #e85d04;\n}\n.search-btn:hover {\n  background-color: #dc2f02;\n}\n@media only screen and (max-width: 500px) {\n  form{\n    width: 100%;\n  }\n  .search-form {\n    padding-top: 5px; \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztDQVFDO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6Im1vdmllcy1zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmZvcm17XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG5tYWlue1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuKi9cbi5zZWFyY2gtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4OyBcbn1cbi5zZWFyY2gtZm9ybSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNlYXJjaC1mb3JtIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbmZvcm17XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNlYXJjaC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODVkMDQ7XG59XG4uc2VhcmNoLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzJmMDI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGZvcm17XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlYXJjaC1mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4OyBcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "DN7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "fb62":
/*!******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.ts ***!
  \******************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_movies_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./movies-list.component.html */ "Q5eE");
/* harmony import */ var _movies_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-list.component.css */ "a6zj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movies.service */ "ny8X");







let MoviesListComponent = class MoviesListComponent {
    constructor(route, moviesService, location) {
        this.route = route;
        this.moviesService = moviesService;
        this.location = location;
        this.year = "";
        this.filter = [];
        this.moviesImages = [];
        this.numPerCol = 4;
        this.numRows = 0;
    }
    ngOnInit() {
        this.getParams();
        this.getTrendingMovies();
        //console.log(this.movies);
    }
    goBack() {
        this.location.back();
    }
    /* retrieve parameters on the url */
    getParams() {
        this.filter = []; // clear the filter
        this.route.queryParams.subscribe(params => {
            if (params['genre']) {
                this.filter.push('genres=' + params['genre']);
            }
            if (params['year']) {
                this.filter.push('years=' + params['year']);
                this.year = params['year'];
            }
            if (params['language']) {
                this.filter.push('languages=' + params['language']);
            }
            if (params['country']) {
                this.filter.push('countries=' + params['country']);
            }
            //console.log(this.filter);
        });
    }
    getTrendingMovies() {
        this.moviesService.getTrendingMovies(this.filter)
            .subscribe(movies => {
            this.movies = movies;
            this.getMovieImages();
            //this.displayMovies();
        });
    }
    getMovieImages() {
        this.numRows = Math.ceil(this.movies.length / this.numPerCol);
        for (let i = 0; i < this.movies.length; i++) {
            this.moviesService.getMovieImages(String(this.movies[i].movie.ids.tmdb))
                .subscribe((images) => {
                this.moviesImages.push("https://image.tmdb.org/t/p/w300" + String(images.posters[0].file_path));
            });
        }
    }
    displayMovies() {
        let main_elt = document.getElementById('main-content');
        console.log(main_elt);
        for (let i = 0; i < Math.ceil(this.movies.length / this.numPerCol); i++) {
            let row_div = document.createElement('div');
            row_div.className = 'row';
            for (let j = i * this.numPerCol; j < (i * this.numPerCol) + this.numPerCol; j++) {
                if (j < this.movies.length) {
                    let div = document.createElement('div');
                    div.className = 'col-md-3';
                    let fig = document.createElement('figure');
                    let img = document.createElement('img');
                    img.setAttribute('src', this.moviesImages[j]);
                    img.setAttribute('alt', this.movies[j].movie.title + " poster");
                    let caption = document.createElement('figcaption');
                    caption.innerText = this.movies[j].movie.title;
                    fig.appendChild(img);
                    fig.appendChild(caption);
                    div.appendChild(fig);
                    row_div.appendChild(div);
                }
            }
            //document.getElementById('main-content').appendChild(row_div);
        }
    }
};
MoviesListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
MoviesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-movies-list',
        template: _raw_loader_movies_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_movies_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MoviesListComponent);



/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "1XXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "h50C":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tv-shows-list/tv-shows-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"content-wrapper\">\n<main class=\"container\" id=\"main-content\">\n  <a (click)= \"goBack()\" class=\"return-link\"> new search</a>\n  <h1>Top 10 trending tv shows</h1>\n\n\n\n  <ol *ngIf=\"tvshows?.length > 0; else noResult\">\n    <li *ngFor=\"let tvshow of tvshows\">\n      <a routerLink=\"/tv-shows-detail/{{tvshow.show.ids.trakt}}\">\n<!--        <img src=\"{{tvImages[i]}}\" alt=\"{{movie.movie.title}} poster\">-->\n        {{tvshow.show.title}}\n      </a>\n    </li>\n  </ol>\n  <ng-template  #noResult>\n    <div class=\"no-result\">\n      No result found !\n    </div>\n  </ng-template>\n</main>\n</div>\n<app-footer></app-footer>\n\n");

/***/ }),

/***/ "jM8O":
/*!***********************************************************!*\
  !*** ./src/app/tv-shows-list/tv-shows-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main{\n  padding-bottom: 1em;\n  background-color: white;\n  height: 1000px;\n}\nh1{\n font-size: 2em;\n  margin-bottom: 0px;\n}\nul li a{\n  color: #687980\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LXNob3dzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjtBQUNBO0NBQ0MsY0FBYztFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7QUFDRiIsImZpbGUiOiJ0di1zaG93cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAwcHg7XG59XG5oMXtcbiBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxudWwgbGkgYXtcbiAgY29sb3I6ICM2ODc5ODBcbn1cbiJdfQ== */");

/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-inverse\" id=\"header\">\n  <div class=\"container\">\n\n    <div class=\"navbar-header\">\n      <!--Toggle Menu-->\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <!---Logo-->\n      <h1><a class=\"navbar-brand\" routerLink=\"/home\" id=\"logo\">MovieTV</a></h1>\n    </div>\n    \n    <!--Main nav item-->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\" id=\"nav-item\">\n        <li><a routerLink=\"/home\">Home</a></li>\n        <li><a href=\"#\">FAQ</a></li>\n        <li><a href=\"#\">Contact</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "mAJ2":
/*!**********************************!*\
  !*** ./src/app/shows.service.ts ***!
  \**********************************/
/*! exports provided: ShowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsService", function() { return ShowsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ShowsService = class ShowsService {
    constructor(http) {
        this.http = http;
        this.Url = 'https://api.trakt.tv/'; // URL to web api
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'trakt-api-version': '2',
                'trakt-api-key': '13ea95c9693cceb363b1fef70b372ec06213cb0d144ded8d7457b8ed055798ac'
            })
        };
        this.image_api_key = "89a4c80912c77b3a55862d978346c308";
        this.image_base_url = "https://api.themoviedb.org/3/";
    }
    //Get countries for shows
    //Returns a list of countries for shows
    getShowsCountries() {
        return this.http.get(this.Url + 'countries/shows', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched countires')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCoutries', [])));
    }
    //Get genres for shows
    //Returns a list of genres for shows
    getShowsGenres() {
        return this.http.get(this.Url + 'genres/shows', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched genres')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getGenres', [])));
    }
    getTVImages(id) {
        return this.http.get(this.image_base_url + 'tv/' + id + '/images?api_key=' + this.image_api_key)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched tv images')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTVImage', {})));
    }
    //Get languages for shows
    //Returns a list of languages for shows
    getShowsLanguages() {
        return this.http.get(this.Url + 'languages/shows', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched languages')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLanguages', [])));
    }
    //Get trending shows based on user's choice of genre, year, language, or country
    //Returns a list of trending shows
    getTrendingShows(filter) {
        //I was trying to get values from object but it didn't work
        //var queryString = Object.keys(filter).map(key => key + '=' + filter.genre).join('&');
        /*
        if(Object.values(filter)){
          var key = Object.keys(filter)
          var value = Object.values(filter)
          console.log(key + "=" + value)
        }
        */
        filter.push('extended=full');
        console.log(this.Url + 'shows/trending?' + filter.join('&'));
        return this.http.get(this.Url + 'shows/trending?' + filter.join('&'), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched shows')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTrendingShows', [])));
    }
    getShow(id) {
        return this.http.get('https://api.trakt.tv/shows/' + id + '?extended=full', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched show')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getShow', {})));
    }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    /** Log messages in the console */
    log(message) {
        console.log(message);
    }
};
ShowsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShowsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShowsService);



/***/ }),

/***/ "mUxQ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies-search-form/movies-search-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"container search-form\">\n  <h2>Trending movies</h2>\n  <!--<p>Wondering what to watch? let's help you find movies that match  with your expectations.</p>-->\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"genre\">Genre:</label>\n      <select class=\"form-control\"  id=\"genre\" name=\"genre\"\n      [(ngModel)]=\"genre\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a genre</option>\n        <option *ngFor=\"let g of genres\" [value]=\"g.slug\">{{g.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"year\">Year:</label>\n      <select class=\"form-control\"  id=\"year\" name=\"year\"\n      [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\" selected>select a year</option>\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{y}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"language\">Language:</label>\n      <select class=\"form-control\"  id=\"language\" name=\"language\"\n      [(ngModel)]=\"language\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a language</option>\n        <option *ngFor=\"let l of languages\" [value]=\"l.code\">{{l.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"country\">Country:</label>\n      <select class=\"form-control\"  id=\"country\" country\n      [(ngModel)]=\"country\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a country</option>\n        <option *ngFor=\"let c of countries\" [value]=\"c.code\">{{c.name}}</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn search-btn\">Search</button>\n  </form>\n</main>\n");

/***/ }),

/***/ "n2lM":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_movie_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./movie-detail.component.html */ "W/Td");
/* harmony import */ var _movie_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-detail.component.css */ "NTbO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movies.service */ "ny8X");







let MovieDetailComponent = class MovieDetailComponent {
    constructor(route, moviesService, location) {
        this.route = route;
        this.moviesService = moviesService;
        this.location = location;
    }
    ngOnInit() {
        this.getMovie();
    }
    goBack() {
        this.location.back();
    }
    getMovie() {
        const id = String(this.route.snapshot.paramMap.get('id'));
        this.moviesService.getMovie(id)
            .subscribe(movie => this.movie = movie);
    }
};
MovieDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
MovieDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-movie-detail',
        template: _raw_loader_movie_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_movie_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MovieDetailComponent);



/***/ }),

/***/ "ny8X":
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let MoviesService = class MoviesService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'trakt-api-version': '2',
                'trakt-api-key': 'f553707c24635b6b454af5990ed3f88ed50dbd9cc5ba16992089fa9e0a4274c0'
            })
        };
        this.image_api_key = "89a4c80912c77b3a55862d978346c308";
        this.image_base_url = "https://api.themoviedb.org/3/";
    }
    /*
   * PURPOSE : fetch countries of movies
   *  PARAMS :  -
   * RETURNS : list of countries of movies
   *   NOTES :
   */
    getMoviesCountries() {
        return this.http.get('https://api.trakt.tv/countries/movies', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched countries')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMoviesCountries', [])));
    }
    /*
   * PURPOSE : fetch languages of movies
   *  PARAMS :  -
   * RETURNS : list of languages of movies
   *   NOTES :
   */
    getMoviesLanguages() {
        return this.http.get('https://api.trakt.tv/languages/movies', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched languages')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMoviesLanguages', [])));
    }
    /*
   * PURPOSE : fetch genres of movies
   *  PARAMS :  -
   * RETURNS : list of genres of movies
   *   NOTES :
   */
    getMoviesGenres() {
        return this.http.get('https://api.trakt.tv/genres/movies', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched genres')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMoviesGenres', [])));
    }
    /*
     * PURPOSE :retrieve trending movies
     *  PARAMS : filter:string[] - search filter
     * RETURNS : list of trending movies-
     *   NOTES :
     */
    getTrendingMovies(filter) {
        filter.push('extended=full'); // get full info of items
        //console.log('https://api.trakt.tv/movies/trending?' + filter.join('&'));
        return this.http.get('https://api.trakt.tv/movies/trending?' + filter.join('&'), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched movies')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTrendingMovies', [])));
    }
    /*
   * PURPOSE : retrieve a specific movie using its id
   *  PARAMS : id: string - movie id
   * RETURNS :  - movie in json
   *   NOTES :
   */
    getMovie(id) {
        return this.http.get('https://api.trakt.tv/movies/' + id + '?extended=full', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched movie')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMovie', {})));
    }
    /*
     * PURPOSE : retrieve filename representing a movie poster
     *  PARAMS : id: string - id of the movie
     * RETURNS :  -
     *   NOTES :
     */
    getMovieImages(id) {
        return this.http.get(this.image_base_url + 'movie/' + id + '/images?api_key=' + this.image_api_key)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched movie images')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMovieImage', {})));
    }
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
MoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MoviesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MoviesService);



/***/ }),

/***/ "r8po":
/*!*******************************************************************!*\
  !*** ./src/app/shows-search-form/shows-search-form.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-form {\n  width: 100%;\n  border-radius: 5px;\n  padding-top: 20px; \n}\n.search-form h2 {\n  font-weight: 400;\n  text-transform: uppercase;\n  width: 80%;\n  margin: 0 auto;\n}\n.search-form label {\n  font-weight: 300;\n}\nform{\n  width: 80%;\n  margin: 0 auto;\n}\n.search-btn {\n  width: 100%;\n  color: #fff;\n  background-color: #e85d04;\n}\n.search-btn:hover {\n  background-color: #dc2f02;\n}\n@media only screen and (max-width: 500px) {\n  form{\n    width: 100%;\n  }\n  .search-form {\n    padding-top: 5px; \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dzLXNlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNob3dzLXNlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDsgXG59XG4uc2VhcmNoLWZvcm0gaDIge1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zZWFyY2gtZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5mb3Jte1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zZWFyY2gtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg1ZDA0O1xufVxuLnNlYXJjaC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyZjAyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBmb3Jte1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWFyY2gtZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDVweDsgXG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-search-form/movies-search-form.component */ "dMOQ");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "fb62");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "n2lM");
/* harmony import */ var _shows_search_form_shows_search_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shows-search-form/shows-search-form.component */ "Z09o");
/* harmony import */ var _tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tv-shows-list/tv-shows-list.component */ "F8DU");
/* harmony import */ var _tv_shows_detail_tv_shows_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tv-shows-detail/tv-shows-detail.component */ "UAjv");










const routes = [
    { path: 'movies-search', component: _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_4__["MoviesSearchFormComponent"] },
    { path: 'movies-list', component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"] },
    { path: 'movie-detail/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'shows-search', component: _shows_search_form_shows_search_form_component__WEBPACK_IMPORTED_MODULE_7__["ShowsSearchFormComponent"] },
    { path: 'tv-shows-list', component: _tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_8__["TvShowsListComponent"] },
    { path: 'tv-shows-detail/:id', component: _tv_shows_detail_tv_shows_detail_component__WEBPACK_IMPORTED_MODULE_9__["TvShowsDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.508ba30a5b05c1140904.js.map