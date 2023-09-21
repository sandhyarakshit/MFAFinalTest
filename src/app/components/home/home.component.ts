import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  otp!: string;
  userId!: "" ;
  factorId!: "";
  errorResponseMessage: string | undefined;

  constructor(private router: Router, private verifyservice: VerifyService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.factorId=params['factorId']
  });
}
  ngOnInit(): void {

  }
  async onSubmitOtp() {
    try {
      const loginResponse = await this.verifyservice.VerifyOtp(this.userId,this.factorId,this.otp);
      // Handle the loginResponse or any other logic here
    } catch (error) {
      // Handle error
      if (error instanceof Error) {
        // If it's a standard JavaScript Error object
        this.errorResponseMessage = error.message;
      } else {
        // Handle other types of errors here
        this.errorResponseMessage = 'An error occurred.';
      }
    }
  }

}
