import { Component } from '@angular/core';
import {HttpClient,HttpHeaders, HttpResponse} from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-emailsender',
  templateUrl: './emailsender.component.html',
  styleUrls: ['./emailsender.component.css']
})
export class EmailsenderComponent {

constructor(private http:HttpClient,private formBuilder: FormBuilder) {}
onClickSubmit(data: { name:  string; email: string; }) {
      const name = data.name;
      const email = data.email;
  this.http.post<any>('http://localhost:8080/user/email', {//email validation
    name: name,
    email: email
  }).subscribe(data => {
    console.log(data);
     alert(data.message);





})
}
}