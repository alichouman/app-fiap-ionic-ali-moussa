import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha06Page } from './jonny-rockets-cozinha06.page';

describe('JonnyRocketsCozinha06Page', () => {
  let component: JonnyRocketsCozinha06Page;
  let fixture: ComponentFixture<JonnyRocketsCozinha06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonnyRocketsCozinha06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JonnyRocketsCozinha06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
