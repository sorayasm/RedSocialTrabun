import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}


  /* if (this.auth.login) {
      return true;
    }
      return this.user.onLogin().pipe(map(res => {
        if (res.status) {
          this.auth.signup(true);
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }));*/
