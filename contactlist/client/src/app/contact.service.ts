import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Contact} from 'contact'; 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  //retrieve ContactService

  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts');
    //  .pipe(map(res => console.log(res)));
  }

  addContact(newContact: String){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact,{headers:headers})
      .pipe(map(res => console.log(res)));
  }

  deleteContact(id: string){
    return this.http.delete('http://localhost:3000/api/contact/'+id)
       .pipe(map(res => console.log(res)));

  }

}

