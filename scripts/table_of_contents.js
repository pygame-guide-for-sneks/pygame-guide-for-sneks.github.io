let headers = document.getElementsByClassName('js');
let tableOfContents = document.getElementById('toc');

let html = '';

for (let i = 0; i < headers.length; i++) {
    title = headers[i].parentNode.textContent;
    cls = headers[i].getAttribute("id");
    html += '<li><a href="#' + cls + '">' + title + '</a></li>';
}

tableOfContents.innerHTML = html;