import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
export interface User {
  type: string,
  company: string,
  blog: string,
  location: string,
  email: string,
  bio: string,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  name: string,
  login: string,
  avatar_url: string
}



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class BuscaLoginService {

  constructor(private http: HttpClient) { } 

  filterUser(userFilter){
    return this.http.get('https://api.github.com/users/' + userFilter)
                        .pipe(catchError((err) => {
                          return Observable.throw(err)
                        }))
  }

  getRepos(user) {
    return this.http.get('https://api.github.com/users/' + user + '/repos')
                        .pipe(catchError((error) => {
                          return Observable.throw(error)
                        }))
  }

  getStars(user) {
    return this.http.get('https://api.github.com/users/' + user + '/starred');
  }

}
