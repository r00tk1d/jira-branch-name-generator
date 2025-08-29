# Jira Branch Name Generator to Clipboard Chromium Extension

This extension generates the branch name for a given jira ticket. To generate and copy the branch name, just click on the extension icon or press `Alt+B`.

The branch name has the following structure:

`<category>/<JIRA-ID>-<short-description>`

1. `<category>`: 
   - The category is defined by the ticket type. This is mapped with the `ticketTypeMap` in the `content.js`. Feel free to adjust this map for your needs.
   - Example: `bugfix`
2. `<JIRA-ID>`:
   - The JIRA ID of the ticket.
   - Example: `ABC-12345`
3. `<short-description>`: 
   - The title of the jira ticket in lower, kebap case. The extension first converts german special characters (ä, ö, ü, ß) and removes any other character that is not in the english alphabet or a digit.
   - Example: `Backend | Übermittlung von PDF nicht möglich` -> `backend-uebermittlung-von-pdf-nicht-moeglich`

## Installation

1. **Download the Extension Files**
   - Download or clone the extension files to your local machine.

2. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/` in Google Chrome (or `brave://extensions/` in Brave).

3. **Enable Developer Mode**
   - Toggle "Developer mode" on in the top right corner.

4. **Load the Unpacked Extension**
   - Click "Load unpacked" and select the cloned folder.