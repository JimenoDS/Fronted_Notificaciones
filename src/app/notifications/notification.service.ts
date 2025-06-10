import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  // CORRECCIÓN DEL ERROR DE TIPEO (sin el '1'):
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  sendNotification(message: string, type: string): Observable<any> {
    const payload = {
      message,
      type,
      created_at: new Date().toISOString()
    };
    return this.http.post(`${this.apiUrl}/notifications`, payload); 
  }

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/notifications`);
  }
}