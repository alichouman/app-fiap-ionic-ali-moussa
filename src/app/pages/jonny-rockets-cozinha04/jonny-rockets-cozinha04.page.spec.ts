import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha04Page } from './jonny-rockets-cozinha04.page';

describe('JonnyRocketsCozinha04Page', () => {
  let component: JonnyRocketsCozinha04Page;
  let fixture: ComponentFixture<JonnyRocketsCozinha04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonnyRocketsCozinha04Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JonnyRocketsCozinha04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
