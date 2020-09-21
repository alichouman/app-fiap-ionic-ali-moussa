import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha03Page } from './padaria-real-cozinha03.page';

describe('PadariaRealCozinha03Page', () => {
  let component: PadariaRealCozinha03Page;
  let fixture: ComponentFixture<PadariaRealCozinha03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadariaRealCozinha03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PadariaRealCozinha03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
