/**
 * Used by twitter
 */
!function(documentVar, scriptTagName, id){
    var js,
        // find first script element
        firstScriptElement = documentVar.getElementsByTagName(scriptTagName)[0],

        // check if document.location begins with http
        protocol = /^http:/.test(documentVar.location) ? 'http' : 'https';

    // check if document has another element with id twitter-wjs
    if (!documentVar.getElementById(id)) {

        // if no element with this name exists, create a script element
        js = documentVar.createElement(scriptTagName);

        // set twitter-wjs id on created script element
        js.id = id;

        // build url using the tested protocol
        js.src = protocol + '://example.com/widget.js';

        // insert before first script tag
        firstScriptElement.parentNode.insertBefore(js,firstScriptElement);
    }
}(document, 'script', 'script-el-id');