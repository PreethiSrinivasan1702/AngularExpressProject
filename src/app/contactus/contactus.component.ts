import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackendserviceService } from '../backendservice.service';
 
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactList : any = [];
  
  data : any ;
  expresponse : string = "";
  constructor(private  http:HttpClient , private baccess : BackendserviceService)
  {

  }
  getAllContacts() 
  {
    this.contactList = this.baccess.getAllContacts();
  }
  addContact(udata : any)
  {
    this.expresponse = this.baccess.addContact(udata);
  }
  updateContact(udata: any) {
    this.expresponse = this.baccess.updateContact(udata);
  }
  deleteContact(udata: any) {
    this.expresponse = this.baccess.deleteContact(udata);
  }

}
 