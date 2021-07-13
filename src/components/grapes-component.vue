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

export default {
  name: "grapesComponent",
  props:{
    htmlCode:{

    }
  },
  data({htmlCode}) {
    return {
      savedHtml:"",
      code:htmlCode
    };
  },
  watch: {
    code(v) {
      console.log("asdasdasd")
      this.$emit('update:htmlCode',v);
    },
  },

  mounted() {


    // grapesjs equals the grapesjs from the first require line
    const editor=grapesjs.init({
      container: '#gjs',
      blocks: '#blocks',
      fromElement: false,

      Panels: {},
      plugins: [
       grapesJSMJML

      ],
      pluginsOpts: {
        'grapesJSMJML':{

        }
      },
      pageManager: {
        pages: [
          {
            id: 'page-id',
            component: this.htmlCode,
          }
        ]
      },
      blockManager: {

      },
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
          {
            src:'http://placehold.it/350x250/79c267/fff/image3.jpg'
          }
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

    if (editor.getHtml()===''){
      editor.setComponents(this.htmlCode)
    }

    editor.on('update', () => {
      console.log("saved")
     // this.savedHtml=(editor.Commands.get('gjs-get-inlined-html')).run(editor);
      //this.$emit('updateData',this.savedHtml)

     })
    editor.Panels.addPanel({ id: "options" }).get("buttons").add([
      { id: "preview", command: ()=>{
          editor.runCommand('core:preview')
        }, className: "fa fa-eye",
      }
    ]);
    editor.Panels.addPanel({ id: "devices-c" }).get("buttons").add([
      { id: "delete", command: ()=>{
          editor.runCommand('core:canvas-clear')
        }, className: "fa fa-trash",
      }
    ]);
    editor.Panels.addPanel({ id: "options" }).get("buttons").add([
      { id: "save-html", command: ()=>{
        alert("saved")
          this.code=(editor.Commands.get('gjs-get-inlined-html')).run(editor);
          //this.$emit('update:html-code',this.savedHtml)

        }, className: "fa fa-save",
      }
    ]);

  },
  };
</script>

<style>
.gjs-pn-devices-c{
  right: 50%

}

</style>

