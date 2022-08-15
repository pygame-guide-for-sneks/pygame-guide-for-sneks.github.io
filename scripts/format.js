let new_tabs = document.getElementsByClassName("new-tab");
let linked_buttons = document.getElementsByClassName("button-link");
let table_of_contents = document.getElementById('toc');

// Table of contents
function toc() {
    let headers = document.getElementsByClassName('js');
    let html = '';

    for (let i = 0; i < headers.length; i++) {
        title = headers[i].parentNode.textContent;
        cls = headers[i].getAttribute("id");
        html += '<li><a href="#' + cls + '">' + title + '</a></li>';
    }

    tableOfContents.innerHTML = html;
}

if (table_of_contents) { toc(); }

// Links that open new tabs
for (let i = 0; i < new_tabs.length; i++) {
    new_tabs[i].target = "_blank";
    new_tabs[i].rel = "noopener noreferrer";
}


// Buttons that open links
for (let i = 0; i < linked_buttons.length; i++) {
    linked_button = linked_buttons[i];
    switch (linked_button.dataset.type) {
        case "prev":
            linked_button.innerHTML = "Previous page:<br>" + linked_button.innerHTML;
            break;
        case "next":
            linked_button.innerHTML = "Next page:<br>" + linked_button.innerHTML;
            break;
    }

    linked_button.onclick = function () {
        // HAS to be linked_buttons[i] instead of linked_button; I *think* it's because
        // it just takes the last linked ubtton's url cuz of the loop
        location.href = linked_buttons[i].dataset.url;
    }
}