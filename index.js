var crypto = require("crypto");
var data = "Escriba aquí su password";

//Opción 1 --  tiene vulnerabilidades
var hash1 = crypto.createHash("md5").update(data, "utf-8").digest("hex");
console.log("Algoritmo md5:   " + hash1);

//Opción 2 -- No utilizar. Puede generar colisión
var hash2 = crypto.createHash("sha1").update(data, "utf-8").digest("hex");
console.log("algoritmo sha1:   " + hash2);

//este algoritmo es más seguro que los anteriores
var hash3 = crypto.createHash("sha256").update(data, "utf-8").digest("hex");
console.log("algoritmo sha256:   " + hash3);

//este algoritmo es más seguro que los anteriores
var hash4 = crypto.createHash("sha512").update(data, "utf-8").digest("hex");
console.log("algoritmo sha512:   " + hash4);

