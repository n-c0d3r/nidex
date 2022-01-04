
/**
 *  Element
 */
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

        this.style.cssText  = `

            transition          : 0.2s;

            height      : 30px;

            font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            display     : flex;

            flex-flow   : row;
        
        `;

        this.name           = this.option.name || "untitled.txt";
    
        let nameParts       = this.name.split('.');

        this.fileType       = nameParts[nameParts.length - 1];

        this.cwd            = this.option.cwd || '';

        this.appendChild(

            new Row({

                style   : `

                    transition          : 0.2s;
                
                    width   : 100%;
                    height  : 100%;
                
                `,

                childs  : [

                    new Div({

                        style       : `

                            transition          : 0.2s;
                                
                            width               : 20px;
        
                            height              : 20px;
        
                            margin              : 5px;
        
                            border-radius       : 5px;
        
                            background-size     : cover;

                            background-image    : url('${window.nideXApp.fileManager.GetFileIconLink(this.fileType)}');

                        `,
        
                    }),

                    new Div({

                        style       : `

                            transition          : 0.2s;

                            color               : rgba(255,255,255,0.5);

                            font-size           : 15px;

                            font-weight         : 100;

                            padding-top         : 5px;   
                            
                            padding-left        : 5px;

                            padding-right       : 5px;  

                        `,

                        textContent : `${this.name}`
        
                    }),
        
                    new Div({
        
                        style       : `

                            transition          : 0.2s;
                                
                            width               : 20px;
        
                            height              : 20px;
        
                            margin              : 5px;
        
                            border-radius       : 5px;
        
                            background-size     : cover;
                        
                        
                        `,

                        class       : 'text-editor-file-close-btn'
        
                    })

                ]

            })

        );



        this.SetOpening(false);



        /**
         *  Event Listeners
         */
        this.addEventListener('mouseenter',(e)=>{

            e.target.SetOpening(e.target.isOpening, true);

        });
        this.addEventListener('mouseleave',(e)=>{

            e.target.SetOpening(e.target.isOpening, false);

        });
  
    }



    SetOpening(value, mouseHover){

        let isMouseHover = mouseHover || false;

        if(value){

            if(isMouseHover){

                this.style.backgroundColor = 'rgba(0,0,0,0.08)';

            }
            else{

                this.style.backgroundColor = 'rgba(0,0,0,0)';
                
            }

        }
        else{

            if(isMouseHover){

                this.style.backgroundColor = 'rgba(0,0,0,0.1)';

            }
            else{

                this.style.backgroundColor = 'rgba(0,0,0,0.2)';
                
            }

        }

        this.isOpening = value;

    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-file',Element);



/**
 *  Create Global Style
 */
let globalStyle = document.createElement('style');

globalStyle.textContent = `

    .text-editor-file-close-btn {

        background-image    : none;

        background-color    : rgba(0,0,0,0);

    }

    .text-editor-file-close-btn:hover {

        background-image    : url('${window.origin}/src/front_end/images/text_editor/close.png');

        background-color    : rgba(255,255,255,0.05);

    }

`;

document.body.appendChild(globalStyle);
  
  
  
/**
 *  Export
 */
export {Element as default}