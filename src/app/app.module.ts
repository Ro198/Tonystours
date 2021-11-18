import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';

import {LoginPage,
  ClientemostrarPage,
  ClienteagregarPage,
  ClienteeditarPage,
  AcuerdoPage,
  MenunivelunoPage,
  MenuniveldosPage,
  UsuariosPage,
  UsuarioagregarPage,
  UsuarioeditarPage,
  UsuariomostrarPage,
  ClientesopcionesPage,
  HistorialPage,
  ClientesactivosPage,
  ClientesnoactivosPage,
  VehiculosPage,
  VehiculosdisponiblesPage,
  VehiculosrentadosPage,
  VehiculosmantenimientoPage,
  VehiculomostrarPage,
  RentasmostrarPage,
  VehiculosopcionesPage,
  VehiculosocupadosPage,
  VehiculoslibresPage,
  VehiculossinservicioPage,
  VehiculomostrarlibrePage,
  VehiculomostrarocupadoPage,
  RentalistausuariosPage,
  RentaagregarPage,
  VehiculoagregarPage,
  VehiculoeditarrentaPage,
  VehiculoeditarPage,
  VehiculoeditarenservicioPage,
  VehiculoenviartallerPage,
  VehiculoeditarsinservicioPage,
  VehiculoeditarfotoPage,
  VehiculoeditardosPage,
  VehiculoeditartresPage,
  VehiculoeditarserviciorentaPage,
  VehiculoeditarenviaraPage,
  RentaeditarPage,
  RentabajaPage,
  RentabajaeliminarPage,
  RentadatosclientePage,
  RentadatosvehiculoPage,
  TallermostrarPage,
  TallereditarPage,
  TallervdPage,
  ClientemostrarhistorialPage,
  UsuariomiperfilPage,
  UsuariomiperfileditarPage,
  ClientesmesPage,
  AclienteeneroPage,
  AclientefebreroPage,
  AclientemarzoPage,
  AclienteabrilPage,
  AclientemayoPage,
  AclientejunioPage,
  AclientejulioPage,
  AclienteagostoPage,
  AclienteseptiembrePage,
  AclienteoctubrePage,
  AclientenoviembrePage,
  AclientediciembrePage,
  PvehiculocincoPage,
  PvehiculosietePage,
  PvehiculoochoPage,
  PvehiculocatorcePage,
  HistorialactivarPage,
  HistorialagendaPage,
  HistorialclientePage,
  AgendaeditarPage,
  RentaseditarPage,
  ClienteactivomesPage,
  CbajaagendamesPage,
  VehiculodatostallerPage
} from "../pages/index.paginas";

