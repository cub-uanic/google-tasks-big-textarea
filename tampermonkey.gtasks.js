// ==UserScript==
// @name         GTasksBigTextarea
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  improve UX when editing tast details
// @author       Oleg Kostyuk <cub.uanic@gmail.com>
// @match        https://mail.google.com/tasks/canvas?pli=1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function runWithJQuery(callback) {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")(window.jQuery);";
    document.body.appendChild(script);
}
function main($){
    var if1=$('iframe');
	if1.load(function(){
        setTimeout(function(){
            $('iframe').contents().find('div.f').find('textarea').attr('rows', 45);
        },500);
	});
}

runWithJQuery(main);

