import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrilettoPage } from './griletto.page';

describe('GrilettoPage', () => {
  let component: GrilettoPage;
  let fixture: ComponentFixture<GrilettoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrilettoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrilettoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
