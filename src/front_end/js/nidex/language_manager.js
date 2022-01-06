
/**
 *  Import Modules
 */
import DefaultLanguages from './languages/default.js'



/**
 *  Main Class
 */
class LanguageManager{
 
    /**
     *  Constructor
     */
    constructor(option){
 
        this.option = option || new Object();

        this.languages = new DefaultLanguages({

            manager : this

        });
 
    }



    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){


        
    }



    /**
     * 
     */
    GetLang(name){

        return this.languages[name];

    }
 
}
 
 
 
/**
 *  Export
 */
export {LanguageManager as default}