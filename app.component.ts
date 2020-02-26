import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleAngularExample';

  public userLists: string[]=
    ["firstName",
      "lastName" ,
      "no",
      "email",
      "address",
      "state",
      "country"
   ]

 

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    no: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required)


  });
 
  save() {


    console.log(this.profileForm.value);
    // console.log('First Name:' + this.profileForm.get('firstName').value);
    // console.log('Last Name:' + this.profileForm.get('lastName').value);
    // console.log('Mobile:' + this.profileForm.get('no').value);
    // console.log('Email:' + this.profileForm.get('email').value);
    // console.log('Address:' + this.profileForm.get('address').value);
    // console.log('State:' + this.profileForm.get('state').value);
    // console.log('Country:' + this.profileForm.get('country').value);



  }
  edit(i) {

  }



  delete(index){
    for(let i = 0; i < this.userLists.length; ++i){
    if (this.userLists[i].id === index) {
          this.userLists.splice(i,1);
    }
  }

  // }
}
}