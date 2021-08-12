var keysPressed = "";
var password = CryptoJS.AES.decrypt("U2FsdGVkX1802mMQBB5/Rw51p1BS+uLClpH8j9KwiOE=", "xget").toString(CryptoJS.enc.Utf8)
console.log(password)
document.addEventListener("keypress", function (e) {
  keysPressed += e.key;
  console.log(keysPressed);
})

setInterval(function () {
  if (keysPressed.includes(password)) {
    console.log("go")
    window.location.href = "https://Axel.xcode101.repl.co/admin.html";
    keysPressed = "";
  }
}, 1000 / 60)