window.addEventListener('DOMContentLoaded', () => {
    const params = Object.fromEntries(new URLSearchParams(location.search));

    var diagramEl = document.querySelector(".mermaid-placeholder");
    var titleEl = document.querySelector("h2");
    
    if (params.diagram) {
        console.log("Got diagram", decodeURI(params.diagram))
        diagramEl.innerHTML = decodeURI(params.diagram);
    }

    if (params.title) {
        titleEl.innerText = decodeURI(params.title);
    }

    var config = {
        startOnLoad: true,
        htmlLabels: true,
        callback: function (id) {
            console.log(id, ' rendered');
        },
        flowchart: {
            useMaxWidth: true,
        }
    };

    mermaid.initialize(config);

    titleEl.style.display = "block";

    diagramEl.className = "mermaid"
    diagramEl.style.display = "block";
})