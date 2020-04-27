chrome.browserAction.onClicked.addListener(function(tab) {
  let url = tab.url;
  let link = document.createElement('textarea');
  document.body.appendChild(link);
  link.value = url;
  link.select();
  document.execCommand('copy');
  });