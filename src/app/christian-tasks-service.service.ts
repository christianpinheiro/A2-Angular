import { Injectable } from '@angular/core';

interface Tarefas {
  t: string;
}

@Injectable()
export class ChristianTasksServiceService {
  t: string;
  list: Array<Tarefas> = [];
  meuStorage = localStorage;
  cont = 0;

  add(t: string) {
    this.list.push({ t });
    this.meuStorage.setItem('list', this.t);
    this.cont++;
  }

  remove(index: number) {
    this.list.splice(index, 1);
    this.meuStorage.removeItem('list');
    this.cont--;
  }

  getList() {
    return this.list;
  }

  constructor() {}
}
