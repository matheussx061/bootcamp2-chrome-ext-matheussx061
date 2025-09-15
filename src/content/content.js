console.log("Content Script injetado!");
function addBanner(count = 0) {
  let banner = document.querySelector('.bootcamp-helper-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.className = 'bootcamp-helper-banner';
    banner.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #ffeb3b; /* Amarelo */
      color: #333;
      padding: 10px;
      text-align: center;
      font-size: 16px;
      z-index: 99999;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    document.body.prepend(banner);
  }
  banner.innerHTML = `✨ Esta página foi aprimorada! Botão do popup foi clicado **${count}** vezes. ✨`;
  console.log("Banner atualizado com o contador!");
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateBanner" && request.count !== undefined) {
    addBanner(request.count);
  }
  sendResponse({ status: "Content script received message" });
});