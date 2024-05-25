# Jira Branch Name Generator to Clipboard Chromium Extension

As the awesome name of this extension suggests, this extension generates the branch name for a given jira ticket. To generate and copy the branch name, just click on the extension icon. 

The branch name has the following structure:

`<category>/<JIRA-ID>-<short-description>`

1. Prefix: The category is defined by the ticket type. This is mapped with the `ticketTypeMap` in the `content.js`. Feel free to adjust this map for your needs.
2. JIRA ID
3. Short Description: The title of the jira ticket in lower, kebap case. The extension also removes any character that is not a letter or a digit.

## Installation

1. **Download the Extension Files**
   - Download or clone the extension files to your local machine.

2. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/` in Google Chrome (or `brave://extensions/` in Brave).

3. **Enable Developer Mode**
   - Toggle "Developer mode" on in the top right corner.

4. **Load the Unpacked Extension**
   - Click "Load unpacked" and select the cloned folder.