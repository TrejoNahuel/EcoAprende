import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

export const AuthGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);  
    const authService = inject(AuthService);
    const token = authService.getToken(); 
    
    if (token){
        return true;
    } else {
        router.navigate(['/']);
        return false;
    }
};

