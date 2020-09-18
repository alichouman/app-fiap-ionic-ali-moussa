import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha06Page } from './china-in-box-cozinha06.page';

describe('ChinaInBoxCozinha06Page', () => {
  let component: ChinaInBoxCozinha06Page;
  let fixture: ComponentFixture<ChinaInBoxCozinha06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaInBoxCozinha06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChinaInBoxCozinha06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
