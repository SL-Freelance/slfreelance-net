import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  message:string="";
  
  contactForm:FormGroup;

  constructor(private service:ContactService,private fb: FormBuilder) {
    this.contactForm=this.fb.group({
      name:new FormControl('')
    });


   }

  ngOnInit(): void {
    
  }

  onSubmit = ()=>this
        .service
        .sendMail({name:"name", email:"email", message:"test",phone:"phone"})
        .then(p=>this.message=p);

}
