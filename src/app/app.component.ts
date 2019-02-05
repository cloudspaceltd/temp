import { Component, OnInit } from '@angular/core';
import { DateframeService , OffsetType } from 'src/services/dateframe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url = 'http://eventgraphers.com/register';
  constructor(private _dt: DateframeService) {}
  ngOnInit() {
    const now = new Date();
    console.log(now, this._dt.get_date_time(now));

    // this._dt.get_offset_date(now, OffsetType.Hours).then(res => {
    //   console.log(' offset added ', res);
    //   console.log(' now init ', this._dt.get_date_format(now, 'yyyy-MM-dd'));
    //   const nowplus = this._dt.add_minutes(now, 5);
    //   console.log(' now updated ', now, nowplus);
    // })

  }
}
