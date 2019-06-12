import { Component, OnInit } from '@angular/core';
import * as CS from '../cosmos-service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.page.html',
  styleUrls: ['./new-todo.page.scss'],
})
export class NewTodoPage implements OnInit {

  service: CS.CosmosService;

  public thing = { description: "", completed: false, userId: "demo", type:"low" };

  constructor(private location: Location) {
    this.service = CS.CosmosService.getInstance();
  }

  async onSave() {
    await this.service.addItem(this.thing);
    this.location.back();
  }

  ngOnInit() {
  }
}
