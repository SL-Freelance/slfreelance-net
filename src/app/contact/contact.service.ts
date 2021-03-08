import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMailMessage, IMailResponse } from 'shared/mail';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public async sendMail(message:IMailMessage): Promise<string> {
    const p = await this.http.post<IMailResponse>(environment.api + "/helloWorld", message).toPromise();
    //  subscribe(p=>
    //   this.message=p.data
    //   );
    return p.status;
  }
}
