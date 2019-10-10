"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IKJEFT01Definition = {
    name: "ikjeft01",
    aliases: ["ikjef"],
    summary: "Generate an IKJEFT01 JCL",
    description: "Generates an IKJEFT01 JCL from a built-in template",
    type: "command",
    handler: __dirname + "/IKJEFT01.handler",
};
