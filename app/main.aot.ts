// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript } from "nativescript-angular/platform-static";

// "./app.module.ngfactory" is a dynamically generated module when compiled with AoT.
import { AppModuleNgFactory } from "./app.module.ngfactory";
if (global.TNS_WEBPACK) {
//registers tns-core-modules UI framework modules
    require("bundle-entry-points");
}
platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
