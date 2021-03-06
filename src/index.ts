import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection =new NumbersCollection([10,3,-5,0, 12, 289,33,13,65, 78, 43, 21,91]);
numbersCollection.sort();
console.log(numbersCollection.data);

 const charCollection = new CharacterCollection('Hello World');
charCollection.sort();
 console.log(charCollection.data);


 const linkedList = new LinkedList();
 linkedList.add(99);
 linkedList.add(87);
 linkedList.add(37);
 linkedList.add(-7);

 console.log('Before Sort');
 linkedList.print();
 console.log('After Sort');
 linkedList.sort();
linkedList.print();