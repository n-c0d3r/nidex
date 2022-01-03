
/**
 *  Import Modules
 */
import Template from "./ui_template.js"



/**
 *  Template
 */
class DefaultExplorerTemplate extends Template{
  
     /**
      *  Constructor
      */
     constructor(option){
  
        super({
          
            childs          : [],
  
            style           : `
            
                width       : 20%;
                height      : 100%;
             
                display     : flex;

                flex-flow   : column;

            `,

            globalStyle     : `
            


            `,

            tagName         : 'nidex-default-explorer'
          
        });
  
        this.ui     = option.ui;
          
    }
  
}
  
  
  
/**
 *  Export
 */
export {DefaultExplorerTemplate as default}