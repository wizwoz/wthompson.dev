import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LizoxfordComponent } from './lizoxford.component';

describe('LizoxfordComponent', () => {
  let component: LizoxfordComponent;
  let fixture: ComponentFixture<LizoxfordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LizoxfordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LizoxfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
