import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha02Page } from './padaria-real-cozinha02.page';

describe('PadariaRealCozinha02Page', () => {
  let component: PadariaRealCozinha02Page;
  let fixture: ComponentFixture<PadariaRealCozinha02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadariaRealCozinha02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PadariaRealCozinha02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
