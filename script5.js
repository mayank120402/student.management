

/*
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://yourwebsite.com/feedback-form",
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
*/


/*function sendFeedback() {
  // read fields, format text
  var url = 'https://wa.me/91YourNumber?text=' + encodeURIComponent(text);
  window.open(url, '_blank');
}
*/

function sendFeedbackToWhatsApp() {
  // फॉर्म वैलिडेशन
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('कृपया सभी फ़ील्ड भरें');
    return;
  }

  // WhatsApp message format
  var text = 
    '*नाम:* ' + name + '%0A' +
    '*ईमेल:* ' + email + '%0A' +
    '*संदेश:* ' + message;
  
  var phone = 'YOURNUMBER'; // अपनी नंबर कोड सहित, जैसे: 919876543210
  var url = 'https://wa.me/' + 919302217201 + '?text=' + text;
  window.open(url, '_blank');
}

