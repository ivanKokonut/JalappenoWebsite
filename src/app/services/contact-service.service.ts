import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ContactInterface } from '../interfaces/contact-interface';
import 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  contactoURL = 'https://jalappeno-8502d.firebaseio.com/contacto.json';

    constructor( private http: Http ) { }

    nuevoContacto( contacto ) {
      const body = JSON.stringify( contacto );
      const headers = new Headers({
        'Content-Type' : 'application/json'
      });
      console.log(body);
      return this.http.post( this.contactoURL, body, { headers } )
      .map( res => {
        console.log(res.json());
        return res.json();
      });
    }
}
