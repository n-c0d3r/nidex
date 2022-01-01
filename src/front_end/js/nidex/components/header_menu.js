
/**
 *  Import Modules
 */
import Button           from './header_menu_button.js'

import DefaultButtons   from './header_menu_default_buttons.js'



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
        this.style.height           = "100%";
        this.style.marginLeft       = "5px";
        this.style.marginRight      = "5px";
        this.style.paddingTop       = "5px";
        this.style.paddingBottom    = "5px";

        this.totalMarginHor = 5 + 5;

    }

}



Menu.Button         = Button;

DefaultButtons.Menu = Menu;
Menu.DefaultButtons = DefaultButtons;



/**
 *  Define HTML Tag
 */
customElements.define('nidex-header-menu', Menu);



/**
 *  Export
 */
export {Menu as default}