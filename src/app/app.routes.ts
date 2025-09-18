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
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'mujeres_presupuesto',
        loadComponent: () => import('./mujeres-presupuesto/mujeres-presupuesto.component').then(m => m.MujeresPresupuestoComponent),
    },
    {
        path: 'paridad_inclusion',
        loadComponent: () => import('./paridad-inclusion/paridad-inclusion.component').then(m => m.ParidadInclusionComponent),
    },
    {
        path: 'patrimonio',
        loadComponent: () => import('./patrimonio/patrimonio.component').then(m => m.PatrimonioComponent),
    },
    {
        path: 'plastico_edomex',
        loadComponent: () => import('./plastico-edomex/plastico-edomex.component').then(m => m.PlasticoEdomexComponent),
    },
    {
        path: 'reforma_judicial',
        loadComponent: () => import('./reforma-judicial/reforma-judicial.component').then(m => m.ReformaJudicialComponent),
    },
    {
        path: 'tala_clandestina',
        loadComponent: () => import('./tala-clandestina/tala-clandestina.component').then(m => m.TalaClandestinaComponent),
    },
    {
        path: 'paquete_fiscal',
        loadComponent: () => import('./paquete-fiscal/paquete-fiscal.component').then(m => m.PaqueteFiscalComponent),
    },
     {
        path: 'derecho_al_ciudadano_digno',
        loadComponent: () => import('./derecho-ciudadano/derecho-ciudadano.component').then(m => m.DerechoCiudadanoComponent),
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
