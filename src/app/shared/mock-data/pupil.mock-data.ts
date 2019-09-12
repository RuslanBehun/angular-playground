import { Pupil } from '../interafaces/pupil.interface';

const PUPILS: Pupil[] = [];

const pupil1: Pupil = {
  id: 1,
  firstName: 'Ruslan',
  lastName: 'Begun',
  yearOfBirth: 1991,
  monthOfBirth: 2,
  dayOfBirth: 20,
  schoolId: 1,
  schoolClassId: 1
};

const pupil2: Pupil = {
  id: 2,
  firstName: 'Anton',
  lastName: 'Schwarzenegger',
  yearOfBirth: 1991,
  monthOfBirth: 8,
  dayOfBirth: 12,
  schoolId: 1,
  schoolClassId: 1
};

const pupil3: Pupil = {
  id: 3,
  firstName: 'Jaroslav',
  lastName: 'Kuzbechkin',
  yearOfBirth: 1971,
  monthOfBirth: 11,
  dayOfBirth: 27,
  schoolId: 1,
  schoolClassId: 2
};

PUPILS.push(pupil1);
PUPILS.push(pupil2);
PUPILS.push(pupil3);
