
/**
 *  Require Modules
 */
const url   = require('url');

const path  = require('path');

const fs    = require('fs');



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
        this.CreateChannels();        

    }



    /**
     *  Channels
     */
    CreateChannels(){
        
        let api = this;
        let app = this.app;



        /**
         *  Window Channels
         */
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


        
        /**
         *  File Management Channels
         */
        this.ipcMain.handle('read_file', async (event, filePath) => {
            
            filePath = path.normalize(filePath);

            let fileContent = fs.readFileSync(filePath).toString();

            return fileContent;

        })

        this.ipcMain.on("write_file", (event,args) => {
            
            let fileContent = args.content;

            let filePath    = args.path;

            fs.writeFileSync(filePath, fileContent);

        });


        
        /**
         *  Path Channels
         */
        this.ipcMain.handle("path_sep", async (event,filePath) => {

            return path.sep;

        });

        this.ipcMain.handle("path_normalize", async (event,filePath) => {

            return path.normalize(filePath);

        });
        
        this.ipcMain.handle("path_dirname", async (event,filePath) => {

            return path.dirname(filePath);

        });
        
        this.ipcMain.handle("path_basename", async (event,filePath) => {

            return path.basename(filePath);

        });

    }

}



/**
 *  Export
 */
module.exports = API;