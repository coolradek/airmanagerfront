import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompressorComponent } from './edit-compressor.component';

describe('EditCompressorComponent', () => {
  let component: EditCompressorComponent;
  let fixture: ComponentFixture<EditCompressorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompressorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
