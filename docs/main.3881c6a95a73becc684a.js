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
/* harmony default export */ __webpack_exports__["default"] = ("/* styling for movie details page */\nmain{\n  padding-bottom: 1em;\n}\nh1{\n\n  margin-bottom: 0px;\n}\niframe{\n  display: block;\n  height: 30em;\n  width: 60%;\n  margin: auto;\n}\n#movie-status{\n  color: gray;\n  text-transform: capitalize;\n  padding: 0px;\n  margin-bottom: 1em;\n}\nh2{\n  text-transform: capitalize;\n}\n@media only screen and (max-width: 600px) {\n\n  iframe{\n    width: 100%;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQztFQUNFLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBOztFQUVFO0lBQ0UsV0FBVztFQUNiOztBQUVGIiwiZmlsZSI6Im1vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGluZyBmb3IgbW92aWUgZGV0YWlscyBwYWdlICovXG5tYWlue1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuaDF7XG5cbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaWZyYW1le1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMGVtO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG59XG4jbW92aWUtc3RhdHVze1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5oMntcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgaWZyYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "O8I9":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shows-search-form/shows-search-form.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\n  <h2>Trending TV shows</h2>\n  <form #showsSearchForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"show-genre\" class=\"form-label\">Genre:</label>\n      <select id=\"show-genre\" name=\"show-genre\" class=\"form-control\" [(ngModel)]=\"genre\">\n        <option value=\"\">select a genre</option>\n        <option *ngFor=\"let g of genres\" [value]=\"g.slug\">{{ g.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"show-year\" class=\"form-label\">Year:</label>\n      <select id=\"show-year\" name=\"show-year\" class=\"form-control\" [(ngModel)]=\"year\">\n        <option value=\"\">select a year</option>\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{y}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"show-lang\" class=\"form-label\">Language:</label>\n      <select id=\"show-lang\" name=\"show-lang\" class=\"form-control\" [(ngModel)]=\"language\">\n        <option value=\"\">select a language</option>\n        <option *ngFor=\"let l of languages\" [value]=\"l.code\">{{ l.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"show-country\" class=\"form-label\">Country:</label>\n      <select id=\"show-country\" name=\"show-country\" class=\"form-control\" [(ngModel)]=\"country\">\n        <option value=\"\">select a country</option>\n        <option *ngFor=\"let c of countries\" [value]=\"c.code\">{{ c.name }}</option>\n      </select>\n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n  </form>\n</section>");

/***/ }),

