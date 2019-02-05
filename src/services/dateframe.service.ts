import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

export enum OffsetType {
  Days,
  Hours,
  Minutes
}

@Injectable({
  providedIn: 'root'
})
export class DateframeService {
  constructor(private _datepipe: DatePipe) {}

  add_days(date: Date, days: number) {
    const temp_date = new Date(date);
    return new Date(temp_date.setDate(temp_date.getDate() + days));
  }

  add_hours(date: Date, hours: number) {
    const temp_date = new Date(date);
    return new Date(temp_date.setHours(temp_date.getHours() + hours));
  }

  add_minutes(date: Date, minutes: number) {
    const temp_date = new Date(date);
    return new Date(temp_date.setMinutes(temp_date.getMinutes() + minutes));
  }

  get_date_format(date: Date, format: string) {
    const temp_date = new Date(date);
    return this._datepipe.transform(temp_date, format);
  }

  get_offset_date(date: Date, type?: OffsetType, offset?: number) {
    const temp_date = new Date(date);
    // tslint:disable-next-line:no-unused-expression
    return new Promise((resolve, reject) => {
      // code to find the excat offset type and value for temp_date ;

      switch (type) {
        case OffsetType.Hours:
          resolve(this.add_hours(temp_date, offset));

          break;
        case OffsetType.Minutes:
          resolve(this.add_minutes(temp_date, offset));

          break;
        case OffsetType.Days:
          resolve(this.add_days(temp_date, offset));

          break;

        default:
          break;
      }
    });
  }

  is_BOD(date: Date) {
    const temp_date = new Date(date);

    return new Promise((resolve, reject) => {
      // code to check if temp_date is Blocked out date

      resolve(true); // or false
    });
  }

  in_slot(date: Date) {
    const temp_date = new Date(date);

    return new Promise((resolve, reject) => {
      // code to check if date and time of temp_date within the active slot

      resolve(true); // or false
    });
  }

  get_first_active_slot(date: Date) {
    const temp_date = new Date(date);

    return new Promise((resolve, reject) => {
      // code to get  first active slot on date and time of temp_date

      resolve(); // should return the selected slot time
    });
  }

  get_date_time(date: Date) {
    const temp_date = new Date(date);

    return Object.assign({}, {
      day_name: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][temp_date.getDay()],
      year: temp_date.getFullYear(),
      month: temp_date.getMonth() + 1,
      day: temp_date.getDate(),
      hour: temp_date.getHours(),
      minute: temp_date.getMinutes(),
      am_pm: this.get_date_format(temp_date, 'a'),
      date: this.get_date_format(temp_date, 'yyyy-MM-dd'),
      time: this.get_date_format(temp_date, 'hh:mm a')
    });

  }
}
