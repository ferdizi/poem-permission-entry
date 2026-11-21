import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The brass key hangs
on the kitchen hook.
"May I hold it?"
I ask Grandpa.
He nods, and lets go.
My fingers tremble —
the cold metal settles
in my palm.
The door clicks open.
At dusk the key
hangs on its hook again.
The door stands ajar,
and the hall light
spills across the floor.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`Wrote /output/entry.txt (${[...poem].length} characters)`);
