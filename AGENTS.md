# Nextra SaaS Template - Agent Rules

Refer to PROJECT_SPEC.md to understand the current project status before introducing new features.

## Change Process

- Run `npx tsc --noEmit` after code changes to ensure type correctness.
- **New features** require updating PROJECT_SPEC.md.
- **Modified features** require updating PROJECT_SPEC.md if they involve architecture/interaction logic changes.
- Git commit message format: `<type>: <description>`, types include `feat`/`fix`/`refactor`/`docs`/`style`/`test`/`chore`.

## PROJECT_SPEC.md Update Guidelines

- **Keep it concise**: Only record architecture decisions, core concepts, and key configurations; do not write specific implementation code.
- **Code examples**: Only show core interface definitions or key configurations when necessary; avoid showing common usage patterns.
- **Update timing**: Update when adding new features, architecture changes, or core configuration modifications.
- **No update needed**: Bug fixes, style adjustments, content copy changes, and other changes that don't affect architecture.
- **Avoid excessive detail**: Do not display complete configuration objects or usage examples in SPEC; only explain configuration structure and key fields.

## Coding Standards

- Use `interface` for type definitions (format `IXxx`), use `props` for component parameters.
- Avoid premature optimization: Only use `useCallback`/`useMemo`/`memo` when there are clear performance issues.
