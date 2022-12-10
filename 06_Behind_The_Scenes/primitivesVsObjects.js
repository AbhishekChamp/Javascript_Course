"use strict";

let lastName = "Champ";
let oldLastName = lastName;
lastName = "Toxic";
console.log(lastName, oldLastName);

const coder = {
    name: "Coding",
    year: 2022,
};

const coderdeck = coder;
coderdeck.name = "Coderdeck";

console.log("Coder:", coder);
console.log("Coderdeck:", coderdeck);
