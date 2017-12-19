import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SaveDailyExpComponent } from '../components/save-daily-exp/save-daily-exp.component';
import { DailyExpListComponent } from '../components/daily-exp-list/daily-exp-list.component';
import { DailyExpGraphComponent } from '../components/daily-exp-graph/daily-exp-graph.component';
import { ReviewCurrentExpComponent } from '../components/review-current-exp/review-current-exp.component';
import {OneByOneViewComponent}from '../components/one-by-one-view/one-by-one-view.component';
import { SearchExpenseComponent } from '../components/search-expense/search-expense.component';




const routes: Routes = [
    { path: 'SignIn', component: SignInComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'SaveDailyExp', component: SaveDailyExpComponent },
    { path: 'DailyExpList', component: DailyExpListComponent },
    { path: 'DailyExpGraph', component: DailyExpGraphComponent },
    { path: 'ReviewCurrentExp', component: ReviewCurrentExpComponent },
    { path: 'OneByOneView', component: OneByOneViewComponent },
    { path: 'SearchExpense', component: SearchExpenseComponent },
    


]


export const Routing = RouterModule.forRoot(routes);