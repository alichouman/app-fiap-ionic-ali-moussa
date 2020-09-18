import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabibsPage } from './habibs.page';

describe('HabibsPage', () => {
  let component: HabibsPage;
  let fixture: ComponentFixture<HabibsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabibsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabibsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
