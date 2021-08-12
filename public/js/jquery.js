var keysPressed = "";
var password = CryptoJS.AES.decrypt("U2FsdGVkX1802mMQBB5/Rw51p1BS+uLClpH8j9KwiOE=", "xget").toString(CryptoJS.enc.Utf8)
var ip = null;
let apiKey = '8e9dab62df2948fe8d37543eaa9d6ef3'
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
  ip = data.ip_address;
})

document.addEventListener("keypress", function (e) {
  keysPressed += e.key;
  console.log(keysPressed);
})

setInterval(function () {
  if (keysPressed.includes(password) && ip == "70.109.165.210") {
    window.location.href = "https://axel.xcode101.repl.co/admin.html";
    keysPressed = "";
  }
}, 1000 / 60)