
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

            background-color            : rgb(30,30,30);

            border-top-right-radius     : 10px;

            border-bottom-right-radius  : 10px;
        
        `;
  
    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-input-scrollbar',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}