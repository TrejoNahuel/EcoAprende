import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapLayoutComponent } from './tap-layout.component';

describe('TapLayoutComponent', () => {
  let component: TapLayoutComponent;
  let fixture: ComponentFixture<TapLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
