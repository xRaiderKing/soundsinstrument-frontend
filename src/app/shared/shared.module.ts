import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedListadoProductosComponent } from './components/shared-listado-productos/shared-listado-productos.component';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    SearchBoxComponent,
    Error404PageComponent,
    ProductoComponent,
    FooterComponent,
    SharedListadoProductosComponent,
    ComentarioComponent,
    BreadcrumbsComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MessagesModule,
    DialogModule,
    FormsModule, 
    RouterModule
  ],
  exports: [
    NavBarComponent,
    HeaderComponent,
    Error404PageComponent,
    ProductoComponent,
    FooterComponent,
    SharedListadoProductosComponent,
    MessagesModule,
    DialogModule,
    ComentarioComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
