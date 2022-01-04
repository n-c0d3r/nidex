
/**
 *  Import Modules
 */
import VerticalMenu from './vertical_menu.js'



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
        
            width               : 20px;

            height              : 20px;

            margin              : 5px;

            border-radius       : 5px;

            background-size     : cover;

            background-image    : url('${window.origin}/src/front_end/images/text_editor/menu_btn.png');
        
        `;



        /**
         *  Event Listener
         */
        const btn = this;

        this.isOpening = false;

        this.addEventListener('click',(e)=>{

            btn.isOpening = !btn.isOpening;

            if(btn.isOpening){

                let menuWidth   = 100;

                let menu        = new VerticalMenu({
    
                    position        : {
                        x : btn.offsetLeft - menuWidth,
                        y : btn.offsetTop + 40
                    },
    
                    width           : `${menuWidth}px`,
    
                    buttonGroups    : [
    
                        [
            
                            new VerticalMenu.Button({
    
                                label : 'Close All',

                                click : ()=>{

                                    btn.textEditor.CloseAll();

                                }
    
                            }),
    
                            new VerticalMenu.Button({
    
                                label : 'Close Saved',

                                click : ()=>{

                                    btn.textEditor.CloseSaved();

                                }
    
                            })
    
                        ]
    
                    ],

                    close           : function(e){
        
                        btn.menu = null;

                        btn.isOpening = false;

                    }
    
                });
    
                btn.menu = menu;
    
                document.body.appendChild(menu);

            }
            else{

                try{

                    btn.menu.remove();

                }
                catch{



                }

                btn.menu = null;

            }

            

        });
  
    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-menu-btn',Element);



/**
 *  Create Global Style
 */
let globalStyle = document.createElement('style');

globalStyle.textContent = `

    nidex-text-editor-menu-btn {

        background-color : rgba(255,255,255,0.0);

    }

    nidex-text-editor-menu-btn:hover {

        background-color : rgba(255,255,255,0.05);

    }

`;

document.body.appendChild(globalStyle);

  
  
/**
 *  Export
 */
export {Element as default}