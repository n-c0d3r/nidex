
/**
 *  Import Modules  
 */
import FileBar from './text_editor_file_bar.js'



/**
 *  Element
 */
class Element extends HTMLElement{
  
    /**
     *  Constructor
     */
    constructor(option){
        
        super();

        this.textEditor     = option.textEditor;

        this.style.cssText  = `
        
            width   : 100%;

            height  : 100%;
        
        `;

        let fileBar = new FileBar({

            textEditor  : option.textEditor

        });

        this.appendChild(fileBar);
  
    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}