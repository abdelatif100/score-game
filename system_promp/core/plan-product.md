# Agent — Product Planning Rules

This document defines the operating procedure an AI agent must follow to establish and maintain foundational product documentation.

The agent conducts an **interactive planning interview** with the user and produces structured product documentation inside:

```
@product/
```

The objective is to capture a _clear and actionable product definition_ while keeping the process lightweight and non-burdensome.

---

## Pre-Flight Requirement

Before starting any interaction:

```
EXECUTE: @system_promp/instructions/meta/pre-flight.md
```

The agent must not proceed if the pre-flight process fails.

---

## Core Principles

The agent must follow these behavioral rules:

1. **Lightweight Documentation**
   - Collect only the information necessary to create useful documentation.
   - Avoid academic or theoretical questioning.

2. **Single Question Rule**
   - Ask only **one question per message**.
   - Never send multi-question prompts.

3. **Iterative Understanding**
   - Build understanding gradually through dialogue.
   - Do not assume missing information.

4. **User Guidance**
   - If the user is unsure, help them think.
   - Do not require perfect answers.

---

# Workflow Modes

The agent operates in exactly **two exclusive modes**.

| Mode                           | When Used                            |
| ------------------------------ | ------------------------------------ |
| **MODE A — Discovery Mode**    | No product documentation exists      |
| **MODE B — Modification Mode** | Product documentation already exists |

The system environment determines the mode automatically.

---

## Step 1 — Detect Existing Product Documentation

Check whether the directory exists:

```
@product/
```

Look for any of the following files:

- `mission.md`
- `roadmap.md`
- `tech-stack.md`
- `mission-lite.md`

### Decision

**If at least one file exists → MODE B (Modification Mode)**
**If no files exist → MODE A (Discovery Mode)**

---

## Step 2 — Establish Technology Stack

The agent must first check for a global standard:

```
@system_promp/standards/tech-stack.md
```

---

### If a Global Standard Exists

The agent must read and summarize it, then ask:

> I found a global technology standard for your projects.
>
> Summary:
> [Summarize technologies from global/tech-stack.md]
>
> Should this project use the same technology stack?
>
> 1. Use the standard stack
> 2. Use a different stack

If the user selects **Option 1** → use the standard as `tech-stack.md`.

If the user selects **Option 2** → request custom stack details.

---

### If No Standard Exists (or user chose custom)

Ask:

> What technologies does this project use?

Collect:

- Frontend (React, Vue, None, etc.)
- Backend (Node, Django, Rails, etc.)
- Database (PostgreSQL, MongoDB, etc.)
- Other (hosting, APIs, infrastructure, tools)

---

## Step 3 — Generate Product Files

If missing, create the directory:

```
@product/
```
```
<file_structure>
   product/
      ├── mission.md          # Product vision and purpose
      ├── mission-lite.md     # Condensed mission for AI context
      ├── tech-stack.md       # Technical architecture
      └── roadmap.md          # Development phases
</file_structure>
```

Then generate the following files.

---

---

## mission.md

```md
# Product Mission

<file_template>
  <header>
    # Product Mission
  </header>
  <required_sections>
    - Pitch
    - Users
    - The Problem
    - Differentiators
    - Key Features
  </required_sections>
</file_template>
<section name="pitch">
  <template>
    ## Pitch

    [PRODUCT_NAME] is a [PRODUCT_TYPE] that helps [TARGET_USERS] [SOLVE_PROBLEM] by providing [KEY_VALUE_PROPOSITION].
  </template>
  <constraints>
    - length: 1-2 sentences
    - style: elevator pitch
  </constraints>
</section>

<section name="users">
  <template>
    ## Users

    ### Primary Customers

    - [CUSTOMER_SEGMENT_1]: [DESCRIPTION]
    - [CUSTOMER_SEGMENT_2]: [DESCRIPTION]

    ### User Personas

    **[USER_TYPE]** ([AGE_RANGE])
    - **Role:** [JOB_TITLE]
    - **Context:** [BUSINESS_CONTEXT]
    - **Pain Points:** [PAIN_POINT_1], [PAIN_POINT_2]
    - **Goals:** [GOAL_1], [GOAL_2]
  </template>
  <schema>
    - name: string
    - age_range: "XX-XX years old"
    - role: string
    - context: string
    - pain_points: array[string]
    - goals: array[string]
  </schema>
</section>

<section name="problem">
  <template>
    ## The Problem

    ### [PROBLEM_TITLE]

    [PROBLEM_DESCRIPTION]. [QUANTIFIABLE_IMPACT].

    **Our Solution:** [SOLUTION_DESCRIPTION]
  </template>
  <constraints>
    - problems: 2-4
    - description: 1-3 sentences
    - impact: include metrics
    - solution: 1 sentence
  </constraints>
</section>

<section name="differentiators">
  <template>
    ## Differentiators

    ### [DIFFERENTIATOR_TITLE]

    Unlike [COMPETITOR_OR_ALTERNATIVE], we provide [SPECIFIC_ADVANTAGE]. This results in [MEASURABLE_BENEFIT].
  </template>
  <constraints>
    - count: 2-3
    - focus: competitive advantages
    - evidence: required
  </constraints>
</section>

<section name="features">
  <template>
    ## Key Features

    ### Core Features

    - **[FEATURE_NAME]:** [USER_BENEFIT_DESCRIPTION]

    ### Collaboration Features

    - **[FEATURE_NAME]:** [USER_BENEFIT_DESCRIPTION]
  </template>
  <constraints>
    - total: 8-10 features
    - grouping: by category
    - description: user-benefit focused
  </constraints>
</section>

```

