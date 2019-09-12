import { SchoolClass } from '@interfaces/school-class.interface';

export class School {
  id: number;
  name: string;
  address: string;
  number?: number;
  specialty?: string;
}

export function schoolClassName(schoolClass: SchoolClass): string {
  return schoolClass.classYear + schoolClass.classLetter;
}
