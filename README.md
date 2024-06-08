# Jira Branch Name Generator to Clipboard Chromium Extension

This extension generates the branch name for a given jira ticket. To generate and copy the branch name, just click on the extension icon or [set a custom shortcut](#set-a-shortcut).

The branch name has the following structure:

`<category>/<JIRA-ID>-<short-description>`

1. `<category>`: 
   - The category is defined by the ticket type. This is mapped with the `ticketTypeMap` in the `content.js`. Feel free to adjust this map for your needs.
   - Example: `bugifx`
2. `<JIRA-ID>`:
   - The JIRA ID of the ticket.
   - Example: `ABC-12345`
3. `<short-description>`: 
   - The title of the jira ticket in lower, kebap case. The extension also removes any character that is not a letter or a digit and converts some special characters.
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

## Set a Shortcut

1. **Open Chrome Extensions Keyboard Shortcuts Page**
   - Go to `chrome://extensions/shortcuts` in Google Chrome (or `brave://extensions/shortcuts` in Brave).

2. **Create a custom shortcut**
   - Add your custom shortcut to activate the extension with. A recommended shortcut is `Alt+Shift+B`.