
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

        this.option         = option || new Object();

        this.textEditor     = option.textEditor;

        this.style.cssText  = `
        
            width       : 100%;
        
            max-width   : 100%;

            height      : 20px;

            font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            display     : flex;

            flex-flow   : row;
        
        `;
  
    }



    /**
     *  UpdateContent Method
     */
    UpdateContent(file){

        const pathBarElement = this;



        /**
         *  Check If File Is Null
         */
        if(file == null){

            this.innerHTML = '';

            return;

        }



        /**
         *  Normalize File Path
         */
        window.api.fetch(
            
            'path_normalize',
            
            file.cwd + '/' + file.name,

            (filePath)=>{

                /**
                 *  Get Dir Name
                 */
                window.api.fetch(
            
                    'path_dirname',
                    
                    filePath,
        
                    (dirname)=>{
        
                        /**
                         *  Get Base Name
                         */
                        window.api.fetch(
            
                            'path_basename',
                            
                            filePath,
                
                            (basename)=>{

                                /**
                                 *  Get OS Path Separate
                                 */
                                window.api.fetch(
            
                                    'path_sep',
                                    
                                    '',
                        
                                    (sep)=>{
                                        
                                        let dirNames = dirname.split(sep);
                        
                                        pathBarElement.innerHTML = '';

                                        let basenameParts = basename.split('.');

                                        let fileType = basenameParts[basenameParts.length - 1];



                                        /**
                                         *  Directory Element Container
                                         */
                                        pathBarElement.dirElementContainer = new Row({

                                            style   : `
                                            
                                                height : 100%;
                                            
                                            `,

                                            class       : 'noselect',

                                            childs  : (

                                                (()=>{

                                                    let childs = [];

                                                    for(let i = 0; i < dirNames.length; i++){

                                                        let dirName = dirNames[i];

                                                        childs.push(
                                                            
                                                            new Div({

                                                                style       : `
            
                                                                    height              : 20px;
                                                                    
                                                                    font-size           : 14px;
                                                                    font-family         : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    
                                                                    padding-left        : 5px;
                                                                    padding-right       : 5px;
            
                                                                    border-radius       : 5px;
            
                                                                    color               : rgb(100,100,100);
            
                                                                `,

                                                                class       : 'noselect',
            
                                                                textContent : dirName
            
                                                            })

                                                        );

                                                        if(i != dirNames.length - 1){

                                                            childs.push(

                                                                new Div({

                                                                    style       : `
                
                                                                        height              : 20px;
                                                                        
                                                                        font-size           : 14px;
                                                                        font-family         : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                                        
                                                                        border-radius       : 5px;
                
                                                                        color               : rgb(100,100,100);
                
                                                                    `,

                                                                    class       : 'noselect',
                
                                                                    textContent : '>'
                
                                                                })

                                                            );

                                                        }

                                                    }

                                                    return childs;

                                                })()
                                                
                                            )

                                        });

                                        pathBarElement.appendChild(pathBarElement.dirElementContainer);



                                        /**
                                         *  Sep Element
                                         */
                                        pathBarElement.appendChild(

                                            new Div({

                                                style       : `

                                                    height              : 20px;
                                                    
                                                    font-size           : 14px;
                                                    font-family         : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    
                                                    border-radius       : 5px;

                                                    color               : rgb(100,100,100);

                                                `,

                                                class       : 'noselect',

                                                textContent : '>'

                                            })

                                        );



                                        /**
                                         *  Base Name Element
                                         */
                                        pathBarElement.baseNameElement = new Row({

                                            style   : `
                                            
                                                height      : 100%;

                                                margin-left : 5px;
                                            
                                            `,

                                            childs  : [

                                                new Div({

                                                    style       : `
        
                                                        height              : 20px;
                                                        width               : 20px;
        
                                                        border-radius       : 5px;
        
                                                        background-image    : url('${window.nideXApp.fileManager.GetFileIconLink(fileType)}');

                                                        background-size     : cover;
        
                                                    `,

                                                    class       : 'noselect'
        
                                                }),

                                                new Div({

                                                    style       : `
        
                                                        height              : 20px;
                                                        
                                                        font-size           : 14px;
                                                        font-family         : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
                                                        padding-left        : 5px;
                                                        padding-right       : 5px;
        
                                                        border-radius       : 5px;
        
                                                        color               : rgb(100,100,100);
        
                                                    `,

                                                    class       : 'noselect',
        
                                                    textContent : basename
        
                                                })

                                            ]

                                        });
                                        
                                        pathBarElement.appendChild(

                                            pathBarElement.baseNameElement

                                        );
                                        
                                    }
                                    
                                );
                                
                            }
                            
                        );
        
                    }
                    
                );

            }
            
        );

    }
  
}



/**
 *  Define Custom Element
 */
customElements.define('nidex-text-editor-path-bar',Element);
  
  
  
/**
 *  Export
 */
export {Element as default}