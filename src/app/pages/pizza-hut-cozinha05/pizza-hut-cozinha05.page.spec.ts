import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha05Page } from './pizza-hut-cozinha05.page';

describe('PizzaHutCozinha05Page', () => {
  let component: PizzaHutCozinha05Page;
  let fixture: ComponentFixture<PizzaHutCozinha05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaHutCozinha05Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaHutCozinha05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
