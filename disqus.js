/**
 * Used by disqus
 * @type {string}
 */
var some_config_var = '';

(function() {
    // create a script element
    var dsq = document.createElement('script');

    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + some_config_var + '.example.com/widget.js';

    // append element to either the first head element or first body element
    (
        document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0]
    ).appendChild(dsq);
})();