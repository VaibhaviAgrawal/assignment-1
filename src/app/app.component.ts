import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray , Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

      this.loginForm = this.fb.group({

          email: [null, [Validators.required, Validators.minLength(4)]],

          password: [null, [Validators.required, Validators.maxLength(8)]]

      })

  }

  loginUser() {

      console.log(this.loginForm.status);

      console.log(this.loginForm.value);

  }

}