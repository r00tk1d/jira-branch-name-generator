const TicketTypeMap = {
  "Bug": "bugfix",
  "Technical Debt": "debt",
  "Story": "feature",
  "Sub-task": "task",
  "Task": "task",
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
    errorMessage = 'Error: \n' + errorMessages.join('\n');
  }
  
  return errorMessage;
}

const replaceGermanChars = (str) => {
  return str
      .replace(/ü/g, 'ue')
      .replace(/ö/g, 'oe')
      .replace(/ä/g, 'ae')
      .replace(/ß/g, 'ss');
};


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
    const sanitizedTitle = replaceGermanChars(ticketTitle.toLowerCase())
      .replace(/[^a-z0-9\s]/g, '') // Remove non-alphanumeric characters
      .replace(/\s+/g, '-'); // Replace spaces with hyphens

    branchName = `${ticketCategory}/${ticketID}-${sanitizedTitle}`;
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
