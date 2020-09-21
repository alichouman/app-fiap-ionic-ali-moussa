import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha06Page } from './padaria-real-cozinha06.page';

describe('PadariaRealCozinha06Page', () => {
  let component: PadariaRealCozinha06Page;
  let fixture: ComponentFixture<PadariaRealCozinha06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadariaRealCozinha06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PadariaRealCozinha06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
