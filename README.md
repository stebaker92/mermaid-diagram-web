# mermaid-diagram-web
A web app that allows you to render [Mermaid](https://mermaid-js.github.io/mermaid/#/) diagrams in the browser via query params

## Query Param Usage
The following query parameters are supported:

- `title=` - Optional header displayed on the page
- `diagram` - Mermaid diagram which needs to be URL encoded


## Usage (JavaScript)
```js
var mermaidMarkdown = ``;
var url = `$https://{myurl}/?diagram=${encodeURI(mermaidMarkdown)}`;
```

## Usage (C#)
```csharp
var mermaidMarkdown = "";

Process.Start(new ProcessStartInfo($"https://{myUrl}/?title=My Diagram&diagram={HttpUtility.UrlEncode(mermaidMarkdown)}") { UseShellExecute = true });
```
