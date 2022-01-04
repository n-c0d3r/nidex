
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

        this.textContent    = option.textContent || '';

        this.className      = option.class || '';

        let defaultStyle    = `

            display     : flex;
        
        `;

        if(this.option.style == null){

            this.style.cssText = defaultStyle;

        }
        else{

            this.style.cssText = defaultStyle + `
            ${this.option.style}`;

        }

        this.childs = this.option.childs || [];

        for(let child of this.childs){

            this.appendChild(child);

        }

    }

}



/**
 *  Define Custom Element
 */
customElements.define('nidex-div',Element);



/**
 *  Export
 */
export {Element as default}