interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number):void;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number):boolean;
  abstract swap(leftIndex: number, rightIndex: number):void;
  abstract length: number;

  sort(): void {
    const { length } = this; //es2015 destructuring
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length-i-1; j++) {
        if(this.compare(j, j+1)){
          // swapping occurs here
         this.swap(j, j+1);
        }
      }
    }
  }
}
