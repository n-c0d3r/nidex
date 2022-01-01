
/**
 *  Import Modules
 */
import Header from './components/header.js'



class UI{

    /**
     *  Constructor
     */
    constructor(option){

        this.option         = option || new Object();

        this.isMaximized    = option.isMaximized || false;

        this.app            = option.app;

    }



    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){

        this.lastWindowOuterSize = {
            x : window.outerWidth,
            y : window.outerHeight
        };
        
        this.lastWindowPos = {
            x : window.screenX,
            y : window.screenY
        };



        /**
         *  Create Container
         */
        var container                   = document.createElement('div')
        container.style.width           = "100%";
        container.style.height          = "100vh";
        container.style.backgroundColor = "rgba(30,30,30,0.95)";
        container.style.position        = "absolute";
        container.style.top             = container.style.left = 0;
        container.style.borderRadius    = '15px';
        document.body.appendChild(container);
        this.containerElement           = container;



        /**
         *  Create Header
         */
        this.header = new Header({

            ui: this

        });

        this.containerElement.appendChild(this.header);


        
        /**
         *  Create Window Drag Bar
         */
        let dragBarWidth = this.header.clientWidth - (this.header.menu.clientWidth + this.header.logo.clientWidth + this.header.totalMarginHor);

        this.dragBar = document.createElement('div');

        this.dragBar.style.width = `calc(${dragBarWidth}px - ${this.header.windowBtnsWidth})`;
        this.dragBar.style.height = `100%`;
        this.dragBar.style.webkitAppRegion = "drag";

        this.header.appendChild(this.dragBar);



        /**
         *  Create Header Window Btns
         */
        this.header.CreateWindowBtns();
        
    }



    Maximize(){

        if(this.isMaximized){

            this.isMaximized = false;

            window.api.send('resize_window', this.lastWindowOuterSize);

            window.api.send('set_window_pos', this.lastWindowPos);

        }
        else{

            this.isMaximized = true;

            this.lastWindowOuterSize = {
                x : window.outerWidth,
                y : window.outerHeight
            };

            this.lastWindowPos = {
                x : window.screenX,
                y : window.screenY
            };
    
            window.api.send('maximize_window');

        }

    }

}



UI.Header = Header;



/**
 *  Export
 */
export {UI as default}