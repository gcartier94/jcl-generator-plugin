/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { IImperativeConfig } from "@zowe/imperative";

const config: IImperativeConfig = {
    productDisplayName: "JCL Generation plugin",
    commandModuleGlobs: ["**/cli/*.definition!(.d).*s"],
    rootCommandDescription: "JCL generation utility plugin for Zowe CLI",
    envVariablePrefix: "JCL_GEN_PLUGIN",
    defaultHome: "~/.jcl_gen_plugin",
    name: "jcl-gen"
};

export = config;