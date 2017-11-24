import { Component, OnInit } from '@angular/core';

import { WorkRecordService } from '../work-record.service';
import { WorkRecord } from '../work-record';

@Component({
  selector: 'rwr-work-record-list',
  templateUrl: './work-record-list.component.html',
  styleUrls: ['./work-record-list.component.css']
})
export class WorkRecordListComponent implements OnInit {
  workRecords: WorkRecord[];

  constructor(private workRecordService: WorkRecordService) { }

  ngOnInit() {
    this.workRecordService.getWorkRecords().subscribe(workRecords => {
      this.workRecords = workRecords;
    });
  }

}
