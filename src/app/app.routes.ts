import { Routes } from "@angular/router";
import { BasicLayoutComponent } from "./components/common/layouts/basicLayout.component";

// our app views
import { LoginComponent } from "./views/login/login.component";
import { HomeComponent } from "./views/home/home.component";

import { AuthGuardService } from "./services/guard/auth.guard";

export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  // login route
  { path: 'login', component: LoginComponent },

  // App views && MAIN APP ROUTING
  {
    path: '', component: BasicLayoutComponent, children: [

      // home route
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent }

    ]
  },

  // Handle all other routes
  { path: '**', redirectTo: 'home' }
];



// other dashboards
  // {
  //   path: 'dashboards', component: BasicLayoutComponent,
  //   children: [
  //     { path: 'dashboard1', component: Dashboard1Component },
  //     { path: 'dashboard2', component: Dashboard2Component },
  //     { path: 'dashboard3', component: Dashboard3Component },
  //     { path: 'dashboard4', component: Dashboard4Component },
  //     { path: 'dashboard5', component: Dashboard5Component }
  //   ]
  // },
  // {
  //   path: 'dashboards', component: TopNavigationLayoutComponent, children: [
  //     { path: 'dashboard41', component: Dashboard41Component }
  //   ]
  // },