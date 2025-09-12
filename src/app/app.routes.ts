import { Routes } from '@angular/router';
import {MujeresPresupuestoComponent} from './mujeres-presupuesto/mujeres-presupuesto.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
    {
        path: 'las_mujeres_al_frente_del_presupuesto',
        component: MujeresPresupuestoComponent,
        title: 'Mujeres presupuesto',
    }
];
