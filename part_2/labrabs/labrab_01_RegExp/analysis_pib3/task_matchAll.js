const log = console.log;

const str = `     iwefowe
    id-7216817
12121 121_232 1212_34344
    fid-72133 id=9
id-28423 oyue uo id-666wduewy u ewd
283236
`;

const re = /\bid([-=])(?<number>\d+)\b/g;

for (let m of str.matchAll(re)) {
    log(m[1], m.groups['number'], m.groups.number);
}

str
    .matchAll(re)
    .forEach(m => log(m[1], m.groups.number));

let results = [];
for (let m of str.matchAll(re)) {
    results.push(
        { 
            "type": m[1], 
            "ident": m[2] 
        }
    );
}

log(results);
log(JSON.stringify(results, ["ident"], 4));
log(JSON.stringify(results, null, 4));

/*
[
  'id-7216817',
  '7216817',
  index: 17,
  input: '     iwefowe\n' +
    '    id-7216817\n' +
    '12121 121_232 1212_34344\n' +
    '    fid-72133 id=9\n' +
    'id-28423 oyue uo de9wduewy u ewd\n' +
    '283236\n',
  groups: [Object: null prototype] { number: '7216817' }
]
*/

