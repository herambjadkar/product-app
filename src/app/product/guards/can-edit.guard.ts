import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {
  canActivate(
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):any {
    console.log('can activate');
    return window.confirm('can activate')
  }
}
