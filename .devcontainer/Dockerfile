FROM oven/bun:latest

RUN apt-get update && apt-get install -y --no-install-recommends \
    sudo git curl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN chsh -s /bin/bash bun \
    && echo "bun ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/bun \
    && chmod 0440 /etc/sudoers.d/bun
