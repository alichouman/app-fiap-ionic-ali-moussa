import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerKingPage } from './burger-king.page';

describe('BurgerKingPage', () => {
  let component: BurgerKingPage;
  let fixture: ComponentFixture<BurgerKingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerKingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerKingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
