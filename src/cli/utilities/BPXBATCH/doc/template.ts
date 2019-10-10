export const template = {
    body:
`
//STEPX    EXEC PGM=BPXBATCH
//STDIN    DD   PATH='/u/x.sh',PATHOPTS=(XXX)
//STDOUT   DD   PATH='/u/x.out',PATHOPTS=(XXX),
//              PATHMODE=SIRWXU
//STDERR   DD   PATH='/u/x.err',PATHOPTS=(XXX),
//              PATHMODE=SIRWXU 

`
}