# mermaid-diagram-web
A web app that allows you to render [Mermaid](https://mermaid-js.github.io/mermaid/#/) diagrams in the browser via query params

## Sample
This link will render the following markdown
```
graph TD
Foo --> Bar
Bar --> Baz
Baz
```
https://stebaker92.github.io/mermaid-diagram-web/?diagram=graph%20TD%0AFoo%20--%3E%20Bar%0ABar%20--%3E%20Baz%0ABaz

## Supported Query Params
The following query parameters are supported:

- `title` - Optional header displayed on the page
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


## Development & Contribution
To run this project, just run `npx http-server-spa .`
