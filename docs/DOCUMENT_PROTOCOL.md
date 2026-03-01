# Document Index Storage Protocol

## Purpose
This protocol establishes standards for creating, organizing, storing, and indexing all project documentation to ensure consistency, discoverability, and maintainability.

## Core Principles

1. **Single Source of Truth** - Each piece of information has one authoritative location
2. **Discoverability** - Documents are easy to find through logical organization and indexing
3. **Maintainability** - Clear ownership and update procedures
4. **Accessibility** - Consistent formatting and structure across all documents
5. **Version Control** - All changes tracked through git with meaningful history

## Directory Structure

```
docs/
├── README.md                    # Master index and quick navigation
├── DOCUMENT_PROTOCOL.md         # This file
├── assets/
│   ├── images/                  # Screenshots, diagrams, photos
│   ├── diagrams/                # Source files for diagrams (.mmd, .drawio)
│   └── templates/               # Document templates
├── plans/
│   ├── comprehensive-plan.md    # Strategic plans
│   └── roadmaps/                # Project roadmaps and timelines
├── architecture/
│   ├── decisions/               # Architecture Decision Records (ADR)
│   ├── diagrams/                # System architecture diagrams
│   └── patterns/                # Design patterns and best practices
├── research/
│   ├── investigations/          # Research investigations
│   ├── experiments/             # Experimental results
│   └── literature/              # Literature reviews and references
├── specifications/
│   ├── api/                     # API specifications
│   ├── technical/               # Technical specs
│   └── requirements/            # Requirements documents
├── guides/
│   ├── user/                    # End-user guides
│   ├── developer/               # Developer documentation
│   └── operations/              # Operational guides
└── archive/
    └── YYYY-MM/                 # Archived documents by year-month
```

## Naming Conventions

### File Names
- **Format**: `[prefix-]descriptive-name.md`
- **Rules**:
  - Use lowercase only
  - Separate words with hyphens
  - Be descriptive but concise (max 50 chars)
  - No spaces or special characters
  - Use meaningful names that indicate content

**Examples**:
- `comprehensive-plan.md`
- `api-authentication-spec.md`
- `user-onboarding-guide.md`
- `2025-12-project-kickoff.md`

### Directory Names
- Use lowercase
- Use hyphens for multi-word names
- Keep names short and clear
- Prefer plural nouns for collections

## Document Structure

### Required Frontmatter

Every document must begin with YAML frontmatter:

```yaml
---
title: "Human-Readable Title"
author: "Author Name"
created: YYYY-MM-DD
updated: YYYY-MM-DD
version: "1.0"
status: draft|review|approved|archived
category: plans|architecture|research|specifications|guides
tags: [keyword1, keyword2, keyword3]
related: [relative-path-to-related-doc.md]
---
```

### Document Template

```markdown
---
title: "Document Title"
author: "Your Name"
created: YYYY-MM-DD
updated: YYYY-MM-DD
version: "1.0"
status: draft
category: category-name
tags: [tag1, tag2]
---

# Document Title

## Overview
Brief description of what this document covers.

## Table of Contents
- [Section 1](#section-1)
- [Section 2](#section-2)

## Section 1
Content here...

## Section 2
Content here...

## References
- [Related Doc](./related-doc.md)
- External link

---
**Document ID:** PROJ-DOC-001
**Last Review:** YYYY-MM-DD
```

## Document Types and Formats

### Primary Formats
- **Markdown** (`.md`) - All text-based documentation
- **Mermaid** - Diagrams embedded in markdown
- **JSON/YAML** - Structured data and configuration
- **SVG** - Vector graphics and exported diagrams

### Document Categories

#### 1. Plans
**Purpose**: Strategic planning, roadmaps, project proposals
**Location**: `/docs/plans/`
**Naming**: `[type]-plan.md` or `YYYY-MM-roadmap.md`
**Status Workflow**: draft → review → approved → active → completed

#### 2. Architecture
**Purpose**: System design, decisions, patterns
**Location**: `/docs/architecture/`
**Naming**: `[component]-architecture.md`
**Special**: ADRs follow format `ADR-NNN-title.md`

#### 3. Research
**Purpose**: Investigations, experiments, findings
**Location**: `/docs/research/`
**Naming**: `[topic]-research.md` or `YYYY-MM-DD-experiment-name.md`

#### 4. Specifications
**Purpose**: Technical specs, requirements, contracts
**Location**: `/docs/specifications/`
**Naming**: `[feature]-spec.md` or `api-[endpoint]-spec.md`
**Status Workflow**: draft → review → approved → implemented

