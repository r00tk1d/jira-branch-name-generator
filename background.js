chrome.commands.onCommand.addListener(async (command) => {
    if (command !== "generate-branch") return;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {command});
    });
});
