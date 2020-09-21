import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha04Page } from './padaria-real-cozinha04.page';

describe('PadariaRealCozinha04Page', () => {
  let component: PadariaRealCozinha04Page;
  let fixture: ComponentFixture<PadariaRealCozinha04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadariaRealCozinha04Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PadariaRealCozinha04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
