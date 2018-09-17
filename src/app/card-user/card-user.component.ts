import { Component, OnInit, Input } from '@angular/core';
import { BuscaLoginService } from '../busca-login/busca-login.service';


@Component({
  selector: 'card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  providers: [BuscaLoginService]
})
export class CardUserComponent implements OnInit {
  @Input() getUser;

  constructor(private buscaLoginService: BuscaLoginService) { }
  statusShowRepos;
  textRepo = 'Ver Repositórios';
  repos;
  errorMsg;
  ngOnInit() {
    console.log('user', this.getUser);
  }
  
  showRepos(userLogin) {
    if (this.statusShowRepos == true) {
      this.statusShowRepos = false;
      this.textRepo = 'Ver Repositórios';
    } else {
      this.buscaLoginService.getRepos(userLogin).subscribe(
        repo => {
          this.repos = repo;
          if (this.repos) {
            this.statusShowRepos = true;
            this.textRepo = 'Ocultar Repositórios'
          } else {
            this.statusShowRepos = false;
          }
        })
    }
  }

}
