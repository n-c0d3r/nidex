
/**
 *  Import Modules
 */
import Template from "./ui_template.js"


/**
 *  Element
 */
class Element  extends HTMLElement{

    constructor(){

        super();

    }

}

customElements.define('nidex-default-text-editor-container', Element);



/**
 *  Template
 */
class DefaultTextEditorTemplate extends Template{
 
    /**
     *  Constructor
     */
    constructor(option){
 
        super({
         
            childs          : [],

            tagName         : 'nidex-default-text-editor-container',

            customWidth     : option.width,

            style           : option.style || '',

            build           : function(){

                let width = '0';
                
                if (this.customWidth != null){

                    width = this.customWidth;

                }
                else{

                    width = `${parseInt(1/this.row.count*100)}%`;

                }

                this.style += `
            
                    display : flex;

                    width   : ${width};

                    height  : 100%;

                `;

                let textEditor = window.nideXApp.textEditors[this.index];

            },

            afterCreateElement  : function(){

                let textEditor = window.nideXApp.textEditors[this.index];

                this.element.appendChild(textEditor.element);

            }
         
        });

        this.index  = option.index;
 
        this.ui     = option.ui;
         
    }
 
}
 
 
 
/**
 *  Export
 */
export {DefaultTextEditorTemplate as default}