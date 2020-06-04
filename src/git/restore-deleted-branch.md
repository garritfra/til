# Restoring a deleted branch

You can restore an unpushed branch that you have accidentally deleted.

First, find out the last commit of the branch using `git reflog`

```
f1d69ff HEAD@{1}: commit: Add dns server walkthrough    <---- Most likely the latest commit
a1a46fc HEAD@{2}: reset: moving to HEAD
a1a46fc HEAD@{3}: commit: Add vim jumps
d58c970 HEAD@{4}: commit: Add recursive command execution
308139e HEAD@{5}: commit: Update summary
b19c831 HEAD@{6}: commit: Add vim tabs
1b0978c HEAD@{7}: pull: Merge made by the 'recursive' strategy.
9499453 HEAD@{8}: commit: Add android transient dependencies
```

Then, create the branch again, but pass it the sha hash of the commit:

````bash
git checkout -b <branch> <sha>
```

Now, your branch should be restored with all your commits.

## References

- [https://confluence.atlassian.com/bbkb/how-to-restore-a-deleted-branch-765757540.html](https://confluence.atlassian.com/bbkb/how-to-restore-a-deleted-branch-765757540.html)
