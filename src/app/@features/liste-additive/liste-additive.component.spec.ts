import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdditiveComponent } from './liste-additive.component';

describe('ListeAdditiveComponent', () => {
  let component: ListeAdditiveComponent;
  let fixture: ComponentFixture<ListeAdditiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdditiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdditiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
