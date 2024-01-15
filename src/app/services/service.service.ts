import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCharacters, charDisney } from '../models/characters.interface';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<ListCharacters> {
    return this.http.get<ListCharacters>(
      'https://api.disneyapi.dev/character?page=5'
    );
  }
  getCharacterById(id: String): Observable<charDisney> {
    return this.http.get<charDisney>(
      'https://api.disneyapi.dev/character/' + id
    );
  }
}
