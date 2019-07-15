import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-common',
  templateUrl: './form-common.component.html',
  styleUrls: ['./form-common.component.scss']
})
export class FormCommonComponent implements OnInit {


  sharedData;

  constructor() { }

  ngOnInit() {
    console.log('FormCommonComponent', 'ngOnInit');
    this.sharedData.employments.push('new empl');
  }

}
