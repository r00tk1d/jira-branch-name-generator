document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getBranchName" }, (response) => {
            if (response && response.branchName) {
                const branchName = response.branchName;
                navigator.clipboard.writeText(branchName).then(() => {
                    console.log(`Branch name "${branchName}" copied to clipboard.`);
                }).catch(err => {
                    console.error('Could not copy text: ', err);
                });
                document.getElementById('branchName').innerText = `Copied: \n "${branchName}"`;
            } else {
                document.getElementById('branchName').innerText = 'Failed to fetch branch name.';
            }
        });
    });
});
