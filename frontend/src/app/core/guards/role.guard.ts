import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

export const RoleGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    const userRole = authService.getUserRole(); 
    const expectedRole = route.data['role'];

    if (userRole === expectedRole){
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }

}