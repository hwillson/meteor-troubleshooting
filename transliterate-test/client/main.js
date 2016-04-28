import { Template } from 'meteor/templating';

import './main.html';

Template.body.onRendered(function onRendered() {
  google.load('elements', '1', {
    packages: 'transliteration',
    callback: onLoad
  });

  function onLoad() {
    var options = {
      sourceLanguage:
        google.elements.transliteration.LanguageCode.ENGLISH,
      destinationLanguage:
        [google.elements.transliteration.LanguageCode.HINDI],
      shortcutKey: 'ctrl+g',
      transliterationEnabled: true
    };
    var control =
      new google.elements.transliteration.TransliterationControl(options);
    control.makeTransliteratable(['transliterateTextarea']);
  }
});
