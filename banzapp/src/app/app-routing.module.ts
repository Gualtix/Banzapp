import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PageCursoComponent } from './shared/page-curso/page-curso.component';
import { PageComponent } from './pages/page.component';


const routes: Routes = [
  { path: '',
    component: PageComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/curso/:id', component: PageCursoComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]

  },
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
