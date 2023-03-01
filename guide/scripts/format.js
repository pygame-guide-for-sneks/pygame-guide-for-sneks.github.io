let newTabs = document.getElementsByClassName("new-tab");
let linkedButtons = document.getElementsByClassName("button-link");
let tableOfContents = document.getElementById('toc');
let linenos = document.getElementsByClassName('lineno');
let headers = document.getElementsByClassName('js');

// Table of contents
function toc() {
    let html = '';

    for (let h of headers) {
        title = h.textContent;
        cls = h.getAttribute("id");
        h.href = '#' + cls;
        html += '<li><a href="#' + cls + '">' + title + '</a></li>';
    }

    tablOfContents.innerHTML = html;
}

if (tableOfContents) {
    toc();
}

// Links that open new tabs
for (let link of newTabs) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
}


// Buttons that open links
for (let linkedButton of linkedButtons) {
    switch (linkedButton.dataset.type) {
        case "prev":
            linkedButton.innerHTML = "Previous page:<br>" + linkedButton.innerHTML;
            break;
        case "next":
            linkedButton.innerHTML = "Next page:<br>" + linkedButton.innerHTML;
            break;
    }

    linkedButton.onclick = () => {
        location.href = linkedButton.dataset.url;
    }
}

// code blocks with line numbers
// This edits CSS so if your CSS isn't working this is probably overriding
// This also messes with the final html to right-align the line numbers
for (let elem of linenos) {
    let nums = [];
    let newContent = "";
    for (n of elem.textContent.split("\n")) {
        if (n !== "") {
            nums.push(n);
        }
    }
    let longestNum = nums[nums.length-2].length;

    for (n of nums) {
        let padding = "";
        for (let i=0; i<longestNum-n.length; i++) {
            padding += " ";
        }
        if (n !== nums[-1]) {
            newContent += padding + n + "\n";
        } else {
            newContent += padding + n;
        }
    }
    elem.textContent = newContent;

    elem.style = `width: ${longestNum * 8}px;`;
    elem.parentElement.style = `width: ${longestNum * 8}px;`;
}
