import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrinksPage } from './brinks.page';

describe('BrinksPage', () => {
  let component: BrinksPage;
  let fixture: ComponentFixture<BrinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrinksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
