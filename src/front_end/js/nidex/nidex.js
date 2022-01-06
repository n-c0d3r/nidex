
/**
 *  Import Modules
 */
import UI               from './ui.js'

import Theme            from './theme.js'

import TextEditor       from './text_editor.js'

import Explorer         from './explorer.js'

import StatusBar        from './status_bar.js'

import FileManager      from './file_manager.js'

import LanguageManager  from './language_manager.js'



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



        this.fileManager    = option.fileManager || new FileManager({

            app : this

        });



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

        }); 



        this.languageManager             = new NideX.LanguageManager({

            app : this

        });



        this.ui             = new NideX.UI({

            app : this

        });

    }



    /**
     *  Init, Run Methods
     */
    Init(){

        this.languageManager.Init();

        this.InitTextEditors();

        this.InitExplorers();

        this.statusBar.Init();

        this.ui.Init();

    }

    Run(){
        
        this.languageManager.Run();

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
NideX.UI                = UI;

NideX.Theme             = Theme;

NideX.TextEditor        = TextEditor;

NideX.Explorer          = Explorer;

NideX.StatusBar         = StatusBar;

NideX.FileManager       = FileManager;

NideX.LanguageManager   = LanguageManager;



/**
 *  Set Global
 */
window.NideX = NideX;



/**
 *  Export
 */
export {NideX as default}