
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

            height  : 20px;
        
        `;
  
    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-file-bar',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}