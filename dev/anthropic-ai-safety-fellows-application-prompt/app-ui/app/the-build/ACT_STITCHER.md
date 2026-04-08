# ACT_STITCHER — "I'm Just a Build" Video Production

**Project:** Anthropic AI Safety Fellows Application — July 2026 Cohort
**Strategy:** Modular Act-by-Act Generation → Local FFmpeg Stitch
**Governance:** C-RSP v4.0 — Module 5

---

## Why Modular

Single 60-second generation = session timeout + credit exhaustion.  
Four 15-second clips = controlled, resumable, verifiable.

---

## The Four Acts

### ACT 1 (0:00 – 0:15): The Build on Silicon Hill
**Mood:** Melancholy / Solitary  
**Key Visual:** lone figure at base of Silicon Hill at dawn, 1970s morning sun  
**Color:** amber, burnt orange, deep shadow  
**Music:** single low drone, held breath  
**Generate at:** [Teaser Generator](https://aistudio.google.com/apps/d2fce9ad-a091-4703-97a0-7f75c9d25aff)  
**Output:** `act1.mp4`  
**Status:** ☐ PENDING

### ACT 2 (0:15 – 0:30): The Funk-Pop Transition
**Mood:** Rising / Determined  
**Key Visual:** metallic path-girders slamming into hillside on the beat; Build steps onto each one as it forms  
**Color:** copper, electric blue, kinetic motion blur  
**Music:** funk bass drops, rhythmic percussive cuts  
**Generate at:** [Teaser Generator](https://aistudio.google.com/apps/d2fce9ad-a091-4703-97a0-7f75c9d25aff)  
**Output:** `act2.mp4`  
**Status:** ☐ PENDING

### ACT 3 (0:30 – 0:45): The 10-Pillar Chant
**Mood:** Forensic / Intense  
**Key Visual:** rapid-fire terminal output HUD — FORENSIC INGEST, BENCHMARKS, ADMISSIBILITY, DETERMINISM  
**Color:** terminal green on black, harsh white flashes  
**Music:** staccato, rhythmic — no pauses  
**Words on screen:** FORENSIC INGEST | BENCHMARKS | ADMISSIBILITY | FAIL-CLOSED | VALIDATED  
**Generate at:** [Teaser Generator](https://aistudio.google.com/apps/d2fce9ad-a091-4703-97a0-7f75c9d25aff)  
**Output:** `act3.mp4`  
**Status:** ☐ PENDING

### ACT 4 (0:45 – 1:00): Validation — The Flag on the Server Mountain
**Mood:** Triumphant / Earned  
**Key Visual:** Build plants flag at summit; hill morphs into server rack; VALIDATED seal glows green  
**Color:** clean white, validated green, deep zinc  
**Final card:** "I'm Just a Build. Anthropic AI Safety Fellows 2026."  
**Generate at:** [Teaser Generator](https://aistudio.google.com/apps/d2fce9ad-a091-4703-97a0-7f75c9d25aff)  
**Output:** `act4.mp4`  
**Status:** ☐ PENDING

---

## Local Stitch Command (FFmpeg)

```bash
# Requires: ffmpeg installed locally
# Assumes act1.mp4, act2.mp4, act3.mp4, act4.mp4 in same directory

ffmpeg \
  -i act1.mp4 \
  -i act2.mp4 \
  -i act3.mp4 \
  -i act4.mp4 \
  -filter_complex "[0:v][1:v][2:v][3:v]concat=n=4:v=1:a=0[outv]" \
  -map "[outv]" \
  im-just-a-build-final.mp4
```

**With audio (if each act has audio track):**
```bash
ffmpeg \
  -i act1.mp4 \
  -i act2.mp4 \
  -i act3.mp4 \
  -i act4.mp4 \
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a][3:v][3:a]concat=n=4:v=1:a=1[outv][outa]" \
  -map "[outv]" \
  -map "[outa]" \
  im-just-a-build-final.mp4
```

---

## Release Checklist

- [ ] Act 1 generated → `act1.mp4`
- [ ] Act 2 generated → `act2.mp4`
- [ ] Act 3 generated → `act3.mp4`
- [ ] Act 4 generated → `act4.mp4`
- [ ] FFmpeg stitch complete → `im-just-a-build-final.mp4`
- [ ] Upload to LinkedIn
- [ ] Link in application `/the-build` page
- [ ] Sync to `the-living-constitution` repo (`projects/teaser-video-remotion/`)

---

## V&T Statement

**Exists:** 4-act script (locked), ACT_STITCHER strategy, FFmpeg commands  
**Verified against:** C-RSP v4.0 Module 5 specification  
**Not claimed:** Video clips exist — they are pending generation  
**Non-existent:** `act1.mp4` through `act4.mp4`, `im-just-a-build-final.mp4`  
**Unverified:** Final runtime will be exactly 60s (depends on Teaser Generator output FPS)  
**Functional status:** Strategy is complete. Execution is pending human-in-the-loop generation at Teaser Generator.
