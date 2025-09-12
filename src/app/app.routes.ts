import { Routes } from '@angular/router';
import {MujeresPresupuestoComponent} from './mujeres-presupuesto/mujeres-presupuesto.component';
import {PaqueteFiscalComponent} from './paquete-fiscal/paquete-fiscal.component';
import {AppComponent} from './app.component';
import { DerechoCiudadanoComponent } from './derecho-ciudadano/derecho-ciudadano.component';
import { ParidadInclusionComponent } from './paridad-inclusion/paridad-inclusion.component';
import { PatrimonioComponent } from './patrimonio/patrimonio.component';
import { ReformaJudicialComponent } from './reforma-judicial/reforma-judicial.component';
import { TalaClandestinaComponent } from './tala-clandestina/tala-clandestina.component';
import { PlasticoEdomexComponent } from './plastico-edomex/plastico-edomex.component';

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
    },
    {
        path: 'paridad_y_la_inclusion',
        component: ParidadInclusionComponent,
        title: 'Paridad y la inclusion',
    },
    {
        path: 'protege_tu_patrimonio',
        component: PatrimonioComponent,
        title: 'Protege tu patrimonio',
    },
    {
        path: 'reforma_judicial_de_edomex',
        component: ReformaJudicialComponent,
        title: 'Protege tu patrimonio',
    },
    {
        path: 'tala_clandestina',
        component: TalaClandestinaComponent,
        title: 'Tala clandestina',
    },
    {
        path: 'blog_plastico',
        component: PlasticoEdomexComponent,
        title: 'Plastico Edomex',
    }
];
