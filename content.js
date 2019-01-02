document.body.style.fontFamily = "Arial, sans-serif";
// Change title appearance
var titleLinks = document.getElementsByClassName('result__a');
Array.from(titleLinks).forEach(titleLink => {
    titleLink.style.color = "#1a0dab";
    // titleLink.style.fontFamly = "arial, sans-serif";
    titleLink.style.fontSize = "18px";
    titleLink.style.lineHeight = 1.2;
    titleLink.style.letterSpacing = "normal";
    titleLink.style.fontWeight = 400;
    titleLink.style.wordSpacing = 0;
});
// Change link appearance
var urlLinks = document.getElementsByClassName('result__url');
Array.from(urlLinks).forEach(urlLink => {
    urlLink.style.color = "#006621";
    // urlLink.style.fontFamly = "Arial, sans-serif";
    urlLink.style.fontSize = "14px";
    urlLink.style.lineHeight = "16px";
    urlLink.style.letterSpacing = "normal";
    urlLink.style.fontWeight = 400;
    urlLink.style.wordSpacing = 0;
});
// Change description appearance
var descriptions = document.getElementsByClassName('result__snippet');
Array.from(descriptions).forEach(description => {
    description.style.color = "#545454";
    // description.style.fontFamly = "Arial, sans-serif";
    description.style.fontSize = "13px";
    description.style.lineHeight = "18px";
    description.style.letterSpacing = "normal";
    description.style.fontWeight = 400;
    description.style.wordSpacing = 0;
});
// url width 100%
var extrasBlockUrls = document.getElementsByClassName('result__extras__url');
Array.from(extrasBlockUrls).forEach(url => {
    url.style.width = '100%';
});
// url width auto for ad section
var adBlocks = document.getElementsByClassName('result--ad');
Array.from(adBlocks).forEach(adBlock => {
    adBlock.getElementsByClassName('result__body')[0].getElementsByClassName('result__extras__url')[0].style.width = 'auto';
});
// Swap link and description
var mainBlocks = document.getElementsByClassName('result__body');
var snippetBlocks = document.getElementsByClassName('result__snippet');
var extrasBlocks = document.getElementsByClassName('result__extras');
Array.from(mainBlocks).forEach((mainBlock, index) => {
    mainBlock.insertBefore(extrasBlocks[index], snippetBlocks[index]);
});
// margin to header search bar
var headerBlock = document.getElementsByClassName('header__search');
/*
Check wheather the context is of the search home page as header__search is not available
after performing the search.
*/
if (headerBlock.length > 0) {
    headerBlock[0].style.marginLeft = '50px';
}
// padding to web content wrapper
var webContentWrapper = document.getElementById('web_content_wrapper');
if (webContentWrapper) {
    webContentWrapper.style.paddingLeft = '40px';
}
// padding to vertical wrapper
var verticalWrapper = document.getElementById('vertical_wrapper');
if (verticalWrapper) {
    verticalWrapper.style.paddingLeft = '40px';
}
// padding to footer
var footerLeft = document.getElementsByClassName('footer__left');
var footerRight = document.getElementsByClassName('footer__right');
if (footerLeft.length > 0 && footerRight.length > 0) {
    footerLeft[0].style.paddingLeft = '50px';
    footerRight[0].style.paddingLeft = '50px';
}

// margin to duckbar (tabbars)
var duckbar = document.getElementById('duckbar');
if (duckbar) {
    duckbar.style.marginLeft = '50px';
}

// height auto duckbar wrapper
var duckbarWrapper = document.getElementsByClassName('zcm-wrap');
if (duckbarWrapper.length > 0) {
    duckbarWrapper[0].style.height = 'auto';
    duckbarWrapper[0].style.lineHeight = '10px';
}
// height auto for tabs container
var tabsContainer = document.getElementsByClassName('zcm');
if (tabsContainer.length > 0) {
    tabsContainer[0].style.height = 'auto';
}
// padding to tab items
var tabItems = document.getElementsByClassName('zcm__link');
Array.from(tabItems).forEach(tab => {
    tab.style.padding = '28px 16px 16px';
    tab.style.lineHeight = 'inherit';
    tab.style.height = '12px';
    tab.style.margin = '0 4px';
});
// // css to is-active link
// var activeLink = document.getElementsByClassName('zcm__link is-active');
// Array.from(activeLink).forEach(link => {
//     link.style.borderBottom = '3px solid #de5833';
// });
// css to is-active link
var seperator = document.getElementsByClassName('zcm__sep--h');
Array.from(seperator).forEach(sep => {
    sep.style.padding = '28px 16px 0';
    sep.style.lineHeight = '10px';
    sep.style.height = 'auto';

});
