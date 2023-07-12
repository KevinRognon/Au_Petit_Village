import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgAjoutComponent } from './msg-ajout.component';

describe('MsgAjoutComponent', () => {
  let component: MsgAjoutComponent;
  let fixture: ComponentFixture<MsgAjoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgAjoutComponent]
    });
    fixture = TestBed.createComponent(MsgAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
