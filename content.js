const TicketTypeMapping = {
  "Bug": "bugfix",
  "Technical Debt": "bugfix",
  "Story": "feature",
  "Sub-task": "feature",
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

  console.log('ticketNumber:', ticketNumber);
  console.log('ticketTitle:', ticketTitle);
  console.log('ticketType:', ticketType);
  console.log('ticketCategory:', ticketCategory);

  if (ticketNumber && ticketTitle && ticketCategory) {
    const branchName = `${ticketCategory}/${ticketNumber}_${ticketTitle.replace(/\s+/g, '-').toLowerCase()}`;
    console.log('branchName:', branchName);
    return branchName;
  }
  return null;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getBranchName") {
    const branchName = getBranchName();
    sendResponse({ branchName: branchName });
  }
});
