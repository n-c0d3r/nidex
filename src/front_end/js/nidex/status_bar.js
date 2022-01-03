
/**
 *  Import Modules
 */
import Element from "./elements/status_bar.js"



/**
 *  Main Class
 */
class StatusBar{

    /**
     *  Constructor
     */
    constructor(option){

        this.option = option || new Object();

        this.app    = option.app;

    }



    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){

        this.CreateElement();
        
    }


    
    CreateElement(){

        this.element = new StatusBar.Element({

            statusBar : this

        });

    }

}



/**
 *  Define Nested Classes
 */
StatusBar.Element = Element;



/**
 *  Export
 */
export {StatusBar as default}