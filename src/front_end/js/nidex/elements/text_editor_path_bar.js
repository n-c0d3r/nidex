
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
        
            width       : 100%;
        
            max-width   : 100%;

            height      : 20px;

            font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        `;
  
    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-path-bar',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}