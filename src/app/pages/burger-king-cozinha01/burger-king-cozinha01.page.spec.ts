import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha01Page } from './burger-king-cozinha01.page';

describe('BurgerKingCozinha01Page', () => {
  let component: BurgerKingCozinha01Page;
  let fixture: ComponentFixture<BurgerKingCozinha01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerKingCozinha01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerKingCozinha01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
