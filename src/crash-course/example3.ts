import { interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export function init(): void {}

export function run(): void {
  interval(1000).pipe(
    map(x => x * x)
  ).subscribe(x => console.log('Interval1:', x)); // 1 4 9 ..

  interval(1000).pipe(
    filter(x => x % 2 === 0)
  ).subscribe(x => console.log('Interval2:', x)); // 2 4 6 ...

  interval(1000).pipe(
    filter(x => x % 2 === 0),
    map(x => x * x)
  ).subscribe(x => console.log('Interval3:', x)); // 4 16 36 ...
}
