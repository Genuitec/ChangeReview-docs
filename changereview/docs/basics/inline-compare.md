# Inline Compare

Inline Compare displays an Eclipse comparison in a single pane, so you can read
changes from top to bottom. Switch between inline and side-by-side views with
one command.

![Inline Compare in Eclipse showing a single-pane diff and the Side-by-Side button.](/img/inline-compare-small.png)

## How to use it

1. Open a comparison in Eclipse's Compare Editor.
2. Use the ChangeReview inline-view command to switch to a single pane.
3. Read added lines in green and deleted lines as red gaps. Use the floating
   navigator to move between changes.
4. Use the same command to return to the side-by-side view.

The inline view keeps syntax coloring and matches your editor's theme and font.

{/* TODO: Replace "inline-view command" with the verified EA1 command label and its menu or toolbar location. */}

## Configuration

The review appearance follows your Eclipse editor settings, including the theme,
font, and line numbers.

### Preferences

Open **General > Compare/Patch > Inline Diffs** in Eclipse preferences.

Enable **Open Compare Editor in inline diff mode by default** to start new
comparisons in the single-pane view.

![Inline Compare preferences showing the option to open Compare Editor in inline diff mode by default.](/img/inline-compare-prefs.png)

The link on this page opens the [Live Review preferences](./editor-review.md#preferences)
for additional editor review settings.
