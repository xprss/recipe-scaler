# recipe-scaler

## Local recipe parser

The Docker Compose setup runs the Angular client, the NestJS API, and a local Ollama
instance. On startup, the `ollama-pull` service downloads the parser model:

```sh
docker compose up --build
```

By default the API uses `qwen2.5:0.5b`, which is small enough for typical local
CPU-only Docker setups. Override it with another Ollama model when your machine
has enough memory/CPU:

```sh
OLLAMA_MODEL=llama3.2:3b docker compose up --build
```

The client is available at http://localhost:9000 and proxies recipe parsing
requests to the backend at `/api/recipes/parse`.
