import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRecordFormComponent } from './work-record-form.component';

describe('WorkRecordFormComponent', () => {
  let component: WorkRecordFormComponent;
  let fixture: ComponentFixture<WorkRecordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkRecordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
