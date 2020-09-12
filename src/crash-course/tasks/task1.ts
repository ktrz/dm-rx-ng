import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export function init(): void {}

export function run(): void {
  const click$ = fromEvent(window, 'click');

  const tripleClick$ = click$.pipe(
    filter((event: UIEvent) => event.detail === 3),
    map((event: MouseEvent) => `(${event.clientX}, ${event.clientY})`)
  );

  const sub = tripleClick$.subscribe(console.log);

  setTimeout(() => {
    sub.unsubscribe();
  }, 10000);
}
