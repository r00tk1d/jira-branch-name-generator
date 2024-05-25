# Jira Branch Name Generator to Clipboard Chromium Extension

As the awesome name of this extension suggests, this extension extracts all needed informations for a git branch name created for a jira ticket. The branch has the following structure:

`feature/ABC-12345_create-a-user-interface-for-the-mapping-please`

1. The prefix until the `/` is defined by the ticket type. This is mapped with the `ticketTypeMap` in the `content.js`. Feel free to adjust this map for your needs.
2. The Ticket ID until the `_` is the ticket number in the jira ticket.
3. The rest of the branch name is the title of the jira ticket in lower, kebap case.

To generate and copy the branch name, just click on the extension icon.

## Installation

1. **Download the Extension Files**
   - Download or clone the extension files to your local machine.

2. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/` in Google Chrome (or `brave://extensions/` in Brave).

3. **Enable Developer Mode**
   - Toggle "Developer mode" on in the top right corner.

4. **Load the Unpacked Extension**
   - Click "Load unpacked" and select the cloned folder.