/**
 * Used by google plus one button
 * @type {{lang: string}}
 * @private
 */
window.___cfg = {lang: 'de'};

(function() {
    // create script element
    var po = document.createElement('script');

    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://example.com/widget.js';

    // get first script element
    var firstScriptElement = document.getElementsByTagName('script')[0];

    // inserts new script element before first first script element
    firstScriptElement.parentNode.insertBefore(po, firstScriptElement);
})();