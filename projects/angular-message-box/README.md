# ng-message-box
**ng-message-box** is a versatile and **user-friendly component** that enables seamless integration of **dynamic** and **customizable message boxes** into your **Angular** applications. 

## Whether you need to:
* Display **success notifications**, **error alerts**, **warning messages**, or **informative prompts**, this component has got you covered. 

* With a **straightforward *API*** and a **range of configuration options**, you can easily tailor the appearance and behavior of the message boxes to match your application's design and user experience. The message-box component is highly responsive, ensuring a consistent and engaging messaging system across various devices and screen sizes. Empower your users with clear, concise, and visually appealing messages using the **ng-message-box** component to **enhance overall communication** and **user interaction** in your application.

## Installation :
```js
    npm i ng-message-box
```
## Usage :

## App Module

    import { AngularMessageBoxModule } from  'ng-message-box';
    
    @NgModule({
    	declarations: [
    		AppComponent,
    	],
    	imports: [
    		BrowserModule,
    		AppRoutingModule,
    		AngularMessageBoxModule
    	],
    	providers: [
    	],
    	bootstrap: [AppComponent]
    	})
    export  class  AppModule { }

## Template
    <ng-message-box></ng-message-box>

## Component

    import { Component, AfterViewInit } from  '@angular/core';
    import { AngularMessageBoxService } from  'ng-message-box';
    
    @Component({
    	selector: 'app-root',
    	templateUrl: './app.component.html',
    	styleUrls: ['./app.component.css']
    })
    
    export  class  AppComponent  implements  AfterViewInit {
    
    constructor(private  ms:  AngularMessageBoxService) { }
    
    ngAfterViewInit() {
    	setTimeout(() => { this.ms.SHOW_SUCCESS_MESSAGE("My message..."); }, 2000);
    	}
    }
