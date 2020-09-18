import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha06Page } from './burger-king-cozinha06.page';

describe('BurgerKingCozinha06Page', () => {
  let component: BurgerKingCozinha06Page;
  let fixture: ComponentFixture<BurgerKingCozinha06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerKingCozinha06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerKingCozinha06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
