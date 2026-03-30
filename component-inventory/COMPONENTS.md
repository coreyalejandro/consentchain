# Components

This file is generated from `component-inventory.json`.
Run `pnpm component-inventory:build` after updating the registry.

## Repo

- Name: consentchain
- Root: .
- Last Updated: 2025-12-25T03:34:05.758Z

## Summary

- Total components: 81
- By type: ui=75, package=2, service=1, doc=2, workflow=1
- By status: active=81

## Components

### Portfolio App Shell

- ID: consentchain/app-shell
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: app
- Description: Primary UI shell and routing for the portfolio app.
- Interfaces:
  - Inputs: routes, page components
  - Outputs: rendered pages
- Dependencies: none

### UI Components

- ID: consentchain/ui-components
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components
- Description: Reusable UI components and composition blocks.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Styles System

- ID: consentchain/styles-system
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: styles, app/globals.css
- Description: Global styles, tokens, and Tailwind configuration.
- Interfaces:
  - Inputs: tokens, class names
  - Outputs: styled UI
- Dependencies: none

### Data Layer

- ID: consentchain/data-layer
- Type: package
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: lib
- Description: Shared utilities and data helpers for the app.
- Interfaces:
  - Inputs: data, params
  - Outputs: transformed data
- Dependencies: none

### Hooks

- ID: consentchain/hooks
- Type: package
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: hooks
- Description: Shared React hooks and client-side helpers.
- Interfaces:
  - Inputs: hook params
  - Outputs: hook results
- Dependencies: none

### Middleware

- ID: consentchain/middleware
- Type: service
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: middleware.ts
- Description: Request middleware and routing policies.
- Interfaces:
  - Inputs: request
  - Outputs: response
- Dependencies: none

### Public Assets

- ID: consentchain/public-assets
- Type: doc
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: public
- Description: Static assets and public files for the site.
- Interfaces:
  - Inputs: asset files
  - Outputs: served assets
- Dependencies: none

### Docs

- ID: consentchain/docs
- Type: doc
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: docs
- Description: Project documentation and reference materials.
- Interfaces:
  - Inputs: source docs
  - Outputs: docs
- Dependencies: none

### Component Inventory System

- ID: consentchain/component-inventory-system
- Type: workflow
- Status: active
- Version: 0.1.0
- Standalone: true
- Owner: Core Team
- Location: component-inventory.json, COMPONENTS.schema.json, component-inventory, scripts/component-inventory
- Description: Validation, reporting, and aggregation for component-inventory.json.
- Interfaces:
  - Inputs: component-inventory.json, COMPONENTS.schema.json, repo paths
  - Outputs: component-inventory/COMPONENTS.md, component-inventory.index.json, component-inventory.graph.json
- Dependencies: none

### Animations / Breathingbackground

- ID: consentchain/components/animations/BreathingBackground
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/animations/BreathingBackground.tsx
- Description: UI component located at components/animations/BreathingBackground.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Animations / Floatingelement

- ID: consentchain/components/animations/FloatingElement
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/animations/FloatingElement.tsx
- Description: UI component located at components/animations/FloatingElement.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Animations / Floatingorb

- ID: consentchain/components/animations/FloatingOrb
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/animations/FloatingOrb.tsx
- Description: UI component located at components/animations/FloatingOrb.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Animations / Index

- ID: consentchain/components/animations/index
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/animations/index.ts
- Description: UI component located at components/animations/index.ts.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Audio Experience / Audio Button

- ID: consentchain/components/audio-experience/audio-button
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/audio-experience/audio-button.tsx
- Description: UI component located at components/audio-experience/audio-button.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Audio Experience / Audio Engine

- ID: consentchain/components/audio-experience/audio-engine
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/audio-experience/audio-engine.tsx
- Description: UI component located at components/audio-experience/audio-engine.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Audio Experience / Audio Section

- ID: consentchain/components/audio-experience/audio-section
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/audio-experience/audio-section.tsx
- Description: UI component located at components/audio-experience/audio-section.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Audio Experience / Audio Toggle

- ID: consentchain/components/audio-experience/audio-toggle
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/audio-experience/audio-toggle.tsx
- Description: UI component located at components/audio-experience/audio-toggle.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Card Path / Card Path Scene

- ID: consentchain/components/card-path/card-path-scene
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/card-path/card-path-scene.tsx
- Description: UI component located at components/card-path/card-path-scene.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Card Path / Path Card

