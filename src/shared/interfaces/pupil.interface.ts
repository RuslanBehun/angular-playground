import { School } from './school.interface';
import { SchoolClass } from './school-class.interface';

export interface Pupil {
  id: number;
  firstName: string;
  lastName: string;
  yearOfBirth: number;
  monthOfBirth: number;
  dayOfBirth: number;
  schoolId: School['id'];
  schoolClassId: SchoolClass['id'];
}
