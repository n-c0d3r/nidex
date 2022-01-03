
/**
 *  Import Modules
 */
import Logo                 from './header_logo.js'

import Menu                 from './header_menu.js'

import WindowBtnContainer   from './header_window_btn_container.js'

import VerticalMenu         from './vertical_menu.js'


/**
 *  Element
 */
class Header extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        let header = this;

        this.option             = option || new Object();

        this.ui                 = option.ui;

        this.windowBtnsWidth    = option.windowBtnsWidth || "120px";

        this.defaultMenuButtons = new Menu.DefaultButtons({

            header : header

        });

        let defaultMenuButtons = this.defaultMenuButtons;



        /**
         *  Set Style
         */
        this.style.width    = "100vw";
        this.style.height   = "30px";
        this.style.position = "absolute";
        this.style.top      = '0';
        this.style.left     = '0';
        this.style.display  = 'flex';
        this.style.flexFlow = 'row';



        /**
         *  Create Logo
         */
        this.logo = new Logo({

            header: this

        });   

        this.appendChild(this.logo);



        /**
         *  Create Menu
         */
        this.menu = new Menu({

            header  : this,

            buttons : [

                defaultMenuButtons.File,                

                defaultMenuButtons.Edit,

                defaultMenuButtons.View,

                defaultMenuButtons.Help

            ]

        });   

        this.appendChild(this.menu);


        this.totalMarginHor = this.logo.totalMarginHor + this.menu.totalMarginHor;

    }

    CreateWindowBtns(){

        /**
         *  Create Window Btns
         */
        this.appendChild(new WindowBtnContainer({

            header  : this,

            width   : this.windowBtnsWidth

        }));
    
    }

}



/**
 *  Define Nested Classes
 */
Header.Logo                 = Logo;
Header.Menu                 = Menu;
Header.WindowBtnContainer   = WindowBtnContainer;



/**
 *  Define HTML Tag
 */
customElements.define('nidex-header', Header);



/**
 *  Export
 */
export {Header as default}