#### 5. Guides
**Purpose**: How-to, tutorials, reference
**Location**: `/docs/guides/`
**Naming**: `[audience]-[topic]-guide.md`

## Index Management

### Master Index (docs/README.md)
- Maintained manually
- Updated whenever documents are added/removed/moved
- Organized by category with links
- Includes brief descriptions
- Updated date tracked

### Automated Index Generation
For large documentation sets, consider:
```bash
# Generate index of all documents
find docs -name "*.md" -type f | sort
```

### Document Registry
Maintain `docs/REGISTRY.json` for programmatic access:

```json
{
  "documents": [
    {
      "id": "PROJ-DOC-001",
      "path": "docs/plans/comprehensive-plan.md",
      "title": "Comprehensive Plan",
      "category": "plans",
      "status": "approved",
      "created": "2025-12-26",
      "updated": "2025-12-26"
    }
  ]
}
```

## Workflow and Lifecycle

### Creation
1. Determine appropriate category
2. Use document template
3. Follow naming conventions
4. Add frontmatter metadata
5. Add entry to master index
6. Commit: `docs: add [document-name]`

### Review
1. Update status to "review"
2. Create PR if collaborative
3. Assign reviewers
4. Address feedback
5. Update version number

### Approval
1. Update status to "approved"
2. Update version to x.0
3. Add to official index
4. Announce if necessary

### Update
1. Increment version (patch/minor/major)
2. Update "updated" date
3. Document changes in commit message
4. Update related documents if needed

### Archive
1. Move to `/docs/archive/YYYY-MM/`
2. Update master index
3. Add redirect or note in original location
4. Commit: `docs: archive [document-name]`

## Metadata Standards

### Status Values
- `draft` - Work in progress
- `review` - Under review
- `approved` - Approved but not yet implemented/active
- `active` - Current and in use
- `deprecated` - No longer recommended
- `archived` - Historical record only

### Version Numbering
Follow semantic versioning:
- **Major** (x.0.0) - Significant changes, restructuring
- **Minor** (0.x.0) - New sections, substantial additions
- **Patch** (0.0.x) - Corrections, clarifications, minor updates

### Tags
Use consistent, lowercase tags:
- Technical: `api`, `database`, `frontend`, `backend`
- Process: `planning`, `architecture`, `implementation`
- Priority: `critical`, `high-priority`, `nice-to-have`
- Audience: `developer`, `user`, `stakeholder`

## Search and Discovery

### Finding Documents

#### By Category
```bash
ls docs/[category]/
```

#### By Content
```bash
grep -r "search term" docs/
```

#### By Tag
```bash
grep -r "tags:.*search-tag" docs/
```

#### By Status
```bash
grep -r "status: active" docs/
```

### Document Links
- Use relative paths: `[Link](../architecture/system-design.md)`
- Include section anchors: `[Link](./doc.md#section-name)`
- Verify links work before committing

## Quality Standards

### Checklist for New Documents
- [ ] Follows naming convention
- [ ] Includes complete frontmatter
- [ ] Uses document template structure
- [ ] Added to master index
- [ ] Links verified
- [ ] Spelling and grammar checked
- [ ] Committed with proper message

### Review Criteria
- Clarity and readability
- Completeness
- Accuracy
- Proper categorization
- Metadata completeness
- Link validity

## Automation

### Pre-commit Hooks
Consider adding:
- Markdown linting
- Link validation
- Frontmatter validation
- Index synchronization check

### Scripts
Useful maintenance scripts in `/scripts/docs/`:
- `validate-docs.sh` - Check all documents for completeness
- `generate-index.sh` - Auto-generate document index
- `check-links.sh` - Verify all internal links
- `update-registry.sh` - Update document registry

## Best Practices

1. **Write for your audience** - Consider who will read this
2. **Be concise** - Respect the reader's time
3. **Use examples** - Show, don't just tell
4. **Keep it current** - Update or archive outdated docs
5. **Link generously** - Connect related information
6. **Version appropriately** - Track significant changes
7. **Review regularly** - Schedule periodic reviews
8. **Make it scannable** - Use headers, lists, formatting

## Maintenance Schedule

- **Weekly**: Review recently updated documents
- **Monthly**: Check for outdated documents
- **Quarterly**: Full documentation audit
- **Annually**: Archive old versions, restructure if needed

## References

- [Markdown Guide](https://www.markdownguide.org/)
- [Semantic Versioning](https://semver.org/)
- [Architecture Decision Records](https://adr.github.io/)

---

**Protocol Version:** 1.0
**Last Updated:** 2025-12-26
**Owner:** Project Team
**Review Date:** 2026-01-26
