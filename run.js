const secrets = require("secrets.js");
const command = process.argv[2];

if (command === "split") {
    const totalShares = parseInt(process.argv[3]);
    const minShares = parseInt(process.argv[4]);
    process.stdin.on("data", data => {
        let key = secrets.str2hex(data.toString());
        console.error("Generating", totalShares, "shares for", data.toString().length, "bytes of text ...");
        let shares = secrets.share(key, totalShares, minShares);
        shares.forEach((i, idx) => {
            process.stdout.write(i + "\n");
        });
        console.error("Done!");
    });
} else if (command === "reconstruct") {
    process.stdin.on("data", data => {
        let shares = data.toString().trim().split("\n");
        console.error("Got", shares.length, "shares");
        console.error("Reconstructing ...");
        let combined = secrets.combine(shares);
        process.stdout.write(secrets.hex2str(combined));
        console.error("Done!");
    });
} else {
    console.log("Invalid command: " + command);
    console.log();
    console.log("Spliting into 3 shares with a 2 minimum for reconstruction:");
    console.log("cat secret.txt | docker run -i lkoba/shamir split 3 2 > parts.txt");
    console.log();
    console.log("Reconstruction:");
    console.log("cat some-parts.txt | docker run -i lkoba/shamir reconstruct > reconstructed.txt");
    console.log();
}