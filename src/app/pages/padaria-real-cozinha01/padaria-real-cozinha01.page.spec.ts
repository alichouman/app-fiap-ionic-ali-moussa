import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha01Page } from './padaria-real-cozinha01.page';

describe('PadariaRealCozinha01Page', () => {
  let component: PadariaRealCozinha01Page;
  let fixture: ComponentFixture<PadariaRealCozinha01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadariaRealCozinha01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PadariaRealCozinha01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
