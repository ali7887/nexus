Based on the current Nexus project state:

Generate the NEXT 5 SMALLEST IMPLEMENTATION TASKS.

Rules:
- tasks must be atomic
- each task should produce only ONE feature or ONE file
- preserve architecture consistency
- follow current phase only
- order tasks correctly
- avoid overengineering
- output as checklist

###1. [ ] Create prisma/schema.prisma with models: User, Account, Session, Workspace, Project, Task, Status, Role (enum), Priority (enum).
2. [ ] Run `npx prisma format` to ensure schema consistency.
3. [ ] Run `npx prisma generate` to generate the Prisma client.
4. [ ] Configure .env.local with DATABASE_URL for Neon PostgreSQL.
5. [ ] Execute initial migration: `npx prisma migrate dev --name init`.
Current Phase:

1. [ ] Create prisma/schema.prisma with models: User, Account, Session, Workspace, Project, Task, Status, Role (enum), Priority (enum).
2. [ ] Run `npx prisma format` to ensure schema consistency.
3. [ ] Run `npx prisma generate` to generate the Prisma client.
4. [ ] Configure .env.local with DATABASE_URL for Neon PostgreSQL.
5. [ ] Execute initial migration: `npx prisma migrate dev --name init`.

Current Completed Files:
Phase 1 — Database Schema

Current File:
See AI_HANDOFF.md