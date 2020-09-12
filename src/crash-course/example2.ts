import { fromEvent } from 'rxjs';

export function init(): void {
  document.body.innerHTML = `
    <button id="myButton">Click me!</button>
  `;
}

export function run(): void {
  const myButton = document.querySelector('#myButton');
  const click$ = fromEvent(myButton, 'click');
  click$.subscribe(event => console.log(event));

  const mouseMove$ = fromEvent(window, 'mousemove');
  const mouseSubscription = mouseMove$.subscribe((event: MouseEvent) => {
    console.log(`Mouse: (${event.clientX}, ${event.clientY})`);
  });

  const clicksSubscription = click$.subscribe(() => {
    mouseSubscription.unsubscribe();
    clicksSubscription.unsubscribe();
  });

}
