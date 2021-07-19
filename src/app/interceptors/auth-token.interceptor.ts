// Angular
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";

// Rxjs
import {Observable} from "rxjs";
import {exhaustMap, take} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var authString = localStorage.getItem('auth') as string;
    var auth = JSON.parse(authString);

    let modifiedReq = req.clone({
      params: req.params.append('auth', auth.idToken),
    });
    return next.handle(modifiedReq);
  }

}