import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha03Page } from './pizza-hut-cozinha03.page';

describe('PizzaHutCozinha03Page', () => {
  let component: PizzaHutCozinha03Page;
  let fixture: ComponentFixture<PizzaHutCozinha03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaHutCozinha03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaHutCozinha03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
