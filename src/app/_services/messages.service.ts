import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class MessageService {
    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }

    getAllMessages() {
        return this.http.get<any>(`admin/getAllMessages`)
            .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
    }

    deleteMessage(id: string) {
        return this.http.post<any>(`admin/deleteMessageById`, {
            id,
        })
            .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
    }
}

