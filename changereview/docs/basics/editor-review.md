# Live Review

Live Review shows your uncommitted changes directly in a text editor. Use it to
check your own edits or review an AI agent's work before committing.

![Live Review in Eclipse showing inline additions, deletions, and the floating change navigator.](/img/live-review.png)

## How to use it

1. Open the file you want to review.
2. Click **Show Changes** in the Eclipse status bar.
3. Use the floating navigator to step through each change.
4. Use the available change actions to keep or undo edits as you review.

Click **Show Changes** again to turn off the review. Use **Refresh Changes**
to recompute the comparison after the file changes.

### Reading changes

- **Green backgrounds** mark added lines.
- **Red gaps** mark deleted lines where they used to be.
- **Gutter markers** identify changed lines beside your code.

Syntax coloring stays visible, and the review matches your editor's theme,
font, and line numbers. Inline Compare and Time Machine use the same display.

### Change actions

Live Review provides **Accept**, **Discard**, and **Revert** actions for reviewing
individual changes. Check the selected change before using an action that
changes your code.

{/* TODO: Confirm the exact scope and behavior of Accept, Discard, and Revert, then replace this paragraph with a short action table. */}

## Configuration

Right-click the **Changes** status bar item to open the review menu.

![ChangeReview status bar menu showing baseline choices and Change Review Preferences.](/img/review-ctx-menu.png)

### Choose a baseline

A baseline is the version you compare your current content against.

| Baseline | Shows |
|---|---|
| **Compare with Git HEAD** | Changes since the last commit, including unsaved edits. |
| **Compare with Last Saved** | Unsaved changes relative to the file on disk. |
| **Compare with History...** | Opens [Time Machine](./time-machine) to explore earlier versions. |

{/* TODO: Document Agent Baseline availability and behavior once confirmed. */}

### Preferences

Select **Change Review Preferences...** from the status bar menu, or open
**General > Editors > Text Editors > Review Mode - Inline Diffs** in Eclipse
preferences.

![Live Review preferences showing default baseline, word highlighting, gutter markers, navigation, and automatic refresh settings.](/img/live-review-prefs.png)

Use this page to choose the default baseline and adjust:

- Word highlighting within replaced lines.
- Change markers in the editor's left margin.
- Automatic navigation to the next change after **Undo**.
- Automatic refresh after editing, and the refresh delay in milliseconds.

Use the **Annotations** link on this page to configure change colors and decorations.
