import { Component, OnInit } from '@angular/core';
import { Pupil } from '@interfaces/pupil.interface';
import { SchoolClass } from '@interfaces/school-class.interface';
import { SchoolClassClass } from '@shared/classes/school-class.class';
import { SCHOOL_CLASSES } from '@mock-data/school-class.mock-data';
import { PUPILS } from '@mock-data/pupil.mock-data';

@Component({
  selector: 'apg-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.scss']
})
export class SchoolClassComponent extends SchoolClassClass implements OnInit {
  public schoolClasses: SchoolClass[] = SCHOOL_CLASSES;
  public pupils: Pupil[] = PUPILS;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
