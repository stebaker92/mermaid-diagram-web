# mermaid-diagram-web
A web app that allows you to render [Mermaid](https://mermaid-js.github.io/mermaid/#/) diagrams in the browser via query params

## Query Param Usage
The following query parameters are supported:

- `title=` - Optional header displayed on the page
- `diagram` - Mermaid diagram which needs to be URL encoded


## Usage (JavaScript)
```js
var mermaidMarkdown = ``;
var url = `https://stebaker92.github.io/mermaid-diagram-web/?diagram=${encodeURI(mermaidMarkdown)}`;
```

## Usage (C#)
```csharp
var mermaidMarkdown = "";

Process.Start(new ProcessStartInfo($"https://stebaker92.github.io/mermaid-diagram-web/?title=My Diagram&diagram={HttpUtility.UrlEncode(mermaidMarkdown)}") { UseShellExecute = true });
```
