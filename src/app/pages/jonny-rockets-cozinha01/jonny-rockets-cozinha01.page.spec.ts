import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha01Page } from './jonny-rockets-cozinha01.page';

describe('JonnyRocketsCozinha01Page', () => {
  let component: JonnyRocketsCozinha01Page;
  let fixture: ComponentFixture<JonnyRocketsCozinha01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonnyRocketsCozinha01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JonnyRocketsCozinha01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
