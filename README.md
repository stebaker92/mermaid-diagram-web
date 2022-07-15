# mermaid-diagram-web
Allows you to create Mermaid diagrams via query params.

## Usage - Supported queryParams
- `title` - Optional header displayed on the page
- `diagram` - Mermaid diagram which needs to be URL encoded


## Usage JavaScript
```js
var mermaid = ``
var url = `${myurl}/?diagram=${encodeURI(mermaid)}`
```


## Usage (C#)
```csharp
var diagram = "";

Process.Start(new ProcessStartInfo($"https://{myUrl}/?title=My Diagram&diagram={HttpUtility.UrlEncode(mermaidMarkdown)}") { UseShellExecute = true });
```
