import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha02Page } from './pizza-hut-cozinha02.page';

describe('PizzaHutCozinha02Page', () => {
  let component: PizzaHutCozinha02Page;
  let fixture: ComponentFixture<PizzaHutCozinha02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaHutCozinha02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaHutCozinha02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
