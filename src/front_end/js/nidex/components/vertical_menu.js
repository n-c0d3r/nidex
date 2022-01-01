
/**
 *  Import Modules
 */
import Button   from './vertical_menu_button.js'

import HR       from './vertical_menu_hr.js'



class VerticalMenu extends HTMLElement{
    
    /**
     *  Constructor
     */
    constructor(option){
        super();

        let menu = this;

        this.ready = false;

        this.option             = option || new Object();

        this.buttonGroups       = option.buttonGroups || [];

        this.position           = option.position || {x:0,y:0}; 

        this.width              = option.width || "250px";

        this.backgroundColor    = option.backgroundColor || "rgba(255,255,255,0.1)";

        this.borderRadius       = option.borderRadius || "12px";



        /**
         *  Set Buttons Border Radius
         */
        if(this.buttonGroups[0] != null){

            let group = this.buttonGroups[0];

            if(group[0] != null){
                group[0].style.borderTopLeftRadius   = this.borderRadius;
                group[0].style.borderTopRightRadius  = this.borderRadius;
            }

        }

        if(this.buttonGroups[this.buttonGroups.length - 1] != null){

            let group = this.buttonGroups[this.buttonGroups.length - 1];
            
            if(group[group.length - 1] != null){
                group[group.length - 1].style.borderBottomLeftRadius  = this.borderRadius;
                group[group.length - 1].style.borderBottomRightRadius = this.borderRadius;
            }

        }



        /**
         *  Append Buttons
         */
        for(let j = 0; j < this.buttonGroups.length; j++){

            let group = this.buttonGroups[j];

            for (let i = 0; i < group.length; i++){
    
                let button = group[i];
    
                button.menu = this;
    
                this.appendChild(button);
    
            }

            if(j != this.buttonGroups.length - 1){

                this.appendChild(new HR({}));

            }

        }

        /**
         *  Set Style
         */
        this.style.transition       = "0.5s";
        this.style.position         = "fixed";
        this.style.top              = this.position.y + 'px';
        this.style.left             = this.position.x + 'px';
        this.style.backgroundColor  = this.backgroundColor;
        this.style.borderRadius     = this.borderRadius;
        this.style.display          = "flex";
        this.style.flexFlow         = "column";
        this.style.width            = this.width;



        /**
         *  Event Listener
         */
        document.addEventListener('click', (e)=>{

            if(menu.ready){
                menu.remove();
            }
            else{
                menu.ready = true;
            }

        });

    }

}



VerticalMenu.Button = Button;
VerticalMenu.HR = HR;



/**
 *  Define HTML Tag
 */
customElements.define('nidex-vertical-menu', VerticalMenu);



/**
 *  Export
 */
export {VerticalMenu as default}