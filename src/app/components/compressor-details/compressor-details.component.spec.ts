import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressorDetailsComponent } from './compressor-details.component';

describe('CompressorDetailsComponent', () => {
  let component: CompressorDetailsComponent;
  let fixture: ComponentFixture<CompressorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompressorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
