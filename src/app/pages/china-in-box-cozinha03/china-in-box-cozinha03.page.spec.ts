import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha03Page } from './china-in-box-cozinha03.page';

describe('ChinaInBoxCozinha03Page', () => {
  let component: ChinaInBoxCozinha03Page;
  let fixture: ComponentFixture<ChinaInBoxCozinha03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaInBoxCozinha03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChinaInBoxCozinha03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
