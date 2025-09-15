console.log("Service Worker iniciado!");
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extensão instalada!');
  chrome.storage.sync.set({ clickCount: 0 }, () => {
    console.log("Contador de cliques inicializado em 0.");
  });
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Mensagem recebida no Service Worker:", request);
  if (request.action === "incrementCounter") {
    chrome.storage.sync.get(['clickCount'], (result) => {
      const newCount = (result.clickCount || 0) + 1;
      chrome.storage.sync.set({ clickCount: newCount }, () => {
        console.log("Contador de cliques atualizado para:", newCount);
        sendResponse({ farewell: "Contador incrementado!", newCount: newCount });
      });
    });
    return true;
  }
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes("developer.chrome.com")) {
    console.log(`Página developer.chrome.com carregada na aba ${tabId}`);
    chrome.storage.sync.get(['clickCount'], (result) => {
      chrome.tabs.sendMessage(tabId, { action: "updateBanner", count: result.clickCount });
    });
  }
});