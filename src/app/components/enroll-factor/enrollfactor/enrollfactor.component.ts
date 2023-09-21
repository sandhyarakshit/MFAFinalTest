import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactorEnrollService } from 'src/app/service/enroll/factor-enroll.service';

@Component({
  selector: 'app-enrollfactor',
  templateUrl: './enrollfactor.component.html',
  styleUrls: ['./enrollfactor.component.css']
})
export class EnrollfactorComponent implements OnInit{
  userId: string = ''; // Initialize userId with an empty string
  factorPayload: any = {
    factorType: 'token:software:totp',
    provider: 'GOOGLE'
  };
  qrCodeHref: string='';
  constructor(private factorEnrollService: FactorEnrollService, private route: ActivatedRoute, private router: Router,private http :HttpClient) {
    // Use ActivatedRoute to retrieve the userId from the route parameter
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
  }

  ngOnInit(): void {
    console.log(this.userId);


        this.factorEnrollService.getStudents(this.userId, this.factorPayload).subscribe(
          (successResponse) => {
            //console.log("This is response :-",successResponse.embedded.activation._links.qrcode.href).then((successResponse: { json: () => any; }) => successResponse.json());
            const factorId =successResponse;
            //this.router.navigate(['/verify',factorId,this.userId]);
          },
          (error) => {
            console.error("User is already enrolled", error);
          })
          ;
  }
  onContinue ()
  {
    this.factorEnrollService.getStudents(this.userId, this.factorPayload).subscribe(
      (successResponse) => {
        //console.log("This is response :-",successResponse.embedded.activation._links.qrcode.href).then((successResponse: { json: () => any; }) => successResponse.json());
        const factorId =successResponse.id;
        console.log(factorId);
        this.router.navigate(['/verify',this.userId,factorId]);

      });

  }


}
