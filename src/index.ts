class Sorter {
    constructor(public collection: number[]){  }
    sort(): void {
        const {length} = this.collection;
        for(let i=0; i<length; i++){ // full iteration

                for (let j=0; j< length - i -1;j ++ ){
                    if(this.collection[j] > this.collection[j+1]){
                        const lhsElement = this.collection[j];
                        this.collection[j]=this.collection[j+1];
                        this.collection[j+1]=lhsElement; 
                    }
                }
        }
    }
}

const sorter = new Sorter([10,3,-5,0, 12, 289,33,13,65, 78, 43, 21,91]);
sorter.sort();
console.log(sorter.collection);
