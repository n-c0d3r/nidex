


 class Button extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        this.option = option || new Object();

        this.label  = option.label || "Menu Button";

        this.textContent = this.label;



        /**
         *  Set Class Name
         */
        this.className = 'noselect';



        /**
         *  Set Style
         */
        this.style.color        = "rgb(70,70,70)";
        this.style.fontSize     = "15px !important";
        this.style.fontFamily   = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        this.style.maxHeight    = "30px";
        this.style.height       = "30px";
        this.style.paddingLeft  = "5px";
        this.style.paddingRight = "5px";
        this.style.borderRadius = "5px";



        /**
         *  Event Listeners
         */
        this.addEventListener('click', (e)=>{

            console.log('click');

        });
        this.addEventListener("mouseenter", ( e )=>{

            e.target.style.backgroundColor  = "rgba(255,255,255,1)";

        });
        this.addEventListener("mouseleave", ( e )=>{

            e.target.style.backgroundColor  = "rgba(0,0,0,0)";

        });

    }

}



/**
 *  Define HTML Tag
 */
customElements.define('nidex-header-menu-button', Button);



/**
 *  Export
 */
export {Button as default}