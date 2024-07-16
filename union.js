var myVar;
myVar = "34";
function getValue(value) {
    var no;
    if (typeof value == "string") {
        return (no = Number(value.length));
    }
    no = +value;
    return Number(no);
}
console.log("*******", getValue("getting"));
