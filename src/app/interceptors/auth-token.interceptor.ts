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
    let modifiedReq = req.clone({
      params: req.params.append('auth', 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MTBiMDE3ZmQ5YjcxMWUwMDljNmMzNmIwNzNiOGE2N2NiNjgyMTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmdyeC02YzM4ZCIsImF1ZCI6Im5ncngtNmMzOGQiLCJhdXRoX3RpbWUiOjE2MjY0NDY5MDQsInVzZXJfaWQiOiJzZDBxUFFyQjZjVG90VzZlbXU0Y2IyTE8wSjAzIiwic3ViIjoic2QwcVBRckI2Y1RvdFc2ZW11NGNiMkxPMEowMyIsImlhdCI6MTYyNjQ0NjkwNCwiZXhwIjoxNjI2NDUwNTA0LCJlbWFpbCI6ImRhdHNpZXVuaGFuMTZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhdHNpZXVuaGFuMTZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.B2QthNTD-oknaNHDXA-5R7w_luUZpSNg1GS6dVOn-uL3h1oBv8sN1lpa0lrwvTsae-hJa3l4GyCcT40V34PFeKwdZY1WzWU1xcG9CoScRSOgBwoW-vTLeW2J7aphdqU1d_9ax63gfFtibbWY2NFJ-iAjMgaNOmD1dYnuWePACeNKenSefMiwrwhd9v1jnr1mGYk-FD92T299lbTz7q3yDsPZSjgQJTIbwC0GF1lsmHyJORpdiTteqEirBbcmVwFkmf_D2jsednvyqDWFLkPTt7sCAzf_R5yzvfA16G0Q0BtghKwHj-fpfbYKA5471-13itOE9b3e-O8U3yf6lN_UwQ'),
    });
    return next.handle(modifiedReq);
  }

}