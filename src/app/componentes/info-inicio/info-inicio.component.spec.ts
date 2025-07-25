import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInicioComponent } from './info-inicio.component';

describe('InfoInicioComponent', () => {
  let component: InfoInicioComponent;
  let fixture: ComponentFixture<InfoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