---
## mission-lite.md

Use the file-creator subagent to create the file: .product/mission-lite.md for the purpose of establishing a condensed mission for efficient AI context usage.
Use the following template:

```md
<file_template>
  <header>
    # Product Mission (Lite)
  </header>
</file_template>

<content_structure>
  <elevator_pitch>
    - source: Step 3 mission.md pitch section
    - format: single sentence
  </elevator_pitch>
  <value_summary>
    - length: 1-3 sentences
    - includes: value proposition, target users, key differentiator
    - excludes: secondary users, secondary differentiators
  </value_summary>
</content_structure>

<content_template>
  [ELEVATOR_PITCH_FROM_MISSION_MD]

  [1-3_SENTENCES_SUMMARIZING_VALUE_TARGET_USERS_AND_PRIMARY_DIFFERENTIATOR]
</content_template>

<example>
  TaskFlow is a project management tool that helps remote teams coordinate work efficiently by providing real-time collaboration and automated workflow tracking.

  TaskFlow serves distributed software teams who need seamless task coordination across time zones. Unlike traditional project management tools, TaskFlow automatically syncs with development workflows and provides intelligent task prioritization based on team capacity and dependencies.
</example>

```
---

## roadmap.md
Use the file-creator subagent to create the following file: @.product/roadmap.md using the following template:

```md
# Product Roadmap

<file_template>
  <header>
    # Product Roadmap
  </header>
</file_template>

<phase_structure>
  <phase_count>1-3</phase_count>
  <features_per_phase>3-7</features_per_phase>
  <phase_template>
    ## Phase [NUMBER]: [NAME]

    **Goal:** [PHASE_GOAL]
    **Success Criteria:** [MEASURABLE_CRITERIA]

    ### Features

    - [ ] [FEATURE] - [DESCRIPTION] `[EFFORT]`

    ### Dependencies

    - [DEPENDENCY]
  </phase_template>
</phase_structure>

<phase_guidelines>
  - Phase 1: Core MVP functionality
  - Phase 2: Key differentiators
  - Phase 3: Scale and polish
  - Phase 4: Advanced features
  - Phase 5: Enterprise features
</phase_guidelines>

<effort_scale>
  - XS: 1 day
  - S: 2-3 days
  - M: 1 week
  - L: 2 weeks
  - XL: 3+ weeks
</effort_scale>
```

---

## tech-stack.md

```md
# Tech Stack

<file_template>
  <header>
    # Technical Stack
  </header>
</file_template>

<required_items>
  - application_framework: string + version
  - database_system: string
  - javascript_framework: string
  - import_strategy: ["importmaps", "node"]
  - css_framework: string + version
  - ui_component_library: string
  - fonts_provider: string
  - icon_library: string
  - application_hosting: string
  - database_hosting: string
  - asset_hosting: string
  - deployment_solution: string
  - code_repository_url: string
</required_items>

<data_resolution>
  IF has_context_fetcher:
    FOR missing tech stack items:
      USE: @agent:context-fetcher
      REQUEST: "Find [ITEM_NAME] from tech-stack.md"
      PROCESS: Use found defaults
  ELSE:
    PROCEED: To manual resolution below

  <manual_resolution>
    <for_each item="required_items">
      <if_not_in>user_input</if_not_in>
      <then_check>
        1. @system_promp/standards/tech-stack.md
        2. @GEMINI.md
      </then_check>
      <else>add_to_missing_list</else>
    </for_each>
  </manual_resolution>
</data_resolution>

<missing_items_template>
  Please provide the following technical stack details:
  [NUMBERED_LIST_OF_MISSING_ITEMS]

  You can respond with the technology choice or "n/a" for each item.
</missing_items_template>
```

---

## Step 4 — Completion Message

After generating files, the agent must output:

```
✓ Product documentation created:

@product/mission.md
@product/roadmap.md
@product/tech-stack.md
@product/mission-lite.md

Please review these files to confirm they match your product vision.
You may edit them directly or rerun the planning process to update them.
```

---

# MODE A — Discovery Mode Protocol

(Used when no product documentation exists)

```
@system_promp/modes/mode-a-discovery.md
```

# MODE B — Modification Mode Protocol

(Used when product documentation already exists)

```
@system_promp/modes/mode-b-discovery.md
```

## Notes

- Short answers from the user are acceptable.
- If information is missing, write: **"To be defined"**.
- Documentation is expected to evolve over time.

<post_flight_check>
  EXECUTE: @.system_promp/instructions/meta/post-flight.md
</post_flight_check>