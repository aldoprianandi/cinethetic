# Security

Cinethetic is a public demo renderer. It should not contain private workflow logic, credentials, customer data, private brand assets, paid content, analytics exports, or internal operating documents.

## Reporting

If you find a security issue or accidental data exposure, open a GitHub issue with the smallest safe reproduction. Do not paste secrets, tokens, private files, or non-public data into the issue.

## Public Safety Checks

Run the public-safety guard before publishing changes:

```bash
npm run check:public
```

The check fails when tracked files include ignored output directories, local assistant folders, environment files, common credential formats, or private-business terms that do not belong in the public demo.

Use the full verification command before calling a release/demo ready:

```bash
npm run verify
```
