import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   headers: any = new HttpHeaders()
   .set('Content-Type', 'application/json');

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   }),
  // };

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  // signupForm: FormGroup;
  baseUrl: any = 'http://localhost:49786/api';
  signupForm = this.fb.group({
    Fname: ['', [Validators.required]],
    Lname: ['', [Validators.required]],
    Password: ['', [Validators.required]],
    Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
  });
   body: any = [{
     Fname: this.signupForm.get('Fname').value,
     Lname: this.signupForm.get('Lname').value,
     Password: this.signupForm.get('Password').value,
     Email: this.signupForm.get('Email').value
   }];
  ngOnInit() {
  }
  onSubmit(): void {
    this.http.post(this.baseUrl + '/Accounts/Create', this.body, this.headers)
    .subscribe({
       next: arg => console.log(arg),
       error: err => console.log('Client Side error: ' + err),
      complete: () => console.log('Server side request submit')
    });
    // alert(JSON.stringify(this.signupForm.value));
  }

}
