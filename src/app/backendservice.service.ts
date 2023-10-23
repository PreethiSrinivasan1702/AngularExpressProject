import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  userList : any =[];
  contactList : any = [];
  data : any;
  expresponse : string = "";
  constructor (private http : HttpClient) {
   
  }
  addUser(form : NgForm){
    this.http.post('http://localhost:9901/insertUser', form.value ).subscribe((response) => {
      this.expresponse = response.toString();
    })
    return this.expresponse;
  }
  getAllUser(){
    this.http.get('http://localhost:9901/getAll').subscribe((response) => {
      this.userList = response;
    })
    return this.userList;
  }
  updateUser(form : NgForm){
    this.http.put('http://localhost:9901/updateUser', form.value ).subscribe((response) => {
      this.expresponse = response.toString();
    })
    return this.expresponse;
  }
  deleteUser(form : NgForm){
    this.http.post('http://localhost:9901/deleteUser', form.value ).subscribe((response) => {
      this.expresponse = response.toString();
    })
    return this.expresponse;
  }
 
  
  addContact(form : NgForm){
    this.http.post('http://localhost:9901/insertContact', form.value ).subscribe((response) => {
      this.expresponse = response.toString();
    })
    return this.expresponse;
  }
  getAllContacts(){
    this.http.get('http://localhost:9901/getAllContact').subscribe((response) => {
      this.contactList = response;
    })
    return this.contactList;
  }
  updateContact(form : NgForm){
    this.http.put('http://localhost:9901/updateContact', form.value ).subscribe((response) => {
      this.expresponse = response.toString();
    })
    return this.expresponse;
  }
  deleteContact(form : NgForm){
    this.http.post('http://localhost:9901/deleteContact', form.value ).subscribe((response) => {
      this.expresponse = response.toString();
    })
    return this.expresponse;
  }
  searchContact(form : NgForm){
    this.contactList = [];
    this.http.get('http://localhost:9901/getContactByName', form.value).subscribe((response) => {
      this.contactList = response;
    })
  }

}
