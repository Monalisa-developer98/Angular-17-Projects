import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math3',
  standalone: true,
  imports: [],
  templateUrl: './math3.component.html',
  styleUrl: './math3.component.css',
  providers: [MathService] /// providers will have new instance here,, math1, math2 are using same instance. math3 is using different instance
})

//// math1 and math2 are sharing the same instance, math3 has new instance

export class Math3Component {
  constructor(public mathObj: MathService){}
}
 