import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

    @Injectable({
        providedIn: 'root'
    })

    export class callAPI{

      constructor(private _httpclient: HttpClient) {}


        calljson(): Observable<any>{
            return this._httpclient.get("https://jsonplaceholder.typicode.com/posts");
        }

    }
