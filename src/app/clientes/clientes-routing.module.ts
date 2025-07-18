import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutcltPageComponent } from "./pages/layoutclt-page/layoutclt-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { InstrumentosGeneralComponent } from './pages/instrumentos-general/instrumentos-general.component';
import { ProductoDetallesComponent } from "./pages/producto-detalles/producto-detalles.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutcltPageComponent,
        children: [
            { path:'inicio', component:HomePageComponent, data: { breadcrumb: 'Inicio' } },
            { path:'instrumentos', component:InstrumentosGeneralComponent, data: { breadcrumb: 'Catalogo' } },
            { path:'instrumento/:ins', component:ProductoDetallesComponent, data: { breadcrumb: 'Detalles' } },
            { path:'**', redirectTo:'inicio'  }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ClientesRoutingModule {
    
}