import { Component, OnInit, ViewChild } from '@angular/core';
interface People {
  firstname?: string;
  lastname?: string;
  age?: string;
}

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
})
export class TableItemComponent implements OnInit {
  tableData: People[] = [];
  cols: any[] = [];
  
  public addRow(): void {
    this.tableData.push({
      firstname: 'New name',
        lastname: 'new last name',
        age: '40',
    })
  }
  
  ngOnInit() {
    this.cols = [
      { field: 'firstname', header: 'First Name' },
      { field: 'lastname', header: 'Last Name' },
      { field: 'age', header: 'Age' },
    ];
    this.tableData = [
      {
        firstname: 'David',
        lastname: 'ace',
        age: '40',
      },
      {
        firstname: 'AJne',
        lastname: 'west',
        age: '40',
      },
      {
        firstname: 'Mak',
        lastname: 'Lame',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
    ];
  }
}
