
class Logo extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        this.option = option || new Object();

        this.header = option.header;



        /**
         *  Set Style
         */
        this.style.margin           = "2px";
        this.style.marginTop        = "3px";
        this.style.marginLeft       = "3px";
        this.style.width            = "25px";
        this.style.height           = "25px";
        this.style.backgroundImage  = `url('${window.origin}/src/front_end/images/logo.png')`;
        this.style.backgroundSize   = 'cover';

        this.totalMarginHor = 2 + 3;



        /**
         *  Event Listeners
         */
        this.addEventListener('click',(e)=>{

            console.log('click');

        });

    }

}



/**
 *  Define HTML Tag
 */
customElements.define('nidex-header-logo', Logo);



/**
 *  Export
 */
export {Logo as default}