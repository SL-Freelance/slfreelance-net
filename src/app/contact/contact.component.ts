import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  message:string="";
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.post<any>(environment.api + "/helloWorld",{
      message:"hello world"
    }).subscribe(p=>
      this.message=p.data
      );
  }

}
