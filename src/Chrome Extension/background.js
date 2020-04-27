chrome.browserAction.onClicked.addListener(function(tab) {
  let url = tab.url;
  let link = document.createElement('textarea');
  document.body.appendChild(link);
  link = url;
  link.select();
  document.execCommand('copy', link);
  });