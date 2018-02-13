"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Country = /** @class */ (function () {
    function Country(name) {
        this.name = name;
    }
    return Country;
}());
var europianCountries = ["Bharth Mahesh", "Dhanunjay", "Satish", "Mohan", "Tiruoathi"];
var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.text = 'Users';
        this.countries = [];
        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
    }
    UsersComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: 'modules/users/users.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBRW5FO0lBQ0UsaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN0QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRCxJQUFJLGlCQUFpQixHQUFHLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBU3ZGO0lBS007UUFKSixTQUFJLEdBQVcsT0FBTyxDQUFDO1FBS2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNMLENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFmTSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7O09BQ1csY0FBYyxDQWdCMUI7SUFBRCxxQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jbGFzcyBDb3VudHJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XG59XG5cbmxldCBldXJvcGlhbkNvdW50cmllcyA9IFtcIkJoYXJ0aCBNYWhlc2hcIiwgXCJEaGFudW5qYXlcIiwgXCJTYXRpc2hcIiwgXCJNb2hhblwiLCBcIlRpcnVvYXRoaVwiXTtcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VzZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNDb21wb25lbnQge1xuICB0ZXh0OiBzdHJpbmcgPSAnVXNlcnMnO1xuXG4gIHB1YmxpYyBjb3VudHJpZXM6IEFycmF5PENvdW50cnk+O1xuICBcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuY291bnRyaWVzID0gW107XG4gIFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXVyb3BpYW5Db3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChuZXcgQ291bnRyeShldXJvcGlhbkNvdW50cmllc1tpXSkpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XG4gICAgICB9XG59XG4iXX0=