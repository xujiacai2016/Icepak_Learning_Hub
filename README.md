# Icepak Learning Hub

Interactive Learning and Training Platform for Ansys Icepak

Current Status:

✅ Knowledge Architecture Completed
✅ UI Architecture Completed
✅ Front-End Prototype Skeleton Completed

## V1.0 Prototype

This is a static, data-driven prototype using HTML, CSS, JavaScript and JSON.

Open `index.html` in a browser, or open `pages/dashboard.html` directly.

### MVP Pages

- Dashboard
- Workflow Map
- Logic Tree
- Glossary Search
- Troubleshooting Guide
- Quiz Practice
- Case Library

### Data Files

The prototype reads knowledge assets from `data/`:

- `workflow.json`
- `logic_tree.json`
- `glossary.json`
- `troubleshooting.json`
- `quiz.json`
- `cases.json`
- `design_rules.json`
- `learning_paths.json`

Because browser `fetch()` may be blocked when opening files directly, use a local static server when testing JSON-driven pages. For example, from the project root:

```text
python -m http.server 8000
```

Then open `http://localhost:8000/`.
