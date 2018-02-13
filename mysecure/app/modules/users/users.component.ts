import { Component, ChangeDetectionStrategy } from '@angular/core';

class Country {
  constructor(public name: string) { }
}

let europianCountries = ["Bharth Mahesh", "Dhanunjay", "Satish", "Mohan", "Tiruoathi"];



@Component({
  selector: 'users',
  templateUrl: 'modules/users/users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  text: string = 'Users';

  public countries: Array<Country>;
  
      constructor() {
          this.countries = [];
  
          for (let i = 0; i < europianCountries.length; i++) {
              this.countries.push(new Country(europianCountries[i]));
          }
      }
  
      public onItemTap(args) {
          console.log("Item Tapped at cell index: " + args.index);
      }
}
