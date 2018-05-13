"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("tns-core-modules/ui/enums");
var Subject_1 = require("rxjs/Subject");
var http_1 = require("@angular/common/http");
var LocationService = /** @class */ (function () {
    function LocationService(http) {
        var _this = this;
        this.http = http;
        this.onUpdateLocation = new Subject_1.Subject();
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
        geolocation.watchLocation(function (loc) {
            if (loc) {
                _this.onUpdateLocation.next(loc);
            }
        }, function (e) {
            console.log(e.message);
        }, {
            desiredAccuracy: enums_1.Accuracy.high,
            updateDistance: 5,
            minimumUpdateTime: 5000
        });
    }
    LocationService.prototype.getLocation = function (cb) {
        geolocation.getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            updateDistance: 5,
            timeout: 2000
        }).
            then(function (loc) {
            cb(loc);
        }, function (e) {
            console.log(e.message);
        });
    };
    LocationService.prototype.geoCoding = function (latitude, longitude) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var apiURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=AIzaSyDMI49eDdiHb10YGFI31VTB7HtREcj1UZI";
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                resolve(res.results[0].formatted_address);
            }).catch(function (er) {
                console.log(er);
            });
        });
    };
    LocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQXdEO0FBQ3hELG1EQUFtRDtBQUNuRCx3Q0FBdUM7QUFDdkMsNkNBQWtEO0FBR2xEO0lBSUkseUJBQW9CLElBQWdCO1FBQXBDLGlCQW1CQztRQW5CbUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxxQkFBZ0IsR0FBRyxJQUFJLGlCQUFPLEVBQU8sQ0FBQztRQUdsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDeEMsQ0FBQztRQUNELFdBQVcsQ0FBQyxhQUFhLENBQ3JCLFVBQUMsR0FBRztZQUNBLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUMsQ0FBQztZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFDRDtZQUNJLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7WUFDOUIsY0FBYyxFQUFFLENBQUM7WUFDakIsaUJBQWlCLEVBQUcsSUFBSTtTQUMzQixDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0QscUNBQVcsR0FBWCxVQUFZLEVBQUU7UUFDVixXQUFXLENBQUMsa0JBQWtCLENBQzFCO1lBQ0ksZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSTtZQUM5QixjQUFjLEVBQUUsQ0FBQztZQUNqQixPQUFPLEVBQUUsSUFBSTtTQUNoQixDQUNKO1lBQ0QsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNMLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsRUFBRSxVQUFDLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsUUFBUSxFQUFFLFNBQVM7UUFBN0IsaUJBY0M7UUFiRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLE1BQU0sR0FBRyw4REFBNEQsUUFBUSxTQUFJLFNBQVMsaURBQThDLENBQUM7WUFDN0ksS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2lCQUNoQixTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUNELFVBQUMsR0FBTztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FDSixDQUFDLEtBQUssQ0FBQyxVQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNuQixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJEUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLGVBQWUsQ0F1RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZERCxJQXVEQztBQXZEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7QWNjdXJhY3l9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlcnZpY2Uge1xuXG4gICAgb25VcGRhdGVMb2NhdGlvbiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgICAgICBpZiAoIWdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBnZW9sb2NhdGlvbi53YXRjaExvY2F0aW9uKFxuICAgICAgICAgICAgKGxvYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZUxvY2F0aW9uLm5leHQobG9jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzdGFuY2U6IDUsXG4gICAgICAgICAgICAgICAgbWluaW11bVVwZGF0ZVRpbWUgOiA1MDAwXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIGdldExvY2F0aW9uKGNiKSB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzdGFuY2U6IDUsXG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMFxuICAgICAgICAgICAgfVxuICAgICAgICApLlxuICAgICAgICB0aGVuKChsb2MpID0+IHtcbiAgICAgICAgICAgIGNiKGxvYyk7XG4gICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZW9Db2RpbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSk6UHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBhcGlVUkwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9JmtleT1BSXphU3lETUk0OWVEZGlIYjEwWUdGSTMxVlRCN0h0UkVjajFVWklgO1xuICAgICAgICAgICAgdGhpcy5odHRwLmdldChhcGlVUkwpXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXM6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICkuY2F0Y2goKGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXIpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=