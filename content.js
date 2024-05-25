const TicketTypeMap = {
  "Bug": "bugfix",
  "Technical Debt": "bugfix",
  "Story": "feature",
  "Sub-task": "feature",
  // Add other mappings as needed
};


function getCategoryForTicketType(ticketType) {
  return TicketTypeMap[ticketType] || null;
}

function getErrorMessage(ticketID, ticketTitle, ticketType, ticketCategory) {
  let errorMessage = null;
  const errorMessages = [];

  if (!ticketID) {
    errorMessages.push('There is no Ticket ID on this page.');
  }
  if (!ticketTitle) {
    errorMessages.push('There is no Ticket Title on this page.');
  }
  if (!ticketType) {
    errorMessages.push('There is no Ticket Type on this page.');
  }
  if (ticketType && !ticketCategory) {
    errorMessages.push(`There is no mapping defined for Ticket Type "${ticketType}"`);
  }

  if (errorMessages.length > 0) {
    errorMessage = errorMessages.join('\n');
  }
  return errorMessage;
}


function getBranchName() {
  const ticketIDElement = document.getElementById('key-val');
  const ticketTitleElement = document.getElementById('summary-val');
  const ticketTypeElement = document.getElementById('type-val');

  const ticketID = ticketIDElement ? ticketIDElement.getAttribute('data-issue-key') : null;
  const ticketTitle = ticketTitleElement ? ticketTitleElement.textContent.trim() : null;
  const ticketType = ticketTypeElement ? ticketTypeElement.textContent.trim() : null;
  const ticketCategory = getCategoryForTicketType(ticketType);

  console.log('ticketID:', ticketID);
  console.log('ticketTitle:', ticketTitle);
  console.log('ticketType:', ticketType);
  console.log('ticketCategory:', ticketCategory);

  let branchName = null;
  let errorMessage = null;

  if (ticketID && ticketTitle && ticketCategory) {
    branchName = `${ticketCategory}/${ticketID}_${ticketTitle.replace(/\s+/g, '-').toLowerCase()}`;
    console.log('branchName:', branchName);
  } else {
    errorMessage = getErrorMessage(ticketID, ticketTitle, ticketType, ticketCategory);
  }

  return { branchName, errorMessage };
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getBranchName") {
    const { branchName, errorMessage } = getBranchName();;
    sendResponse({
      branchName: branchName,
      errorMessage: errorMessage
    });
  }
});
