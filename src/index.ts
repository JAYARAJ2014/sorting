import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection =new NumbersCollection([10,3,-5,0, 12, 289,33,13,65, 78, 43, 21,91]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
