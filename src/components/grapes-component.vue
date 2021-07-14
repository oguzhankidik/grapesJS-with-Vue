<template>
  <div>
    <div id="gjs">

    </div>

  </div>
</template>

<script>


import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-plugin-ckeditor'

import 'grapesjs-plugin-export'
import grapesJSMJML from 'grapesjs-preset-newsletter'
import CKEDITOR from 'ckeditor'

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

      pluginsOpts: {
        'gjs-plugin-ckeditor': {
          options: {
            language: 'en',
            startupFocus: true,
            extraAllowedContent: '*(*);*{*}', // Allows any class and any inline style
            allowedContent: true, // Disable auto-formatting, class removing, etc.
            enterMode: 2,
            shiftEnterMode: CKEDITOR.ENTER_DIV,
            uiColor: 'rgba(239,0,0,0.1)', // Inline editor color
            extraPlugins: 'justify,colorbutton,panelbutton,font,sourcedialog,showblocks,sharedspace',

            toolbar: [
              {name: 'styles', items: ['Font', 'FontSize']},
              ['Bold', 'Italic', 'Underline', 'Strike'],
              {name: 'links', items: ['Link', 'Unlink']},
              {name: 'colors', items: ['TextColor', 'BGColor']},
              {name: 'justify', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']}

            ]
          },
          position: 'center',
        },

        'grapesjs-plugin-export': {}

      },
      plugins: [

        grapesJSMJML,
        'gjs-plugin-ckeditor',

        'grapesjs-plugin-export',

      ],


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
            src: 'https://i.imgur.com/o1U7zaZ.png',

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

    const bm = editor.BlockManager;
    bm.remove('text-sect')
    bm.get('text').set({
      content: '<div style="box-sizing: border-box;padding: 5px; min-height: 10px;">\n' +
          '  Insert your text here\n' +
          '</div>',
    });
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

