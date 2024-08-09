import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  standalone: true,
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  constructor(public mathObj: MathService){}

  ngOnInit(){
    console.log('Math2 Component')
    console.log(this.mathObj.a);
    console.log(this.mathObj.b);

    const addResult = this.mathObj.add();
    console.log('Addition:', addResult);

    const mulResult = this.mathObj.add();
    console.log('Multiplication:', mulResult);
  }
}
