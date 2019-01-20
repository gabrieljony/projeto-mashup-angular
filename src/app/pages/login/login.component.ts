import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToasterService } from 'angular2-toaster';
import { AuthenticationService } from '../../auth/_services';
import { MatDialog } from '@angular/material';
import { HeaderComponent } from '../template/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginText = new FormControl('', []);
  senha = new FormControl('', []);
  private toasterService: ToasterService;
  @BlockUI() blockUI: NgBlockUI;

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  
  constructor(
    public router: Router, 
    toasterService: ToasterService,
    public http: Http,
    private authenticationService: AuthenticationService,
    private dialog: MatDialog
  ) {
    this.toasterService = toasterService;
  }

  ngOnInit() {
    this.authenticationService.clearAuthentication();
  }
  
  login(){
    if(this.validarCampos()){
      var login = this.loginText.value;
      var senha = this.senha.value;
      if(login == null || login == '' || senha == null || senha == ''){
        this.toasterService.pop('warning',  'CPF/CNPJ e Senha são obrigatórios');
        return;
      }
      this.blockUI.start();
      this.authenticationService.authenticate(this.loginText.value, this.senha.value)
      .subscribe(
          result => {

            if (result.ok) {
              console.log(result);
              this.blockUI.stop();
              this.router.navigate(['home']);
            }
              
          },
          error => {
              this.error = error;
              this.loading = false;
              this.toasterService.pop('error', 'Login ou Senha Inválidos');
              this.blockUI.stop();
          });
    }
  }

  validarCampos(): boolean{
    var retorno = true;
    if(this.loginText.value == null || this.loginText.value == ''){
      this.loginText.setErrors(['']);
      retorno = false;
    }
    if(this.senha.value == null || this.senha.value == ''){
      this.senha.setErrors(['']);
      retorno = false;
    }
    return retorno;
  }

}
