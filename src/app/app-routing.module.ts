import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/_guards';
import { QlikComponent } from './qlik/qlik.component';



const routes: Routes = [
  //Padrão para telas com base no perfil
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'qlik', component: QlikComponent },
  //{ path: '',  component: MainComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers:[]
})
export class AppRoutingModule { 

}