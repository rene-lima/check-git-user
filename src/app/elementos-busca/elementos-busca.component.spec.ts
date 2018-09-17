import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosBuscaComponent } from './elementos-busca.component';

describe('ElementosBuscaComponent', () => {
  let component: ElementosBuscaComponent;
  let fixture: ComponentFixture<ElementosBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementosBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
