chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'log',
    title: "记在小本本: %s",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "log") {
    chrome.storage.local.get({ "list": [] }, function (object) {
      let dataList = object["list"];
      dataList.push(info.selectionText);
      chrome.storage.local.set({ "list": dataList });
    })
  }
});