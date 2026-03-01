# Documentation Index

This directory contains all project documentation following a structured organization system.

## Directory Structure

```
docs/
├── README.md                 # This file - documentation index
├── plans/                    # Strategic plans and roadmaps
├── architecture/             # System architecture and design documents
├── research/                 # Research notes and findings
├── specifications/           # Technical specifications
└── guides/                   # User and developer guides
```

## Document Categories

### Plans (`/plans`)
Strategic planning documents, project roadmaps, and comprehensive plans.

**Current Documents:**
- `comprehensive-plan.md` - Comprehensive Plan for AI Reasoning Project and Anthropic Fellows Application

### Architecture (`/architecture`)
System architecture diagrams, design decisions, and architectural documentation records (ADRs).

### Research (`/research`)
Research findings, experimental results, literature reviews, and investigation notes.

### Specifications (`/specifications`)
Detailed technical specifications, API documentation, and interface contracts.

### Guides (`/guides`)
User guides, developer documentation, tutorials, and how-to documents.

## Document Storage Protocol

### Naming Conventions
- Use lowercase with hyphens: `my-document-name.md`
- Include date prefix for versioned documents: `2025-12-26-status-update.md`
- Use descriptive names that indicate content

### File Formats
- Primary format: Markdown (`.md`)
- Diagrams: Mermaid (embedded in markdown) or `.svg`
- Data: JSON or YAML for structured data
- Images: Place in `/docs/assets/images/`

### Metadata
Each document should include frontmatter metadata:

```markdown
---
title: Document Title
author: Author Name
date: YYYY-MM-DD
version: 1.0
status: draft|review|final
tags: [tag1, tag2]
---
```

### Version Control
- All documents are version-controlled via git
- Use meaningful commit messages when updating documentation
- Major revisions should be tagged

### Document Lifecycle
1. **Draft** - Initial creation and writing
2. **Review** - Under review by stakeholders
3. **Final** - Approved and published
4. **Archived** - Moved to `/docs/archive/` when superseded

## Index Update Protocol

When adding new documents:
1. Place in appropriate category directory
2. Follow naming conventions
3. Add entry to this README under the relevant section
4. Commit with message: `docs: add [document-name]`

## Quick Links

- [Comprehensive Plan](./plans/comprehensive-plan.md)

---

**Last Updated:** 2025-12-26
**Maintained By:** Project Team
