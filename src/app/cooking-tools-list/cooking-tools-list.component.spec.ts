import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingToolsListComponent } from './cooking-tools-list.component';

describe('CookingToolsListComponent', () => {
  let component: CookingToolsListComponent;
  let fixture: ComponentFixture<CookingToolsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingToolsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
