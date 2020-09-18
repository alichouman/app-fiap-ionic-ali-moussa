import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha05Page } from './jonny-rockets-cozinha05.page';

describe('JonnyRocketsCozinha05Page', () => {
  let component: JonnyRocketsCozinha05Page;
  let fixture: ComponentFixture<JonnyRocketsCozinha05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonnyRocketsCozinha05Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JonnyRocketsCozinha05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
