
/**
 *  Import Modules
 */
import LineElement from './text_editor_input_line.js'

import Row              from './row.js'

import Column           from './column.js'

import Div              from './div.js'



/**
 *  Element
 */
 class Element extends HTMLElement{
  
    /**
     *  Constructor
     */
    constructor(option){
        
        super();

        this.option         = option || new Object();

        this.textEditor     = option.textEditor;

        this.lines          = option.lines || `

            class Person{

                constructor(info){

                    let parsedInfo  = info || new Object();

                    this.name       = parsedInfo.name;

                    this.age        = parsedInfo.age;

                }

            }

            let personA = new Person({

                name    : 'A',

                age     : '15'

            });

        `.split('\n');

        this.lineElements   = [];



        /**
         *  Style
         */
        this.style.cssText  = `
        
            width                       : 100%;
        
            max-width                   : 100%;

            height                      : 100%;

            max-height                  : 100%;

            overflow-x                  : hidden;

            overflow-y                  : hidden;

            -moz-border-radius          : 10px;

            border-radius               : 10px;

            border                      : solid 1px rgb(35,35,35);
            
            display                     : flex;

            flex-flow                   : row;

        `;



        this.lineIndexContainer = new Column({

            style   : `
            
                width   : 96px;

            `

        });

        this.appendChild(this.lineIndexContainer);



        this.lineContainer = new Column({

            style   : `
            
                overflow-x  : auto;

                overflow-y  : auto;
            
                width       : calc(100% - 96px);

            `,

            class   : 'editor-input-line-container'

        });

        this.appendChild(this.lineContainer);



        this.SetCurrentLineIndex(option.currentLineIndex || 0);
  
    }



    /**
     *  
     */
    RecreateLineElements(){

        let lineElements = [];

        let lineIndexElements = [];

        for (let i = 0; i < this.lines.length; i++){

            let line = this.lines[i];

            let lineElement = new LineElement({

                content : line,

                index   : i,

                input   : this

            });   

            lineElements.push(lineElement);

            
            
            let lineIndexElement = new Row({

                style   : `
                
                    height  : 100%;
                
                `,

                childs  : [

                    new Div({

                        class       : 'noselect',

                        textContent : `${i}`,

                        style       : `
                        
                            display         : flex;
        
                            flex-flow       : row;
                
                            flex-direction  : row-reverse;
                
                            width           : 70px;
                
                            color           : rgb(65,65,65);
                
                            margin-right    : 5px;
                                        
                            font-family     : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                                        
                        `

                    }),

                    new Div({

                        class       : 'noselect',

                        style       : `

                            width           : 20px;

                            color           : rgb(65,65,65);
                
                            border-right    : solid 1px rgb(50,50,50);

                        `

                    })                    

                ]

            });

            lineIndexElements.push(lineIndexElement);

        }

        this.lineElements = lineElements;

        this.lineContainer.innerHTML = '';

        for(let lineElement of this.lineElements){

            this.lineContainer.appendChild(lineElement);

        }



        this.lineIndexElements = lineIndexElements;

        this.lineIndexContainer.innerHTML = '';

        for(let lineIndexElement of this.lineIndexElements){

            this.lineIndexContainer.appendChild(lineIndexElement);

        }

    }



    UpdateContent(content){



    }

    SetCurrentLineIndex(index){

        this.currentLineIndex = index;

        this.RecreateLineElements();

        this.GetCurrentLineElement().UpdateStyle();

    }

    GetCurrentLine(){

        return this.lines[this.currentLineIndex];

    }

    GetCurrentLineElement(){

        return this.lineElements[this.currentLineIndex];

    }
  
}



/**
 *  Global Style Element
 */
let globalStyleElement = document.createElement('style');

globalStyleElement.textContent = `

    .editor-input-line-container::-webkit-scrollbar {
        background      : rgba(0,0,0,0);
        width           : 20px;
    }

    .editor-input-line-container::-webkit-scrollbar-track {
        background      : rgba(0,0,0,0);
    }

    .editor-input-line-container::-webkit-scrollbar-corner {
        background      : rgba(0,0,0,0);
    }

    .editor-input-line-container::-webkit-scrollbar-thumb {
        background      : rgb(40,40,40);
        transition      : 0.2s;
    }

    .editor-input-line-container::-webkit-scrollbar-thumb:hover {
        background      : rgb(45,45,45);
    }

`;

document.body.appendChild(globalStyleElement);



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-input',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}