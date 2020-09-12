import { fromEvent, timer } from 'rxjs';
import { concatMap, exhaustMap, map, switchMap, take } from 'rxjs/operators';

export function init(): void {
  document.body.innerHTML = `
    <button id="myButton">Click me!</button>

    <div>
      <h1>Timer</h1>
      <div id="timer">0</div>
    </div>
    <div>
      <h1>Switch map</h1>
      <div id="switch">0</div>
    </div>
    <div>
      <h1>Exhaust map</h1>
      <div id="exhaust">0</div>
    </div>
    <div>
      <h1>Concat map</h1>
      <div id="concat">0</div>
    </div>
  `;
}

export function run(): void {
  const button = document.querySelector('#myButton');
  const click$ = fromEvent(button, 'click');

  const time$ = timer(0, 1000)
    .pipe(
      map(v => v + 1),
      take(5)
    );

  const switchMapped$ = click$.pipe(
    switchMap(() => time$)
  );
  const exhaustMapped$ = click$.pipe(
    exhaustMap(() => time$)
  );
  const concatMapped$ = click$.pipe(
    concatMap(() => time$)
  );

  const timerEl = document.querySelector('#timer');
  const switchEl = document.querySelector('#switch');
  const exhaustEl = document.querySelector('#exhaust');
  const concatEl = document.querySelector('#concat');

  time$.subscribe(v => timerEl.innerHTML = v.toString());
  switchMapped$.subscribe(v => switchEl.innerHTML = v.toString());
  exhaustMapped$.subscribe(v => exhaustEl.innerHTML = v.toString());
  concatMapped$.subscribe(v => concatEl.innerHTML = v.toString());
}
