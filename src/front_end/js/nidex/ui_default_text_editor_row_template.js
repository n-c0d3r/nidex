
/**
 *  Import Modules
 */
import Template from "./ui_template.js"


/**
 *  Template
 */
class DefaultTextEditorRowTemplate extends Template{

    /**
     *  Constructor
     */
    constructor(option){

        super({
            
            childs  : option.childs,

            count   : option.childs.length,

            style   : ((()=>{

                let defaultStyle = `
                
                    display     : flex;
                    flex-flow   : row;

                `;

                if(option.style == null){
                    return defaultStyle;
                }
                else{
                    return defaultStyle + `
                    ${option.style}`;
                }

            })()),

            build   : function(){

                for(let child of this.childs){

                    child.row = this;

                }

            },

            style   : ((()=>{

                let defaultStyle = `
                
                
                
                `;

                if (option.style == null){
                    return defaultStyle;
                }
                else{
                    return defaultStyle + `
                    ${option.style}`;
                }

            })())

        });

        this.ui     = option.ui;
        
    }

}



/**
 *  Export
 */
export {DefaultTextEditorRowTemplate as default}