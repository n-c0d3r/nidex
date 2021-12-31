
/**
 *  Require Modules
 */
/* Require Electron */
const electron = require('electron');
const {app: electronApp, BrowserWindow} = electron;

/* Require URL */
const url = require('url');

/* Require Path */
const path = require('path');



/**
 *  NideX Class
 */
class NideX{

    /**
     *  Constructor
     */
    constructor(option){

        this.option = option || new Object();

        this.electronApp = electronApp;

    }



    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){

        let app = this;



        /**
         *  Listen For App To Be Ready
         */
        this.electronApp.on(
        
            'ready',
        
            ()=>{
        
                /* Create Window */
                app.window = new BrowserWindow(
                    
                    {
        
                        width         : 900,
        
                        height        : 600,
        
                        icon          : path.join(__dirname, '../../front_end/images/logo.ico'),
        
                        title         : 'NideX',
        
                        titleBarStyle : 'hidden',
        
                        transparent   : true
        
                    }
                    
                );
        
        
        
                /* load html to Window */
                app.window.loadURL(
        
                    url.format({
        
                        pathname : path.join(__dirname, '../../front_end/html/main.html'),
        
                        protocol : 'file',
        
                        slashes  : true
        
                    })
        
                );
        
            }
        
        );

    }

}



/**
 *  Export NideX
 */
module.exports = NideX;