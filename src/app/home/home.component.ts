import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'reactiveforms';
  userList : any =[];
  data : any;
  expresponse : string = "";
  constructor(private  http:HttpClient , private baccess : BackendserviceService)
  {

  }
  getAllUser() 
  {
    this.userList = this.baccess.getAllUser();
  }
  addUser(udata : any)
  {
    this.expresponse = this.baccess.addUser(udata);
  }
  updateUser(udata: any) {
    this.expresponse = this.baccess.updateUser(udata);
  }
  deleteUser(udata: any) {
    this.expresponse = this.baccess.deleteUser(udata);
  }

}
