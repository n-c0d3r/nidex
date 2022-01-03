
/**
 *  Main Class
 */
class Template{
 
    /**
     *  Constructor
     */
    constructor(option){
 
        this.option         = option            || new Object();

        this.style          = option.style      || `
        
            display : flex;
        
        `;
 
        this.element        = option.element    || null;

        this.childs         = option.childs     || [];

        this.ui             = window.nideXApp.ui;

        this.tagName        = option.tagName    || 'div';

        this.className      = option.className    || '';

        this.globalStyle    = option.globalStyle || null;

        this.parentElement  = option.parentElement || null; 

        if(this.option.build == null){
            
            this.build      = ((function(){

                

            }).bind(this));

        }
        else{
            
            this.build      = this.option.build.bind(this);
            
        }

        if(this.option.afterCreateElement == null){
            
            this.afterCreateElement      = ((function(){

                

            }).bind(this));

        }
        else{
            
            this.afterCreateElement      = this.option.afterCreateElement.bind(this);
            
        }

    }



    ApplyStyle(){

        if(this.globalStyle != null){

            let globalStyleElement          = document.createElement('style');

            globalStyleElement.textContent  = this.globalStyle;
    
            document.body.appendChild(
    
                globalStyleElement
    
            );

        }

    }

    CreateElement(){

        this.build();

        if(this.element == null){

            this.element = document.createElement(this.tagName);

            this.element.className = this.className;

            this.element.style.cssText += this.style; 

        }

        if(this.parentElement != null){

            this.parentElement.appendChild(this.element);

        }

        this.ApplyStyle();

        this.afterCreateElement();

        for(let child of this.childs){

            child.CreateElement();

            if(child.parentElement == null){

                this.element.appendChild(child.element);

            }

        }

    }
 
}
 
 
 
/**
 *  Export
 */
export {Template as default}