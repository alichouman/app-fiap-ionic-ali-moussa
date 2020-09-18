import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha02Page } from './china-in-box-cozinha02.page';

describe('ChinaInBoxCozinha02Page', () => {
  let component: ChinaInBoxCozinha02Page;
  let fixture: ComponentFixture<ChinaInBoxCozinha02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaInBoxCozinha02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChinaInBoxCozinha02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
