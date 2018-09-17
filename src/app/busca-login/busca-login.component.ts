import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BuscaLoginService } from './busca-login.service';
import { ElementosBuscaComponent } from '../elementos-busca/elementos-busca.component';
import { CardUserComponent } from '../card-user/card-user.component'
@Component({
  selector: 'busca',
  templateUrl: './busca-login.component.html',
  styleUrls: ['./busca-login.component.scss'],
  providers: [BuscaLoginService]
})
export class BuscaLoginComponent implements OnInit {
  searchText;
  repos;
  stars;
  statusShowRepos = false;
  errorMsg
  textRepo = 'Ver Repositórios';
  convertedRepos = [];
  user;
  constructor(private buscaLoginService: BuscaLoginService) { }

  ngOnInit() {
    console.log('carregou')
  }

    receiveUser(childUser) {
      this.user = childUser;
    }
}
