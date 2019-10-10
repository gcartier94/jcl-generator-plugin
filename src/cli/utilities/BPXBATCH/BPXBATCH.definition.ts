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

import { ICommandDefinition } from "@zowe/imperative";

export const BPXBATCHDefinition: ICommandDefinition = {
    name: "bpxbatch",
    aliases: ["bpx"],
    summary: "Generate an BPXBATCH JCL",
    description: "Generates an BPXBATCH JCL from a built-in template",
    type: "command",
    handler: __dirname + "/BPXBATCH.handler",
};
