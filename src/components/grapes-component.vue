<template>
  <div >
    <div id="gjs">

    </div>

  </div>
</template>

<script >


require("grapesjs-mjml"); // this is a plugin for grapes js > https://github.com/artf/grapesjs-blocks-basic
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

export default {
  name: "grapesComponent",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {


    // grapesjs equals the grapesjs from the first require line
    const editor=grapesjs.init({
      container: '#gjs',
      blocks: '#blocks',
      fromElement: true,
      Panels: {},
      commands: {
        defaults: [
          {
            // id and run are mandatory in this case
            id: 'my-command-id',
            run() {
              alert('This is my command');
            },
          },
        ],
      },
      blockManager: {

        appendTo: '#blocks',
        blocks: [
          {
            id: 'image',
            label: 'Image',
            // Select the component once it's dropped
            select: true,
            style:{position:'absolute'},
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: {type: 'image'},
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          }
        ],
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
        ],
      },
      plugins: [
        'gjs-mjml',
        myNewComponentTypes
      ],

      storageManager: {
        id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
        type: 'local',          // Type of the storage
        autosave: false,         // Store data automatically
        autoload: false,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: true,      // Enable/Disable storing of rules in JSON format
        storeHtml: true,        // Enable/Disable storing of components as HTML string
        storeCss: true,         // Enable/Disable storing of rules as CSS string
      }

    })
    const blockManager = editor.BlockManager;
    const commands = editor.Commands;
    editor.DomComponents.addType('my-input-type', {
      // Make the editor understand when to bind `my-input-type`
      isComponent: el => el.tagName === 'INPUT',

      // Model definition
      model: {
        // Default properties
        defaults: {
          tagName: 'input',
          draggable: 'form, form *', // Can be dropped only inside `form` elements
          droppable: false, // Can't drop other elements inside
          attributes: { // Default attributes
            type: 'text',
            name: 'default-name',
            placeholder: 'Insert text here',
          },
          traits: [
            'name',
            'placeholder',
            { type: 'checkbox', name: 'required' },
          ],
        }
      }
    });
    const myNewComponentTypes = editor => {
      editor.DomComponents.addType(/* API for component type definition */);
    };
    // eslint-disable-next-line no-unused-vars
    commands.add('my-command-id',editor => {
      alert('This is my command');
    });
    commands.add('my-command-id', {
      // eslint-disable-next-line no-unused-vars
      run(editor) {
        alert('This is my commandss');
      },
    });


    blockManager.add('one-three-table', {
      id: '1/3table',
      label: '1/3table',
      category: 'Tables',
      attributes: { class: 'mdi-application',},
      content: `
      <table style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;" width="100%" height="150">
  <tbody style="box-sizing: border-box;">
    <tr style="box-sizing: border-box;">
      <td  style="box-sizing: border-box; font-size: 12px; font-weight: 300; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0; width: 33.3333%;" width="33.3333%" valign="top">
      </td>
      <td  style="box-sizing: border-box; font-size: 12px; font-weight: 300; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0; width: 33.3333%;" width="33.3333%" valign="top">
      </td>
      <td  style="box-sizing: border-box; font-size: 12px; font-weight: 300; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0; width: 33.3333%;" width="33.3333%" valign="top">
      </td>
    </tr>
  </tbody>
</table>
    `,
    })
    blockManager.add('one-section', {
      id: 'one-section',
      label: '1 section',
      category: 'Tables',
      attributes: { class: 'fa fa-table',},
      content: `
      <table style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;" width="100%" height="150">
  <tbody style="box-sizing: border-box;">
    <tr style="box-sizing: border-box;">
      <td  style="box-sizing: border-box; font-size: 12px; font-weight: 300; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0;" valign="top">
      </td>
    </tr>
  </tbody>
</table>
    `,
    })
    blockManager.add('one-two-table', {
      id: '1/2table',
      label: '1/2 table',
      category: 'Tables',
      attributes: { class: 'fa fa-table',},
      content: `
      <table style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;" width="100%" height="150">
  <tbody style="box-sizing: border-box;">
    <tr style="box-sizing: border-box;">
      <td style="box-sizing: border-box; font-size: 12px; font-weight: 300; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0; width: 50%;" width="50%" valign="top">
      </td>
      <td  style="box-sizing: border-box; font-size: 12px; font-weight: 300; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0; width: 50%;" width="50%" valign="top">
      </td>
    </tr>
  </tbody>
</table>
    `,
    })
    blockManager.add('button', {
      id: 'button',
      label: 'Button',
      category: 'Buttons',
      attributes: { class: 'fa fa-table',},
      content: `
      <a class="button" style="box-sizing: border-box; font-size: 12px; padding: 10px 20px; background-color: rgb(217, 131, 166);
      color: rgb(255, 255, 255); text-align: center; font-weight: 300;">Button</a>
    `,
    })
    blockManager.add('divider', {
      id: 'divider',
      label: 'Divider',
      category: 'Tables',
      attributes: { class: 'fa fa-table',},
      content: `
         <table
    style = "box-sizing: border-box; width: 100%; margin-top: 10px; margin-bottom: 10px;"
    width = "100%" >
        <tbody
    style = "box-sizing: border-box;" >
        <tr
    style = "box-sizing: border-box;" >
        <td
    className = "divider"
    style = "box-sizing: border-box; background-color: rgba(0, 0, 0, 0.1); height: 1px;"
    height = "1"
    bgcolor = "rgba(0, 0, 0, 0.1)" >
        </td>
  </tr>
  </tbody>
  </table>
    `,
    })
    blockManager.add('Text', {
      id: 'text',
      label: 'Text',
      category: 'Tables',
      attributes: { class: 'fa fa-table',},
      content: `<div style="box-sizing: border-box; padding: 10px;">Insert your text here</div>`,
    })
    blockManager.add('TextSection', {
      id: 'TextSection',
      label: 'Text Section',
      category: 'Tables',
      attributes: { class: 'fa fa-table',},
      content: `<h1 class="heading" style="box-sizing: border-box;">Insert title here</h1>
<p class="paragraph" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
</p>`,
    })
    blockManager.add('Link', {
      id: 'link',
      label: 'Link',
      category: 'Tables',
      attributes: { class: 'fa fa-table',},
      content: `<a style="box-sizing: border-box; color: #3b97e3;">Link</a>`,
    })
    blockManager.add('Grid', {
      id: 'Grid',
      label: 'Grid View',
      category: 'Tables',
      attributes: { class: 'fa fa-table',},
      content: `<table class="grid-item-row" style="box-sizing: border-box; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; width: 100%;" width="100%">
  <tbody style="box-sizing: border-box;">
    <tr style="box-sizing: border-box;">
      <td class="grid-item-cell2-l" style="box-sizing: border-box; vertical-align: top; padding-right: 10px; width: 50%;" width="50%" valign="top">
        <table class="grid-item-card" style="box-sizing: border-box; width: 100%; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; margin-bottom: 10px;" width="100%">
          <tbody style="box-sizing: border-box;">
            <tr style="box-sizing: border-box;">
              <td class="grid-item-card-cell" style="box-sizing: border-box; background-color: rgb(255, 255, 255); overflow-x: hidden; overflow-y: hidden; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; text-align: center; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" bgcolor="rgb(255, 255, 255)" align="center">
                <img src="http://placehold.it/250x150/78c5d6/fff/" alt="Image" class="grid-item-image" style="box-sizing: border-box; line-height: 150px; font-size: 50px; color: rgb(120, 197, 214); margin-bottom: 15px; width: 100%;">
                <table class="grid-item-card-body" style="box-sizing: border-box;">
                  <tbody style="box-sizing: border-box;">
                    <tr style="box-sizing: border-box;">
                      <td class="grid-item-card-content" style="box-sizing: border-box; font-size: 13px; color: rgb(111, 119, 125); padding-top: 0px; padding-right: 10px; padding-bottom: 20px; padding-left: 10px; width: 100%; line-height: 20px;" width="100%">
                        <h1 class="card-title" style="box-sizing: border-box; font-size: 25px; font-weight: 300; color: rgb(68, 68, 68);">Title here
                        </h1>
                        <p class="card-text" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td class="grid-item-cell2-r" style="box-sizing: border-box; vertical-align: top; padding-left: 10px; width: 50%;" width="50%" valign="top">
        <table class="grid-item-card" style="box-sizing: border-box; width: 100%; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; margin-bottom: 10px;" width="100%">
          <tbody style="box-sizing: border-box;">
            <tr style="box-sizing: border-box;">
              <td class="grid-item-card-cell" style="box-sizing: border-box; background-color: rgb(255, 255, 255); overflow-x: hidden; overflow-y: hidden; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; text-align: center; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" bgcolor="rgb(255, 255, 255)" align="center">
                <img src="http://placehold.it/250x150/78c5d6/fff/" alt="Image" class="grid-item-image" style="box-sizing: border-box; line-height: 150px; font-size: 50px; color: rgb(120, 197, 214); margin-bottom: 15px; width: 100%;">
                <table class="grid-item-card-body" style="box-sizing: border-box;">
                  <tbody style="box-sizing: border-box;">
                    <tr style="box-sizing: border-box;">
                      <td class="grid-item-card-content" style="box-sizing: border-box; font-size: 13px; color: rgb(111, 119, 125); padding-top: 0px; padding-right: 10px; padding-bottom: 20px; padding-left: 10px; width: 100%; line-height: 20px;" width="100%">
                        <h1 class="card-title" style="box-sizing: border-box; font-size: 25px; font-weight: 300; color: rgb(68, 68, 68);">Title here
                        </h1>
                        <p class="card-text" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`,
    })
    blockManager.add('list-view', {
      id: 'listView',
      label: 'List View',
      category: 'Tables',
      attributes: { class: 'fa fa-table',},
      content: `<table class="list-item" style="box-sizing: border-box; height: auto; width: 100%; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" width="100%">
  <tbody style="box-sizing: border-box;">
    <tr style="box-sizing: border-box;">
      <td class="list-item-cell" style="box-sizing: border-box; background-color: rgb(255, 255, 255); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" bgcolor="rgb(255, 255, 255)">
        <table class="list-item-content" style="box-sizing: border-box; border-collapse: collapse; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 150px; width: 100%;" width="100%" height="150">
          <tbody style="box-sizing: border-box;">
            <tr class="list-item-row" style="box-sizing: border-box;">
              <td class="list-cell-left" style="box-sizing: border-box; width: 30%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" width="30%">
                <img src="http://placehold.it/150x150/78c5d6/fff/" alt="Image" class="list-item-image" style="box-sizing: border-box; color: rgb(217, 131, 166); font-size: 45px; width: 100%;">
              </td>
              <td class="list-cell-right" style="box-sizing: border-box; width: 70%; color: rgb(111, 119, 125); font-size: 13px; line-height: 20px; padding-top: 10px; padding-right: 20px; padding-bottom: 0px; padding-left: 20px;" width="70%">
                <h1 class="card-title" style="box-sizing: border-box; font-size: 25px; font-weight: 300; color: rgb(68, 68, 68);">Title here
                </h1>
                <p class="card-text" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<table class="list-item" style="box-sizing: border-box; height: auto; width: 100%; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" width="100%">
  <tbody style="box-sizing: border-box;">
    <tr style="box-sizing: border-box;">
      <td class="list-item-cell" style="box-sizing: border-box; background-color: rgb(255, 255, 255); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" bgcolor="rgb(255, 255, 255)">
        <table class="list-item-content" style="box-sizing: border-box; border-collapse: collapse; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 150px; width: 100%;" width="100%" height="150">
          <tbody style="box-sizing: border-box;">
            <tr class="list-item-row" style="box-sizing: border-box;">
              <td class="list-cell-left" style="box-sizing: border-box; width: 30%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" width="30%">
                <img src="http://placehold.it/150x150/78c5d6/fff/" alt="Image" class="list-item-image" style="box-sizing: border-box; color: rgb(217, 131, 166); font-size: 45px; width: 100%;">
              </td>
              <td class="list-cell-right" style="box-sizing: border-box; width: 70%; color: rgb(111, 119, 125); font-size: 13px; line-height: 20px; padding-top: 10px; padding-right: 20px; padding-bottom: 0px; padding-left: 20px;" width="70%">
                <h1 class="card-title" style="box-sizing: border-box; font-size: 25px; font-weight: 300; color: rgb(68, 68, 68);">Title here
                </h1>
                <p class="card-text" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`,
    })

  },

};
</script>

<style scoped src="grapesjs/dist/css/grapes.min.css">


</style>

