window.addEventListener('DOMContentLoaded', (event) => {
    const params = Object.fromEntries(new URLSearchParams(location.search));

    if (params.diagram) {
        console.log("Got diagram", decodeURI(params.diagram))
        document.querySelector(".mermaid-placeholder").innerHTML = decodeURI(params.diagram);
    }

    if (params.title) {
        document.querySelector("h2").innerText = decodeURI(params.title);
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

    document.querySelector(".mermaid-placeholder").className = "mermaid"
    document.querySelector(".mermaid").style.display = "block";
    document.querySelector("h2").style.display = "block";
})