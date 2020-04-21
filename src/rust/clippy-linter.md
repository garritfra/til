# Using the Clippy linter to spot common mistakes

Using [a linter that is developed by the Rust team](https://github.com/rust-lang/rust-clippy), you can spot common mistakes in your Rust code.

Run the following commands to install Clippy:

```bash
# Update rust version
rustup update

# Add clippy as a rustup component
rustup component add clippy

# If it says that it cant find the clippy component, run this
rustup self update
```

To run clippy, `cd` into your project and run the following command:

```bash
cargo clippy
```

Et voilà!
