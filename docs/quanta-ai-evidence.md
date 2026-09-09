# Quanta AI source review for portfolio planning

Read-only inspection on 9 September 2026. No application was launched, dependency installed, transaction executed, test run, or source modified in Quanta AI.

The user-supplied path `C:/VS projects/Quanta AI` was unavailable. The matching project was found at `C:/Work-Projects/VS Code Projects/Quanta-AI`; its README identifies it as an assistant for Quanta Books.

## Evidence locations

Paths below are relative to that repository.

| Source                                 | What it supports                                                                                                              |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `README.md`                            | Quanta Books assistant identity; configuration for bounded agents, deterministic routing, retries and confirmation tokens     |
| `agents/router_agent.py`               | Specialized task/report/documentation/general routes and a deterministic route selection path                                 |
| `main.py`                              | Chat and document-upload endpoints; orchestration imports and workflow integration                                            |
| `tools/invoice_workflow_tools.py`      | Prepare, amend and confirm invoice workflow calls; structured intent/review contracts                                         |
| `tools/invoice_tools.py`               | Invoice and item tools, including write-confirmation checks                                                                   |
| `tools/subaccount/customer_tools.py`   | Customer-creation tool                                                                                                        |
| `tools/batch_import_workflow_tools.py` | Expense/sales batch preparation and confirmation requests to a backend                                                        |
| `utils/spreadsheet_intake.py`          | Deterministic column mapping and row-level intake data with errors, skipped rows and assumptions                              |
| `utils/write_confirmation.py`          | Exact-action draft checks, signed timed confirmation tokens, authentication fingerprint binding and confirmed-action dispatch |
| `tools/create_report_tools.py`         | Statement-of-account, aging and quantity-on-hand report tools                                                                 |
| `agents/documentation_agent.py`        | Retrieval-grounded documentation answering and query expansion                                                                |
| `utils/rag_setup.py`                   | Document ingestion and optional Chroma / Google embeddings integration                                                        |
| `requirements.txt`                     | Declared Python, Flask, Hypercorn, LangChain, Google, Pydantic, Chroma and spreadsheet dependencies                           |
| `Dockerfile`                           | Python container, Hypercorn server and PORT-compatible runtime configuration                                                  |

Modules for retries, progress, usage tracking, safe logging, audio processing and regression tests are present. Their presence is not proof that all behaviors pass or are deployed. Selected files were read, not a comprehensive repository audit.

## Publication boundaries

- Daniel says he created the project; the source review does not establish authorship of each file or contribution boundaries.
- Unit creation is user-reported; the inspected item/invoice code establishes unit-price handling, not standalone unit creation.
- Keep Quanta AI separate from the complete Quanta Books accounting platform.
- Backend API calls and idempotency-key parameters do not prove backend atomicity or replay protection.
- RAG configuration does not establish a populated production index or answer quality.
- A Cloud Run-compatible container does not prove a Cloud Run deployment.
- Do not claim numerical time savings, accuracy, production usage, or reliability without further evidence.
- This internal evidence note and the candidate content must not be exposed as public portfolio data.

## Other stories

The expanded Telegram coaching capabilities and client Lightsail management are user-confirmed descriptions. This review did not inspect the coaching repository or client cloud accounts. CV evidence supports broader AWS/GCP, Docker, CI/CD, Windows Server and IT skills.
