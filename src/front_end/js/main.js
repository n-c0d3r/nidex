
/**
 *  Import NideX
 */
import NideX from './nidex/nidex.js'



/**
 *  Create App
 */
let app = new NideX({



});

/**
 *  Set Global
 */
window.nideXApp = app;

app.Init();

app.Run();