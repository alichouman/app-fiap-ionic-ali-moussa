import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha06Page } from './pizza-hut-cozinha06.page';

describe('PizzaHutCozinha06Page', () => {
  let component: PizzaHutCozinha06Page;
  let fixture: ComponentFixture<PizzaHutCozinha06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaHutCozinha06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaHutCozinha06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
