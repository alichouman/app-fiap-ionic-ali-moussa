import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha04Page } from './griletto-cozinha04.page';

describe('GrilettoCozinha04Page', () => {
  let component: GrilettoCozinha04Page;
  let fixture: ComponentFixture<GrilettoCozinha04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrilettoCozinha04Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrilettoCozinha04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
