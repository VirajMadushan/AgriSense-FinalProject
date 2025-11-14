import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliyzeHistoryComponent } from './analiyze-history.component';

describe('AnaliyzeHistoryComponent', () => {
  let component: AnaliyzeHistoryComponent;
  let fixture: ComponentFixture<AnaliyzeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliyzeHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliyzeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
