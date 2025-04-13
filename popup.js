document.getElementById('redirectButton').addEventListener('click', async () => {
    // active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    if (tab && tab.url) {
      // redirect URL
      const redirectUrl = `https://lib.inha.ac.kr/proxy-link?url=${encodeURIComponent(tab.url)}`;
      
      // 새 URL로 이동
      chrome.tabs.update(tab.id, { url: redirectUrl });
    }
  });
  