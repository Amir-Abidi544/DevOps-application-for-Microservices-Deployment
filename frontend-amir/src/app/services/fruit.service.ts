import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Add this import

export interface Fruit {
  id?: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private apiUrl = environment.backendFruitsUrl; // Use environment variable

  constructor(private http: HttpClient) {}

  getFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.apiUrl);
  }

  addFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.apiUrl, fruit);
  }

  updateFruit(id: number, fruit: Fruit): Observable<Fruit> {
    return this.http.put<Fruit>(`${this.apiUrl}/${fruit.id}`, fruit);
  }

  deleteFruit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}