let new_tabs = document.getElementsByClassName("new-tab");
let linked_buttons = document.getElementsByClassName("button-link");
let table_of_contents = document.getElementById('toc');
let linenos = document.getElementsByClassName('lineno');

// Table of contents
function toc() {
    let headers = document.getElementsByClassName('js');
    let html = '';

    for (let i = 0; i < headers.length; i++) {
        title = headers[i].parentNode.textContent;
        cls = headers[i].getAttribute("id");
        html += '<li><a href="#' + cls + '">' + title + '</a></li>';
    }

    table_of_contents.innerHTML = html;
}

if (table_of_contents) {toc(); }

// Links that open new tabs
for (let link of new_tabs) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
}


// Buttons that open links
for (let linked_button of linked_buttons) {
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
        // it just takes the last linked button's url cuz of the loop
        location.href = linked_button.dataset.url;
    }
}

// code blocks with line numbers
// This edits CSS so if your CSS isn't working this is probably overriding
// This also messes with the final html to right-align the line numbers
for (let elem of linenos) {
    let nums = [];
    let new_content = "";
    for (n of elem.textContent.split("\n")) {
        if (n != "") {
            nums.push(n);
        }
    }
    let longest_num = nums[nums.length-2].length;

    for (n of nums) {
        let padding = "";
        for (let i=0; i<longest_num-n.length; i++) {
            padding += " ";
        }
        if (n != nums[-1]) {
            new_content += padding + n + "\n";
        } else {
            new_content += padding + n;
        }
    }
    elem.textContent = new_content;

    elem.style = "width: " + longest_num * 8 + "px;";
    let p = elem.parentElement;
    p.style = "width: " + longest_num * 8 + "px;";
}