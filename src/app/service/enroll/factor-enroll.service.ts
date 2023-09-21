import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnrollResponse } from 'src/app/model/EnrollResponse.model';

@Injectable({
  providedIn: 'root'
})
export class FactorEnrollService {
  private apiUrl = 'https://localhost:7076'; // Replace with the actual API URL

  constructor(private httpClient: HttpClient) { }

  enrollUser(userId: string, factorPayload: any): Observable<any> {
    const apiKey = '001_pDKUjUiZN-e4KQJsSQKe0Wn_7w2enkBIntnon2'; // Replace with your API key
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `SSWS ${apiKey}`
    });

    const userFactorsUrl = `${this.apiUrl}/api/Auth/enroll-user-factors`;
    //const factorPayloads = JSON.stringify(factorPayload);

    return this.httpClient.post(userFactorsUrl, userId,factorPayload);
  }
  getStudents(userId: string, factorPayload: any): Observable<EnrollResponse> {
    // Construct the URL with the userId as a query parameter
    const userFactorsUrl = `${this.apiUrl}/api/Auth/enroll-user-factors?userId=${userId}`;

    return this.httpClient.post<any>(userFactorsUrl, factorPayload);
  }

  }

