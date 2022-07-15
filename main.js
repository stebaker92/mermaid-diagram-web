window.addEventListener('DOMContentLoaded', () => {
    const params = Object.fromEntries(new URLSearchParams(location.search));

    var diagramEl = document.querySelector(".mermaid");
    var titleEl = document.querySelector("h2");

    if (params.diagram) {
        console.log("Got diagram", decodeURI(params.diagram))
        diagramEl.innerHTML = decodeURI(params.diagram);
        titleEl.innerText = decodeURI(params.title || '');
    } else {
        diagramEl.innerHTML = `graph TD
        A --> B
        B --> C
        C`
        titleEl.innerText = "Sample Diagram";
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
})
