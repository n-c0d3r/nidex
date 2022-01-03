
/**
 *  Require Modules
 */
const electron = require('electron');
const {app: electronApp, BrowserWindow, ipcMain} = electron;

const url   = require('url');

const path  = require('path');

const API   = require('./api');



/**
 *  Main Class
 */
class NideX{

    /**
     *  Constructor
     */
    constructor(option){

        this.option = option || new Object();

        this.electronApp = electronApp;

        this.ipcMain = ipcMain;

        this.api = new API({

            app : this

        });

    }



    /**
     *  Init, Run Methods
     */
    Init(){

        this.api.Init();

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
        
                        icon          : path.join(__dirname, '../../../front_end/images/logo.ico'),
        
                        title         : 'NideX',
        
                        titleBarStyle : 'hidden',
        
                        transparent   : true,

                        webPreferences: {
                          preload: path.join(__dirname, 'preload.js')
                        }
        
                    }
                    
                );
        
        
        
                /* load html to Window */
                app.window.loadURL(
        
                    url.format({
        
                        pathname : path.join(__dirname, '../../../front_end/html/main.html'),
        
                        protocol : 'file',
        
                        slashes  : true
        
                    })
        
                );
        
            }
        
        );



        /**
         *  Run API
         */
        this.api.Run();

    }



    /**
     *  Minimize, Maximize, Close, Resize, SetWindowPos Methods
     */
    Minimize(){

        this.window.minimize();

    }

    Maximize(){

        this.window.maximize();
        
    }

    Close(){

        this.window.close();
        
    }

    Resize(size){

        this.window.setSize(size.x, size.y);

    }

    SetWindowPos(pos){

        this.window.setPosition(pos.x,pos.y);

    }

}



/**
 *  Define Nested Classes
 */
NideX.API = API;



/**
 *  Export
 */
module.exports = NideX;