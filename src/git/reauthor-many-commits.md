# Change author of many commits

You can filter out commits with a specific email and reauthor them all with the following snippet:

```
git filter-branch --env-filter 'if [ "$GIT_AUTHOR_EMAIL" = "incorrect@email" ]; then
     GIT_AUTHOR_EMAIL=correct@email;
     GIT_AUTHOR_NAME="Correct Name";
     GIT_COMMITTER_EMAIL=$GIT_AUTHOR_EMAIL;
     GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"; fi' -- --all
```

Protip: To make the editing of this huge command easier, you can hit `<ctrl>-x <ctrl>-e` to open an editor where you can paste this command. Once you write the buffer, the command is pasted into your command line, where you can execute it

## References

- [https://stackoverflow.com/a/4982271/9046809](https://stackoverflow.com/a/4982271/9046809)
