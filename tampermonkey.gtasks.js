// ==UserScript==
// @name         GTasksBigTextarea
// @namespace    https://github.com/cub-uanic/google-tasks-big-textarea
// @version      0.4
// @description  improve UX when editing tast details
// @author       Oleg Kostyuk <cub.uanic@gmail.com>
// @match        https://mail.google.com/tasks/canvas
// @match 	 https://mail.google.com/tasks/ig
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
		$('iframe').contents().find('textarea').attr('rows', 45);
            },500);
	});
}

runWithJQuery(main);

