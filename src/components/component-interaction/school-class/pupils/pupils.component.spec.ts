import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { by, element } from 'protractor';

import { PupilsComponent } from './pupils.component';

describe('PupilComponent', () => {
  let component: PupilsComponent;
  let fixture: ComponentFixture<PupilsComponent>;

  const pupilsNames = ['Ruslan', 'Anton'];
  const shoolClasses = ['10A', '8B'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display specific pupils for specific school', () => {
    // const pupils = element.all(by.tagName('li')).getText();
    // const schools = element.all(by.className('mdl-tabs__tab')).getText();
  });
});
