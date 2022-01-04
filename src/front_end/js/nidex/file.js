
/**
 *  Main Class
 */
 class File{
 
    /**
     *  Constructor
     */
    constructor(option){
 
        this.option     = option || new Object();

        this.name       = this.option.name || 'untitled.txt';

        this.cwd        = this.option.cwd || '';

        this.content    = this.option.content || '';
 
    }
 
}
 
 
 
/**
 *  Export
 */
export {File as default}