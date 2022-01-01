
/**
 *  Import Modules
 */
import VerticalMenu     from './vertical_menu.js'



var Menu = '';



class DefaultButtons{

    constructor(option){

        this.option     = option || new Object();

        this.header       = option.header;

        this.Menu       = option.Menu || DefaultButtons.Menu;
        
        Menu            = this.Menu;

        let header      = this.header;



        /**
         *  Buttons
         */
        //File Button
        this.File = (

            new Menu.Button({
        
                label : 'File',
        
                click : (e)=>{
        
                    let btn = e.target;
                    
                    document.body.appendChild(
        
                        new VerticalMenu({
        
                            position : {
                                x : btn.offsetLeft,
                                y : header.offsetTop + header.offsetHeight
                            },
        
                            buttonGroups  : [
        
                                [
        
                                    new VerticalMenu.Button({
        
                                        label : 'New File'
        
                                    }),
        
                                    new VerticalMenu.Button({
        
                                        label : 'New Window'
        
                                    })
        
                                ],
        
                                [    
        
                                    new VerticalMenu.Button({
        
                                        label : 'Open File'
        
                                    }),
                                    
                                    new VerticalMenu.Button({
        
                                        label : 'Open Folder'
        
                                    })
        
                                ],
        
                                [    
        
                                    new VerticalMenu.Button({
        
                                        label : 'Save'
        
                                    }),
                                    
                                    new VerticalMenu.Button({
        
                                        label : 'Save As...'
        
                                    })
        
                                ]
        
                            ]
        
                        })
        
                    );
                
                }
        
            })
        
        );
        
        //Edit Button
        this.Edit = (

            new Menu.Button({
        
                label : 'Edit',
        
                click : (e)=>{
        
                    let btn = e.target;
                    
                    document.body.appendChild(
        
                        new VerticalMenu({
        
                            position : {
                                x : btn.offsetLeft,
                                y : header.offsetTop + header.offsetHeight
                            },
        
                            buttonGroups  : [
        
                                [
        
                                    new VerticalMenu.Button({
        
                                        label : 'Undo'
        
                                    }),
        
                                    new VerticalMenu.Button({
        
                                        label : 'Redo'
        
                                    })
        
                                ],
        
                                [    
        
                                    new VerticalMenu.Button({
        
                                        label : 'Cut'
        
                                    }),
                                    
                                    new VerticalMenu.Button({
        
                                        label : 'Copy'
        
                                    }),
                                    
                                    new VerticalMenu.Button({
        
                                        label : 'Patse'
        
                                    })
        
                                ],
        
                                [    
        
                                    new VerticalMenu.Button({
        
                                        label : 'Find'
        
                                    }),
                                    
                                    new VerticalMenu.Button({
        
                                        label : 'Replace'
        
                                    })
        
                                ]
        
                            ]
        
                        })
        
                    );
                
                }
        
            })
        
        );

        //View Button
        this.View = (

            new Menu.Button({

                label : 'View',

                click : (e)=>{
        
                    let btn = e.target;
                    
                    document.body.appendChild(
        
                        new VerticalMenu({
        
                            position : {
                                x : btn.offsetLeft,
                                y : header.offsetTop + header.offsetHeight
                            },
        
                            buttonGroups  : [
        
                                [
        
                                    new VerticalMenu.Button({
        
                                        label : 'Text Editor'
        
                                    }),
        
                                    new VerticalMenu.Button({
        
                                        label : 'Terminal'
        
                                    }),
        
                                    new VerticalMenu.Button({
        
                                        label : 'Explorer'
        
                                    })
        
                                ]
        
                            ]
        
                        })
        
                    );
                
                }

            })

        );

        //Help Button
        this.Help = (

            new Menu.Button({

                label : 'Help'

            })

        );

    }

}



/**
 *  Export 
 */
export {DefaultButtons as default}