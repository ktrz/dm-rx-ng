import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task3',
  template: `
    <div>
      <h1>Current time - subscribe</h1>
      <p>{{ currentTime }}</p>
    </div>
    <div>
      <h1>Current time - async pipe</h1>
      <p>{{ currentTime$ | async}}</p>
    </div>
  `,
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  currentTime$ = timer(0, 50).pipe(
    map(() => new Date()),
    map(date =>
      `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
    )
    // map(date => date.toLocaleTimeString())
  );
  currentTime = '';

  ngOnInit(): void {
    this.currentTime$
      .pipe(takeUntil(this.destroy$))
      .subscribe(time => {
        this.currentTime = time;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
