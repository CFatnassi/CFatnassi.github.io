import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    loggedIn: boolean=false;
   // [x: string]: any;
    constructor(private http: HttpClient,private router: Router) {
    }

    getUserDetails() {
        const userJson = localStorage.getItem('userInfo');
        return userJson ? JSON.parse(userJson ): null;
    }
    
    setDataInLocalStorage(variableName: string, data: string) {
        localStorage.setItem(variableName, data);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    clearStorage() {
        localStorage.clear();
    }
  
    loginUser(username: string,password: string){
        this.http.get<any>("http://localhost:3000/signUpUsers")
            .subscribe({next : (res)=>{
              
              if(res.email === username && res.password === password){
                alert("you logged in successfully!");
                this.loggedIn=true;
                console.log("loggedin?",this.loggedIn)
                this.router.navigate(['Planning'])
              }else{
                alert("user not found! please create an account first...");
                //this['loginForm'].reset();
              } 
            },error :(err)=>{
              alert("Something went wrong!")
            }
          })
      }    
}