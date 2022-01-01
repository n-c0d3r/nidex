
class HR extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        this.option                     = option || new Object();

        this.backgroundColor            = option.backgroundColor || "rgb(100,100,100)";


        
        /**
         *  Set Style
         */
        this.style.width                = "calc(100% - 20px)";
        this.style.height               = "1px";
        this.style.marginTop            = "5px";
        this.style.marginBottom         = "5px";
        this.style.backgroundColor      = this.backgroundColor;
        this.style.marginLeft           = "10px";

    }

}



/**
 *  Define HTML Tag
 */
customElements.define('nidex-vertical-menu-hr', HR);



/**
 *  Export
 */
export {HR as default}