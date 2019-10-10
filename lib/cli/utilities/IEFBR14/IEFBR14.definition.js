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
exports.IEFBR14Definition = {
    name: "iefbr14",
    aliases: ["br14"],
    summary: "Generate an IEFBR14 JCL",
    description: "Generates an IEFBR14 JCL from a built-in template",
    type: "command",
    handler: __dirname + "/IEFBR14.handler",
};
