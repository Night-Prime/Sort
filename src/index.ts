import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10,3,-5,0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);


//Configuring this alg to work with number, string arrays
