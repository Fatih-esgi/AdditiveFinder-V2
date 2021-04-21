import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAdditifComponent } from './detail-additif.component';

describe('DetailAdditifComponent', () => {
  let component: DetailAdditifComponent;
  let fixture: ComponentFixture<DetailAdditifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAdditifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAdditifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
