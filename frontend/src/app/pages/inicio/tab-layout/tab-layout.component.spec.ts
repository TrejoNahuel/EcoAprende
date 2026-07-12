import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLayoutComponent } from './tab-layout.component';

describe('TabLayoutComponent', () => {
  let component: TabLayoutComponent;
  let fixture: ComponentFixture<TabLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
