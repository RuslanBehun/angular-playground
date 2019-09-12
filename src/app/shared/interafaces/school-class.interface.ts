import {School} from './school.interface';

export interface SchoolClass {
  id: number;
  classLetter: string;
  classYear: number;
  schoolId: School['id'];
}

