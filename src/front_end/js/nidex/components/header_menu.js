
/**
 *  Import Modules
 */
import Button from './header_menu_button.js'



 class Menu extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        this.option     = option || new Object();

        this.header     = option.header;

        this.buttons    = option.buttons || [];



        /**
         *  Append Buttons
         */
        for (let button of this.buttons){

            this.appendChild(button);

        }



        /**
         *  Set Style
         */
        this.style.height           = "calc(100% - 10px)"; 
        this.style.marginLeft       = "5px";
        this.style.marginRight      = "5px";
        this.style.paddingTop       = "5px";
        this.style.paddingBottom    = "5px";

    }

}



Menu.Button = Button;



/**
 *  Define HTML Tag
 */
customElements.define('nidex-header-menu', Menu);



/**
 *  Export
 */
export {Menu as default}