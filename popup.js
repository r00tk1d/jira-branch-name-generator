document.getElementById('generateBranch').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getTicketInfo" }, (response) => {
            if (response && response.ticketInfo) {
                const branchName = response.ticketInfo;
                document.getElementById('branchName').innerText = branchName;
                navigator.clipboard.writeText(branchName).then(() => {
                    console.log(`Branch name "${branchName}" copied to clipboard.`);
                }).catch(err => {
                    console.error('Could not copy text: ', err);
                });
            }
        });
    });
});
