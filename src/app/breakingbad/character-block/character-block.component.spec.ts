import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBlockComponent } from './character-block.component';

describe('CharacterBlockComponent', () => {
  let component: CharacterBlockComponent;
  let fixture: ComponentFixture<CharacterBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
