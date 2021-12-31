
/**
 *  Import Modules
 */
import Header from './components/header.js'



class UI{

    /**
     *  Constructor
     */
    constructor(option){

        this.option = option || new Object();

        this.app = option.app;

    }



    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){

        /**
         *  Create Window Top Bar
         */
        // var windowTopBar = document.createElement('div')
        // windowTopBar.style.width = "100%";
        // windowTopBar.style.height = "30px";
        // windowTopBar.style.position = "absolute";
        // windowTopBar.style.top = windowTopBar.style.left = 0;
        // windowTopBar.style.webkitAppRegion = "drag";
        // document.body.appendChild(windowTopBar);
        // this.windowTopBarElement = windowTopBar;



        /**
         *  Create Container
         */
        var container = document.createElement('div')
        container.style.width = "100%";
        container.style.height = "100vh";
        container.style.backgroundColor = "rgb(30,30,30)";
        container.style.position = "absolute";
        container.style.top = container.style.left = 0;
        container.style.borderRadius = '15px';
        document.body.appendChild(container);
        this.containerElement = container;



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
        let dragBarWidth = this.header.clientWidth - this.header.menu.clientWidth + this.header.logo.clientWidth;

        this.dragBar = document.createElement('div');

        this.dragBar.style.width = `${dragBarWidth}px`;
        this.dragBar.style.height = `100%`;
        this.dragBar.style.webkitAppRegion = "drag";

        this.header.appendChild(this.dragBar);
        
    }

}



UI.Header = Header;



/**
 *  Export
 */
export {UI as default}