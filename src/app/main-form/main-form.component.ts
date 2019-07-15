import {Component, OnInit, ViewChild} from '@angular/core';
import {FormCommonComponent} from '../form-common/form-common.component';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  @ViewChild(FormCommonComponent) child1: FormCommonComponent;

  sharedData =  {
    blabla: 'bla',
    employments: []
  };

  constructor() { }

  ngOnInit() {
    console.log('MainFormComponent', 'oninit');
  }

  onActivate($event: any) {
    $event.sharedData = this.sharedData;
  }
}
