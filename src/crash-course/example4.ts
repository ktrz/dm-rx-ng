import { fromEvent, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export function init(): void {
  document.body.innerHTML = `
    <button id="myButton">Click me!</button>
  `;
}

export function run(): void {
  const myButton = document.querySelector('#myButton');
  const click$ = fromEvent(myButton, 'click');

  const mergeMapped$ = click$.pipe(
    mergeMap(() => interval(1000))
  );

  mergeMapped$.subscribe(value => console.log(value));
}
