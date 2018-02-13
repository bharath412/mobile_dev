import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

    
@Injectable()
export class ActivityService {
     
    constructor(
        private http: Http 
    ) {

    
    }
    
    public getActivities(): Observable<any[]> {
        
        return this.http.get('http://staging.srishtibiz.com:8000/rest/UserService/users')
            .map(res => <any[]>res.json())

            
    }
   
}

