import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  private apiUrl = 'https://localhost:7076';

  constructor(private http: HttpClient) {}

  async VerifyOtp(userId: string, factorId: string, passcode: string) {
    // Create an object to represent the request body
    const requestBody = {
      userId: userId,
      factorId: factorId,
      passcode: passcode
    };

    try {
      // Send the request with the request body as JSON
      const response = await this.http.post(this.apiUrl + '/api/Auth/verify/', requestBody).toPromise();
      if (response) {
        return response;
      } else {
        throw new Error('Not Verified');
      }
    } catch (error) {
      // Handle the error as needed
      throw error;
    }
  }
}
