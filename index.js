'use strict';

const createButton = $('#create');
const textArea = $('#inputText');
const divQRcode = $('#qrcode');

createButton.click(() => {
  let text = textArea.val();
  divQRcode.text(text);
  return false; // 実行後にページ遷移させないため
});
