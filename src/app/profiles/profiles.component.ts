import { Component } from "../../../node_modules/@angular/core";
import { ProfilesService } from "../services/profiles.service";
import { ProfileModel } from "../domain/profile.model";
import { FormControl } from "../../../node_modules/@angular/forms";

@Component( {
  selector: 'profiles',
  template: require("./profiles.component.html"),
  styles: [require("./profiles.component.scss")]
} )
export class ProfilesComponent {

  profiles: Array<any> = [];
  profileDetails:ProfileModel;
  page: number = 1;
  pageSize: number = 3;
  modal:boolean=false;
  newProfile:ProfileModel=new ProfileModel();
  deleteStatus:any;
  type:string='';
  constructor( private profileService: ProfilesService ) {
    this.getProfiles();
  }

  ngOnInit() {
    this.getProfiles();        
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe( data => {
      this.profiles = data;
    } )
  }

  getProfileDetails( id:number ) {
    this.profileService.getProfileDetails( id ).subscribe( data => {
      this.profileDetails= data;
      this.newProfile=this.profileDetails;      
    },
  error=>{
    this.profileDetails= this.profiles.data.find(element=>element.id==id);
    this.newProfile=this.profileDetails;    
  })
  
  }

  createProfile(){
    if(this.newProfile){
      this.type='update';
    }else{
      this.type='create';
    }
    if(this.type=='create'){
      this.profileService.createProfile(this.newProfile).subscribe(()=>{
        this.getProfiles();
      })
    }else{
      this.updateProfile(this.newProfile,this.newProfile.id)
    }

  }

  deleteProfile(id){
    this.profileService.deleteProfiles( id ).subscribe( (data) => {
       this.getProfiles();
       this.deleteStatus=data;
    } )
  }

  updateProfile(updatedProfile:ProfileModel,id:number){
    this.profileService.updateProfile(updatedProfile,id).subscribe(()=>{
      this.getProfiles();
    })
  }
}
