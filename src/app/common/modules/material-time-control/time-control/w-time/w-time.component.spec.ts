import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WTimeComponent } from './w-time.component';
import { MaterialTimeControlModule } from '../../material-time-control.module';

describe('WTimeComponent', () => {
  let component: WTimeComponent;
  let fixture: ComponentFixture<WTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ WTimeComponent ],
      imports: [
        MaterialTimeControlModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
