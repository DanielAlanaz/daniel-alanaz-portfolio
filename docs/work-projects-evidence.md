# Wider project inventory for portfolio planning

Read-only inspection on 9 September 2026. This inventory records visible project scope; it does not establish release status, production use, or individual authorship for every component.

## Enterprise platform ecosystem

The `eQual-Pro` repository contains a large Windows enterprise application ecosystem. Top-level modules include CRM, accounting reports and utilities, payment certificates, chart reports, e-commerce, production, POS, payroll, approvals, client customization, document management, transaction history, invoicing, project management, packing and transportation, embedded reports, and variation control. Its application tree also includes VAT declaration, background services, and task modules.

Related repositories include:

- `SCS_Administrator` for administration tooling;
- several desktop and web licensing systems;
- `SCS.ServiceUpdater` for application-service updates;
- `EQ_WS_SCS` for service integration;
- `eQualProSetup` for installation;
- `eQualProPriceChecker` for a focused Windows utility.

The Git history includes Daniel-attributed work involving POS, printing, database maintenance, reporting, service installation, licensing, dynamic invoice fields, per-user voucher permissions, invoice synchronization, VAT, stock, and profit/loss reporting. Keep public positioning at the leadership and domain level unless a dedicated case study is prepared.

## Mobile and offline operations

`eQualProMobile` is an Expo / React Native application with routes for accounts, transactions, invoices, items, visits, reports, authentication, profile settings, and data synchronization. Source evidence includes:

- SQLite tables and local reads/writes for invoices, items, accounts, visits, and settings;
- synchronization screens for master data, visits, and invoices;
- camera-based barcode capture;
- secure local storage;
- printable and shareable PDF reports;
- English and Arabic localization.

`eQualProMobileApi` is an Express/Sequelize API project with relational database drivers, authentication, email, and PDF dependencies.

## Product experiments and other applications

- `SynapseDrifter` is a Unity 6 project with a custom network-generation script and a project scene.
- `StartingGameDev` is a Unity 6 first-person/gameplay practice project with gunfire and ammunition UI scripts alongside starter assets.
- `Al-Maallem` contains a Next.js and Supabase marketplace architecture for customer/provider profiles, service requests, quotes, messages, payments, payouts, reviews, and provider verification. Its own README says the frontend remains on demo state, so do not present it as a delivered production marketplace.
- `Micro-Trader` currently contains no inspectable source files and should not be used as portfolio evidence.

## Editorial use

This inventory supports a multidisciplinary story across mature desktop ERP, web platforms, .NET APIs, mobile/offline workflows, AI services, cloud operations, installers and background services, and Unity/3D exploration. It should strengthen the portfolio's leadership and systems perspective without turning every folder into a public project card.
