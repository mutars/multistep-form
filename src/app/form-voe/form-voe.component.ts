import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-voe',
  templateUrl: './form-voe.component.html',
  styleUrls: ['./form-voe.component.scss']
})
export class FormVoeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('FormVoeComponent', 'ngOnInit');
  }

}
