


 class Button extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        this.option         = option || new Object();

        this.label          = option.label || "Menu Button";

        this.clickCallback  = option.click || (()=>{});

        this.textContent    = this.label;



        /**
         *  Set Class Name
         */
        this.className = 'noselect';



        /**
         *  Set Style
         */
        this.style.color        = "rgb(70,70,70)";
        this.style.fontSize     = "14px";
        this.style.fontFamily   = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        this.style.maxHeight    = "200px";
        this.style.height       = "200px";
        this.style.paddingLeft  = "10px";
        this.style.paddingRight = "10px";
        this.style.borderRadius = "15px";



        /**
         *  Event Listeners
         */
        this.addEventListener('click', (e)=>{

            e.target.clickCallback(e);

        });
        this.addEventListener("mouseenter", ( e )=>{

            e.target.style.backgroundColor  = "rgba(255,255,255,0.1)";
            e.target.style.color            = "rgb(200,200,200)";

        });
        this.addEventListener("mouseleave", ( e )=>{

            e.target.style.backgroundColor  = "rgba(0,0,0,0)";
            e.target.style.color            = "rgb(70,70,70)";

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