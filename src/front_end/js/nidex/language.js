
/**
 *  Import Modules
 */
import Row      from './elements/row.js'

import Column   from './elements/column.js'

import Div      from './elements/div.js'



/**
 *  Main Class
 */
class Language{
 
    /**
     *  Constructor
     */
    constructor(option){
 
        this.option     = option || new Object();
        
        this.name       = option.name || '';
 
    }

    CreateLineElements(lines){

        let lineElements = [];

        for(let line of lines){

            lineElements.push(

                new Div({

                    style       : `
                    
                    
                    
                    `,

                    textContent : line

                })

            );

        }

        return lineElements;

    }
 
}
 
 
 
/**
 *  Export
 */
export {Language as default}