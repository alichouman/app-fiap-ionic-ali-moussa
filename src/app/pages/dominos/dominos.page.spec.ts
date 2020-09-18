import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DominosPage } from './dominos.page';

describe('DominosPage', () => {
  let component: DominosPage;
  let fixture: ComponentFixture<DominosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DominosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
