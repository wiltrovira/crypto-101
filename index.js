var crypto = require("crypto");
var hash = crypto.createHash("sha256");

hash.on("readable", function(){
	var data = hash.read();
	if (data) {
		console.log(data.toString("hex"));
		// Prints:
		//   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
	}
});

hash.write("Wilt rovira");
hash.end();
