import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailComposer, EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss'],
})

export class CasaComponent  implements OnInit {

  constructor(private activateRouter: ActivatedRoute, private router: Router, private emailComposer: EmailComposer) {
  
  }

  logout() {
    
    localStorage.removeItem('ingresado');
    
    this.router.navigate(['inicio']);
  }

  ngOnInit() {}

  async openEmail(){
    const email: EmailComposerOptions = {
      to: 'di.herrerav@duocuc.cl',
      subject: 'Tengo nueva informacion sobre puntos verdes!',
      body: 'Hola Circular, mi nombre es [Tu nombre] y me gustaria entregarles la siguiente informacion con respecto a puntos verdes en mi zona que es [Ingrese su zona]:',
    };
    
    await this.emailComposer.open(email);

  }
}
