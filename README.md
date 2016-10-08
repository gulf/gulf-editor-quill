# gulf-editor-quill
[Gulf](http://github.com/gulf/gulf#readme) bindings for [quill](http://quilljs.com)

 * Compatible with quill v1.x (0.20 still works, too).
 * Compatible with gulf v5 only! (For gulf v4, checkout `gulf-quill` package on npm)

## Install

```
npm install --save gulf-editor-quill
```

## Usage

```js
const QuillDocument = require('gulf-editor-quill')

var doc = new QuillDocument({
  editorInstance: quill
})

masterStream.pipe(doc.masterLink()).pipe(masterStream)
```

## API
### class: QuillDocument({editorInstance:QuillInstance, ...}) extends gulf.EditableDocument
  * `editorInstance` -- a quill instance to be wired up with gulf
  * `storageAdapter` -- (optional) a gulf storage adapter. Default is `gulf.MemoryAdapter`
  * `ottype` -- the OT type to use. Default is `rich-text`

## Legal
(c) 2015 by Marcel Klehr

GNU Lesser General Public License