import { LoginService } from '../pages/servicios/LoginServices';
import { ClienteService } from '../pages/servicios/ClienteServices';
import { UsuarioService } from '../pages/servicios/UsuarioServices';
import { HistorialService } from '../pages/servicios/HistorialServices';
import { VehiculoService } from '../pages/servicios/VehiculoServices';
import { VehiculoFotoService } from '../pages/servicios/VehiculoFotoServices';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ClientemostrarPage,
    ClienteagregarPage,
    ClienteeditarPage,
    AcuerdoPage,
    MenunivelunoPage,
    MenuniveldosPage,
    UsuariosPage,
    UsuarioagregarPage,
    UsuarioeditarPage,
    UsuariomostrarPage,
    ClientesopcionesPage,
    HistorialPage,
    ClientesactivosPage,
    ClientesnoactivosPage,
    VehiculosPage,
    VehiculosdisponiblesPage,
    VehiculosrentadosPage,
    VehiculosmantenimientoPage,
    VehiculomostrarPage,
    RentasmostrarPage,
    VehiculosopcionesPage,
    VehiculosocupadosPage,
    VehiculoslibresPage,
    VehiculossinservicioPage,
    VehiculomostrarlibrePage,
    VehiculomostrarocupadoPage,
    RentalistausuariosPage,
    RentaagregarPage,
    VehiculoagregarPage,
    VehiculoeditarrentaPage,
    VehiculoeditarPage,
    VehiculoeditarenservicioPage,
    VehiculoenviartallerPage,
    VehiculoeditarsinservicioPage,
    VehiculoeditarfotoPage,
    VehiculoeditardosPage,
    VehiculoeditartresPage,
    VehiculoeditarserviciorentaPage,
    VehiculoeditarenviaraPage,
    RentaeditarPage,
    RentabajaPage,
    RentabajaeliminarPage,
    RentadatosclientePage,
    RentadatosvehiculoPage,
    TallermostrarPage,
    TallereditarPage,
    TallervdPage,
    ClientemostrarhistorialPage,
    UsuariomiperfilPage,
    UsuariomiperfileditarPage,
    ClientesmesPage,
    AclienteeneroPage,
    AclientefebreroPage,
    AclientemarzoPage,
    AclienteabrilPage,
    AclientemayoPage,
    AclientejunioPage,
    AclientejulioPage,
    AclienteagostoPage,
    AclienteseptiembrePage,
    AclienteoctubrePage,
    AclientenoviembrePage,
    AclientediciembrePage,
    PvehiculocincoPage,
    PvehiculosietePage,
    PvehiculoochoPage,
    PvehiculocatorcePage,
    HistorialactivarPage,
    HistorialagendaPage,
    HistorialclientePage,
    AgendaeditarPage,
    RentaseditarPage,
    ClienteactivomesPage,
    CbajaagendamesPage,
    VehiculodatostallerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ClientemostrarPage,
    ClienteagregarPage,
    ClienteeditarPage,
    AcuerdoPage,
    MenunivelunoPage,
    MenuniveldosPage,
    UsuariosPage,
    UsuarioagregarPage,
    UsuarioeditarPage,
    UsuariomostrarPage,
    ClientesopcionesPage,
    HistorialPage,
    ClientesactivosPage,
    ClientesnoactivosPage,
    VehiculosPage,
    VehiculosdisponiblesPage,
    VehiculosrentadosPage,
    VehiculosmantenimientoPage,
    VehiculomostrarPage,
    RentasmostrarPage,
    VehiculosopcionesPage,
    VehiculosocupadosPage,
    VehiculoslibresPage,
    VehiculossinservicioPage,
    VehiculomostrarlibrePage,
    VehiculomostrarocupadoPage,
    RentalistausuariosPage,
    RentaagregarPage,
    VehiculoagregarPage,
    VehiculoeditarrentaPage,
    VehiculoeditarPage,
    VehiculoeditarenservicioPage,
    VehiculoenviartallerPage,
    VehiculoeditarsinservicioPage,
    VehiculoeditarfotoPage,
    VehiculoeditardosPage,
    VehiculoeditartresPage,
    VehiculoeditarserviciorentaPage,
    VehiculoeditarenviaraPage,
    RentaeditarPage,
    RentabajaPage,
    RentabajaeliminarPage,
    RentadatosclientePage,
    RentadatosvehiculoPage,
    TallermostrarPage,
    TallereditarPage,
    TallervdPage,
    ClientemostrarhistorialPage,
    UsuariomiperfilPage,
    UsuariomiperfileditarPage,
    ClientesmesPage,
    AclienteeneroPage,
    AclientefebreroPage,
    AclientemarzoPage,
    AclienteabrilPage,
    AclientemayoPage,
    AclientejunioPage,
    AclientejulioPage,
    AclienteagostoPage,
    AclienteseptiembrePage,
    AclienteoctubrePage,
    AclientenoviembrePage,
    AclientediciembrePage,
    PvehiculocincoPage,
    PvehiculosietePage,
    PvehiculoochoPage,
    PvehiculocatorcePage,
    HistorialactivarPage,
    HistorialagendaPage,
    HistorialclientePage,
    AgendaeditarPage,
    RentaseditarPage,
    ClienteactivomesPage,
    CbajaagendamesPage,
    VehiculodatostallerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, LoginService, ClienteService, UsuarioService, HistorialService, VehiculoService, VehiculoFotoService
  ]
})
export class AppModule {}
 