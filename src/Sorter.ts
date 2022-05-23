import { NumbersCollection } from "./NumbersCollection";
export class Sorter {
  constructor(public collection:NumbersCollection ) {}

  sort(): void {
    const { length } = this.collection; //es2015 destructuring
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length-i-1; j++) {
        if(this.collection.compare(j, j+1)){
          // swapping occurs here
         this.collection.swap(j, j+1);
        }
      }
    }
  }
}
