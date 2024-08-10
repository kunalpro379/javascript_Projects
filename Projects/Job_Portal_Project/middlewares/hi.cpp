#include <iostream>
#include <map>
using namespace std;

class Node
{
public:
    Node *head;
    int data;
    Node *next;

    // creating a constructor for the node
    Node(int d)
    {
        this->next = NULL;
        this->data = d;
    }
};

Node *printList(Node *head)
{
    // if head is null return head
    if (head == NULL)
    {
        return head;
    }
    Node *temp = head;
    while (temp != NULL)
    {
        cout << temp->data << endl;
        temp = temp->next;
    }
}

Node *ReverseLinkedListAtKGroups(Node *head, int k)
{
    // this is the recursive approach
    // base case:
    if (head == NULL || head->next == NULL)
    {
        return head;
    }
    Node *nextnode = NULL;
    Node *curr = head;
    Node *prev = NULL;
    int count = 0;

    while (curr != NULL && count < k)
    {
        nextnode = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextnode;
        count++;
    }

    // Rest will be done recursively

    if (nextnode != NULL)
    {

        head->next = ReverseLinkedListAtKGroups(nextnode, k);
    }

    return prev;
}

bool DetectCycle(Node *head)
{
    if (head == NULL)
    {
        return false;
    }
    Node *temp = head;
    map<Node *, bool> visited;
    if (visited[temp] == true)
    {
        return true;
    }
    while (temp != NULL)
    {
        visited[temp] = true;
        temp = temp->next;
    }
    return false;
}

Node *floydCycleDetectionAlgorithm(Node *head)
{
    if (head == NULL)
        return NULL;

    Node *slow = head;
    Node *fast = head;
    while (slow != NULL && fast != NULL)
    {
        fast = fast->next;
        if (fast != NULL)
        {
            fast = fast->next;
        }
        slow = slow->next;
        if (fast == slow)
        {
            cout << "Cycle is present at" << slow->data << endl;
        }
        return slow;
    }
    return NULL;
}

Node *startoftheloop(Node *head)
{
    if (head == NULL)
    {
        return NULL;
    }
    Node *intersection = floydCycleDetectionAlgorithm(head);
    Node *slow = head;
    while (slow != intersection)
    {
        slow = slow->next;
        intersection = intersection->next;
    }
    return slow;
}

int main()
{
    // Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> NULL
    Node *head = new Node(1);
    head->next = new Node(2);
    Node *node1 = head->next;
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);
    head->next->next->next->next->next = new Node(6);
    head->next->next->next->next->next->next = new Node(7);
    head->next->next->next->next->next->next->next = new Node(8);
    head->next->next->next->next->next->next->next->next = new Node(9);

    // Creating a cycle for testing
    head->next->next->next->next->next->next->next->next->next = node1; // Creating a cycle (9->2)

    cout << "Cycle detection using hash map: ";
    if (DetectCycle(head))
    {
        cout << "Cycle detected." << endl;
    }
    else
    {
        cout << "No cycle detected." << endl;
    }

    cout << "Cycle detection using Floyd's algorithm: ";
    Node *intersection = floydCycleDetectionAlgorithm(head);
    if (intersection != NULL)
    {
        cout << "Cycle detected." << endl;
        Node *start = startoftheloop(head);
        cout << "Start of the loop is at node with data: " << start->data << endl;
    }
    else
    {
        cout << "No cycle detected." << endl;
    }

    // Breaking the cycle for further operations
    head->next->next->next->next->next->next->next->next->next = NULL;

    cout << "Linked list before reversal: ";
    printList(head);

    int k = 2;
    head = ReverseLinkedListAtKGroups(head, k);
    cout << "Linked list after reversal in groups of " << k << ": ";
    printList(head);

    return 0;
    // cout<<"Linked list before reversal"<<endl;
    // printList(head);
    // int k =2;
    // head = ReverseLinkedListAtKGroups(head,k);
    // cout<<"Linked list after reversal"<<endl;
    // printList(head);
}