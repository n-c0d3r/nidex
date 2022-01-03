
/**
 *  Import Modules
 */
import Template                     from "./ui_template.js"

import DefaultTextEditorTemplate    from './ui_default_text_editor_template.js'

import DefaultExplorerTemplate      from './ui_default_explorer_template.js'

import DefaultStatusBarTemplate     from './ui_default_status_bar_template.js'

import DefaultTextEditorRowTemplate from './ui_default_text_editor_row_template.js'



/**
 *  Element
 */
class Element  extends HTMLElement{

    constructor(){

        super();

    }

}

customElements.define('nidex-default-template', Element);



/**
 *  Template
 */
class DefaultTemplate           extends Template{

    /**
     *  Constructor
     */
    constructor(option){

        super({
        
            childs          : [

                new Template({

                    style   : `

                        display : flex;
                    
                        flex-flow   : row;

                        width       : 100%;

                        height      : calc(100% - 15px);
                    
                    `,

                    childs  : [

                        new DefaultExplorerTemplate({

                            ui  : option.ui || window.nideXApp.ui
        
                        }),
        
                        new Template({
        
                            style   : `
        
                                display : flex;
                            
                                flex-flow   : column;
        
                                width       : 80%;
        
                                height      : 100%;
                            
                            `,
        
                            childs  : [

                                new DefaultTextEditorRowTemplate({

                                    style   : `
                                    
                                        height  : 65%;
                                        width   : 100%;
                                    
                                    `,

                                    childs  : [

                                        new DefaultTextEditorTemplate({
        
                                            ui      : option.ui || window.nideXApp.ui,
                
                                            index   : 0
                        
                                        })

                                    ]

                                })
        
                            ]
        
                        })

                    ]

                }),

                new DefaultStatusBarTemplate({

                    ui  : option.ui || window.nideXApp.ui

                })

            ],

            style           : `
            
                width       : 100%;
                height      : 100%;
                
                display     : flex;

                flex-flow   : column;

            `,

            globalStyle     : `
            


            `,

            tagName         : 'nidex-default-template',

            className       : '',

            parentElement   : window.nideXApp.ui.innerContainerElement,

            build           : function(){

                this.parentElement = window.nideXApp.ui.innerContainerElement;
                
                for(let child of this.childs){

                    child.build();

                }
                
            }
        
        });

        this.ui     = option.ui;
        
    }

}



/**
 *  Export
 */
export {DefaultTemplate as default}