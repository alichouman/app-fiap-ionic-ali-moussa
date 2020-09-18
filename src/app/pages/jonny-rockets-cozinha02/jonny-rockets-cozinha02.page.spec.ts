import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha02Page } from './jonny-rockets-cozinha02.page';

describe('JonnyRocketsCozinha02Page', () => {
  let component: JonnyRocketsCozinha02Page;
  let fixture: ComponentFixture<JonnyRocketsCozinha02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonnyRocketsCozinha02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JonnyRocketsCozinha02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
