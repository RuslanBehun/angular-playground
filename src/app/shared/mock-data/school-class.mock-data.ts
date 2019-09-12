import { SchoolClass } from '../interafaces/school-class.interface';

const SCHOOL_CLASSES: SchoolClass[] = [];

const schoolClass1: SchoolClass = {
  id: 1,
  classLetter: 'A',
  classYear: 10,
  schoolId: 1
};

const schoolClass2: SchoolClass = {
  id: 2,
  classLetter: 'B',
  classYear: 8,
  schoolId: 1
};

SCHOOL_CLASSES.push(schoolClass1);
SCHOOL_CLASSES.push(schoolClass2);
