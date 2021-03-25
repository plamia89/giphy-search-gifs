import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({providedIn: 'root'})
export class GiphyService {
    private giphyApiKey = environment.apiKey;
   
  constructor(private http: HttpClient) {}

  searchGifs(param?: string): Observable<string[]> {
    let queryParam = 'hi';

    if( param.length > 0 ) {
        queryParam = param;
    }
    return this.http
      .get(
        `http://api.giphy.com/v1/gifs/search?api_key=${this.giphyApiKey}&limit=30&q=${queryParam}`
      )
      .pipe(
        map((response) =>
          this.mapGifData(response['data']),
        ),
        catchError(error => {
          console.log('Error fetching data! Error: ', error);
          return of([]);
        })
      );
  }

  private mapGifData( reponseData: any[] ): string[] {
    const mapData = [];
    reponseData.forEach( item => {
        mapData.push(item.images.original.url);
    });
    return mapData;
  }
}
