import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePropBindComponent } from './favorite-prop-bind.component';

describe('FavoritePropBindComponent', () => {
  let component: FavoritePropBindComponent;
  let fixture: ComponentFixture<FavoritePropBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePropBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePropBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
