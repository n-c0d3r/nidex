
/**
 *  Import Modules
 */
 import Javascript from './javascript.js'



/**
 *  Main Class
 */
class DefaultLanguages{

    constructor(option){

        this.javascript = new Javascript({

            manager : option.manager

        }); 

    }

}
 
 
 
 /**
  *  Export
  */
 export {DefaultLanguages as default}