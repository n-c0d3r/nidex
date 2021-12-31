
/**
 *  Import Modules
 */
import Logo from './header_logo.js'

import Menu from './header_menu.js'



class Header extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        let header = this;

        this.option = option || new Object();

        this.ui = option.ui;



        /**
         *  Set Style
         */
        this.style.width = "100vw";
        this.style.height = "30px";
        this.style.position = "absolute";
        this.style.top = '0';
        this.style.left = '0';
        this.style.display = 'flex';
        this.style.flexFlow = 'row';
        //this.style.webkitAppRegion  = "drag";



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

                new Menu.Button({

                    label : 'File',

                    click : (...args)=>{
                        
                        console.log('File Button Clicked');
                    
                    }

                }),

                new Menu.Button({

                    label : 'Edit',

                    click : (...args)=>{
                        
                        console.log('File Button Clicked');
                    
                    }

                }),

                new Menu.Button({

                    label : 'View',

                    click : (...args)=>{
                        
                        console.log('File Button Clicked');
                    
                    }

                }),

                new Menu.Button({

                    label : 'Help',

                    click : (...args)=>{
                        
                        console.log('File Button Clicked');
                    
                    }

                })

            ]

        });   

        this.appendChild(this.menu);

    }

}



Header.Logo = Logo;
Header.Menu = Menu;



/**
 *  Define HTML Tag
 */
customElements.define('nidex-header', Header);



/**
 *  Export
 */
export {Header as default}