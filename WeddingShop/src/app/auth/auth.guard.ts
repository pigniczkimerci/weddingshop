import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service.ts.service';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) { } 

  canActivate() {
    /*if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;*/
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      alert("Jelentkezz be!")
      //this.router.navigate(["/signup"]);
      return false;
    }
  }
  
}






/*export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) { } 
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
        console.log('CanActivate called');
        let isLoggedIn = this.authService.isAuthenticated();
      if (isLoggedIn){
        return true
      } else {
        this.router.navigate(['/signup']);
      }
    }


    /*canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Promise<boolean> {
      var isAuthenticated = this.authService.getAuthStatus();
      if (!isAuthenticated) {
          this.router.navigate(['/login']);
      }
      return isAuthenticated;**/
 /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(this.authService.isAuthenticated())
    if(this.authService.isAuthenticated()){
      console.log("RRRRRRRRRRRRR")
      return true;
    }else{
      console.log("EGRWF")
      return false;
    }
   /* if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/signup']);
      return false;
    }
    return true;
  
  }*/
  //return this.authService.isAuthenticated() ? true : this.router.navigate(["sigupn"]);


//}
