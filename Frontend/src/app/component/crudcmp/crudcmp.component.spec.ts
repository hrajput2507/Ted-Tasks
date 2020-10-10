import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcmpComponent } from './crudcmp.component';

describe('CrudcmpComponent', () => {
  let component: CrudcmpComponent;
  let fixture: ComponentFixture<CrudcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
