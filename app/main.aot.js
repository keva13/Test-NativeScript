"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_static_1 = require("nativescript-angular/platform-static");
// "./app.module.ngfactory" is a dynamically generated module when compiled with AoT.
var app_module_ngfactory_1 = require("./app.module.ngfactory");
if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");
}
platform_static_1.platformNativeScript().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmFvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBHQUEwRztBQUMxRyx3RUFBNEU7QUFFNUUscUZBQXFGO0FBQ3JGLCtEQUE0RDtBQUM1RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN6QixpREFBaUQ7SUFDN0MsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUNELHNDQUFvQixFQUFFLENBQUMsc0JBQXNCLENBQUMseUNBQWtCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLXN0YXRpY1wiO1xuXG4vLyBcIi4vYXBwLm1vZHVsZS5uZ2ZhY3RvcnlcIiBpcyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBtb2R1bGUgd2hlbiBjb21waWxlZCB3aXRoIEFvVC5cbmltcG9ydCB7IEFwcE1vZHVsZU5nRmFjdG9yeSB9IGZyb20gXCIuL2FwcC5tb2R1bGUubmdmYWN0b3J5XCI7XG5pZiAoZ2xvYmFsLlROU19XRUJQQUNLKSB7XG4vL3JlZ2lzdGVycyB0bnMtY29yZS1tb2R1bGVzIFVJIGZyYW1ld29yayBtb2R1bGVzXG4gICAgcmVxdWlyZShcImJ1bmRsZS1lbnRyeS1wb2ludHNcIik7XG59XG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdCgpLmJvb3RzdHJhcE1vZHVsZUZhY3RvcnkoQXBwTW9kdWxlTmdGYWN0b3J5KTtcbiJdfQ==