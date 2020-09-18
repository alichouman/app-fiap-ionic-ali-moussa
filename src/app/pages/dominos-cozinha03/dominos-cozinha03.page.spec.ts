import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DominosCozinha03Page } from './dominos-cozinha03.page';

describe('DominosCozinha03Page', () => {
  let component: DominosCozinha03Page;
  let fixture: ComponentFixture<DominosCozinha03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominosCozinha03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DominosCozinha03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
