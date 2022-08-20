// dom节点转字符串
export default function nodeToString(node) {
    var tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    var str = tmpNode.innerHTML;
    tmpNode = node = null;
    str = str.replace("<", "<").replace(">", ">");
    return str;
}