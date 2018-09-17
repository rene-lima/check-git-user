import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BuscaLoginService} from '../busca-login/busca-login.service';


@Component({
  selector: 'elementos-busca',
  templateUrl: './elementos-busca.component.html',
  styleUrls: ['./elementos-busca.component.scss'],
  providers: [BuscaLoginService]
})
export class ElementosBuscaComponent implements OnInit {

  @Output() public filterEvent = new EventEmitter();
  constructor(private buscaLoginService: BuscaLoginService) { }
  user = {};
  errorMsg = {
    msg: ''
  };
  ngOnInit() {
  }


  filterSearch(filterParam) {
    this.buscaLoginService.filterUser(filterParam).subscribe(
      user => {
                this.user = user;
                this.filterEvent.emit(this.user);
              },
      err => {
        this.errorMsg.msg = 'Usuário não encontrado';
        this.user = '';
        this.filterEvent.emit(this.errorMsg);
      } 
    );
  }
}
