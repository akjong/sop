# use app builder image 
FROM rust:latest as builder
WORKDIR /tmp/app
COPY . /tmp/app
RUN cargo build --release --features redis-cluster

FROM gcr.io/distroless/cc-debian12:latest-amd64 as runtime
WORKDIR /app
COPY --from=builder /tmp/app/target/release/operator /app
COPY ./conf/dev.yml /app/config.yml
EXPOSE 8088
CMD ["/app/app", "-c", "config.yml"]
