
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



        this.ReloadFiles();



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



    /**
     *  
     */
    ReloadFiles(){

        /* Clear Child Elements */
        this.innerHTML = '';


        
        /* Create New Child Elements */
        this.files = [];

        let index = 0;

        for(let file of this.textEditor.files){

            this.files.push(

                new File({

                    name    : file.name,

                    cwd     : file.cwd,

                    index   : index

                })

            );

            index++;

        }

        if(this.files[this.textEditor.currentFileIndex] != null){

            this.files[this.textEditor.currentFileIndex].SetOpening(true);
            
        }

        for(let file of this.files){

            file.bar = this;

            this.appendChild(file);

        }

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