import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlHandlingStrategy,
	UrlTree
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
	model: any;
	constructor(
		private auth: AuthService,
		private router: Router) { }
	canActivate() {
		
    if(this.auth.loggedIn){
		return true 
	}
	else{
		alert ("you have not logged in!")
		this.router.navigate(['Login']);
		return false}
	}
}
