import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Marker, Position } from 'nativescript-google-maps-sdk';
import * as imageSource from "tns-core-modules/image-source";
import { LocationService } from '../../services/location.service';
import {Image} from "tns-core-modules/ui/image";
import * as fs from "tns-core-modules/file-system";

@Component({
    selector: "app-map",
    moduleId: module.id,
    templateUrl: "./map.component.html",
})
export class MapComponent implements OnInit {
    marker;
    mapView;
    loc = {latitude: 15.437819409392789, longitude: 120.94888133764268};
    constructor(private _page: Page, private _location: LocationService) {

    }

    ngOnInit(): void {
        this._page.actionBarHidden = true;
    }

    onMapReady(map) {
        this.marker = new Marker();
        this.mapView = map.object;
        let mapView = this.mapView;
        var icon = new Image();
        const folder = fs.knownFolders.currentApp();
        const path = fs.path.join(folder.path, "assets/marker.png");
        const imageFromLocalFile = imageSource.fromFile(path);
        icon.imageSource = imageFromLocalFile;
        console.log(imageFromLocalFile);
        this.marker.icon= icon;
        this.marker.title = "Marker ";
        this.marker.position = Position.positionFromLatLng(this.loc.latitude, this.loc.longitude);
        mapView.addMarker(this.marker);

        this._location.onUpdateLocation.subscribe(data => {
            this.loc.latitude = data.latitude;
            this.loc.longitude = data.longitude;
            this.marker.position = Position.positionFromLatLng(data.latitude, data.longitude);
            this.getGeoName()
        });
        this._location.getLocation((data) => {
            this.loc.latitude = data.latitude;
            this.loc.longitude = data.longitude;
            this.marker.userData = {};
            this.marker.position = Position.positionFromLatLng(data.latitude, data.longitude);
            this.getGeoName()
        })
    }

    getGeoName() {
        this._location.geoCoding(this.loc.latitude, this.loc.longitude).then((result) => {
            this.marker.title = result;
        }).catch((er) => {
            console.log(er)
        });
    }
}