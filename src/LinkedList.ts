import { Sorter } from "./Sorter";

class Node {
    next: Node | null =null;
    constructor (public data:number){}
}

export class LinkedList extends Sorter  {
    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) {
            throw new Error ('List is empty');
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const lhsData = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = lhsData;
    }

    //head: if null empty linkedlist

    head: Node | null = null;

    add(data: number): void{
        const node = new Node(data);
        /**
         * for the first node added that will become head. 
         */
        if(!this.head) {
            this.head = node;
            return; 
        }

        /**
         * If there is already head, then 
         * we need to add the new element to the last node.
         */

        let tail = this.head; 

        /**
         * iterate until the last node
         */
        while(tail.next){
            tail = tail.next; 
        }

        /**
         * Once last node is found add the newly created node 
         */
        tail.next = node ; 


    }

    get length() : number {

        /**
         * There is no head. That means list is empty
         * Return 0
         */
        if(!this.head) {
            return 0;
        }

        let length: number = 1;
        let tail = this.head ; 
        /**
         * iterate until the last node
         */
        while(tail.next){
            length ++;
            tail = tail.next; 
        }

        return length; 
    }

    /**
     * 
     * @param index the location in the linked list
     * @Returns the Node at that location.
     */
    at(index:number):Node {

            /**
             * List does not have head=>List is empty
             * Cannot get item that does not exist.
             */
            if(!this.head ){
                throw new Error('Index out of bounds');
            }

            let counter = 0; 
            let node: Node | null = this.head; 

            while (node ) {
                if(counter===index) {
                    return node; 
                }
                counter  ++;
                node = node.next; 
            }

            throw new Error('Index out of bounds');
    }


    print():void {
        if (!this.head) {
            return; 
        }

        let node: Node | null = this.head; 

        while(node ) {
            console.log(node.data);
            node = node.next;
        }
    }
}