"use strict"
var IpsumGenerator = (function (_doc, _window, _util) {

    var _container = _doc.getElementById('phrase-container');

    function clearContainer() {
        _container.value = '';
    }

    function addToContainer(paragraph) {
        _container.value += paragraph;
    }

    function generateIpsum(numberOfParagraphs, start) {
        var i, words, numberOfWordInParag, paragraph;

        clearContainer();

        if(start) {
            addToContainer(start);
        }
        for (i = 0; i < numberOfParagraphs; i++) {
            paragraph = '';
            words = 0;

            numberOfWordInParag = _util.randomNumberBetween(10, 40);

            while(words < numberOfWordInParag) {
                paragraph += ' ' + _util.capitalizeFirstLetter(_util.fetchRandom(_window.store));
                words = _util.countWords(paragraph);
            }

            addToContainer(paragraph + '\n\n');
        }
        _util.selectAndCopy(_container);
        _util.createAlert('Text copied!');
    }

    return {
        genIpsum: function (number, start) {
            number = number || 1;
            generateIpsum(number, start);
        }
    }
})(document, window, Util);
