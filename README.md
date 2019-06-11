![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Tagger

Tag Block For EditorJS

![](screentshot\screenshot.png)
### Prerequisites

before you start you need add fontawesome in your project

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" integrity="sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E" crossorigin="anonymous">
```
# Installation
## Install via NPM
Get the package

```
npm i editorjstagger --save
```
Include module at your application
```javascript
import TagElement from './node_module/editorjstagger/index.js';
```
## Other methods
### Loading from CDN
```
<script type="module" src="https://cdn.jsdelivr.net/npm/editorjstagger@latest/index.js"></script>
```
you also have to add css file for default style
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/editorjstagger@latest/index.css">
```

# Usage

Add a new Tool to the tools property of the Editor.js initial config

```javascript
import TagElement from './node_module/editorjstagger/index.js';
// or if you inject Tagger via standalone script
const TagElement = window.TagElement;

var editor = EditorJS({
  ...

  tools: {
    ...
    tag: {
      class: TagElement,
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
