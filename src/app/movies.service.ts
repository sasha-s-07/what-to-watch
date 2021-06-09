import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry,map, tap } from 'rxjs/operators';
import { Country } from "./country";
import { Language } from "./language";
import { Genre } from "./genre";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'trakt-api-version': '2',
      'trakt-api-key' : 'f553707c24635b6b454af5990ed3f88ed50dbd9cc5ba16992089fa9e0a4274c0'
    })
  };
 image_api_key : string = "89a4c80912c77b3a55862d978346c308";
 image_base_url : string = "https://api.themoviedb.org/3/";
  constructor(private http: HttpClient) { }

  /*
 * PURPOSE : fetch countries of movies
 *  PARAMS :  -
 * RETURNS : list of countries of movies
 *   NOTES :
 */
getMoviesCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://api.trakt.tv/countries/movies', this.httpOptions)
            .pipe(
              retry(2),
              tap(_ => this.log('fetched countries')),
              catchError(this.handleError<Country[]>('getMoviesCountries', []))
            );
  }

  /*
 * PURPOSE : fetch languages of movies
 *  PARAMS :  -
 * RETURNS : list of languages of movies
 *   NOTES :
 */
getMoviesLanguages(): Observable<Language[]>{
    return this.http.get<Language[]>('https://api.trakt.tv/languages/movies', this.httpOptions)
            .pipe(
              retry(2),
              tap(_ => this.log('fetched languages')),
              catchError(this.handleError<Language[]>('getMoviesLanguages', []))
            );
  }

  /*
 * PURPOSE : fetch genres of movies
 *  PARAMS :  -
 * RETURNS : list of genres of movies
 *   NOTES :
 */
getMoviesGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>('https://api.trakt.tv/genres/movies', this.httpOptions)
            .pipe(
              retry(2),
              tap(_ => this.log('fetched genres')),
              catchError(this.handleError<Genre[]>('getMoviesGenres', []))
            );
  }


/*
 * PURPOSE :retrieve trending movies
 *  PARAMS : filter:string[] - search filter
 * RETURNS : list of trending movies-
 *   NOTES :
 */
getTrendingMovies(filter:string[]){
    filter.push('extended=full');// get full info of items
    //console.log('https://api.trakt.tv/movies/trending?' + filter.join('&'));
    return this.http.get('https://api.trakt.tv/movies/trending?' + filter.join('&'), this.httpOptions)
            .pipe(
              retry(2),
              tap(_ => this.log('fetched movies')),
              catchError(this.handleError('getTrendingMovies', []))
            );
  }

  /*
 * PURPOSE : retrieve a specific movie using its id
 *  PARAMS : id: string - movie id
 * RETURNS :  - movie in json
 *   NOTES :
 */
getMovie(id: string){

  return this.http.get('https://api.trakt.tv/movies/' + id +'?extended=full', this.httpOptions)
          .pipe(
            retry(2),
            tap(_ => this.log('fetched movie')),
            catchError(this.handleError('getMovie', {}))
          );

}

/*
 * PURPOSE : retrieve filename representing a movie poster
 *  PARAMS : id: string - id of the movie
 * RETURNS :  -
 *   NOTES :
 */
getMovieImages(id: string){
  return this.http.get(this.image_base_url + 'movie/' + id +'/images?api_key=' + this.image_api_key)
          .pipe(
            retry(2),
            tap(_ => this.log('fetched movie images')),
            catchError(this.handleError('getMovieImage', {}))
          );
}

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
 private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {

     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead

     // TODO: better job of transforming error for user consumption
     this.log(`${operation} failed: ${error.message}`);

     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }

 log(message:string):void{
   console.log(message);

 }
}