- ID: consentchain/components/card-path/path-card
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/card-path/path-card.tsx
- Description: UI component located at components/card-path/path-card.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### ConsentChain / Breathing Background

- ID: consentchain/components/creative-chaos/breathing-background
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/creative-chaos/breathing-background.tsx
- Description: UI component located at components/creative-chaos/breathing-background.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### ConsentChain / Floating Card

- ID: consentchain/components/creative-chaos/floating-card
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/creative-chaos/floating-card.tsx
- Description: UI component located at components/creative-chaos/floating-card.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### ConsentChain / Floating Particles

- ID: consentchain/components/creative-chaos/floating-particles
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/creative-chaos/floating-particles.tsx
- Description: UI component located at components/creative-chaos/floating-particles.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### ConsentChain / Organic Title

- ID: consentchain/components/creative-chaos/organic-title
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/creative-chaos/organic-title.tsx
- Description: UI component located at components/creative-chaos/organic-title.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Custom Icons

- ID: consentchain/components/custom-icons
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/custom-icons.tsx
- Description: UI component located at components/custom-icons.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Floating Nav

- ID: consentchain/components/floating-nav
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/floating-nav.tsx
- Description: UI component located at components/floating-nav.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Laydown Card

- ID: consentchain/components/laydown-card
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/laydown-card.tsx
- Description: UI component located at components/laydown-card.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Playground / Card Path Demo

- ID: consentchain/components/playground/card-path-demo
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/playground/card-path-demo.tsx
- Description: UI component located at components/playground/card-path-demo.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Playground / Scroll Card Demo

- ID: consentchain/components/playground/scroll-card-demo
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/playground/scroll-card-demo.tsx
- Description: UI component located at components/playground/scroll-card-demo.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Playground / Table Card Demo

- ID: consentchain/components/playground/table-card-demo
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/playground/table-card-demo.tsx
- Description: UI component located at components/playground/table-card-demo.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Project Modal

- ID: consentchain/components/project-modal
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/project-modal.tsx
- Description: UI component located at components/project-modal.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Theme Provider

- ID: consentchain/components/theme-provider
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/theme-provider.tsx
- Description: UI component located at components/theme-provider.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Accordion

- ID: consentchain/components/ui/accordion
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/accordion.tsx
- Description: UI component located at components/ui/accordion.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Alert Dialog

- ID: consentchain/components/ui/alert-dialog
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/alert-dialog.tsx
- Description: UI component located at components/ui/alert-dialog.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Alert

- ID: consentchain/components/ui/alert
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/alert.tsx
- Description: UI component located at components/ui/alert.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Aspect Ratio

- ID: consentchain/components/ui/aspect-ratio
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/aspect-ratio.tsx
- Description: UI component located at components/ui/aspect-ratio.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Avatar

- ID: consentchain/components/ui/avatar
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/avatar.tsx
- Description: UI component located at components/ui/avatar.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Badge

- ID: consentchain/components/ui/badge
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/badge.tsx
- Description: UI component located at components/ui/badge.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Breadcrumb

- ID: consentchain/components/ui/breadcrumb
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/breadcrumb.tsx
- Description: UI component located at components/ui/breadcrumb.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Button

- ID: consentchain/components/ui/button
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/button.tsx
- Description: UI component located at components/ui/button.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Calendar

- ID: consentchain/components/ui/calendar
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/calendar.tsx
- Description: UI component located at components/ui/calendar.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Card

- ID: consentchain/components/ui/card
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/card.tsx
- Description: UI component located at components/ui/card.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Carousel

- ID: consentchain/components/ui/carousel
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/carousel.tsx
- Description: UI component located at components/ui/carousel.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Chart

- ID: consentchain/components/ui/chart
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/chart.tsx
- Description: UI component located at components/ui/chart.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Checkbox

- ID: consentchain/components/ui/checkbox
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/checkbox.tsx
- Description: UI component located at components/ui/checkbox.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Collapsible

- ID: consentchain/components/ui/collapsible
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/collapsible.tsx
- Description: UI component located at components/ui/collapsible.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Command

- ID: consentchain/components/ui/command
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/command.tsx
- Description: UI component located at components/ui/command.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Context Menu

- ID: consentchain/components/ui/context-menu
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/context-menu.tsx
- Description: UI component located at components/ui/context-menu.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Dialog

- ID: consentchain/components/ui/dialog
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/dialog.tsx
- Description: UI component located at components/ui/dialog.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Drawer

- ID: consentchain/components/ui/drawer
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/drawer.tsx
- Description: UI component located at components/ui/drawer.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Dropdown Menu

