"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var imageSource = require("tns-core-modules/image-source");
var location_service_1 = require("../../services/location.service");
var image_1 = require("tns-core-modules/ui/image");
var fs = require("tns-core-modules/file-system");
var MapComponent = /** @class */ (function () {
    function MapComponent(_page, _location) {
        this._page = _page;
        this._location = _location;
        this.loc = { latitude: 15.437819409392789, longitude: 120.94888133764268 };
    }
    MapComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
    };
    MapComponent.prototype.onMapReady = function (map) {
        var _this = this;
        this.marker = new nativescript_google_maps_sdk_1.Marker();
        this.mapView = map.object;
        var mapView = this.mapView;
        var icon = new image_1.Image();
        var folder = fs.knownFolders.currentApp();
        var path = fs.path.join(folder.path, "assets/marker.png");
        var imageFromLocalFile = imageSource.fromFile(path);
        icon.imageSource = imageFromLocalFile;
        console.log(imageFromLocalFile);
        this.marker.icon = icon;
        this.marker.title = "Marker ";
        this.marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(this.loc.latitude, this.loc.longitude);
        mapView.addMarker(this.marker);
        this._location.onUpdateLocation.subscribe(function (data) {
            _this.loc.latitude = data.latitude;
            _this.loc.longitude = data.longitude;
            _this.marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(data.latitude, data.longitude);
            _this.getGeoName();
        });
        this._location.getLocation(function (data) {
            _this.loc.latitude = data.latitude;
            _this.loc.longitude = data.longitude;
            _this.marker.userData = {};
            _this.marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(data.latitude, data.longitude);
            _this.getGeoName();
        });
    };
    MapComponent.prototype.getGeoName = function () {
        var _this = this;
        this._location.geoCoding(this.loc.latitude, this.loc.longitude).then(function (result) {
            _this.marker.title = result;
        }).catch(function (er) {
            console.log(er);
        });
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "app-map",
            moduleId: module.id,
            templateUrl: "./map.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page, location_service_1.LocationService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBQy9CLDZFQUFnRTtBQUNoRSwyREFBNkQ7QUFDN0Qsb0VBQWtFO0FBQ2xFLG1EQUFnRDtBQUNoRCxpREFBbUQ7QUFPbkQ7SUFJSSxzQkFBb0IsS0FBVyxFQUFVLFNBQTBCO1FBQS9DLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQURuRSxRQUFHLEdBQUcsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDLENBQUM7SUFHcEUsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQWQsaUJBNEJDO1FBM0JHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUM1RCxJQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzFDLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xGLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQUMsSUFBSTtZQUM1QixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEYsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUN4RSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaERRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBSzZCLFdBQUksRUFBcUIsa0NBQWU7T0FKMUQsWUFBWSxDQWlEeEI7SUFBRCxtQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1tYXBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbWFya2VyO1xuICAgIG1hcFZpZXc7XG4gICAgbG9jID0ge2xhdGl0dWRlOiAxNS40Mzc4MTk0MDkzOTI3ODksIGxvbmdpdHVkZTogMTIwLjk0ODg4MTMzNzY0MjY4fTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb25TZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uTWFwUmVhZHkobWFwKSB7XG4gICAgICAgIHRoaXMubWFya2VyID0gbmV3IE1hcmtlcigpO1xuICAgICAgICB0aGlzLm1hcFZpZXcgPSBtYXAub2JqZWN0O1xuICAgICAgICBsZXQgbWFwVmlldyA9IHRoaXMubWFwVmlldztcbiAgICAgICAgdmFyIGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgZm9sZGVyID0gZnMua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgXCJhc3NldHMvbWFya2VyLnBuZ1wiKTtcbiAgICAgICAgY29uc3QgaW1hZ2VGcm9tTG9jYWxGaWxlID0gaW1hZ2VTb3VyY2UuZnJvbUZpbGUocGF0aCk7XG4gICAgICAgIGljb24uaW1hZ2VTb3VyY2UgPSBpbWFnZUZyb21Mb2NhbEZpbGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlRnJvbUxvY2FsRmlsZSk7XG4gICAgICAgIHRoaXMubWFya2VyLmljb249IGljb247XG4gICAgICAgIHRoaXMubWFya2VyLnRpdGxlID0gXCJNYXJrZXIgXCI7XG4gICAgICAgIHRoaXMubWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMubG9jLmxhdGl0dWRlLCB0aGlzLmxvYy5sb25naXR1ZGUpO1xuICAgICAgICBtYXBWaWV3LmFkZE1hcmtlcih0aGlzLm1hcmtlcik7XG5cbiAgICAgICAgdGhpcy5fbG9jYXRpb24ub25VcGRhdGVMb2NhdGlvbi5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYy5sYXRpdHVkZSA9IGRhdGEubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLmxvYy5sb25naXR1ZGUgPSBkYXRhLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGRhdGEubGF0aXR1ZGUsIGRhdGEubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0R2VvTmFtZSgpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9sb2NhdGlvbi5nZXRMb2NhdGlvbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2MubGF0aXR1ZGUgPSBkYXRhLmxhdGl0dWRlO1xuICAgICAgICAgICAgdGhpcy5sb2MubG9uZ2l0dWRlID0gZGF0YS5sb25naXR1ZGU7XG4gICAgICAgICAgICB0aGlzLm1hcmtlci51c2VyRGF0YSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5tYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoZGF0YS5sYXRpdHVkZSwgZGF0YS5sb25naXR1ZGUpO1xuICAgICAgICAgICAgdGhpcy5nZXRHZW9OYW1lKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRHZW9OYW1lKCkge1xuICAgICAgICB0aGlzLl9sb2NhdGlvbi5nZW9Db2RpbmcodGhpcy5sb2MubGF0aXR1ZGUsIHRoaXMubG9jLmxvbmdpdHVkZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcmtlci50aXRsZSA9IHJlc3VsdDtcbiAgICAgICAgfSkuY2F0Y2goKGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcilcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==