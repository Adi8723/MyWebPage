import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder} from '@angular/forms';
import { ContactModel } from '../contact-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{

  contact = {
    name :  '',
    email: '',
    message:'',

  }

  post = {
    endpost: 'https://adiletsharshekeev.de/web/send_mail.php',
    body:(payload: any)=> JSON.stringify(payload),
    options:{
      headers:{
        'Content-Type': 'text/plain',
        responseType: 'text'
      }
    }
  }

  
 
  
 
  constructor(private http: HttpClient, private formbuilder: FormBuilder) {
    
  }

  ngOnInit(): void {

  }
  
// onSubmit(loginForm:NgForm){
//     console.warn(loginForm);
    
//     this.loginForm.reset();
//   }



onSubmit(ngForm){
   if (ngForm.valid && ngForm.submitted) {
      this.http
      .post(this.post.endpost, this.post.body(this.contact))
      .subscribe({
         next: (response) => console.log(response),
         error: (error) => console.error(error),
         complete: () => console.info('send post complete'),
      });
      alert('Thanks for the message! I`ll get back to you soon!');
   }
  
  console.warn(ngForm);
  
    ngForm.reset();
  }
 




  // get name(){
  //   return this.ngForm.get('name')
  // }

  // get email(){
  //   return this.loginForm.get('email')
  // }

  // get message(){
  //   return this.loginForm.get('message')
  // } 
}