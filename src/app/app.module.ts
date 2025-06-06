import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
import { VentasModule } from './ventas/ventas.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenExpiradoInterceptor } from './auth/token-expirado.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    AuthModule,
    ClientesModule,
    SharedModule,
    VentasModule,

  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenExpiradoInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
