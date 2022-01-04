
/**
 *  Require Modules
 */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(

    'api', 

    {

        send: (channel, data) => {
            ipcRenderer.send(channel, data);
        },
        
        receive: (channel, func) => {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        },

        fetch: (channel, data, func)=>{

            ipcRenderer.invoke(channel, data).then((result) => {
                
                func(result);

            })

        }

    }

)