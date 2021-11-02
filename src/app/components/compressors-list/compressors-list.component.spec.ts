import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressorsListComponent } from './compressors-list.component';

describe('CompressorsListComponent', () => {
  let component: CompressorsListComponent;
  let fixture: ComponentFixture<CompressorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompressorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
