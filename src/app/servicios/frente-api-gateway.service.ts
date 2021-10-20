import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FrenteApiGatewayService {
  constructor(private http: HttpClient) {}

  getTest(): Observable<any> {
    return this.http.get(
      'https://3myznvvau4.execute-api.sa-east-1.amazonaws.com/dev/',
      { responseType: 'text' }
    );
  }
}
