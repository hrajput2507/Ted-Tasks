import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth : AuthService,
    ) { }


  Form: FormGroup;
  ngOnInit(): void {
    this.Form = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/

    )]),    

    });
    //this.api.FormData(this.firstpage_obj);

  }
  sendData(){
    console.log(this.Form.value);
    if((this.Form.get("email").value !=null) && (this.Form.get("name").value !=null) && (this.Form.get("password").value !=null))
    {
    this.auth.registeruser(this.Form.value).subscribe(res => {
      console.log(res);
    })
    alert("Your Account successfully registerde")
    this.router.navigateByUrl('/loginpage');
  }
    else{
      alert("please fill the complete detaila");
    }
  }
  }



