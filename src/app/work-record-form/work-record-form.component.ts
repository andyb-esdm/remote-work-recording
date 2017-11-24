import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkRecordService } from '../work-record.service';
import { WorkRecord } from '../work-record';

@Component({
  selector: 'rwr-work-record-form',
  templateUrl: './work-record-form.component.html',
  styleUrls: ['./work-record-form.component.css']
})
export class WorkRecordFormComponent implements OnInit {

  workRecord: WorkRecord;
  validationMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private workRecordService: WorkRecordService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = +params['id'];
        this.workRecordService.getWorkRecord(id).subscribe(workRecord => {
          // this.workRecord = workRecord;
          // need to copy because if user navigates away from form in invalid state, the original object would stil pick up the changes!
          this.workRecord = Object.assign({}, workRecord);
        });
      } else {
        this.workRecord = { id: 0, description: null };
      }
    });
  }

  onSubmit() {
    if (this.workRecordService.save(this.workRecord)) {
      this.router.navigate(['/work-record-list']);
    } else {
      this.validationMessage = 'There was an error saving the record';
    }
  }

}
