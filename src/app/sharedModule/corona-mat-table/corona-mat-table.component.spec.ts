import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaMatTableComponent } from './corona-mat-table.component';

describe('CoronaMatTableComponent', () => {
  let component: CoronaMatTableComponent;
  let fixture: ComponentFixture<CoronaMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
