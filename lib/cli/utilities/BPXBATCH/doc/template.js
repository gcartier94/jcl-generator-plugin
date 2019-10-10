"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = {
    body: "\n//STEPX    EXEC PGM=BPXBATCH\n//STDIN    DD   PATH='/u/x.sh',PATHOPTS=(XXX)\n//STDOUT   DD   PATH='/u/x.out',PATHOPTS=(XXX),\n//              PATHMODE=SIRWXU\n//STDERR   DD   PATH='/u/x.err',PATHOPTS=(XXX),\n//              PATHMODE=SIRWXU \n\n"
};
