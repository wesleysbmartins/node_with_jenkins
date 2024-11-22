const { print } = require("../print/index.js");

function requestHandler(req, res) {
    print(`request received - ${new Date().toISOString()}`);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(`
⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⡀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇
⠀⠀⠀⠀⠀⣀⣤⣾⣿⣟
⠀⠀⠀⠀⣾⣿⡿⠿⠿⠿⣿⣦
⠀⠀⠀⢸⣿⣿⡇⢠⡄⢀⣿⣿⡄
⠀⠀⠀⣿⡟⣿⣿⣿⠃⣸⣿⣿⣧
⠀⠀⢸⣿⠁⣸⣿⡟⠀⣿⣿⡌⢿⣧
⠀⠀⣾⡇⠀⣿⣿⣃⣸⣿⣿⣿⠈⠻⣷⣄⡀
⠀⢠⡟⠀⢠⣿⣿⣿⣿⣿⣿⣿⣧⠀⠈⢿⡦
⠀⠀⠀⠀⣾⣿⣿⣿⠛⠛⣿⣿⣿⣧
⠀⠀⠀⢸⣿⡿⠋⠁⠀⠀⠀⠈⠻⣿⣿⡄
⠀⠀⣰⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣧
⠀⣼⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣧
⣸⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣇`,
);
}

module.exports = { requestHandler };
