const { writeFileSync } = require("fs");

moonlightRightAlt = {
    from: { key_code: "f13" },
    to: [{ key_code: "right_option" }],
    type: "basic",
};

s = {
    title: "f13 to ko/en in windows",
    rules: [
        {
            description: "f13 to ko/en in windows",
            manipulators: [moonlightRightAlt],
        },
    ],
};

writeFileSync("./moonlight.json", JSON.stringify(s, null, 4));
