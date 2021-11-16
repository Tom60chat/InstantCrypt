// Source: http://www.ab-weblog.com/en/internationalization-how-to-localize-html5-projects/

function loaded()
{
	var userLang = navigator.language || navigator.userLanguage;
	if (userLang != "") String.locale = userLang;

	console.log(userLang);

	localizeHTMLTag("step1Txt");
	localizeHTMLTag("pwdNoticeTxt");
	localizeHTMLTag("encrypPwdTxt");
	localizeHTMLTag("step2Txt");
	localizeHTMLTag("cryptNoticeTxt");
	localizeHTMLTag("txtModTxt");
	localizeHTMLTag("encryptTxtBtn");
	localizeHTMLTag("decryptTxtBtn");
	localizeHTMLTag("orTxt");
	localizeHTMLTag("fileModTxt");
	localizeHTMLTag("encryptFileBtn");
	localizeHTMLTag("decryptFileBtn");
	localizeHTMLTag("gitLinkTxt");
}


/* Some helper functions: */

var _ = function (string) {
	return string.toLocaleString();
};

function localizeHTMLTag(tagId)
{
	tag = document.getElementById(tagId);
	tag.innerHTML = _(tag.innerHTML);
}

function getParameterValue(parameter)
{
	parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + parameter + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
		return "";
	else
		return results[1];
}