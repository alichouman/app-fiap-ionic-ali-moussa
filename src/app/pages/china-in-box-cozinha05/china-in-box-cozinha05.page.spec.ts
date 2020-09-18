import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha05Page } from './china-in-box-cozinha05.page';

describe('ChinaInBoxCozinha05Page', () => {
  let component: ChinaInBoxCozinha05Page;
  let fixture: ComponentFixture<ChinaInBoxCozinha05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaInBoxCozinha05Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChinaInBoxCozinha05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
