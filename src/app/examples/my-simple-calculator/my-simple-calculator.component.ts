import { Component } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-simple-calculator',
  template: `
    <input #firstArgument (input)="firstArgumentSubject.next(firstArgument.value)">
    <input #secondArgument (input)="secondArgumentSubject.next(secondArgument.value)">

    <div>Sum {{ sum$ | async }}</div>
  `,
  styleUrls: ['./my-simple-calculator.component.scss']
})
export class MySimpleCalculatorComponent {
  firstArgumentSubject = new Subject<string>();
  secondArgumentSubject = new Subject<string>();

  sum$ = combineLatest([this.firstArgumentSubject, this.secondArgumentSubject])
    .pipe(
      map(([first, second]) => +first + +second)
    );
}
