import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DominosCozinha02Page } from './dominos-cozinha02.page';

describe('DominosCozinha02Page', () => {
  let component: DominosCozinha02Page;
  let fixture: ComponentFixture<DominosCozinha02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominosCozinha02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DominosCozinha02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
