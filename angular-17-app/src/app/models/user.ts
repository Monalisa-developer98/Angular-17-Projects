// Interface  --- if you wantt structure enforcement then use Interface
export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Geo {
  lat: string;
  lng: string;
}
  
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
  
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
  
// Class --- if you want to implement logic and all - class is better
export class User {
  id; name; email; website;
  constructor(id: number, name: string, email: string, website: string){
     this.id = id;
     this.name = name;
     this.email = email;
     this.website = website;
  }
  fullName(){
    return this.email + '-------' + this.name;
  }
}  

