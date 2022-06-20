import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    name: "",
    address: "",
    email: ""
  });
  onSubmit(){
    console.log("Thank you for contacting us!");
    window.alert("We are looking forward to working with you!")
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
