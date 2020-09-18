import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabibsCozinha04Page } from './habibs-cozinha04.page';

describe('HabibsCozinha04Page', () => {
  let component: HabibsCozinha04Page;
  let fixture: ComponentFixture<HabibsCozinha04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabibsCozinha04Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabibsCozinha04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
