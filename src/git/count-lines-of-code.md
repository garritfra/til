# Counting the lines of code in a git repository

You can count the lines of code in a git repository by running the following command:

```bash
git ls-files | xargs cat | wc -l
```

This will

1. List all files known to Git
2. Concatenate them all into one large file
3. Count all lines in that file

Alternatively, you can use a tool called [Cloc](https://github.com/AlDanial/cloc) to get a better breakdown of all your files.

# References

- [https://stackoverflow.com/a/4822516/9046809](https://stackoverflow.com/a/4822516/9046809)
