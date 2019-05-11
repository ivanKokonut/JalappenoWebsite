import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElChavoComponent } from './el-chavo.component';

describe('ElChavoComponent', () => {
  let component: ElChavoComponent;
  let fixture: ComponentFixture<ElChavoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElChavoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElChavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
