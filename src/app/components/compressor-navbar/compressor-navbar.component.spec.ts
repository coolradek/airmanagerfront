import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressorNavbarComponent } from './compressor-navbar.component';

describe('CompressorNavbarComponent', () => {
  let component: CompressorNavbarComponent;
  let fixture: ComponentFixture<CompressorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompressorNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
