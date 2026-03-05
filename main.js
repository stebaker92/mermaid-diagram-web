window.addEventListener('DOMContentLoaded', () => {
    const params = Object.fromEntries(new URLSearchParams(location.search));
    const diagramEl = document.querySelector('.mermaid');
    const titleEl = document.querySelector('h2');

    let currentDiagram;
    let currentTitle;

    if (params.diagram) {
        currentDiagram = params.diagram;
        currentTitle = params.title || '';
    } else {
        currentDiagram = `graph TD\n    A --> B\n    B --> C`;
        currentTitle = 'Sample Diagram';
    }

    titleEl.innerText = currentTitle;
    if (currentTitle) document.title = `${currentTitle} — Mermaid Renderer`;

    mermaid.initialize({ startOnLoad: false, htmlLabels: true, flowchart: { useMaxWidth: true } });
    renderDiagram(currentDiagram);

    // Edit modal
    const modal = document.getElementById('editModal');
    const textarea = document.getElementById('diagramInput');
    const titleInput = document.getElementById('titleInput');

    document.getElementById('editBtn').addEventListener('click', () => {
        textarea.value = currentDiagram;
        titleInput.value = currentTitle;
        modal.classList.add('open');
        titleInput.focus();
    });

    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    document.getElementById('updateBtn').addEventListener('click', () => {
        const text = textarea.value.trim();
        if (!text) return;
        currentDiagram = text;
        currentTitle = titleInput.value.trim();
        titleEl.innerText = currentTitle;
        document.title = currentTitle ? `${currentTitle} — Mermaid Renderer` : 'Mermaid Renderer';
        const qs = new URLSearchParams({ diagram: text, ...(currentTitle && { title: currentTitle }) });
        history.replaceState(null, '', `${location.pathname}?${qs}`);
        renderDiagram(text);
        closeModal();
    });

    // Share
    document.getElementById('shareBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(location.href).then(() => showToast('Link copied!'));
    });

    // Download SVG
    document.getElementById('downloadSvgBtn').addEventListener('click', () => {
        const svg = document.querySelector('svg');
        if (!svg) return;
        const blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = (currentTitle || 'diagram') + '.svg';
        a.click();
        URL.revokeObjectURL(a.href);
    });

    // Download PNG
    document.getElementById('downloadPngBtn').addEventListener('click', () => {
        const svg = document.querySelector('svg');
        if (!svg) return;
        const { width, height } = svg.getBoundingClientRect();
        const clone = svg.cloneNode(true);
        clone.setAttribute('width', width);
        clone.setAttribute('height', height);
        const svgData = new XMLSerializer().serializeToString(clone);
        const bytes = new TextEncoder().encode(svgData);
        const base64 = btoa(bytes.reduce((s, b) => s + String.fromCharCode(b), ''));
        const dataUrl = 'data:image/svg+xml;base64,' + base64;
        const img = new Image();
        img.onload = () => {
            const scale = 2; // 2x for sharp output
            const canvas = document.createElement('canvas');
            canvas.width = width * scale;
            canvas.height = height * scale;
            const ctx = canvas.getContext('2d');
            ctx.scale(scale, scale);
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            const a = document.createElement('a');
            a.download = (currentTitle || 'diagram') + '.png';
            a.href = canvas.toDataURL('image/png');
            a.click();
        };
        img.src = dataUrl;
    });

    function closeModal() { modal.classList.remove('open'); }

    function renderDiagram(text) {
        diagramEl.removeAttribute('data-processed');
        diagramEl.innerHTML = text;
        if (typeof mermaid.run === 'function') {
            mermaid.run({ nodes: [diagramEl] }).catch(console.error);
        } else {
            mermaid.init(undefined, diagramEl);
        }
    }

    function showToast(msg) {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }
});
