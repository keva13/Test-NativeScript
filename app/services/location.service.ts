import { Injectable } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import {Accuracy} from "tns-core-modules/ui/enums";
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationService {

    onUpdateLocation = new Subject<any>();

    constructor(private http: HttpClient) {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
        geolocation.watchLocation(
            (loc) => {
                if (loc) {
                    this.onUpdateLocation.next(loc);
                }
            },
            (e) => {
                console.log(e.message);
            },
            {
                desiredAccuracy: Accuracy.high,
                updateDistance: 5,
                minimumUpdateTime : 5000
            }
        );
    }
    getLocation(cb) {
        geolocation.getCurrentLocation(
            {
                desiredAccuracy: Accuracy.high,
                updateDistance: 5,
                timeout: 2000
            }
        ).
        then((loc) => {
            cb(loc);
        }, (e) => {
            console.log(e.message);
        });
    }

    geoCoding(latitude, longitude):Promise<any> {
        return new Promise((resolve, reject) => {
            let apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDMI49eDdiHb10YGFI31VTB7HtREcj1UZI`;
            this.http.get(apiURL)
                .toPromise()
                .then(
                    (res:any) => {
                        resolve(res.results[0].formatted_address);
                    }
                ).catch((er) => {
                console.log(er)
            });

        });
    }

}