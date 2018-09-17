import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaLoginComponent } from './busca-login.component';

describe('BuscaLoginComponent', () => {
  let component: BuscaLoginComponent;
  let fixture: ComponentFixture<BuscaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
