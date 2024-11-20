import { CanActivateFn, Router } from '@angular/router';

import { AuthServiceService  } from './auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem('user')){
    return true
  }
  else{
    let router=new Router()
   router.navigateByUrl('login')
   return false
  }


};
