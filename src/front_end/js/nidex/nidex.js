
/**
 *  Import Modules
 */
/* Import UI */
import UI from './ui.js'

/* Import Theme */
import Theme from './theme.js'



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

NideX.Theme = Theme;



/**
 *  Set Global
 */
window.NideX = NideX;



/**
 *  Export
 */
export {NideX as default}