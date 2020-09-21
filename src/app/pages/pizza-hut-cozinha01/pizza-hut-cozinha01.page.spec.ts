import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha01Page } from './pizza-hut-cozinha01.page';

describe('PizzaHutCozinha01Page', () => {
  let component: PizzaHutCozinha01Page;
  let fixture: ComponentFixture<PizzaHutCozinha01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaHutCozinha01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaHutCozinha01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
