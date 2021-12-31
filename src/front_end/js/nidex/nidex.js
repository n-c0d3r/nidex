
/**
 *  Import Modules
 */
/* Import UI */
import UI from './ui.js'



class NideX{

    /**
     *  Constructor
     */
    constructor(option){

        this.option = option || new Object();

        this.ui = new NideX.UI({

            app: this

        });

    }



    /**
     *  Init, Run Methods
     */
    Init(){

        this.ui.Init();

    }

    Run(){

        this.ui.Run();
        
    }

}



NideX.UI = UI;



/**
 *  Set Global
 */
window.NideX = NideX;



/**
 *  Export
 */
export {NideX as default}