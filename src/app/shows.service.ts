import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from './country';
import { Language } from "./language";
import { Genre } from "./genre";
import { Filter } from "./filter";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private Url = 'https://api.trakt.tv/';  // URL to web api

  constructor(private http: HttpClient,) { }

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': '13ea95c9693cceb363b1fef70b372ec06213cb0d144ded8d7457b8ed055798ac'
    })
  };

  //Get countries for shows
  //Returns a list of countries for shows
  getShowsCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.Url + 'countries/shows', this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched countires')),
      catchError(this.handleError<Country[]>('getCoutries', []))
    );
  }

  //Get genres for shows
  //Returns a list of genres for shows
  getShowsGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.Url + 'genres/shows', this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched genres')),
      catchError(this.handleError<Genre[]>('getGenres', []))
    );
  }

  //Get languages for shows
  //Returns a list of languages for shows
  getShowsLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.Url + 'languages/shows', this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched languages')),
      catchError(this.handleError<Language[]>('getLanguages', []))
    );
  }

  //Get trending shows based on user's choice of genre, year, language, or country 
  //Returns a list of trending shows  
  getTrendingShows(filter:string[]) {
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
    console.log(this.Url + 'shows/trending?' + filter.join('&'))
    return this.http.get(this.Url + 'shows/trending?' + filter.join('&'), this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched shows')),
      catchError(this.handleError('getTrendingShows', []))
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

  /** Log messages in the console */
  private log(message: string) {
    console.log(message)
  }
}
