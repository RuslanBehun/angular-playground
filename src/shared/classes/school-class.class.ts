import { SchoolClass } from '@interfaces/school-class.interface';

export class SchoolClassClass {
  constructor() {}

  public schoolClassName(schoolClass: SchoolClass): string {
    return schoolClass.classYear + schoolClass.classLetter;
  }
}
