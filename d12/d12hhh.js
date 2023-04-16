<script>
// javascript implementation to insert value in sorted way
// in a sorted doubly linked list
// Node of a doubly linked list
class Node
{
constructor()
{
	this.data = 0;
	this.next = null, this.prev = null;
	}
}
	// function to create and return a new node
	// of a doubly linked list
	function getNode(data)
	{
	
		// allocate node
		newNode = new Node();

		// put in the data
		newNode.data = data;
		newNode.prev = newNode.next = null;
		return newNode;

	}

	// function to insert a new node in sorted way in
	// a sorted doubly linked list
	function sortedInsert( head, newNode)
	{
		var current;

		// if list is empty
		if (head == null)
			head = newNode;

		// if the node is to be inserted at the beginning
		// of the doubly linked list
		else if (head.data >= newNode.data)
		{
			newNode.next = head;
			newNode.next.prev = newNode;
			head = newNode;
		}

		else {
			current = head;

			// locate the node after which the new node
			// is to be inserted
			while (current.next != null && current.next.data < newNode.data)
				current = current.next;

			/* Make the appropriate links */
			newNode.next = current.next;

			// if the new node is not inserted
			// at the end of the list
			if (current.next != null)
				newNode.next.prev = newNode;

			current.next = newNode;
			newNode.prev = current;

		}
		return head;
	}

	// function to print the doubly linked list
	function printList( head) {
		while (head != null) {
			document.write(head.data + " ");
			head = head.next;
		}
	}

	// Driver code
	
		/* start with the empty doubly linked list */
		head = null;

		// insert the following nodes in sorted way
		new_node = getNode(8);
		head = sortedInsert(head, new_node);
		new_node = getNode(5);
		head = sortedInsert(head, new_node);
		new_node = getNode(3);
		head = sortedInsert(head, new_node);
		new_node = getNode(10);
		head = sortedInsert(head, new_node);
		new_node = getNode(12);
		head = sortedInsert(head, new_node);
		new_node = getNode(9);
		head = sortedInsert(head, new_node);

		document.write("Created Doubly Linked List<br/>");
		printList(head);

// This code is contributed by umadevi9616
</script>
