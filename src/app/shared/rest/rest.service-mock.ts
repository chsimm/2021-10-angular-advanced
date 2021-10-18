import { Observable, of } from 'rxjs';

export class RestServiceMock {
  get<T>(_url: string, _options?: any): Observable<T> {
    return of(null);
  }

  post<T>(_url: string, body: any, _options?: any): Observable<T> {
    return of(body);
  }

  put<T>(_url: string, body: any, _options?: any): Observable<T> {
    return of(body);
  }

  delete<T>(_url: string, _options?: any): Observable<T> {
    return of(null);
  }
}
