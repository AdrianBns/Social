import { Persona } from 'src/shared/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()

export class UserServiceService {

  URL_BASE = 'http://localhost:3000/personas';

  constructor(private http: HttpClient) {
   }

   getUsers(): Observable<Persona[]>{
     return this.http.get<Persona[]>(this.URL_BASE)
   }
   getUser(id: number): Observable<Persona>{
     const url = `${this.URL_BASE}/${id}`;
     return this.http.get<Persona>(url)
   }
   sendUserMsg(persona: Persona): Observable<Persona>{
    const url = `${this.URL_BASE}/${persona.id}`;
    return this.http.put<Persona>(url, persona, httpOptions)
   }

}
