const TicketTypeMapping = {
  "Bug": "bugfix",
  "Technical Debt": "bugfix",
  "Story": "feature",
  "Enhancement": "feature",
  // Add other mappings as needed
};

function getCategoryForTicketType(ticketType) {
  return TicketTypeMapping[ticketType] || null;
}

function getBranchName() {
  const ticketNumber = document.getElementById('key-val').getAttribute('data-issue-key');
  const ticketTitle = document.getElementById('summary-val').textContent.trim();  
  const ticketType = document.getElementById('type-val').textContent.trim();  
  const ticketCategory = getCategoryForTicketType(ticketType);

  if (ticketNumber && ticketTitle && ticketCategory) {
    return `${ticketCategory}/${ticketNumber}_${ticketTitle.replace(/\s+/g, '-').toLowerCase()}`;
  }
  return null;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getBranchName") {
    const branchName = getBranchName();
    sendResponse({ branchName: branchName });
  }
});
