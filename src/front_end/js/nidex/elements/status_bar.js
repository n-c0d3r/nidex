
/**
 *  Element
 */
class Element extends HTMLElement{
  
    /**
     *  Constructor
     */
    constructor(option){
        
        super();

        this.statusBar     = option.statusBar;

        this.style.cssText  = `
        
            width   : 100%;

            height  : 100%;
        
        `;
  
    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-status-bar',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}