class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertNodeAtTail(head, data) {
    if (!(head instanceof SinglyLinkedListNode)) {
        throw new Error('Invalid head parameter: head must be a SinglyLinkedListNode instance');
    }

    if (typeof data !== 'number' || isNaN(data)) {
        throw new Error('Invalid data parameter: data must be a valid number');
    }

    const newNode = new SinglyLinkedListNode(data);
    
    if (head === null) {
        head = newNode;
    } else {
        let current = head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    return head; 
}

module.exports = insertNodeAtTail;
