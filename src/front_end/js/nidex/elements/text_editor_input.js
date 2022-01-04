
/**
 *  Element
 */
 class Element extends HTMLElement{
  
    /**
     *  Constructor
     */
    constructor(option){
        
        super();

        this.option         = option || new Object();

        this.textEditor     = option.textEditor;

        this.style.cssText  = `
        
            width                       : 100%;
        
            max-width                   : 100%;

            height                      : 100%;

            max-height                  : 100%;
        
        `;
  
    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-input',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}