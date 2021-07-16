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
import 'bootstrap/dist/css/bootstrap.css'
import 'grapesjs-plugin-export'
//import grapesJSMJML from 'grapesjs-preset-webpage'
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
      fromElement: true,
      canvas: {
        scripts: [
          "https://cdn.jsdelivr.net/npm/vue/dist/vue.js"
        ]
      },

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
      styleManager: {
        clearProperties: true,
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
    bm.get('button').set({
      content:' <a id="i0jmq" class="button" style="box-sizing: border-box; font-size: 12px; padding: 10px 20px; background-color: #3a3939; color: rgb(255, 255, 255); text-align: center; border-radius: 3px; font-weight: 300; text-decoration: none;">Button<br id="infca" style="box-sizing: border-box;"></a>'

    })

    editor.DomComponents.addType('vue_example', {
      model: {
        init() {

          if (typeof this.getAttributes()['custom_att'] === "undefined")
            this.addAttributes({'custom_att': 'default'});

          // Onload, get the latest links
          if (this.getTrait('custom_att') === undefined)
            this.getTrait('custom_att').set('default');

          this.getTrait('custom_att').set('default');

          this.listenTo(this, 'change:attributes', this.reRender);

        },
        removed() {

        },
        defaults: {
          removable: true,
          draggable: true,
          droppable: true,
          badgable: true,
          stylable: true,
          highlightable: true,
          copyable: false,
          resizable: false,
          editable: false,
          hoverable: true,
          traits: [
            {
              type: 'text',
              label: 'Nice',
              name: 'custom_att'
            }
          ],
          script: function(){
            console.log("fonsafksafklas")
            const app1El = document.createElement("div");
            app1El.id = 'app';

            const app1Script = document.createElement("script");
            app1Script.type = "text/javascript";
            app1Script.src = "input-component.vue";

            this.appendChild(app1El);
            this.appendChild(app1Script);
            console.log(app1El)
          }
        },
        reRender() {
          this.view.render();
        }
      },
      isComponent: function (el) {

        if (el.tagName === 'vue_example'){

          return {type: 'vue_example'};}
      }

    });

      editor.BlockManager.add('vue_component', {
        id: 'vue_examples',
        label: 'Vue Test',
        category: 'Vue',
        content: {
          tagName: 'vue_test',
          type: 'vue_example',
          editable: false
        }
      });







    bm.remove('text-sect')
    bm.get('text').set({
      content: '<div style="box-sizing: border-box;padding: 5px; min-height: 10px;">\n' +
          '  Insert your text here\n' +
          '</div>',
    });


    const am = editor.AssetManager;
    am.add({
      id:'1',
      src:'https://i.imgur.com/o1U7zaZ.png'
    })
    am.add({
      id:'2',
      src:'https://i.imgur.com/ZB2WTNU.png'
    })
    am.add({
      id:'3',
      src:'https://i.imgur.com/A4uuhsE.png'
    })
    am.add({
      id:'4',
      src:'https://i.imgur.com/F9dLLUH.png'
    })


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




}
</script>

<style>
.gjs-pn-devices-c {
  right: 50%

}


</style>

