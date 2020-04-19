import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

export class AuthGuard implements CanActivate {
    
    default = false;

    constructor(
        private router: Router
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.default) return true;
        else {
            this.router.navigate(['/auth'])
        }
    }
}