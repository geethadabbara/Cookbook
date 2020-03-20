import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': 'https://localhost:44364',
                'Access-Control-Allow-Credentials': 'true'
            }
        });
        return next.handle(request).pipe(retry(1), catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            } else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            console.warn(errorMessage);
            return throwError(errorMessage);
        }));
    }

}
