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
var index_1 = require("./utilities/index");
var IssueDefinition = {
    name: "generate",
    aliases: ["gen"],
    summary: "Generate a JCL step",
    description: "This group will generate a JCL template step from a given utility",
    type: "group",
    children: [index_1.IEFBR14Definition,
        index_1.IKJEFT01Definition,
        index_1.BPXBATCHDefinition]
};
module.exports = IssueDefinition;
