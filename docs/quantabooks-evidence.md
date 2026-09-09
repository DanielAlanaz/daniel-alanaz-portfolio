# QuantaBooks source review for portfolio planning

Read-only inspection on 9 September 2026. No dependency was installed, application data changed, remote service called, or source modified in QuantaBooks.

The user supplied the frontend at `C:/Work-Projects/VS Code Projects/Quanta` and the backend at `C:/Work-Projects/VS Projects/QuantaBackendAPI`. Their routes, services, data architecture, tests, operational documentation, localization, delivery workflows, and Git history were reviewed for portfolio evidence.

## Platform capability evidence

Paths below are relative to the QuantaBooks repository.

| Source                                               | What it supports                                                                                                                                                                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app/app/**/page.*`                                  | Product routes for accounts, customers, vendors, employees, items, invoices, orders, payments, receipts, expenses, incomes, vouchers, assets, stock documents, reports, settings, companies, periods, and subscriptions |
| `lib/api/generated/sdk.gen.ts`                       | OpenAPI-generated client surface for accounting operations, reports, permissions, inventory valuation, AI workflows, licensing/add-ons, tenant lifecycle, and ETA e-invoicing                                           |
| `app/app/sidenavigation/items.tsx`                   | Permission-aware navigation across accounting, stock, sales, purchasing, payments, salaries, reports, utilities, and settings                                                                                           |
| `app/app/settings/accounting-health/page.tsx`        | Inventory valuation health analysis, issue review, background recalculation progress, and reasoned zero-cost confirmation                                                                                               |
| `app/app/settings/integrations/eta/page.tsx`         | ETA company configuration, credential verification, document versions, and signing-bridge enrollment/status                                                                                                             |
| `docs/dynamic-permissions-implementation.md`         | Backend-authoritative dynamic permissions for transaction groups, transaction categories, and item types, including inheritance and rollout coverage                                                                    |
| `components/Core/DynamicReport/**`                   | Shared localized document rendering and configurable report templates                                                                                                                                                   |
| `locales/dashboard/en.ts`, `locales/dashboard/ar.ts` | English and Arabic application presentation                                                                                                                                                                             |
| `package.json`                                       | Next.js, React, TypeScript, Tailwind, Material UI, OpenAPI, charts, localization, validation, and spreadsheet dependencies                                                                                              |

## Backend and operational evidence

Paths below are relative to the QuantaBackendAPI repository.

| Source                                                           | What it supports                                                                                                                                                              |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `QuantaBackendAPI/Controllers/**`                                | APIs for accounting, invoices, items, warehouses, payroll, payments, reports, companies, permissions, AI workflows, subscriptions, files, ETA, and operational administration |
| `QuantaBackendAPI/Actions/**`, `QuantaBackendAPI/Services/**`    | Domain operations, inventory valuation, unit conversion, receivable/payable reconciliation, AI workflow coordination, feature access, AWS services, and e-invoicing           |
| `QuantaBackendAPI/QuantaBackendAPI.csproj`                       | .NET 10, ASP.NET Core, Entity Framework Core, PostgreSQL, OpenIddict, Hangfire, Quartz, AWS S3/SES, OpenAPI, and Docker support                                               |
| `docs/inventory-valuation-rules.md`                              | Posted-only valuation, item/warehouse cost streams, base-unit snapshots, returns, weighted-average/FIFO rules, multi-currency historical rates, and auditable adjustments     |
| `docs/accounting-health-review.md`                               | Read-only accounting findings, explicit scan limits, document links, review semantics, and protection against presenting a scan as an accounting certificate                  |
| `docs/POSTGRESQL_TRANSITION.md`                                  | System/tenant database separation, one database per company, SQL Server-to-PostgreSQL migration, reconciliation, migration journals, and cutover gates                        |
| `docs/tenant-database-lifecycle.md`                              | Inactivity warnings, encrypted S3 backup, metadata verification, archive, isolated restore, migrations, and membership reconciliation                                         |
| `docs/eta-reliability.md`, `docs/eta-inbound-invoices.md`        | Submission status recovery, background synchronization, cancellation, authenticated inbound callbacks, idempotent ingestion, and received-document handling                   |
| `Quanta.EtaSigningBridge/**`                                     | Desktop bridge and installer for local certificate signing used by the cloud e-invoicing workflow                                                                             |
| `Quanta.MigrationTool/**`                                        | Provider transition and company database migration tooling                                                                                                                    |
| `QuantaBackendAPI.Tests/**`, `Quanta.EtaSigningBridge.Tests/**`  | Automated coverage across accounting review, valuation, tax, stock availability, units, AI contracts, tenant lifecycle, PostgreSQL, ETA, signing, and background operations   |
| `.github/workflows/aws.yml`, `.github/workflows/aws-staging.yml` | Build, test, Docker image, ECR, and ECS delivery pipelines for production and staging                                                                                         |
| `QuantaBackendAPI/PublicApi/v1/**`                               | Versioned public APIs for invoices, vouchers, items, accounts, units, warehouses, currencies, and synchronization                                                             |

## Daniel-attributed implementation evidence

The repository's Git history contains 506 commits under `DanielAlanazSilicon <d.alanaz@siliconlb.com>`. Relevant examples include:

| Commit                                       | What it supports                                                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `518a7e3d`, `db484e10`, `a928ae4b`           | Invoice row-state and tax refactoring, service-item checks, and warehouse-aware invoice calculations          |
| `c93b56b7`                                   | Consolidation of separate asset transaction pages into a parameterized route and permission-aware shared flow |
| `e4757b15`                                   | Dynamic report template refactoring, template selection, document-type coverage, and localization updates     |
| `7a7fce78`                                   | Hierarchical user permission editor and permission-tree data                                                  |
| `d4c38b7b` and later AI commits              | Initial embedded Quanta AI interface plus later audio, document, image, and limit-handling changes            |
| `a305459a`, `436af89d`                       | In/out stock-slip workflow work                                                                               |
| `c0613cd8`                                   | Income accounts and income-slip workflow work                                                                 |
| `a15f522b`, `d4925b9f`                       | Item transaction in/out quantities and report-total corrections                                               |
| `418bdcf1` and repeated build/period commits | AWS build configuration, build fixes, and fiscal-period upgrade maintenance                                   |

## Publication boundaries

- QuantaBooks is a team-delivered product. Git attribution supports Daniel's listed commits, not sole ownership of the platform.
- The frontend, backend, tests, and documentation establish implemented workflows and contracts; they do not prove every runtime guarantee or the status of every production tenant.
- Permission documentation describes a backend-authoritative model and implemented coverage. Do not turn it into a claim of a formal security audit.
- Accounting-health screens and endpoints establish review and recalculation capabilities. Do not claim that they eliminate accounting or inventory errors.
- ETA routes establish an integration lifecycle. Do not claim responsibility for every integration component or successful production submission without confirmation.
- Commit history supports qualitative implementation claims, but not time savings, revenue, user counts, performance gains, or defect-rate improvements.
- Keep Quanta AI as a separate case study for assistant orchestration, document intake, reporting tools, and confirmed-write workflows.
- Public copy should present Daniel as the product and technical lead connecting stakeholders, architecture, team delivery, cloud operation, and client support. Do not reduce the story to a commit list or imply that team delivery was solo work.
