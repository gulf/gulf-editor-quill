# gulf-quill
Convenient [gulf](http://github.com/marcelklehr/gulf#readme) bindings for [quill](http://quilljs.com)

 * Compatible with quill v1.x (0.20 still works, too).

## Install

```
npm install --save gulf-quill
```

## Usage

```js
var bindEditor = require('gulf-quill')

// ...

var doc = bindEditor(quill)

masterStream.pipe(doc.masterLink()).pipe(masterStream)
```

## API
### bindEditor(cm:QuillInstance, [storageAdapter])
  * `cm` -- a quill instance to be wired up with gulf
  * `storageAdapter` -- a gulf storage adapter (optional; defaults to the in-memory Adapter)
  * *returns* the `gulf.EditableDocument` (see [the gulf docs](http://github.com/marcelklehr/gulf#readme); the returned document has the quill Instance set as `quill` property)


## Legal
(c) 2015 by Marcel Klehr

GNU Lesser General Public License
