// Angular
// -----------------------------------------------------------------------------------------------------
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";

// Models
// -----------------------------------------------------------------------------------------------------

// Rxjs
// -----------------------------------------------------------------------------------------------------
import {Observable} from "rxjs";
import { AuthPayloadRes } from "./models/auth-payload-res.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  timeoutInterval: any;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthPayloadRes> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`;
    const reqBodyPayload = { email, password, returnSecureToken: true };
    return this.http.post<AuthPayloadRes>(url, reqBodyPayload);
  }
}