import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularMessageBoxService {
  private successMessageSubject = new Subject<string>();
  private errorMessageSubject = new Subject<string>();

  successMessage$ = this.successMessageSubject.asObservable();
  errorMessage$ = this.errorMessageSubject.asObservable();

  SHOW_SUCCESS_MESSAGE(message: string): void {
    this.successMessageSubject.next(message);
  }

  SHOW_ERROR_MESSAGE(message: string): void {
    this.errorMessageSubject.next(message);
  }
}
