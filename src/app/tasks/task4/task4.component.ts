import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';

type CharacterStatus = 'alive' | 'dead' | 'unknown';

interface RickAndMortyCharacter {
  id: number;
  name: string;
  status: CharacterStatus;
}

interface ApiResponse {
  results: RickAndMortyCharacter[];
}

@Component({
  selector: 'app-task4',
  template: `
    <label>Name: </label>
    <input
      #search
      (input)="searchSubject.next(search.value)"
      placeholder="Search by name"
    >

    <label>Status: </label>
    <select
      #status
      (change)="statusSubject.next(status.value)"
    >
      <option>-</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>

    <ul>
      <li *ngFor="let character of charactersWithStatus$ | async">
        {{character.name}} - {{character.status}}
      </li>
    </ul>
  `,
  styleUrls: ['./task4.component.scss']
})
export class Task4Component {
  searchSubject = new BehaviorSubject<string>(undefined);
  statusSubject = new BehaviorSubject<string>(undefined);

  characters$ = this.searchSubject.pipe(
    switchMap(searchValue => this.getFilteredCharacters(searchValue))
  );

  charactersDebounced$ = this.searchSubject.pipe(
    debounceTime(500),
    switchMap(searchValue => this.getFilteredCharacters(searchValue))
  );


  charactersWithStatus$ = combineLatest([
    this.searchSubject,
    this.statusSubject,
  ]).pipe(
    debounceTime(500),
    switchMap(([name, status]) => this.getFilteredCharacters2(name, status as CharacterStatus))
  );

  constructor(private http: HttpClient) { }

  getFilteredCharacters(name: string): Observable<RickAndMortyCharacter[]> {
    return this.http
      .get<ApiResponse>('https://rickandmortyapi.com/api/character', {
        params: { name }
      }).pipe(
        map(response => response.results),
        map(characters => characters.slice(0, 10))
      );
  }

  getFilteredCharacters2(name: string, status: CharacterStatus): Observable<RickAndMortyCharacter[]> {
    return this.http.get<ApiResponse>('https://rickandmortyapi.com/api/character', {
      params: status
        ? {
          name: name || '',
          status
        }
        : { name: name || '' }
    }).pipe(
      map(response => response.results),
      map(characters => characters.slice(0, 10)),
      catchError(() => of([]))
    );
  }

}
