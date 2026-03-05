# mermaid-diagram-web
A lightweight web app to render [Mermaid](https://mermaid.js.org) diagrams in the browser via URL query params — great for sharing diagrams as links without any login or setup.

[▶ Visit Site](https://stebaker92.github.io/mermaid-diagram-web)
[▶ View live example](https://stebaker92.github.io/mermaid-diagram-web/?diagram=graph%20TD%0AFoo%20--%3E%20Bar%0ABar%20--%3E%20Baz%0ABaz&title=Example)

---

## Query Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `diagram` | Yes | URL-encoded Mermaid diagram syntax |
| `title`   | No  | Optional heading displayed above the diagram |

---

## Generating URLs

The base URL is:
```
https://stebaker92.github.io/mermaid-diagram-web/
```

Your diagram syntax must be **URL-encoded** before being passed as the `diagram` parameter.

### JavaScript

```js
const diagram = `graph TD
    A --> B
    B --> C`;

const url = `https://stebaker92.github.io/mermaid-diagram-web/?diagram=${encodeURIComponent(diagram)}&title=My%20Diagram`;
```

### TypeScript

```ts
function buildMermaidUrl(diagram: string, title?: string): string {
    const params = new URLSearchParams({ diagram, ...(title && { title }) });
    return `https://stebaker92.github.io/mermaid-diagram-web/?${params}`;
}
```

### C#

```csharp
var diagram = @"graph TD
    A --> B
    B --> C";

var url = $"https://stebaker92.github.io/mermaid-diagram-web/?diagram={Uri.EscapeDataString(diagram)}&title=My+Diagram";

// Open in browser
Process.Start(new ProcessStartInfo(url) { UseShellExecute = true });
```

### Python

```python
from urllib.parse import urlencode

diagram = """graph TD
    A --> B
    B --> C"""

url = "https://stebaker92.github.io/mermaid-diagram-web/?" + urlencode({"diagram": diagram, "title": "My Diagram"})
```

---

## Example

This diagram:
```
graph TD
Foo --> Bar
Bar --> Baz
```

Produces this URL:
https://stebaker92.github.io/mermaid-diagram-web/?diagram=graph%20TD%0AFoo%20--%3E%20Bar%0ABar%20--%3E%20Baz&title=Example

---

## Development

Clone the repo and run a local server:

```bash
git clone https://github.com/stebaker92/mermaid-diagram-web.git
cd mermaid-diagram-web
npx serve --single

```
