//* DOM NODE TYPES

/*
    TYPE : DESCRIPTION : CHILDREN
1. Element : Represent an element : Element, Text, Comment, ProcessingInstructions, CDATASection, EntityReference
2. Attr : Represents an attribute : Text, EntityReference
3. Text : Represents textual content in an element or attribute : None
4. CDATASection : represents a CDATA section in a document (text that will NOT be parsed by an parser) : None
5. EntityReference : Represents an entity reference : Element, Preprocessing, Comment, Text, CDATASection, EntityReference
6. Entity : Represents an entity : Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
7. ProcessingInstructions : Represents a processing instruction : None
8. Comment : Represents a comment : None
9. Document : Represents the entire document (the root-node of the DOM tree) : Element, ProcessingInstruction, Comment, DocumentType
10. DocumentType : Provides an interface to the entire defined for the document : None
11. DocumentFragment : Represents a 'lightweight' Document object. which can held a portion of a document : Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
12. Notation : Represents a notation declared iin the DTD : None
*/

let output;

/* The line `const parent = document.querySelector(".parent");` is selecting the first element in the
document with a class of "parent" and assigning it to the variable `parent`. */
const parent = document.querySelector(".parent");

/* The line `output = parent.childNodes;` is assigning the list of child nodes of the `parent` element
to the variable `output`. */
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "Childe One";
output = parent.childNodes[3].style.color = "red";

output = parent.firstChild;
output = parent.lastChild;

output = parent.lastChild.textContent = "Hello";

// Parent Node
const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Siblings

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
