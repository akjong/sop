# Rust Coding SOP

## Styling

```sh
cargo +nightly fmt --all
cargo +nightly clippy --all
cargo +nightly clippy -- -W clippy::all -W clippy::pedantic -W clippy::nursery # stricker lint, only for core package
```
