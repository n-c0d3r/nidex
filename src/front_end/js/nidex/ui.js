
/**
 *  Import Modules
 */
import Header                       from './elements/header.js'

import Template                     from './ui_template.js'

import DefaultTemplate              from './ui_default_template.js'

import DefaultTextEditorTemplate    from './ui_default_text_editor_template.js'

import DefaultExplorerTemplate      from './ui_default_explorer_template.js'



/**
 *  Main Class
 */
class UI{

    /**
     *  Constructor
     */
    constructor(option){

        window.nideXApp.ui  = this;

        this.option         = option || new Object();

        this.isMaximized    = option.isMaximized || false;

        this.app            = option.app;

        this.template       = option.template || new DefaultTemplate({
            
            ui : this

        });

    }



    /**
     *  Init, Run Methods
     */
    Init(){



    }

    Run(){

        this.lastWindowOuterSize = {
            x : window.outerWidth,
            y : window.outerHeight
        };
        
        this.lastWindowPos = {
            x : window.screenX,
            y : window.screenY
        };

        this.autoUpdateLastPosAndSize = true;



        /**
         *  Create Container
         */
        var container                   = document.createElement('div')
        container.style.width           = "100%";
        container.style.height          = "100vh";
        container.style.backgroundColor = "rgba(30,30,30,0.99)";
        container.style.position        = "absolute";
        container.style.top             = container.style.left = 0;
        container.style.borderRadius    = '15px';
        document.body.appendChild(container);
        this.containerElement           = container;



        /**
         *  Create Header
         */
        this.header = new Header({

            ui: this

        });

        this.containerElement.appendChild(this.header);



        /**
         *  Create Inner Container
         */
        var innerContainerElement                   = document.createElement('div')
        innerContainerElement.style.width           = "100%";
        innerContainerElement.style.height          = "calc(100vh - 30px)";
        innerContainerElement.style.backgroundColor = "rgba(30,30,30,0.99)";
        innerContainerElement.style.position        = "absolute";
        innerContainerElement.style.top             = "30px";
        innerContainerElement.style.left            = "0px";
        innerContainerElement.style.borderRadius    = '15px';
        this.containerElement.appendChild(innerContainerElement);
        this.innerContainerElement                  = innerContainerElement;


        
        /**
         *  Create Window Drag Bar
         */
        let dragBarWidth                    = this.header.clientWidth - (this.header.menu.clientWidth + this.header.logo.clientWidth + this.header.totalMarginHor);

        this.dragBar                        = document.createElement('div');
        this.dragBar.style.width            = `calc(${dragBarWidth}px - ${this.header.windowBtnsWidth})`;
        this.dragBar.style.height           = `100%`;
        this.dragBar.style.webkitAppRegion  = "drag";

        this.header.appendChild(this.dragBar);



        /**
         *  Create Header Window Btns
         */
        this.header.CreateWindowBtns();



        /**
         *  Event Listeners
         */
        window.addEventListener('resize', (e)=>{
            
            let ui = window.nideXApp.ui;

            if(ui.autoUpdateLastPosAndSize){

                ui.lastWindowOuterSize = {
                    x : window.outerWidth,
                    y : window.outerHeight
                };
                
                ui.lastWindowPos = {
                    x : window.screenX,
                    y : window.screenY
                };

                ui.isMaximized = false;

                ui.containerElement.style.borderRadius                  = '15px';
                ui.innerContainerElement.style.borderBottomLeftRadius   = '15px';
                ui.innerContainerElement.style.borderBottomRightRadius  = '15px';

            }
            else{
                
                ui.autoUpdateLastPosAndSize = true;

            }

            let dragBarWidth        = ui.header.clientWidth - (ui.header.menu.clientWidth + ui.header.logo.clientWidth + ui.header.totalMarginHor);
    
            ui.dragBar.style.width  = `calc(${dragBarWidth}px - ${ui.header.windowBtnsWidth})`;

        });

        this.AutoLoadTemplate();
        
    }



    AutoLoadTemplate(){

        this.LoadTemplate(this.template);

    }
    
    LoadTemplate(template){

        if(template.element != null){

            template.element.remove();

        }

        template.CreateElement();

    }



    Maximize(){

        if(this.isMaximized){

            this.autoUpdateLastPosAndSize = true;

            this.isMaximized = false;

            this.containerElement.style.borderRadius                    = '15px';
            this.innerContainerElement.style.borderBottomLeftRadius     = '15px';
            this.innerContainerElement.style.borderBottomRightRadius    = '15px';

            window.api.send('resize_window', this.lastWindowOuterSize);

            window.api.send('set_window_pos', this.lastWindowPos);

        }
        else{

            this.autoUpdateLastPosAndSize = false;

            this.isMaximized = true;

            this.lastWindowOuterSize = {
                x : window.outerWidth,
                y : window.outerHeight
            };

            this.lastWindowPos = {
                x : window.screenX,
                y : window.screenY
            };

            this.containerElement.style.borderRadius        = '0px';
            this.innerContainerElement.style.borderRadius   = '0px';
    
            window.api.send('maximize_window');

        }

    }

}



/**
 *  Define Nested Classes
 */
UI.Header                       = Header;

UI.Template                     = Template;

/* Default Templates */
UI.DefaultTemplate              = DefaultTemplate;

UI.DefaultTextEditorTemplate    = DefaultTextEditorTemplate;

UI.DefaultExplorerTemplate      = DefaultExplorerTemplate;



/**
 *  Export
 */
export {UI as default}