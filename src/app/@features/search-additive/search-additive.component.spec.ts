import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdditiveComponent } from './search-additive.component';

describe('SearchAdditiveComponent', () => {
  let component: SearchAdditiveComponent;
  let fixture: ComponentFixture<SearchAdditiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAdditiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdditiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
