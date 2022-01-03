
/**
 *  Require Modules
 */
const url = require('url');

const path = require('path');



/**
 *  Main Class
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
    


    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){

        let api = this;
        let app = this.app;



        /**
         *  Channels
         */
        //Window Events
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