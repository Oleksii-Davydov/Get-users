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

let data = []

function requestData(method, action, callback) {
    const xml = new XMLHttpRequest();
    xml.open(method, action);
    xml.send();
    let parse = response => JSON.parse(response);
    xml.addEventListener("readystatechange", () => {
        if (xml.readyState === 4 && xml.status === 200) {
            const response = parse(xml.responseText).children;
            data = data.concat(response);
            if (typeof callback === 'function') {
                callback(data);
            }
        }
    })
}

const renderElem = function (response) {
    console.log(response);
}

requestData("GET", `${"request/data.json"}`);
requestData("GET", "request/data2.json", renderElem);

