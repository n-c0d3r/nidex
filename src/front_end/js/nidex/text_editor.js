
/**
 *  Import Modules
 */
import Clamp    from './math/clamp.js'

import Element  from "./elements/text_editor.js"

import File     from './file.js'



/**
 *  Main Class
 */
class TextEditor{
 
    /**
     *  Constructor
     */
    constructor(option){
 
        this.option             = option || new Object();

        this.app                = option.app;

        this.currentFileIndex   = option.currentFileIndex || 3;

        this.language           = option.language || 'javascript';

        this.LoadFilesFromInfos( option.files || (
            
            [

                {

                    name    : 'untitled.js',

                    cwd     : 'D:/demoNideX'

                },

                {

                    name    : 'untitled.py',

                    cwd     : 'D:/demoNideX'

                },

                {

                    name    : 'untitled.html',

                    cwd     : 'D:/demoNideX'

                },

                {

                    name    : 'untitled.css',

                    cwd     : 'D:/demoNideX'

                },

                {

                    name    : 'untitled.txt',

                    cwd     : 'D:/demoNideX'

                }

            ]

        ));
 
    }



    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){

        this.CreateElement();

        this.SetCurrentFileIndex(this.currentFileIndex);
        
    }


    
    CreateElement(){

        this.element = new TextEditor.Element({

            textEditor : this

        });

    }



    /**
     *  
     */
    CreateLineElements(lines){

        return this.GetCurrentLanguage().CreateLineElements(lines);

    }

    GetCurrentLanguage(){

        return this.app.languageManager.GetLang(this.language);

    }



    /**
     *  File Management Methods
     */
    CloseAll(){

        this.LoadFilesFromInfos([]);

        this.SetCurrentFileIndex(this.currentFileIndex);

    }

    CloseSaved(){

        

    }

    CloseFile(index){

        console.log(index);

        this.files.splice(index,1);

        if(index <= this.currentFileIndex){

            this.currentFileIndex = Clamp(this.currentFileIndex - 1, 0, this.files.length);

        }

        this.currentFileIndex = Clamp(this.currentFileIndex, 0, this.files.length);

        this.SetCurrentFileIndex(this.currentFileIndex);

    }

    LoadFilesFromInfos(fileInfos){

        this.files = [];

        for(let fileInfo of fileInfos){

            this.files.push(

                new File(fileInfo)

            );

        }

        this.ReloadFileContents();

    }

    ReloadFileContents(){

        for(let i = 0; i < this.files.length; i++){

            this.ReloadFileContent(i);

        }

    }

    ReloadFileContent(index){

        const fileIndex     = index;

        const text_editor   = this;

        let file            = this.files[fileIndex];

        window.api.fetch(

            'read_file',

            file.cwd + '/' + file.name,

            (fileContent)=>{

                text_editor.files[fileIndex].content = fileContent;
                
            }

        );

    }

    SetCurrentFileIndex(index){

        this.currentFileIndex = index;

        this.element.fileBar.RecreateFileElements();

        this.element.pathBar.UpdateContent(this.GetCurrentFile());

    }

    GetCurrentFile(){

        return this.files[this.currentFileIndex];

    }
 
}



/**
 *  Define Nested Classes
 */
TextEditor.Element = Element;
 
 
 
/**
 *  Export
 */
export {TextEditor as default}