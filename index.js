// const xml = new XMLHttpRequest();
// const xml2 = new XMLHttpRequest();
//
// xml.open("Get","request/data.json", false);
// xml2.open("Get","request/data2.json", false);
//
// xml.send();
// xml2.send();
//
// let parse = response => JSON.parse(response);
// console.log([...parse(xml.responseText).children, ...parse(xml2.responseText).children])

function requestData(method, action, callback) {
    const xml = new XMLHttpRequest();
    xml.open(method, action);
    xml.send();
    let parse = response => JSON.parse(response);
    xml.addEventListener("readystatechange", () => {
        if(xml.readyState === 4 && xml.status === 200) {
            const response = parse(xml.responseText).children;

            callback(response);
        }
    })
}
function renderElem(response) {
    response.forEach(item => console.log(item));
}
requestData("GET", "request/data.json", renderElem);
requestData("GET", "request/data2.json", renderElem);