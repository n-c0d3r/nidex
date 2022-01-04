
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

        this.LoadFilesFromInfos( option.files || (
            
            [

                {

                    name    : 'untitled.js',

                    cwd     : 'D:/'

                },

                {

                    name    : 'untitled.py',

                    cwd     : 'D:/'

                },

                {

                    name    : 'untitled.html',

                    cwd     : 'D:/'

                },

                {

                    name    : 'untitled.css',

                    cwd     : 'D:/'

                },

                {

                    name    : 'untitled.txt',

                    cwd     : 'D:/'

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
        
    }


    
    CreateElement(){

        this.element = new TextEditor.Element({

            textEditor : this

        });

    }



    /**
     *  File Management Methods
     */
    CloseAll(){

        this.LoadFilesFromInfos([]);

        this.element.fileBar.ReloadFiles();

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

        this.element.fileBar.ReloadFiles();

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
 
}



/**
 *  Define Nested Classes
 */
TextEditor.Element = Element;
 
 
 
/**
 *  Export
 */
export {TextEditor as default}