# Rust Coding SOP

## Styling

```sh
cargo +nightly fmt --all
cargo +nightly clippy --all
cargo +nightly clippy -- -W clippy::all -W clippy::pedantic -W clippy::nursery # stricker lint, only for core package
```

## Logging

* [tracing](https://github.com/tokio-rs/tracing)
* json format

## Metrics and Tracing

* [autometrics-rs](https://github.com/autometrics-dev/autometrics-rs)

## RPC framework

* [axum](https://github.com/tokio-rs/axum)
* [tonic](https://github.com/hyperium/tonic)

## Orm

* [sqlx](https://github.com/launchbadge/sqlx)
* [sea-query](https://github.com/SeaQL/sea-query)

## Best practices

* [Production-ready microservice in Rust](https://apatisandor.hu/tags/dog-shelter/)
* [HoraeDB style guide](https://apache.github.io/incubator-horaedb-docs/dev/style_guide.html)
