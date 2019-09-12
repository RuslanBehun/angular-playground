import { Component, Input, OnInit } from '@angular/core';
import { Pupil } from '@interfaces/pupil.interface';
import { PupilClass } from '@shared/classes/pupil.class';

@Component({
  selector: 'apg-pupil',
  templateUrl: './pupil.component.html',
  styleUrls: ['./pupil.component.scss']
})
export class PupilComponent extends PupilClass implements OnInit {
  @Input() classPupils: Pupil[];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
