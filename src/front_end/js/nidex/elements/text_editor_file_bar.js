
/**
 *  Import Modules
 */
import File from './text_editor_file.js'

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

        this.wheelSen       = option.wheelSen || 30;

        this.style.cssText  = `
        
            width       : 100%;
        
            max-width   : 100%;

            height      : 30px;

            font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
            display     : flex;

            flex-flow   : row;

            overflow-x  : hidden;

        `;

        this.files          = [
            
            new File({

                name    : 'untitled.js',

                cwd     : 'D:/'

            }),

            new File({

                name    : 'untitled.py',

                cwd     : 'D:/'

            }),

            new File({

                name    : 'untitled.php',

                cwd     : 'D:/'

            }),

            new File({

                name    : 'untitled.css',

                cwd     : 'D:/'

            }),

            new File({

                name    : 'untitled.html',

                cwd     : 'D:/'

            }),

            new File({

                name    : 'untitled.html',

                cwd     : 'D:/'

            }),

            new File({

                name    : 'untitled.html',

                cwd     : 'D:/'

            })

        ];

        this.files[0].SetOpening(true);
        

        for(let file of this.files){

            file.bar = this;

            this.appendChild(file);

        }



        /**
         *  Event Listeners
         */
        this.isMouseHover = false;
        const bar = this;

        this.addEventListener('mouseenter',(e)=>{

            e.target.isMouseHover = true;

        });
        this.addEventListener('mouseleave',(e)=>{

            e.target.isMouseHover = false;

        });
        window.addEventListener('wheel',(e)=>{

            if(bar.isMouseHover){

                if(e.deltaY > 0){

                    bar.ScrollLeft();

                }

                if(e.deltaY < 0){

                    bar.ScrollRight();

                }

            }

        });
        
  

    }

    

    /**
     *  Scroll Methods
     */
    ScrollLeft(){

        this.scrollLeft += this.wheelSen;

    }

    ScrollRight(){

        this.scrollLeft -= this.wheelSen;

    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-file-bar',Element);



/**
 *  Create Global Style
 */
let globalStyle = document.createElement('style');

globalStyle.textContent = `



`;

document.body.appendChild(globalStyle);
  

  
/**
 *  Export
 */
export {Element as default}