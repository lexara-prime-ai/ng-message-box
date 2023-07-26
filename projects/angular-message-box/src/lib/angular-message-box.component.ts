import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ng-message-box',
  template: `
     <style>
          .message-box {
          display: block;
          display: flex;
          align-items: center;
          gap: 1rem;
          position: fixed;
          top: 80px;
          z-index: 20;
          background: var(--amber);
          color: var(--white);
          width: 250px;
          padding: .8rem;
          border-radius: 0px 12px 12px 0px;
          box-shadow: 0 2rem 2rem 0 rgba(0, 0, 0, .2);
          animation: slide-in-left 1s;
          transition: .4s all ease;
          pointer-events: none;
          white-space: normal;
      }

      .content {
          border-left: 1px solid var(--white);
          padding-left: 1rem;
      }

      .message-title {
          font-size: 1rem;
      }

      .message {
          font-weight: 700;
          font-size: .7rem;
      }

      /* VISIBLE STATES */
      .visible {
          animation: slide-in-left 1s;
      }

      .slide-out {
          animation: slide-out-left 2s;
      }

      .hidden {
          transform: scale(0);
      }


      /* ANIMATIONS */
      /**
      * ----------------------------------------
      * animation slide-in-left
      * ----------------------------------------
      */
      @-webkit-keyframes slide-in-left {
          0% {
              -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
              opacity: 0;
          }

          100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
              opacity: 1;
          }
      }

      @keyframes slide-in-left {
          0% {
              -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
              opacity: 0;
          }

          100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
              opacity: 1;
          }
      }

      /**
      * ----------------------------------------
      * animation slide-out-left
      * ----------------------------------------
      */
      @-webkit-keyframes slide-out-left {
          0% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
              opacity: 1;
          }

          100% {
              -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
              opacity: 0;
          }
      }

      @keyframes slide-out-left {
          0% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
              opacity: 1;
          }

          100% {
              -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
              opacity: 0;
          }
    }
    </style>
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
  styles: [
  ]
})
export class AngularMessageBoxComponent {
  successMessage$: any;
  errorMessage$: any;
  constructor(private messageBoxService: AngularMessageBoxComponent) { }

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
