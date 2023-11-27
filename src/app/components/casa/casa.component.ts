import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss'],
})
export class CasaComponent  implements OnInit {
  data: any;

  

  comparedWith:any;

  constructor(private activateRouter: ActivatedRoute, private router: Router) {
  
  }


  logout() {
    
    localStorage.removeItem('ingresado');
    
    this.router.navigate(['inicio']);
  }

  ngOnInit() {}

}
