import { Pupil } from '@interfaces/pupil.interface';

export class PupilClass {
  public fullName(pupil: Pupil): string {
    return pupil.firstName + ' ' + pupil.lastName;
  }
}
