import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularMessageBoxService {

  // CREATE NEW SUBJECT INSTANCE
  private successMessageSubject = new Subject<string>();
  private errorMessageSubject = new Subject<string>();

  // CREATE A NEW Observable WITH successMessageSubject &
  // errorMessageSubject AS THE SOURCE
  successMessage$ = this.successMessageSubject.asObservable();
  errorMessage$ = this.errorMessageSubject.asObservable();

  /* METHODS FOR DISPLAYING MESSAGES */
  SHOW_SUCCESS_MESSAGE(message: string): void {
    this.successMessageSubject.next(message);
  }

  SHOW_ERROR_MESSAGE(message: string): void {
    this.errorMessageSubject.next(message);
  }
}
