const log = console.log;

const str = `     iwefowe
    id-7216817  id-909
12121 121_232 1212_34344
    fid-72133 id=9
id-28423 oyue uo id-666wduewy u ewd
283236
`;

const re = /\bid(?<type>[-=])(?<number>\d+)\b/g;

log([...str.matchAll(re)].map(m => +m[2]));
log(
    Array
        .from(str.matchAll(re))
        .map(m => +m[2])
);

const update = m => ({"tp": m[1], "id": +m[2]});
let json = [...str.matchAll(re)].map(update);
log(JSON.stringify(json, null, 4));


[...str.matchAll(re)]
    .map(m => ({"tp": m[1], "id": +m[2]}))
    .filter(obj => obj.tp == '-')
    .sort((a, b) => a.id - b.id)
    .forEach(obj => log(JSON.stringify(obj, null, 4)));
