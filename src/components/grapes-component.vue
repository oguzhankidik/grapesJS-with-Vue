<template>
  <div>
    <div id="gjs">

    </div>

  </div>
</template>

<script >


import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import grapesJSMJML from 'grapesjs-preset-newsletter'
import ckeditor from 'grapesjs-plugin-ckeditor'
//import CKEDITOR from '@ckeditor/ckeditor5-build-classic'
//import grapesWEB from 'grapesjs-preset-webpage'


export default {
  name: "grapesComponent",
  props: {
    htmlCode: {}
  },


  data({htmlCode}) {
    return {
      savedHtml: "",
      code: htmlCode
    };
  },


  watch: {
    code(v) {
      console.log("asdasdasd")
      this.$emit('update:htmlCode', v);
    },
  },

  mounted() {
    const editor = grapesjs.init({
      container: '#gjs',
      blocks: '#blocks',
      fromElement: false,

      Panels: {},
      plugins: [
        ckeditor,
        grapesJSMJML,


      ],

      pluginsOpts: {
       'ckeditor': {
          options: {
            language: 'en',
            startupFocus: false,
            extraAllowedContent: '*(*);*{*}', // Allows any class and any inline style
            allowedContent: true, // Disable auto-formatting, class removing, etc.
           // enterMode: CKEDITOR.ENTER_BR,
            uiColor: '#0000001a', // Inline editor color
            extraPlugins: 'justify,colorbutton,panelbutton,font,sourcedialog,showblocks',
            toolbar:[
              [ "Format", "-", "Bold", "Italic", "Strike", "Underline", "Subscript", "Superscript", "RemoveFormat", "-", "NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", ]
            ]
          },
          position: 'left',
        },

        'grapesJSMJML': {},

      },
      pageManager: {
        pages: [
          {}
        ]
      },
      blockManager: {},
      assetManager: {
        assets: [
          'http://placehold.it/350x250/78c5d6/fff/image1.jpg',
          // Pass an object with your properties
          {
            type: 'image',
            src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
            height: 350,
            width: 250
          },
          {
            // As the 'image' is the base type of assets, omitting it will
            // be set as `image` by default
            src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',

          },
        ],
      },


      storageManager: {

        id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
        type: 'local',          // Type of the storage
        autosave: true,        // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: true,      // Enable/Disable storing of rules in JSON format
        storeHtml: true,        // Enable/Disable storing of components as HTML string
        storeCss: true,         // Enable/Disable storing of rules as CSS string
      }

    })

   /* const rte = editor.RichTextEditor;
    /*rte.add('link', {
      icon: document.getElementById('t'),
      attributes: {title: 'Link',},
      // Example on it's easy to wrap a selected content
      result: rte => rte.insertHTML(`<a href="#">${rte.selection()}</a>`)
    });*/
    /*rte.add('fontSize', {
      icon: `<select class="gjs-field" style="color: white">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
      </select>`,
      // Bind the 'result' on 'change' listener
      event: 'change',
      result: (rte, action) => rte.exec('fontSize', action.btn.firstChild.value),
      // Callback on any input change (mousedown, keydown, etc..)
      update: (rte, action) => {
        const value = rte.doc.queryCommandValue(action.name);
        if (value != 'false') { // value is a string
          action.btn.firstChild.value = value;
        }
      }
    })*/

    const am = editor.AssetManager;
    am.add('https://i.imgur.com/o1U7zaZ.png')
    am.add('https://i.imgur.com/ZB2WTNU.png')
    am.add('https://i.imgur.com/A4uuhsE.png')
    am.add('https://i.imgur.com/F9dLLUH.png')
    if (editor.getHtml() === '') {
      editor.setComponents(this.htmlCode)
    }

    editor.on('update', () => {
      console.log("saved")
      this.savedHtml = (editor.Commands.get('gjs-get-inlined-html')).run(editor);
      this.$emit('update:html-code', this.savedHtml)

    })

     editor.Panels.addPanel({id: "devices-c"}).get("buttons").add([
      {
        id: "preview", command: () => {
          editor.runCommand('core:preview')
        }, className: "fa fa-eye",
      }
    ]);

    editor.Panels.addPanel({id: "options"}).get("buttons").add([
      {
        id: "delete", command: () => {
          editor.runCommand('core:canvas-clear')
        }, className: "fa fa-trash",
      }
    ]);

    editor.Panels.addPanel({id: "options"}).get("buttons").add([
      {
        id: "save-html", command: () => {
          alert("saved")
          this.code = (editor.Commands.get('gjs-get-inlined-html')).run(editor);
          this.$emit('update:html-code', this.savedHtml)

        }, className: "fa fa-save",
      }
    ]);

  },
};
</script>

<style>
.gjs-pn-devices-c {
  right: 50%

}

</style>

