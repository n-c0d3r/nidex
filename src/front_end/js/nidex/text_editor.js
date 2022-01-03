
/**
 *  Import Modules
 */
import Element from "./elements/text_editor.js"



/**
 *  Main Class
 */
class TextEditor{
 
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

        this.element = new TextEditor.Element({

            textEditor : this

        });

    }
 
}



/**
 *  Define Nested Classes
 */
TextEditor.Element = Element;
 
 
 
/**
 *  Export
 */
export {TextEditor as default}