import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "../../../node_modules/rxjs/Observable";
import 'rxjs/RX';
import { ProfileModel } from "../domain/profile.model";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProfilesService {

  constructor( private http: HttpClient ) { }

  getProfiles(): Observable<ProfileModel[]> {
    return this.http.get<ProfileModel[]>( 'http://dummy.restapiexample.com/api/v1/employees' );
  }

  getProfileDetails( id: number ): Observable<ProfileModel> {
    return this.http.get<ProfileModel>( `http://dummy.restapiexample.com/api/v1/employee/${id}` );
  }

  createProfile(newProfile:ProfileModel){
    return this.http.post<ProfileModel>( 'http://dummy.restapiexample.com/api/v1/create',newProfile ); 
  }

 updateProfile(updatedProfile:ProfileModel,id){
    return this.http.put<ProfileModel>( `http://dummy.restapiexample.com/api/v1/update/${id}`,updatedProfile ); 
  }

  deleteProfiles(id){
    return this.http.delete<ProfileModel>(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
  }
}
