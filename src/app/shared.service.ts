import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'https://what-to-eat-api-bh.herokuapp.com';
  readonly PhotoUrl = 'https://what-to-eat-api-bh.herokuapp.com/media/';

  constructor(private http:HttpClient) { }


// Routes for Recipes 

  getRecList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/recipes/');
  }

  addRecipe(val:any){
    return this.http.post(this.APIUrl + '/recipes/',val);
  }

  updateRecipe(val:any){
    return this.http.put(this.APIUrl + '/recipes/',val)
  }

  deleteRecipe(val:any){
    return this.http.delete(this.APIUrl + '/recipes/'+ val)
  }


// Routes for Members

  getMemList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/member/');
  }

  addMember(val:any){
    return this.http.post(this.APIUrl + '/member/',val);
  }

  updateMember(val:any){
    return this.http.put(this.APIUrl + '/member/',val)
  }

  deleteMember(val:any){
    return this.http.delete(this.APIUrl + '/member/'+ val)
  }


// Routes for Images

  UploadPhoto(val:any){
    return this.http.post(this.PhotoUrl +'/SaveFile/',val);
  }

// Routes for getting all Recipes

  getAllRecipes():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/Recipes/')
  }

}
