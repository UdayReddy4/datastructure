const insertNodeAtTail = require('./linkedListNail')

describe('insertNodeAtTail function', () => {
    class SinglyLinkedListNode {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    test('Inserting into an empty list', () => {
        const head = null;
        const data = 5;

        const result = insertNodeAtTail(head, data);

        expect(result.data).toBe(data);
        expect(result.next).toBeNull();
    });

    test('Inserting into a non-empty list', () => {
        const head = new SinglyLinkedListNode(1);
        head.next = new SinglyLinkedListNode(2);
        const data = 3;

        const result = insertNodeAtTail(head, data);

        let current = head;
        while (current.next !== null) {
            current = current.next;
        }

        expect(current.data).toBe(data);
        expect(current.next).toBeNull();
    });

    test('Inserting with invalid head parameter', () => {
        const head = {};
        const data = 5;

        expect(() => insertNodeAtTail(head, data)).toThrow('Invalid head parameter: head must be a SinglyLinkedListNode instance');
    });

    test('Inserting with invalid data parameter', () => {
        const head = new SinglyLinkedListNode(1);
        const data = 'invalid';

        expect(() => insertNodeAtTail(head, data)).toThrow('Invalid data parameter: data must be a valid number');
    });
});
