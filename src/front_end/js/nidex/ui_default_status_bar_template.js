
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

customElements.define('nidex-default-status-bar-container', Element);
 
 
 
/**
 *  Template
 */
class DefaultStatusBarTemplate extends Template{
  
    /**
     *  Constructor
     */
    constructor(option){
  
        super({
          
            childs          : [],

            style           : `
            
                display : flex;

                width   : 100%;

                height  : 15px;

            `,
 
            tagName         : 'nidex-default-status-bar-container',

            build           : function(){

                

            },

            afterCreateElement  : function(){

                let statusBar = window.nideXApp.statusBar;
                
                this.element.appendChild(statusBar.element);

            }
        
        });

        this.ui     = option.ui;
        
    }

}
  
  

/**
 *  Export
 */
export {DefaultStatusBarTemplate as default}