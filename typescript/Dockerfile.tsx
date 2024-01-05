FROM node:20-bookworm-slim

WORKDIR /app
COPY . .

RUN apt update -y && apt install -y libjemalloc-dev && apt clean && rm -rf /var/lib/apt/lists/*

RUN echo "/usr/lib/x86_64-linux-gnu/libjemalloc.so" >> /etc/ld.so.preload

RUN npm install
ENV NODE_OPTIONS="--max-semi-space-size=32 --max-old-space-size=2500 --import tsx"

EXPOSE 3000/tcp
CMD ["node", "./src/index.ts"]
