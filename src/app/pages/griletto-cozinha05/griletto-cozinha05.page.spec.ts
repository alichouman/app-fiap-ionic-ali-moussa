import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha05Page } from './griletto-cozinha05.page';

describe('GrilettoCozinha05Page', () => {
  let component: GrilettoCozinha05Page;
  let fixture: ComponentFixture<GrilettoCozinha05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrilettoCozinha05Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrilettoCozinha05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
