import { Routes } from '@angular/router';
import {MujeresPresupuestoComponent} from './mujeres-presupuesto/mujeres-presupuesto.component';
import {PaqueteFiscalComponent} from './paquete-fiscal/paquete-fiscal.component';
import {AppComponent} from './app.component';
import { DerechoCiudadanoComponent } from './derecho-ciudadano/derecho-ciudadano.component';

export const routes: Routes = [
    {
        path: 'las_mujeres_al_frente_del_presupuesto',
        component: MujeresPresupuestoComponent,
        title: 'Mujeres presupuesto',
    },
    {
        path: 'paquete_Fiscal_2025',
        component: PaqueteFiscalComponent,
        title: 'Paquete fiscal 2025',
    },
    {
        path: 'derecho_al_ciudadano_digno',
        component: DerechoCiudadanoComponent,
        title: 'Derecho ciudadano ciudadano',
    }
];
