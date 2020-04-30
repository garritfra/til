# Executing commands in every subdirectory

If you want to execute a command inside every subdirectory, you can use xargs:

```
ls -d */ | xargs -I {} bash -c "cd '{}' && pwd"
```

Substitute the `pwd` command for the command you want to execute recursively.

## Further reading

- [https://stackoverflow.com/a/54309503/9046809](https://stackoverflow.com/a/54309503/9046809)

