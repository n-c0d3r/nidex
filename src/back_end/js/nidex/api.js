
/**
 *  Require Modules
 */
/* Require URL */
const url = require('url');

/* Require Path */
const path = require('path');



/**
 *  NideX Class
 */
class API{

    /**
     *  Constructor
     */
    constructor(option){

        this.option     = option || new Object();

        this.app        = option.app;

        this.ipcMain    = this.app.ipcMain;

    }
    
    Init(){



    }

    Run(){

        let api = this;
        let app = this.app;



        /**
         *  Channels
         */
        //Window Btn Events
        this.ipcMain.on("minimize_window", (event,args) => {
            
            app.Minimize();

        });
        this.ipcMain.on("maximize_window", (event,args) => {
            
            app.Maximize();

        });
        this.ipcMain.on("close_window", (event,args) => {
            
            app.Close();

        });
        this.ipcMain.on("resize_window", (event,args) => {
            
            app.Resize(args);

        });
        this.ipcMain.on("set_window_pos", (event,args) => {
            
            app.SetWindowPos(args);

        });

    }

}



/**
 *  Export
 */
module.exports = API;