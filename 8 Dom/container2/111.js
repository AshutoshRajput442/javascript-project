


//-----"Traversing the DOM: Accessing Root, HTML, Head, and Body Nodes in JavaScript"




//----------------------------------------parent - child realtionship-------------------


const rootNode = document.getRootNode();
console.log(rootNode);

//  ----------root ke child
const html_element_rootNode = rootNode.childNodes;
console.log(html_element_rootNode);     // nodelist dega
console.log(html_element_rootNode[0]);  // html 
console.dir(html_element_rootNode[0]);  // html in object form

//  ----------html ke child
const rn = html_element_rootNode[0].childNodes;       //childrootNode.childNodes wrong
console.log(rn);       // head  text  body












// //  ----------html ke child first

console.log(rn[0])  // or  indirect 

 

// ------------- root ke 0 (html)  ka    child ka 0(head)
const headnode0 = html_element_rootNode[0].childNodes[0]
const headnode1 = html_element_rootNode[0].childNodes[1]
const headnode2 = html_element_rootNode[0].childNodes[2]
console.log("head 0: ", headnode0)
console.log(headnode1)
console.log(headnode2)



//----------------------------------------next element

console.log(headnode0.nextSibling)
console.log(headnode0.nextSibling.nextSibling)
console.log(headnode0.nextSibling.nextSibling.nextSibling)   //null




//--------------head ke child--------------------------------


const head_ka_child = html_element_rootNode[0].childNodes
console.log("head ke child ",head_ka_child)



