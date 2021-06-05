import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsSearchFormComponent } from './shows-search-form.component';

describe('ShowsSearchFormComponent', () => {
  let component: ShowsSearchFormComponent;
  let fixture: ComponentFixture<ShowsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
