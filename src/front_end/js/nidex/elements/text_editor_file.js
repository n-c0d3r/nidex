
/**
 *  Import Modules
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

        const fileElement = this;

        this.option         = option || new Object();

        this.textEditor     = option.textEditor;

        this.style.cssText  = `

            transition          : 0.2s;

            height          : 30px;

            font-family     : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            display         : flex;

            flex-flow       : row;
            
            margin-right    : 5px;

            border-radius   : 10px;
        
        `;

        this.name           = this.option.name || "untitled.txt";
    
        let nameParts       = this.name.split('.');

        this.fileType       = nameParts[nameParts.length - 1];

        this.cwd            = this.option.cwd || '';

        this.index          = this.option.index || 0;



        this.className      = 'noselect';

        

        this.closeBtn       = new Div({
        
            style       : `

                transition          : 0.2s;
                    
                width               : 20px;

                height              : 20px;

                margin              : 5px;

                border-radius       : 5px;

                background-size     : cover;
            
            
            `,

            class       : 'text-editor-file-close-btn'

        });

        this.closeBtn.addEventListener('click',(e)=>{

            fileElement.Close();

        });

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

                            padding-right       : 5px;  

                        `,

                        textContent : `${this.name}`
        
                    }),

                    this.closeBtn

                ]

            })

        );



        this.SetHighlightStyle(false);



        /**
         *  Event Listeners
         */
        this.addEventListener('mouseenter',(e)=>{

            e.target.SetHighlightStyle(e.target.isOpening, true);

        });
        this.addEventListener('mouseleave',(e)=>{

            e.target.SetHighlightStyle(e.target.isOpening, false);

        });
        this.addEventListener('click',(e)=>{

            fileElement.textEditor.SetCurrentFileIndex(fileElement.index);

        });
  
    }


    
    /**
     *  Style
     */
    SetHighlightStyle(value, mouseHover){

        let isMouseHover = mouseHover || false;

        if(value){

            if(isMouseHover){

                this.style.backgroundColor = 'rgba(30,30,30,1)';

            }
            else{

                this.style.backgroundColor = 'rgba(25,25,25,1)';
                
            }

        }
        else{

            if(isMouseHover){

                this.style.backgroundColor = 'rgba(20,20,20,1)';

            }
            else{

                this.style.backgroundColor = 'rgba(15,15,15,1)';
                
            }

        }

        if(isMouseHover){

            this.closeBtn.style.backgroundImage = `url('${window.origin}/src/front_end/images/text_editor/close.png')`;
            this.closeBtn.style.backgroundColor = `rgba(255,255,255,0.05)`;

        }
        else{

            this.closeBtn.style.backgroundImage = `none`;
            this.closeBtn.style.backgroundColor = `rgba(0,0,0,0)`;
            
        }

        this.isOpening = value;

    }
  


    /**
     *  Close Method
     */
    Close(){

        let textEditor = this.bar.textEditor;

        textEditor.CloseFile(this.index);

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