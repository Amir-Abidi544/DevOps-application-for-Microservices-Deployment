import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Import environment

export interface Legume {
  id?: number; // L'ID est optionnel car il peut être généré automatiquement
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LegumeService {
  private apiUrl = environment.backendLegumesUrl;

  constructor(private http: HttpClient) {}

  getLegumes(): Observable<Legume[]> {
    return this.http.get<Legume[]>(this.apiUrl);
  }

  addLegume(legume: Legume): Observable<Legume> {
    return this.http.post<Legume>(this.apiUrl, legume);
  }

  updateLegume(id: number, legume: Legume): Observable<Legume> {
    return this.http.put<Legume>(`${this.apiUrl}/${legume.id}`, legume);
  }

  deleteLegume(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}