
/**
 *  Import Modules
 */
import UI           from './ui.js'

import Theme        from './theme.js'

import TextEditor   from './text_editor.js'

import Explorer     from './explorer.js'

import StatusBar    from './status_bar.js'



/**
 *  Main Class
 */
class NideX{

    /**
     *  Constructor
     */
    constructor(option){

        window.nideXApp = this;

        this.option         = option || new Object();

        this.textEditors    = option.textEditors || [
            
            new TextEditor({

                app : this

            })
            
        ];

        this.explorers      = option.explorers || [
            
            new Explorer({

                app : this

            })

        ];



        this.statusBar      = new StatusBar({

            app : this

        }) 



        this.ui             = new NideX.UI({

            app : this

        });

    }



    /**
     *  Init, Run Methods
     */
    Init(){

        this.InitTextEditors();

        this.InitExplorers();

        this.statusBar.Init();

        this.ui.Init();

    }

    Run(){

        this.RunTextEditors();

        this.RunExplorers();

        this.statusBar.Run();

        this.ui.Run();
        
    }



    /**
     * 
     */
    InitTextEditors(){

        for(let textEditor of this.textEditors){

            textEditor.Init();

        }

    }

    InitExplorers(){

        for(let explorer of this.explorers){

            explorer.Init();

        }
        
    }

    RunTextEditors(){

        for(let textEditor of this.textEditors){

            textEditor.Run();

        }
        
    }

    RunExplorers(){

        for(let explorer of this.explorers){

            explorer.Run();

        }
        
    }

}



/**
 *  Define Nested Classes
 */
NideX.UI            = UI;

NideX.Theme         = Theme;

NideX.TextEditor    = TextEditor;

NideX.Explorer      = Explorer;

NideX.StatusBar     = StatusBar;



/**
 *  Set Global
 */
window.NideX = NideX;



/**
 *  Export
 */
export {NideX as default}