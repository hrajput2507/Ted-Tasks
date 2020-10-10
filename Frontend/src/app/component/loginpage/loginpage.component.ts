import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth : AuthService,

  ) { }

  Form: FormGroup;
  ngOnInit(): void {
    this.Form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),    

    });
    //this.api.FormData(this.firstpage_obj);

  }

  login(){
    console.log(this.Form.value);
    this.auth.loginuser(this.Form.value).subscribe(res => {
      console.log(res);
      localStorage.setItem('token',res.token);
      
    this.router.navigateByUrl('/home');
    alert("hiii")
      
    })

  }
  


}
