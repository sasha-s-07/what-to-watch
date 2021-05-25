(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/franckcheuzem/angular-projects/angular-traktapi-test/src/main.ts */"zUnb");


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
/* harmony default export */ __webpack_exports__["default"] = ("/* styling for movie details page */\nmain{\n  background-color: #e4efe7;\n  padding-bottom: 1em;\n}\nh1{\n\n  margin-bottom: 0px;\n}\niframe{\n  display: block;\n  height: 20em;\n  width: 55%;\n  margin: auto;\n}\n#movie-status{\n  color: gray;\n  text-transform: capitalize;\n  padding: 0px;\n  margin-bottom: 1em;\n}\nh2{\n  text-transform: capitalize;\n}\n@media only screen and (max-width: 600px) {\n\n  iframe{\n    width: 100%;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQztFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTs7RUFFRTtJQUNFLFdBQVc7RUFDYjs7QUFFRiIsImZpbGUiOiJtb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxpbmcgZm9yIG1vdmllIGRldGFpbHMgcGFnZSAqL1xubWFpbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZWZlNztcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbmgxe1xuXG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbmlmcmFtZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjBlbTtcbiAgd2lkdGg6IDU1JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuI21vdmllLXN0YXR1c3tcbiAgY29sb3I6IGdyYXk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuaDJ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gIGlmcmFtZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ "Q5eE":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies-list/movies-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"container\">\n  <a (click)= \"goBack()\" class=\"return-link\"> new search</a>\n  <h1>Top 10 trending movies</h1>\n\n  <ul>\n    <li *ngFor=\"let movie of movies\">\n    <a routerLink=\"/movie-detail/{{movie.movie.ids.trakt}}\">\n        {{movie.movie.title}}\n    </a>\n    </li>\n  </ul>\n  <p *ngIf=\"!movies?.length > 0\" class=\"no-result\"> No result found !</p>\n</main>\n");

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

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n<footer class=\"container\">\n  &copy; 2021 by Franck Cheuzem.\n</footer>\n");

/***/ }),

/***/ "W/Td":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-detail/movie-detail.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<main *ngIf=\"movie\" class=\"container\" id>\n  <a (click)= \"goBack()\" class=\"return-link\"> return to list</a>\n<h1>Movie: {{movie.title}}</h1>\n<p id=\"movie-status\">{{movie.status}} - {{movie.year}}</p>\n<iframe\n[src] =\"(movie.trailer).replace('watch?v=','embed/') | safeUrl\" allow=\"fullscreen\"></iframe>\n\n<h2>Synopsis</h2>\n\n{{movie.overview}}\n</main>\n");

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies-search-form/movies-search-form.component */ "dMOQ");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "fb62");
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./safe-url.pipe */ "LjAB");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "n2lM");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_7__["MoviesSearchFormComponent"],
            _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_8__["MoviesListComponent"],
            _safe_url_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeUrlPipe"],
            _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("\nmain{\n  background-color: #e4efe7;\n  padding-bottom: 1em;\n\n}\n\nul li a{\n  color: #687980\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6Im1vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1haW57XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGVmZTc7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG5cbn1cblxudWwgbGkgYXtcbiAgY29sb3I6ICM2ODc5ODBcbn1cbiJdfQ== */");

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

/***/ "f8zo":
/*!*********************************************************************!*\
  !*** ./src/app/movies-search-form/movies-search-form.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form{\n  width: 40%;\n  margin: 1em auto;\n\n}\nmain{\n  background-color: #e4efe7;\n  padding-bottom: 1em;\n}\n@media only screen and (max-width: 500px) {\n  form{\n    width: 100%;\n    margin: 1em auto;\n\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjs7RUFFbEI7QUFDRiIsImZpbGUiOiJtb3ZpZXMtc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMWVtIGF1dG87XG5cbn1cbm1haW57XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGVmZTc7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgZm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuXG4gIH1cbn1cbiJdfQ== */");

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
        this.filter = [];
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
            .subscribe(movies => this.movies = movies);
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

/***/ "mUxQ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies-search-form/movies-search-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"container\">\n  <h1>Trending movies</h1>\n  <p>Wondering what to watch? let's help you find movies that match  with your expectations.</p>\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"genre\">Genre:</label>\n      <select class=\"form-control\"  id=\"genre\" name=\"genre\"\n      [(ngModel)]=\"genre\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a genre</option>\n        <option *ngFor=\"let g of genres\" [value]=\"g.slug\">{{g.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"year\">Year:</label>\n      <select class=\"form-control\"  id=\"year\" name=\"year\"\n      [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\" selected>select a year</option>\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{y}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"language\">Language:</label>\n      <select class=\"form-control\"  id=\"language\" name=\"language\"\n      [(ngModel)]=\"language\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a language</option>\n        <option *ngFor=\"let l of languages\" [value]=\"l.code\">{{l.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"country\">Country:</label>\n      <select class=\"form-control\"  id=\"country\" country\n      [(ngModel)]=\"country\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a country</option>\n        <option *ngFor=\"let c of countries\" [value]=\"c.code\">{{c.name}}</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Search</button>\n  </form>\n</main>\n");

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
/* harmony import */ var _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-search-form/movies-search-form.component */ "dMOQ");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "fb62");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "n2lM");






const routes = [
    { path: 'movies-search', component: _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_3__["MoviesSearchFormComponent"] },
    { path: 'movies-list', component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"] },
    { path: 'movie-detail/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] },
    { path: '', redirectTo: '/movies-search', pathMatch: 'full' }
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
//# sourceMappingURL=main.5e8f20998632274e492d.js.map