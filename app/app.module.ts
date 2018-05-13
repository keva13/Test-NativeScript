import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { MapComponent } from "./components/map/map.component";
import { LocationService } from "./services/location.service";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import * as platform from "platform";
declare var GMSServices: any;


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyDMI49eDdiHb10YGFI31VTB7HtREcj1UZI");
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        MapComponent
    ],
    providers: [
        LocationService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
