import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabibsCozinha06Page } from './habibs-cozinha06.page';

describe('HabibsCozinha06Page', () => {
  let component: HabibsCozinha06Page;
  let fixture: ComponentFixture<HabibsCozinha06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabibsCozinha06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabibsCozinha06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
