
/**
 *  Import Modules  
 */
import Row              from './row.js'

import Column           from './column.js'

import Div              from './div.js'

import FileBar          from './text_editor_file_bar.js'

import PathBar          from './text_editor_path_bar.js'

import MenuBtn          from './text_editor_menu_btn.js'

import Input            from './text_editor_input.js'

import InputScrollbar   from './text_editor_input_scrollbar.js'



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

            display     : flex;

            flex-flow   : column;
        
            width       : 100%;

            height      : 100%;
        
        `;

        this.fileBar        = new FileBar({

            textEditor  : option.textEditor

        });

        this.pathBar        = new PathBar({

            textEditor  : option.textEditor

        });

        this.menuBtn        = new MenuBtn({

            textEditor  : option.textEditor        

        })

        this.input          = new Input({

            textEditor  : option.textEditor   

        });

        this.inputScrollbar = new InputScrollbar({

            textEditor  : option.textEditor   

        });

        this.appendChild(

            new Column({

                style   : `
                        
                    width   : 100%;
                    
                    height  : 100%;
                        
                `,

                childs  : [

                    new Row({

                        style   : `
                        
                            width               : 100%;
                        
                        `,

                        childs  : [
        
                            new Div({
        
                                style   : `
        
                                    width   : calc(100% - 35px);
                                
                                `,
        
                                childs  : [
                                    
                                    this.fileBar
        
                                ]
        
                            }),
        
                            this.menuBtn
        
                        ]
        
                    }),

                    new Div({

                        style   : `
                        
                            height  : 5px;
                        
                        `

                    }),

                    new Div({
        
                        style   : `
                        
                            width   : calc(100% - 10px);
                        
                            height  : 20px;
                        
                        `,

                        childs  : [

                            this.pathBar

                        ]

                    }),

                    new Column({

                        style   : `
                        
                            width   : 100%;
                            
                            height  : calc(100% - ${30 + 20 + 5}px);
                        
                        `,

                        childs  : [

                            new Row({

                                style   : `
                                
                                    width                   : calc(100% - 10px);
                                                
                                    height  : 100%;
                                
                                `,
        
                                childs  : [

                                    new Div({
                
                                        style   : `
                
                                            width   : calc(100% - 120px);
                                        
                                            height  : calc(100% - 20px);
                                        
                                        `,
                
                                        childs  : [
                                            
                                            this.input
                
                                        ]
                
                                    }),

                                    new Div({
        
                                        style   : `
                                        
                                            width   : 120px;
                                        
                                            height  : 100%;
                                        
                                        `,
        
                                        childs  : [
        
                                            this.inputScrollbar
        
                                        ]
        
                                    })
                
                                ]
                
                            }),

                            

                        ]

                    })
                    
                ]

            })

        );
  
    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}