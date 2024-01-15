import { Component } from '@angular/core';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { ListCharacters, character } from 'src/app/models/characters.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
})
export class ComponentListComponent {
  constructor(private disneyService: ServiceService) {}

  characters: character[] = [];
  dataSource!: MatTableDataSource<character, MatTableDataSourcePaginator>;

  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.disneyService.getAllCharacters().subscribe((data) => {
      let list: ListCharacters = data;
      this.characters = list.data;
      this.dataSource = new MatTableDataSource(this.characters);
      this.loading = false;
    });
  }
}
