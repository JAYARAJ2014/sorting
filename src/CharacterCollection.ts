import { Sortable } from "./Sortable";

export class CharacterCollection implements Sortable{
    constructor(public data: string){}

    get length(): number{
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }
    swap(leftIndex: number, rightIndex: number): void {
        const chars = this.data.split('');
        const lhsValue = chars[leftIndex];
        chars[leftIndex]=chars[rightIndex];
        chars[rightIndex]=lhsValue;

        this.data = chars.join('');
    }

}