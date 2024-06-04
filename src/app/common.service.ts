import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private hc:HttpClient) { }

  GenerateImage(Parms:any):Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer {{OpenAIkEY}}'
    });

    const data = {
      prompt: Parms,
      n:1,
      size: '1024x1024'
    };
    return this.hc.post('https://api.openai.com/v1/images/generations', data, {headers})
 }
}
