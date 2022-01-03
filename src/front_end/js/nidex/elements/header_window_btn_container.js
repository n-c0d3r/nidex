
/**
 *  Button Element
 */
class WindowBtn extends HTMLElement{

    constructor(option){

        super();

        this.option             = option || new Object();

        this.textContent        = option.textContent || '';

        this.backgroundColor    = option.backgroundColor || "rgba(0,255,255,1.0)";

        this.borderColor        = option.borderColor || "rgba(0,255,255,0.7)";

        this.header             = option.header;

        this.btns               = option.btns;

        this.clickCallback      = option.click || (()=>{});

        let btn = this;



        /**
         *  Set Style
         */
        this.style.height           = "12px";
        this.style.width            = "12px";
        this.style.color            = "white";
        this.style.textAlign        = "center";
        this.style.backgroundColor  = `rgba(0,0,0,0)`;
        this.style.transition       = '0.2s';
        this.style.border           = `solid 2px ${this.borderColor}`;
        this.style.borderRadius     = "8px";



        /**
         *  Event Listener
         */
        this.addEventListener('click', (e)=>{

            e.target.clickCallback(e);

        });
        this.addEventListener("mouseenter", ( e )=>{

            e.target.style.backgroundColor  = btn.backgroundColor;
            e.target.style.border           = "solid 2px rgba(255,255,255,0.2)";

        });
        this.addEventListener("mouseleave", ( e )=>{

            e.target.style.backgroundColor  = `rgba(0,0,0,0)`;
            e.target.style.border           = `solid 2px ${this.borderColor}`;

        });

    }

}



/**
 *  Button Container Element
 */
class WindowBtnContainer extends HTMLElement{

    constructor(option){

        super();

        this.option     = option || new Object();

        this.header     = option.header;

        this.width      = option.width || "120px";



        /**
         *  Set Style
         */
        this.style.width            = this.width;
        this.style.position         = "fixed";
        this.style.top              = "0";
        this.style.right            = "0";
        this.style.paddingTop       = "7px";
        this.style.paddingBottom    = "7px";
        this.style.height           = "16px";
        this.style.display          = "flex";
        this.style.flexFlow         = "row";
        this.style.justifyContent   = "space-around";



        /**
         *  Buttons
         */
        //  Minimize Button
        this.appendChild(

            new WindowBtn({

                header          : this.header,

                btns            : this,

                backgroundColor : "rgba(0,255,255,0.7)",

                borderColor     : "rgba(0,255,255,0.4)",

                click           : (e)=>{

                    window.api.send('minimize_window');

                }

            })

        );
        
        //  Maximize Button
        this.appendChild(

            new WindowBtn({

                header      : this.header,

                btns        : this,

                backgroundColor : "rgba(200,255,150,0.7)",

                borderColor     : "rgba(200,255,150,0.4)",

                click           : (e)=>{
                    
                    window.nideXApp.ui.Maximize();

                }

            })

        );
        
        //  Close Button
        this.appendChild(

            new WindowBtn({

                header      : this.header,

                btns        : this,

                backgroundColor : "rgba(255,100,0,0.7)",

                borderColor     : "rgba(255,100,0,0.4)",

                click           : (e)=>{

                    window.api.send('close_window');

                }

            })

        );

    }

}



/**
 *  Define HTML Tag
 */
customElements.define('nidex-header-window-btn-container', WindowBtnContainer);
customElements.define('nidex-header-window-btn', WindowBtn);



/**
 *  Export
 */
export {WindowBtnContainer as default}