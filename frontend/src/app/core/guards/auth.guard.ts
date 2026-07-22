import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

export const AuthGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);  
    const authService = inject(AuthService);
    const userIsLoggedIn = authService.isLoggedIn(); 
    
    if (userIsLoggedIn){
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
};

