
/**
 *  Import Modules
 */
import Row                  from './row.js'

import Column               from './column.js'

import Div                  from './div.js'

import escapeHtmlEntities   from '../utils/escapeHtmlEntities.js'



/**
 *  Element
 */
class Element extends Div{
  
    /**
     *  Constructor
     */
    constructor(option){
        
        super({});

        this.option         = option || new Object();

        this.editorInput    = option.input;

        this.content        = option.content || '';

        this.index          = option.index || 0;



        /**
         *  Create Index Element
         */
        // this.indexElement   = new Div({

        //     class               : 'noselect',

        //     textContent         : `${this.index.toString()}`

        // });

        // this.appendChild(this.indexElement);



        /**
         *  Create Index Element
         */
        // this.marginElement   = new Div({

        //     class               : 'noselect'

        // });

        // this.appendChild(this.marginElement);

        

        /**
         *  Create Text Content Element
         */
        let parsedTextContent = escapeHtmlEntities(this.content);

        this.textContentElement = new Div({



        });

        this.textContentElement.innerHTML   = parsedTextContent;

        this.appendChild(this.textContentElement);



        /**
         *  Update Style
         */
        this.UpdateStyle();
  
    }



    UpdateStyle(){

        // this.indexElement.SetStyle(`

        //     display         : flex;
        
        //     flex-flow       : row;

        //     flex-direction  : row-reverse;

        //     width           : 70px;

        //     color           : rgb(65,65,65);

        //     margin-right    : 5px;
                        
        //     font-family     : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        // `);

        // this.marginElement.SetStyle(`        

        //     width           : 20px;

        //     color           : rgb(65,65,65);

        //     border-right    : solid 1px rgb(50,50,50);
        
        // `);

        this.textContentElement.SetStyle(`

            height              : 20px;
        
            display             : flex;
                
            flex-flow           : row;

            color               : rgb(170,170,170);
                        
            font-family         : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
            width               : calc(100% - ${21 + 75 - 96}px);

            background-color    : ${((lineElement)=>{

                if(lineElement.editorInput.currentLineIndex == this.index){

                    return `rgba(15,15,15,1)`;
                    
                }
                else{

                    return `rgba(0,0,0,0)`;

                }

            })(this)};

        `);

        this.SetStyle(`
        
            height      : 20px;

            display     : flex;
            
            flex-flow   : row;
        
        `);

    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-input-line',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}