import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  standalone: true,
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(public mathObj: MathService){} // dependency injection

  // when we make the dependency injection public, it will accessible in html,,, so make it private

  ngOnInit(){
    console.log('Math1 Component')
    console.log(this.mathObj.a);
    console.log(this.mathObj.b);

    const addResult = this.mathObj.add();
    console.log('Addition:', addResult);

    const mulResult = this.mathObj.mul();
    console.log('Multiplication:', mulResult);
  }

  updateA(){
    this.mathObj.a = 15;
  }

}
