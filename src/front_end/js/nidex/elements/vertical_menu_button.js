
/**
 *  Element
 */
class Button extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        let btn = this;

        this.option                     = option || new Object();

        this.menu                       = option.menu;

        this.label                      = option.label;
        
        this.textContent                = this.label;

        this.backgroundColor            = option.backgroundColor || "rgba(255,255,255,0.0)";

        this.color                      = option.color || "rgb(140,140,140)";

        this.highlightBackgroundColor   = option.highlightBackgroundColor || "rgba(255,255,255,0.1)";

        this.highlightColor             = option.highlightColor || "rgb(170,170,170)";

        this.fontFamily                 = option.fontFamily || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

        this.fontSize                   = option.fontSize || "14px";

        this.subMenu                    = option.subMenu;

        this.clickCallack               = option.click || (()=>{});



        /**
         *  Set Class Name
         */
        this.className = 'noselect';



        /**
         *  Set Style
         */
        this.style.transition       = "0.5s";
        this.style.height           = "calc(30px - 4px)";
        this.style.width            = "calc(100% - 20px)";
        this.style.color            = this.color;
        this.style.fontSize         = this.fontSize;
        this.style.fontFamily       = this.fontFamily;
        this.style.paddingLeft      = "10px";
        this.style.paddingRight     = "10px";
        this.style.paddingTop       = "4px";



        /**
         *  Event Listener
         */
        this.addEventListener('click', (e)=>{

            e.target.clickCallack(e);

        });
        this.addEventListener("mouseenter", ( e )=>{

            e.target.style.backgroundColor  = btn.highlightBackgroundColor;
            e.target.style.color            = btn.highlightColor;

        });
        this.addEventListener("mouseleave", ( e )=>{

            e.target.style.backgroundColor  = btn.backgroundColor;
            e.target.style.color            = btn.color;

        });

    }

}



/**
 *  Define HTML Tag
 */
customElements.define('nidex-vertical-menu-button', Button);



/**
 *  Export
 */
export {Button as default}