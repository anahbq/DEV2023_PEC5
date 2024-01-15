import { Component, Input } from '@angular/core';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { character } from 'src/app/models/characters.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor() {}

  @Input()
  dataSource!: MatTableDataSource<character, MatTableDataSourcePaginator>;

  displayedColumns: string[] = ['_id', 'name', 'films', 'tvShows'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