/***/ "Q5eE":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies-list/movies-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"container\" id=\"main-content\">\n  <a (click)= \"goBack()\" class=\"return-link\"> new search</a>\n  <h1>Top 10 trending movies</h1>\n\n  <ul *ngIf=\"movies?.length > 0; else noResult\">\n    <li *ngFor=\"let movie of movies; let i=index\">\n      <figure>\n        <a routerLink=\"/movie-detail/{{movie.movie.ids.trakt}}\">\n          <img src=\"{{moviesImages[i]}}\" alt=\"{{movie.movie.title}} poster\">\n        </a>\n        <figcaption>{{movie.movie.title}}</figcaption>\n      </figure>\n    </li>\n  </ul>\n  <ng-template  #noResult>\n    <div class=\"no-result\">\n      No result found !\n    </div>\n  </ng-template>\n</main>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n<main *ngIf=\"movie\" class=\"container\" id>\n  <a (click)= \"goBack()\" class=\"return-link\"> return to list</a>\n<h1>Movie: {{movie.title}}</h1>\n<p id=\"movie-status\">{{movie.status}} - {{movie.year}}</p>\n<iframe *ngIf=\"movie.trailer; else elseBlock\"\n[src] =\"(movie.trailer).replace('http','https').replace('watch?v=','embed/') | safeUrl\" allow=\"fullscreen\"></iframe>\n\n<ng-template #elseBlock>\n  <div class=\"no-result\">\n    No trailer available!\n  </div>\n</ng-template>\n\n<h2>Synopsis</h2>\n\n{{movie.overview}}\n</main>\n");

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
        //this.router.navigate(['/movies-list'], { queryParams: this.filter });
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
            _tv_shows_list_tv_shows_list_component__WEBPACK_IMPORTED_MODULE_14__["TvShowsListComponent"]
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
/* harmony default export */ __webpack_exports__["default"] = ("\nmain{\n  padding-bottom: 1em;\n\n}\n\nul li a{\n  color: #687980\n}\n\nul{\n  padding: 0px;\n}\n\nul li {\n  margin-top: 2em;\n  margin-bottom: 0.5em;\n  list-style-type: none;\n  display: inline-block;\n  width: 50%;\n  vertical-align: top;\n  padding: 0em 1em;\n}\n\nimg{\n  display: block;\n  height: 300px;\n}\n\nfigure{\n  height: 400px;\n}\n\nfigcaption{\n  text-transform: capitalize;\n  font-size: 1.3em;\n  margin-top: 0.6em;\n}\n\n@media screen and (max-width: 650px) {\n\n  ul li {\n    width: 100%\n  }\n\n  img{\n    margin: auto;\n  }\n\n  figcaption{\n    text-align: center;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUU7SUFDRTtFQUNGOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGIiwiZmlsZSI6Im1vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1haW57XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG5cbn1cblxudWwgbGkgYXtcbiAgY29sb3I6ICM2ODc5ODBcbn1cbnVse1xuICBwYWRkaW5nOiAwcHg7XG59XG51bCBsaSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAwZW0gMWVtO1xufVxuXG5pbWd7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuZmlndXJle1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5maWdjYXB0aW9ue1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLXRvcDogMC42ZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgdWwgbGkge1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cblxuICBpbWd7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgZmlnY2FwdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxufVxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("form{\n  width: 40%;\n  margin: 1em auto;\n\n}\nmain{\n  padding-bottom: 1em;\n}\n@media only screen and (max-width: 500px) {\n  form{\n    width: 100%;\n    margin: 1em auto;\n\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCOztFQUVsQjtBQUNGIiwiZmlsZSI6Im1vdmllcy1zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAxZW0gYXV0bztcblxufVxubWFpbntcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBmb3Jte1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG5cbiAgfVxufVxuIl19 */");

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

/***/ "h50C":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tv-shows-list/tv-shows-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"container\">\n  <a (click)= \"goBack()\" class=\"return-link\"> new search</a>\n  <h1>Top 10 trending tv shows</h1>\n\n\n\n  <ul *ngIf=\"tvshows?.length > 0; else noResult\">\n    <li *ngFor=\"let tvshow of tvshows\">\n      <a routerLink=\"/tvshow-detail/{{tvshow.tvshow.ids.trakt}}\">\n        {{tvshow.tvshow.title}}\n      </a>\n    </li>\n  </ul>\n  <ng-template  #noResult>\n    <div class=\"no-result\">\n      No result found !\n    </div>\n  </ng-template>\n</main>\n");

/***/ }),

/***/ "jM8O":
/*!***********************************************************!*\
  !*** ./src/app/tv-shows-list/tv-shows-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main{\n  padding-bottom: 1em;\n\n}\n\nul li a{\n  color: #687980\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LXNob3dzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InR2LXNob3dzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG5cbn1cblxudWwgbGkgYXtcbiAgY29sb3I6ICM2ODc5ODBcbn1cbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"container\">\n  <h1>Trending movies Search </h1>\n  <p>Wondering what to watch? let's help you find movies that match  with your expectations.</p>\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"genre\">Genre:</label>\n      <select class=\"form-control\"  id=\"genre\" name=\"genre\"\n      [(ngModel)]=\"genre\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a genre</option>\n        <option *ngFor=\"let g of genres\" [value]=\"g.slug\">{{g.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"year\">Year:</label>\n      <select class=\"form-control\"  id=\"year\" name=\"year\"\n      [(ngModel)]=\"year\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\" selected>select a year</option>\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{y}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"language\">Language:</label>\n      <select class=\"form-control\"  id=\"language\" name=\"language\"\n      [(ngModel)]=\"language\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a language</option>\n        <option *ngFor=\"let l of languages\" [value]=\"l.code\">{{l.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"country\">Country:</label>\n      <select class=\"form-control\"  id=\"country\" country\n      [(ngModel)]=\"country\" [ngModelOptions]=\"{standalone: true}\">\n        <option value=\"\">select a country</option>\n        <option *ngFor=\"let c of countries\" [value]=\"c.code\">{{c.name}}</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Search</button>\n  </form>\n</main>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93cy1zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _shows_search_form_shows_search_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shows-search-form/shows-search-form.component */ "Z09o");







const routes = [
    { path: 'movies-search', component: _movies_search_form_movies_search_form_component__WEBPACK_IMPORTED_MODULE_3__["MoviesSearchFormComponent"] },
    { path: 'movies-list', component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"] },
    { path: 'movie-detail/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] },
    { path: '', redirectTo: '/movies-search', pathMatch: 'full' },
    { path: 'shows-search', component: _shows_search_form_shows_search_form_component__WEBPACK_IMPORTED_MODULE_6__["ShowsSearchFormComponent"] },
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
//# sourceMappingURL=main.3881c6a95a73becc684a.js.map