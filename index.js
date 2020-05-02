'use strict';

const createButton = $('#create');
const textArea = $('#inputText');
const divQRcode = $('#qrcode');

createButton.click(() => {
  const text = textArea.val();
  const utf8text = unescape(encodeURIComponent(text));
  textArea.val('');
  divQRcode.qrcode({
    text: utf8text,
    width: 400,
    height: 400
  })
  return false; // 実行後にページ遷移させないため
});
