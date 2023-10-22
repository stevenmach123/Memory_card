import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve,  RouterStateSnapshot,Router, ActivatedRoute } from '@angular/router';
import { Observable, of,EMPTY } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import {myservice} from "./myservice";
import {dash} from "./classes"
@Injectable()
export class DashResolverService implements Resolve<dash> {
    constructor(private ser:myservice, private router:Router ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): dash | Observable<dash> | Promise<dash> {
       
        let name:string = route.paramMap.get("name");
        
        return this.ser.findDash(name).pipe(
            mergeMap(item=>{
                if(item) return of(item)
                else{
                   
                    this.router.navigate(["..",{outlet:{mydash:["mydash"]}}] );
                    console.log("hi")
                    return EMPTY 
                }    
                
            })
        
        )

    }
}