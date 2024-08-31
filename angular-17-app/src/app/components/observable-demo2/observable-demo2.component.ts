import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  constructor(private httpClient: HttpClient) { }

    ngOnInit(){
      // this.forkJoinDemo();
      // this.withoutMergemap();
      // this.withMergemap();
      this.concatMapDemo();
    }

    forkJoinDemo(){
      const userNames = [2, 5, 8];  // emits user IDs (1, 2, 3, 4) array
      let requests = userNames.map(userName=>{
        return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userName}`);
      });

      forkJoin(requests).subscribe((responses: any)=>{
        console.log(responses);
      });
    }

    withoutMergemap() {
      let userIdPublisher = of([1,3,5,7,9]);
      // Api call
      userIdPublisher.subscribe((userIds: any)=>{
        userIds.forEach((userId: any) => {
          this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe((userDetails: any)=>{
            console.log(userDetails);
          })
        });
      })
    }

    withMergemap(){
      let usersPublisher = of(1, 2, 3, 4);  // emits user IDs (1, 2, 3, 4) individually
      usersPublisher.pipe(
        mergeMap((user) => {
          const url = `https://jsonplaceholder.typicode.com/users/${user}`;
          return this.httpClient.get(url); // inner observable
        })
      ).subscribe((userDetails)=>{
        console.log(userDetails);
      })     
    }

    concatMapDemo(){
      let usersPublisher = of(1, 2, 3, 4);  // emits user IDs (1, 2, 3, 4) individually
      usersPublisher.pipe(
        concatMap((value: any, ind: number) => {
          const url = `https://jsonplaceholder.typicode.com/users/${value}`;
          return this.httpClient.get(url); // inner observable
        })
      ).subscribe((details: any)=>{
        console.log(details);
      })     
    } // order will be always maintained 

}
