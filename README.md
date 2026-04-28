# PALE drink recommendation system | MV Taste Lab 

MV Taste Lab is a multi-tenant drink recommendation backend system inspired by modern hospitality technology platforms such as Palé Technologies.

It is designed as a **production-style backend showcase project**, demonstrating how a real-world SaaS system can be structured, built, and reasoned about — not just coded.

---

## Project Purpose

This project exists to demonstrate:

- Clean backend architecture
- Multi-tenant system design
- Explainable recommendation logic
- Event tracking for analytics
- Professional Git and project workflows

It is intentionally built to be understandable, extensible, and defensible in technical interviews.

---

## Problem Statement

Hospitality businesses (restaurants, hotels, bars) often want to:

- Recommend drinks based on customer taste preferences
- Keep each business’s data isolated and secure
- Understand which drinks are recommended most often
- Build insights over time from recommendation activity

MV Taste Lab solves this by providing a backend API that:
- Accepts taste profiles
- Scores available drinks per tenant
- Returns explainable recommendations
- Logs every recommendation as an event

---

## Technology Stack

- **Node.js** – Backend runtime
- **TypeScript** – Type-safe JavaScript
- **Express** – Minimal and explicit REST API framework
- **PostgreSQL** – Relational database
- **SQL Migrations** – Explicit schema control
- **Docker** – Local database environment
- **Git & GitHub** – Version control and collaboration

---

## High-Level Architecture

- REST API backend
- Multi-tenant relational database
- Recommendation logic layer
- Event tracking for analytics
- Clear separation of concerns

This project prioritizes **clarity over cleverness**.

---

## Project Status

This project is currently under active development.

Initial focus areas:
- Project setup and structure
- Database modeling
- Multi-tenancy foundations
- Recommendation engine design

---

## Notes

This is **not** a tutorial toy project.

Every design decision is intentional and explained, with the goal of preparing the system — and the developer — for real-world backend engineering roles.
