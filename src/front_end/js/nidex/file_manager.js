
/**
 *  Main Class
 */
class FileManager{
 
    /**
     *  Constructor
     */
    constructor(option){
 
        this.option         = option || new Object();

        this.app            = option.app;

        this.fileIconLinks  = option.fileIconLinks || {

            'js'    : `${window.origin}/src/front_end/images/file_icons/js.png`,

            'py'    : `${window.origin}/src/front_end/images/file_icons/py.png`,

            'css'   : `${window.origin}/src/front_end/images/file_icons/css.png`,

            'txt'   : `${window.origin}/src/front_end/images/file_icons/txt.png`

        };
 
    }



    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){


        
    }



    GetFileIconLink(fileType){
        
        if(fileType in this.fileIconLinks){

            return this.fileIconLinks[fileType];

        }
        else{

            return this.fileIconLinks['txt'];

        }

    }
 
}
 
 
 
/**
 *  Export
 */
export {FileManager as default}