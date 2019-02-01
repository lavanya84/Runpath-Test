import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

export interface imageResp {

}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  getImageAndTitle(){
    return this.http.get<imageResp>('http://jsonplaceholder.typicode.com/photos').pipe(retry(1));
  };
}
