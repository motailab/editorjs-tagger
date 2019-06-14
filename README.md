![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Tagger

Tag Block For EditorJS

![](/screentshot/screenshot.png)
### Prerequisites

# Installation
## Install via NPM
Get the package

```
npm i editorjstagger --save
```
Include module at your application
```javascript
import Tagger from 'node_module/editorjstagger/dist/bundle.js';
```
## Other methods
### Loading from CDN
```
<script src="https://cdn.jsdelivr.net/npm/editorjstagger@latest/dist/bundle.js"></script>
```

# Usage

Add a new Tool to the tools property of the Editor.js initial config

```javascript
import Tagger from 'node_module/editorjstagger/dist/bundle.js';
// or if you inject Tagger via standalone script
const Tagger = window.Tagger;

var editor = new EditorJS({
  ...

  tools: {
    ...
    tag: {
      class: Tagger,
      config: {
          // by default 5 if you want more than five tags change here
          limit: 5,
          // by default TagElement return a array with all tags e.g.. ['world', 'politics', 'trump']
          // if want something like this "world,politics,trump" you can set `as_a_string: true`
          as_a_string: false
      }
    }
  }

  ...
});
```

# Config Params

Tagger supports these configuration parameters:

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| limit | `number: 5` | limit for tags how many you want |
| as_a_string | `boolean: true or false` | if you don't want tags as a array you can set true 
|
