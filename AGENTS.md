# Agent Guidelines

## Agent skills

### Issue tracker

GitHub issues at `oscarlopez1991/web-dev-learn-css` via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical triage vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout (`CONTEXT.md` + `docs/adr/` at the repo root). See `docs/agents/domain.md`.

## Chapter Workflow: The "Brain & Arms" Loop

Every chapter in the curriculum roadmap follows an intentional 5-step delivery loop:

1. **Lesson Study**: Oscar studies the chapter on `web.dev/learn/css`.
2. **Grilling Session (`/grill-with-docs`)**: Run an interactive interview to probe edge cases, eliminate fuzzy understanding, update `CONTEXT.md` with domain terms, and record any ADRs in `docs/adr/`.
3. **Challenge Specification**: Agree on the exact interactive challenge, testing criteria, tactile controls, and Tailwind utility mappings.
4. **Scaffolding (`src/chapters/<slug>/`)**: AI implements the chapter module with:
   - `index.js`: Mounts the interactive playground and live controls into the catalog shell.
   - `README.md`: Documents the lesson takeaway, challenge objectives, edge cases explored, and Tailwind equivalents.
5. **Module Registration**: Register the module in `src/chapters/registry.js` and commit.

