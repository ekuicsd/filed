import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ApiUrls } from '../shared/urls';

@Injectable()
export class PaymentService {

  private curruntUserSubject$: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
  readonly curruntUser$ = this.curruntUserSubject$.asObservable();

  constructor(private http: HttpClient) { }

  submitUserData(request: User): Observable<any> {
    this.curruntUserSubject$.next(request);
    return this.http.post(ApiUrls.SUBMIT_USER, request);
  }

}
