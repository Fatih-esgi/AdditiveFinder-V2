import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdditivesComponent } from './liste-additives.component';

describe('ListeAdditivesComponent', () => {
  let component: ListeAdditivesComponent;
  let fixture: ComponentFixture<ListeAdditivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdditivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdditivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
