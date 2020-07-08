# Search entire git history for a string

You can search the entire git history for commits that included a certain string. For example, if you accidentally committed a password 2 years ago, you can search commits that added or removed it with this command:

```
git log -S password123
```

## References

- [https://stackoverflow.com/a/4472267/9046809](https://stackoverflow.com/a/4472267/9046809)
