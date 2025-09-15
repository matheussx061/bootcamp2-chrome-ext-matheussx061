const greetButton = document.getElementById('greetButton');
const responseParagraph = document.getElementById('response');
const counterDisplay = document.getElementById('counter');
chrome.storage.sync.get(['clickCount'], (result) => {
  const currentCount = result.clickCount || 0;
  counterDisplay.textContent = `Cliques no botao: ${currentCount}`;
});
greetButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "incrementCounter" }, (response) => {
    if (response && response.newCount !== undefined) {
      responseParagraph.textContent = response.farewell;
      counterDisplay.textContent = `Cliques no botao: ${response.newCount}`;
    }
  });
});