- ID: consentchain/components/ui/dropdown-menu
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/dropdown-menu.tsx
- Description: UI component located at components/ui/dropdown-menu.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Form

- ID: consentchain/components/ui/form
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/form.tsx
- Description: UI component located at components/ui/form.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Hover Card

- ID: consentchain/components/ui/hover-card
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/hover-card.tsx
- Description: UI component located at components/ui/hover-card.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Input Otp

- ID: consentchain/components/ui/input-otp
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/input-otp.tsx
- Description: UI component located at components/ui/input-otp.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Input

- ID: consentchain/components/ui/input
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/input.tsx
- Description: UI component located at components/ui/input.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Label

- ID: consentchain/components/ui/label
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/label.tsx
- Description: UI component located at components/ui/label.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Menubar

- ID: consentchain/components/ui/menubar
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/menubar.tsx
- Description: UI component located at components/ui/menubar.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Navigation Menu

- ID: consentchain/components/ui/navigation-menu
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/navigation-menu.tsx
- Description: UI component located at components/ui/navigation-menu.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Pagination

- ID: consentchain/components/ui/pagination
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/pagination.tsx
- Description: UI component located at components/ui/pagination.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Popover

- ID: consentchain/components/ui/popover
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/popover.tsx
- Description: UI component located at components/ui/popover.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Progress

- ID: consentchain/components/ui/progress
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/progress.tsx
- Description: UI component located at components/ui/progress.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Radio Group

- ID: consentchain/components/ui/radio-group
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/radio-group.tsx
- Description: UI component located at components/ui/radio-group.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Resizable

- ID: consentchain/components/ui/resizable
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/resizable.tsx
- Description: UI component located at components/ui/resizable.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Scroll Area

- ID: consentchain/components/ui/scroll-area
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/scroll-area.tsx
- Description: UI component located at components/ui/scroll-area.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Select

- ID: consentchain/components/ui/select
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/select.tsx
- Description: UI component located at components/ui/select.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Separator

- ID: consentchain/components/ui/separator
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/separator.tsx
- Description: UI component located at components/ui/separator.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Sheet

- ID: consentchain/components/ui/sheet
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/sheet.tsx
- Description: UI component located at components/ui/sheet.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Sidebar

- ID: consentchain/components/ui/sidebar
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/sidebar.tsx
- Description: UI component located at components/ui/sidebar.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Skeleton

- ID: consentchain/components/ui/skeleton
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/skeleton.tsx
- Description: UI component located at components/ui/skeleton.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Slider

- ID: consentchain/components/ui/slider
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/slider.tsx
- Description: UI component located at components/ui/slider.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Sonner

- ID: consentchain/components/ui/sonner
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/sonner.tsx
- Description: UI component located at components/ui/sonner.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Switch

- ID: consentchain/components/ui/switch
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/switch.tsx
- Description: UI component located at components/ui/switch.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Table

- ID: consentchain/components/ui/table
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/table.tsx
- Description: UI component located at components/ui/table.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Tabs

- ID: consentchain/components/ui/tabs
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/tabs.tsx
- Description: UI component located at components/ui/tabs.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Textarea

- ID: consentchain/components/ui/textarea
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/textarea.tsx
- Description: UI component located at components/ui/textarea.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Toast

- ID: consentchain/components/ui/toast
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/toast.tsx
- Description: UI component located at components/ui/toast.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Toaster

- ID: consentchain/components/ui/toaster
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/toaster.tsx
- Description: UI component located at components/ui/toaster.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Toggle Group

- ID: consentchain/components/ui/toggle-group
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/toggle-group.tsx
- Description: UI component located at components/ui/toggle-group.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Toggle

- ID: consentchain/components/ui/toggle
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/toggle.tsx
- Description: UI component located at components/ui/toggle.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Tooltip

- ID: consentchain/components/ui/tooltip
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/tooltip.tsx
- Description: UI component located at components/ui/tooltip.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Use Toast

- ID: consentchain/components/ui/use-toast
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/use-toast.ts
- Description: UI component located at components/ui/use-toast.ts.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none

### Ui / Use Mobile

- ID: consentchain/components/ui/use-mobile
- Type: ui
- Status: active
- Version: 0.1.0
- Standalone: false
- Owner: Core Team
- Location: components/ui/use-mobile.tsx
- Description: UI component located at components/ui/use-mobile.tsx.
- Interfaces:
  - Inputs: props
  - Outputs: rendered UI
- Dependencies: none
