import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha03Page } from './griletto-cozinha03.page';

describe('GrilettoCozinha03Page', () => {
  let component: GrilettoCozinha03Page;
  let fixture: ComponentFixture<GrilettoCozinha03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrilettoCozinha03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrilettoCozinha03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
