import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  opened=true
  @Output() parentComponent:EventEmitter<any>=new EventEmitter()
  form: any;
  formBuilder: any;
  constructor() { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   icon: ['', Validators.required]
    // });
  }
  // onSubmit() {
  //   console.log(this.form.controls.name.value);
  //   console.log(this.form.controls.icon.value);
  // }
  sendData(){
    let item={name:'shivam',email:'shivam@in.com',details:'male'}
    this.parentComponent.emit(item)
  }

  loginUser(event: any){
    const target = event.target
    const username = target.querySelector('#username').value
    const email = target.querySelector('#email').value
    const details = target.querySelector('#details').value
    console.log(username, email, details)

  }

}
