"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var location_service_1 = require("../../services/location.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBQy9CLDZFQUFnRTtBQUVoRSxvRUFBa0U7QUFRbEU7SUFJSSxzQkFBb0IsS0FBVyxFQUFVLFNBQTBCO1FBQS9DLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQURuRSxRQUFHLEdBQUcsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDLENBQUM7SUFHcEUsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQWQsaUJBcUJDO1FBcEJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDMUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEYsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBQyxJQUFJO1lBQzVCLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsdUNBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsRixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ3hFLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6Q1EsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FLNkIsV0FBSSxFQUFxQixrQ0FBZTtPQUoxRCxZQUFZLENBMEN4QjtJQUFELG1CQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0ltYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbWFwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21hcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1hcmtlcjtcbiAgICBtYXBWaWV3O1xuICAgIGxvYyA9IHtsYXRpdHVkZTogMTUuNDM3ODE5NDA5MzkyNzg5LCBsb25naXR1ZGU6IDEyMC45NDg4ODEzMzc2NDI2OH07XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbk1hcFJlYWR5KG1hcCkge1xuICAgICAgICB0aGlzLm1hcmtlciA9IG5ldyBNYXJrZXIoKTtcbiAgICAgICAgdGhpcy5tYXBWaWV3ID0gbWFwLm9iamVjdDtcbiAgICAgICAgbGV0IG1hcFZpZXcgPSB0aGlzLm1hcFZpZXc7XG4gICAgICAgIHRoaXMubWFya2VyLnRpdGxlID0gXCJNYXJrZXIgXCI7XG4gICAgICAgIHRoaXMubWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMubG9jLmxhdGl0dWRlLCB0aGlzLmxvYy5sb25naXR1ZGUpO1xuICAgICAgICBtYXBWaWV3LmFkZE1hcmtlcih0aGlzLm1hcmtlcik7XG5cbiAgICAgICAgdGhpcy5fbG9jYXRpb24ub25VcGRhdGVMb2NhdGlvbi5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYy5sYXRpdHVkZSA9IGRhdGEubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLmxvYy5sb25naXR1ZGUgPSBkYXRhLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGRhdGEubGF0aXR1ZGUsIGRhdGEubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0R2VvTmFtZSgpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9sb2NhdGlvbi5nZXRMb2NhdGlvbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2MubGF0aXR1ZGUgPSBkYXRhLmxhdGl0dWRlO1xuICAgICAgICAgICAgdGhpcy5sb2MubG9uZ2l0dWRlID0gZGF0YS5sb25naXR1ZGU7XG4gICAgICAgICAgICB0aGlzLm1hcmtlci51c2VyRGF0YSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5tYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoZGF0YS5sYXRpdHVkZSwgZGF0YS5sb25naXR1ZGUpO1xuICAgICAgICAgICAgdGhpcy5nZXRHZW9OYW1lKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRHZW9OYW1lKCkge1xuICAgICAgICB0aGlzLl9sb2NhdGlvbi5nZW9Db2RpbmcodGhpcy5sb2MubGF0aXR1ZGUsIHRoaXMubG9jLmxvbmdpdHVkZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcmtlci50aXRsZSA9IHJlc3VsdDtcbiAgICAgICAgfSkuY2F0Y2goKGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcilcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==