import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  numObservable: Observable<number> | undefined;
  time$: Observable<string> | undefined;

  ngOnInit(){
    // this.testfunction1();
    // this.testfunction2();
    this.testfunction3();
  }

  testfunction1() {
    // publisher
    const observable1 = new Observable((publisher)=>{
      publisher.next('AAAAAAAA');
      publisher.next('BBBBBBBB');
      publisher.next('CCCCCCCC');
      publisher.next('DDDDDDDD');
      publisher.complete();
    });

    // subscriber
    observable1.subscribe(
      (res) => { console.log('partial data', res) },
      (err) => { console.log(err) },
      () => { console.log('completed') }
    )
  }

  testfunction2(){
    // cars is array, not observable
    let cars = ['tata', 'honda', 'maruti', 'hyundai'];
    let carsObservable = from(cars);  // from() is used with array
    carsObservable.subscribe((res: any)=>{
      console.log(res);
    });

    // of() rxjs
    let namesObservable = of('Siva', 'Mona', 'Vikas');  // of() is used with individual values
    namesObservable.subscribe((res: any)=>{
      console.log(res);
    });
    
    // interval
    this.numObservable = interval(2000);
    // const numSubscription = this.numObservable.subscribe((res: any)=>{
    //   console.log(res);
    // });

    // setTimeout(()=>{
    //   numSubscription.unsubscribe();
    // }, 10000);

    const only5 = this.numObservable.pipe(take(5));
    only5.subscribe((res: any)=>{
      console.log(res);
    });
  }

  testfunction3(){
    let myNumbers = range(10, 20);   // 10-29
    myNumbers.subscribe((res: any)=>{
      console.log(res);
    });

    let even_nums = myNumbers.pipe(filter(ele=>ele%2==0));
    even_nums.subscribe((res: any)=>{
      console.log("Even Numbers: ", res);
    });

// subscribing square observable
  let square = even_nums.pipe(map(ele1=>ele1*ele1));
  square.subscribe((res: any)=>{
      console.log("Square Numbers: ", res);
    });

  this.time$ = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
  })

  }
}

