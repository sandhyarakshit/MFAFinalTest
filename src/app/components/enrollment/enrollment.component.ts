import { Component, OnInit } from '@angular/core';
import { FactorEnrollService } from 'src/app/service/enroll/factor-enroll.service';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enroll-factor',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollFactorComponent implements OnInit {
  userId: string = ''; // Initialize userId with an empty string
  factorPayload: any = {
    factorType: 'token:software:totp',
    provider: 'GOOGLE'
  };

  constructor(private factorEnrollService: FactorEnrollService, private route: ActivatedRoute,private http: HttpClient) {
    // Use ActivatedRoute to retrieve the userId from the route parameter
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
  }

  ngOnInit(): void {

    // Now you can use this.userId in your component
  }


  enrollUser(): void {
    this.factorEnrollService.enrollUser(this.userId, this.factorPayload).subscribe(
      (response) => {
        // Handle success response here
        console.log(this.userId);
        console.log('Enrollment successful:', response);
      },
      (error) => {
        // Handle error response here
        console.error('Enrollment failed:', error);
      }
    );
  }
}
