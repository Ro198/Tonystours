import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { LoginPage,
         ClientesopcionesPage,
         UsuariosPage,
         HistorialPage,
         VehiculosPage,
         UsuariomiperfilPage
} from "../index.paginas";

@Component({
  selector: 'page-menuniveluno',
  templateUrl: 'menuniveluno.html',
})
export class MenunivelunoPage {

  datosUsuario;
  perfil;

  constructor(public navCtrl: NavController, 
             public navParams: NavParams,
             public alertCtrl: AlertController) 
{
  this.datosUsuario  = window.localStorage.getItem('dataUser')
  this.perfil = JSON.parse(this.datosUsuario )
  console.log(this.perfil);

  }

  usuarios(){

    this.navCtrl.push(UsuariosPage);

  }
 
  miperfil(){

    this.navCtrl.push(UsuariomiperfilPage);

  }

  //CERRAR SESION

  logout(): void {
    let confirm = this.alertCtrl.create({
      title: "¡ATENCION!",
      message: "¿Estas seguro que quieres cerrar sesión?",
      buttons: [
        {
          text: "NO",
          handler: () => {}
        },
        {
          text: "SI",
          handler: () => {
            window.localStorage.removeItem("dataUser");
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

  vehiculos(){
    this.navCtrl.push(VehiculosPage);
    //this.navCtrl.push(ClientesPage);
  }

  clientes(){
      this.navCtrl.push(ClientesopcionesPage);
      //this.navCtrl.push(ClientesPage);
  }

  clientesHistorial(){
      this.navCtrl.push(HistorialPage);
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenunivelunoPage');
  }

}
