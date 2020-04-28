# Using tabs in vim

You can open multiple files in tabs using the `-t` flag:

```bash
vim -t foo.txt bar.txt
```

To open a file in a new tab, run the following command inside vim:

```
:tabedit baz.txt
```

You can then navigate between those tabs using these commands:

```
:tabs         list all tabs including their displayed windows
:tabm 0       move current tab to first
:tabm         move current tab to last
:tabm {i}     move current tab to position i+1

:tabn         go to next tab
:tabp         go to previous tab
:tabfirst     go to first tab
:tablast      go to last tab
```
## Further reading

- [https://vim.fandom.com/wiki/Using_tab_pages](https://vim.fandom.com/wiki/Using_tab_pages)
