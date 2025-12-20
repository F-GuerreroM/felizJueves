import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TcgService {
  // Traemos 12 cartas raras de la última expansión (Paradox Rift o similar)
  private apiUrl = 'https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=12';

  constructor(private http: HttpClient) { }

  obtenerCartas() {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
}