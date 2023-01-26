const xml = new XMLHttpRequest();
const xml2 = new XMLHttpRequest();

xml.open("Get","request/data.json", false);
xml2.open("Get","request/data2.json", false);

xml.send();
xml2.send()

let parse = response => JSON.parse(response);
console.log([...parse(xml.responseText).children, ...parse(xml2.responseText).children])


