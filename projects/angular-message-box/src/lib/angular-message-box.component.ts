import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularMessageBoxService } from './angular-message-box.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ng-message-box',
  template: `
    <!-- MESSAGE BOX -->
    <div #messageBox class="message-box" *ngIf="successMessage">
    <div class="icon">
      &#x2709;
    </div>

    <div class="content">
        <h2 class="message-title">
            Message
        </h2>

        <p class="message">
            {{ successMessage }}
        </p>
    </div>
    </div>

    <!-- MESSAGE BOX -->
    <div #messageBox class="message-box error" *ngIf="errorMessage">
    <div class="icon">
      &#x2709;
    </div>

    <div class="content">
        <h2 class="message-title">
            Message
        </h2>

        <p class="message">
            {{ errorMessage }}
        </p>
    </div>
    </div>
  `,
  styleUrls: ['angular-message-box.component.css']
})
export class AngularMessageBoxComponent implements OnInit {
  constructor(private messageBoxService: AngularMessageBoxService) { }

  isVisible: boolean = false;
  successMessage!: string;
  errorMessage!: string;
  successMessageSubscription!: Subscription;
  errorMessageSubscription!: Subscription;

  // SELECT messageBox ELEMENT USING THE TEMPLATE
  // REFERENCE VARIABLE #messageBox
  @ViewChild("messageBox", { static: false })
  messageBox!: ElementRef;

  ngOnInit(): void {
    // SUBSCRIBE ON APP INITIALIZATION
    // SUCCESS
    this.successMessageSubscription = this.messageBoxService.successMessage$.subscribe((message: string) => {
      this.successMessage = message;
      this.showMessageBox();
      setTimeout(() => {
        this.resetMessageBox();
      }, 4000);
    });

    // ERROR 
    this.errorMessageSubscription = this.messageBoxService.errorMessage$.subscribe((message: string) => {
      this.errorMessage = message;
      this.showMessageBox();
      setTimeout(() => {
        this.resetMessageBox();
      }, 4000);
    });
  }

  showMessageBox(): void {
    if (this.messageBox) {
      this.isVisible = true;
    }
  }

  resetMessageBox(): void {
    this.successMessage = "";
    this.errorMessage = "";
    this.isVisible = false;
  }

  // HANDLE SUBSCRIPTIONS
  ngOnDestroy(): void {
    this.successMessageSubscription.unsubscribe();
    this.errorMessageSubscription.unsubscribe();
  }

}
