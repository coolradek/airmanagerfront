import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompressorComponent } from './add-compressor.component';

describe('AddCompressorComponent', () => {
  let component: AddCompressorComponent;
  let fixture: ComponentFixture<AddCompressorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompressorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
