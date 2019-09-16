import { Component, Input, OnInit } from '@angular/core';
import { Pupil } from '@interfaces/pupil.interface';
import { PupilClass } from '@shared/classes/pupil.class';

@Component({
  selector: 'apg-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.scss']
})
export class PupilsComponent extends PupilClass implements OnInit {
  @Input() classPupils: Pupil[];
  // tslint:disable-next-line:no-input-rename
  @Input('id') schoolClassId: number;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
