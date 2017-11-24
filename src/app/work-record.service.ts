import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WorkRecord } from './work-record';
import { Observable } from 'rxjs/Observable';

const workRecords: WorkRecord[] = [
  { id: 1, description: 'work record 1' },
  { id: 2, description: 'work record 2' },
  { id: 3, description: 'work record 3' },
  { id: 4, description: 'work record 4' }
];

@Injectable()
export class WorkRecordService {

  private workRecords = new BehaviorSubject(workRecords);

  constructor() { }

  getWorkRecords(): Observable<WorkRecord[]> {
    return this.workRecords;
  }

  getWorkRecord(id: number): Observable<WorkRecord> {
    return this.workRecords.map(wr => wr.find(r => r.id === id));
  }

  save(workRecord: WorkRecord): boolean {
    // TODO: find out about typescript try/catch
    try {
      const foundRecord = workRecords.find(wr => wr.id === workRecord.id);
      if (foundRecord) {
        foundRecord.description = workRecord.description;
      } else {
        const newid = workRecords.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;
        workRecord.id = newid;
        workRecords.push(workRecord);
      }
      return true;
    } catch (e) {
      return false;
    }
  }
}
