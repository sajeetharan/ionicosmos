import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoPage } from './new-todo.page';

describe('NewTodoPage', () => {
  let component: NewTodoPage;
  let fixture: ComponentFixture<NewTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
