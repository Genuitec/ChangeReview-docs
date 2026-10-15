# Time Machine

Time Machine lets you browse a file's history on a timeline and inspect past
versions with changes highlighted inline.

When **GitHub Copilot for Eclipse** is installed, ChangeReview also tracks its
agent's changes and makes them available in the Time Machine history view.

It uses its own copy of the content. Exploring history leaves your editor buffer
and the file on disk untouched, even while an AI agent is writing to the file.

![Time Machine showing a selected historical version, inline changes, and the history timeline.](/img/time-machine.png)

## How to use it

1. Open the file you want to explore.
2. Choose **Compare with History...** from the ChangeReview status bar menu
   or Eclipse's **Edit** menu.
3. Select a version on the timeline to inspect its content and changes.
4. Use the floating navigator to step through the highlighted changes.

Added lines appear in green, and deleted lines appear as red gaps, just as in
Live Review and Inline Compare.

{/* TODO: Verify the EA1 entry command, comparison direction, and timeline controls. */}

## Configuration

Use the timeline's source filters to focus on the versions you want to inspect.
The review appearance follows your Eclipse editor's theme and font.

### Time Machine preferences

Open **General > Editors > Text Editors > Review Mode - Inline Diffs > Time Machine**
in Eclipse preferences.

Time Machine keeps its own copies of tracked agent versions, so this history can
survive Eclipse's local-history cleanup. Set **Maximum agent history per file (MB)**
and **Maximum agent history total (MB)** to limit how much agent content is retained.

![Time Machine preferences showing agent-history storage limits and a link to Eclipse Local History preferences.](/img/time-machine-prefs.png)

Your own saved versions are kept by Eclipse's Local History. If they disappear
from the timeline sooner than expected, adjust **General > Workspace > Local History**.
The Time Machine preference page includes a link to those settings.

### Agent Review preferences

ChangeReview contributes an **Agent Review** preference page under the
**GitHub Copilot for Eclipse** preferences. Use this page to configure the
agent review integration.

:::note Screenshot needed: Agent Review preferences
Show the **Agent Review** preference page, with its settings visible and the
preferences tree expanded to show its location under GitHub Copilot for Eclipse.
Suggested filename: **agent-review-preferences.png**.
:::

{/* TODO: Document the individual settings once their exact names and behavior are available. */}

{/* TODO: Confirm available source filters and their labels. Restore actions and Git History links need verification before they are documented. */}
