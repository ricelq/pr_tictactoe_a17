import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeComponent } from './tictactoe.component';

describe('TictactoeComponent', () => {
  let component: TictactoeComponent;
  let fixture: ComponentFixture<TictactoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TictactoeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TictactoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should start with player X', () => {
    expect(component.currentPlayer).toEqual('X');
  });

  it('should switch players', () => {
    component.play(0);
    expect(component.currentPlayer).toEqual('O');
    component.play(1);
    expect(component.currentPlayer).toEqual('X');
  });

  it('should determine a winner', () => {
    component.play(0); // X
    component.play(3); // O
    component.play(1); // X
    component.play(4); // O
    component.play(2); // X wins
    expect(component.winner).toEqual('X');
  });

  it('should reset the game', () => {
    component.play(0);
    component.reset();
    expect(component.board).toEqual([null, null, null, null, null, null, null, null, null]);
    expect(component.currentPlayer).toEqual('X');
    expect(component.winner).toBeNull();
  });
});
