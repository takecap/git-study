'use strict';

const createButton = $('#create');
const textArea = $('#inputText');
const divQRcode = $('#qrcode');

createButton.click(() => {
  let text = textArea.val();
  textArea.val('');
  divQRcode.qrcode({
    text: text,
    width: 600,
    height: 600
  })
  return false; // 実行後にページ遷移させないため
});
