import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaHutPage } from './pizza-hut.page';

describe('PizzaHutPage', () => {
  let component: PizzaHutPage;
  let fixture: ComponentFixture<PizzaHutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaHutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaHutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
