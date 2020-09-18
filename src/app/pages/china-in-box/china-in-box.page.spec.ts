import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChinaInBoxPage } from './china-in-box.page';

describe('ChinaInBoxPage', () => {
  let component: ChinaInBoxPage;
  let fixture: ComponentFixture<ChinaInBoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaInBoxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChinaInBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
