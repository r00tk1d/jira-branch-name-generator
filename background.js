// chrome.action.onClicked.addListener((tab) => {
//     chrome.tabs.sendMessage(tab.id, { action: "getTicketInfo" }, (response) => {
//         if (response && response.ticketInfo) {
//             const branchName = response.ticketInfo;
//             navigator.clipboard.writeText(branchName).then(() => {
//                 console.log(`Branch name "${branchName}" copied to clipboard.`);
//             }).catch(err => {
//                 console.error('Could not copy text: ', err);
//             });
//         }
//     });
// });

// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        chrome.runtime.sendMessage({ action: "getTicketInfo" }, (response) => {
          if (response && response.ticketInfo) {
            const branchName = response.ticketInfo;
            navigator.clipboard.writeText(branchName).then(() => {
              console.log(`Branch name "${branchName}" copied to clipboard.`);
            }).catch(err => {
              console.error('Could not copy text: ', err);
            });
          } else {
            console.error('No ticket info found.');
          }
        });
      }
    });
  });
  