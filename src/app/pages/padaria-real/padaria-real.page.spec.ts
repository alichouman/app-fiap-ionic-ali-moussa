import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PadariaRealPage } from './padaria-real.page';

describe('PadariaRealPage', () => {
  let component: PadariaRealPage;
  let fixture: ComponentFixture<PadariaRealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadariaRealPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PadariaRealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
