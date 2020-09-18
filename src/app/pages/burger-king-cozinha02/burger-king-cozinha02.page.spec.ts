import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha02Page } from './burger-king-cozinha02.page';

describe('BurgerKingCozinha02Page', () => {
  let component: BurgerKingCozinha02Page;
  let fixture: ComponentFixture<BurgerKingCozinha02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerKingCozinha02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerKingCozinha02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
