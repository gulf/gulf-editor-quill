/**
 * gulf-editor-quill
 * Copyright (C) 2015-2016 Marcel Klehr <mklehr@gmx.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var gulf = require('gulf')
  , richtextOT = require('rich-text')

class QuillDocument extends gulf.EditableDocument {
  constructor(opts) {
    super(opts)
    if (!opts.editorInstance) throw new Error('No Quill instance was passed')
    this.quill = opts.editorInstance
  
    quill.on('text-change', (changes, source) => {
      if (source !== 'user') return
      this.submitChange(changes)
    })
  }
 
  _setContent(contents) {
    quill.setContents(contents)
    return Promise.resolve()
  }
  
  _onChange(changes) {
    quill.updateContents(changes)
    return Promise.resolve()
  }
  
  _onBeforeChange() {
    return Promise.resolve()
  }

}
