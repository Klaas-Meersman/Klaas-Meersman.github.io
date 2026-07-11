---
title: "Multi-Tag: A Hardware-Software Co-Design for Memory Safety"
date: 2024-09-28
summary: Reading notes on multi-granular memory tagging — combining hardware and software tagging for spatial and temporal memory safety.
tags: ["reading notes", "memory safety", "hardware"]
---

**Paper:** [Multi-Tag: A Hardware-Software Co-Design for Memory Safety based on Multi-Granular Memory Tagging](https://pure.tugraz.at/ws/portalfiles/portal/60390380/multi_tag.pdf)
· **Read:** 27–28 Sept · **Relevance:** high

<div class="iframe-wrap">
  <iframe src="/papers/multi_tag.pdf" title="Multi-Tag paper (PDF)" loading="lazy"></iframe>
</div>

This paper discusses the combination of hardware and software memory tagging,
since software memory tagging would supposedly lead to too much of a performance
overhead on its own. Hardware memory tagging alone is possible but does not offer
sufficient entropy. An implementation, more precisely one with ARM MTE, is
discussed as an example. Pointer authentication is also mentioned and might be a
valuable addition to memory tagging.

## The imaginary example discussed (not ARM MTE)

- The tag is in the upper bits of the pointer: first an 8-bit object tag, then a
  16-bit page tag.
- Every object gets a tag in memory that is checked against the tag in the
  pointer when accessing the object.
- The 8-bit object tag is checked by the hardware (something like ARM MTE). An
  8-bit page tag leads to an object granularity of 16 bytes on a page
  (4k bytes / 2⁸ = 16 bytes).
- We decrease the size of the virtual address space — a trade-off between the
  size of the virtual address space and security specifications.
- The page tag is checked while getting the information from the page table to
  avoid a performance overhead, since the page table needs to be accessed anyway
  to translate the virtual address to a physical address.
- With pseudorandom tag generation, tag-collision probability on a page is
  2⁻⁸ = 0.3%. With an LFSR (a list to avoid the same tag twice on the same page),
  the collision probability is 0%.
- Neighbouring memory objects have distinct tags, so memory overflow attacks are
  avoided.
- Tag-collision probability over the whole virtual memory address space is
  2⁻⁸ · 2⁻¹⁶ = 0.00000596%. *(Note: I think this paper's calculation is off — it
  also depends on the used virtual memory. But it's an okay metric to quantify
  security nevertheless.)*
- An LFSR can also be used for the page tags (this has implications I don't fully
  understand yet).
- Pages are quarantined until all memory objects are freed, then a new page tag
  is assigned to the page. *(Could be a problem if one memory object stays on the
  page → run out of memory.)*

## Spatial memory safety?

- Achieved by avoiding tag collisions in neighbouring memory objects.
- Probabilistic spatial security when there is use of non-linear buffer overflows.

## Temporal memory safety?

- UAF and double-frees are avoided by having a zero tag.
- Object tags are changed after frees.
- Page tags are changed after all memory objects are freed.

## Pointer authentication

This is also used on top of ARM MTE. It seems very interesting; I plan on looking
further into this, as it is unclear to me at this moment.

## Questions

What is the FPGA implementation for? Are we basically designing a prototype CPU
that offers the hardware and instruction set to make hardware memory-tag checking
possible?

## Further exploration from here

- Stack and global memory tagging
- Pointer authentication (PA)

### Related reading (to-do)

- [A similar idea focused on *temporal* rather than *spatial* safety](https://haehyun.github.io/papers/vik-asplos22.pdf)
- [An older paper with similar ideas, but using only 2 tags](https://faculty.cc.gatech.edu/~orso/papers/clause.doudalis.orso.prvulovic.pdf)
- [WIT — a historical paper using 256 tags](https://www.doc.ic.ac.uk/~cristic/papers/wit-sp-ieee-08.pdf); WIT does not propagate tags dynamically but computes statically which must be accessible, like Data Flow Integrity. It has some cool tricks, such as deterministic linear buffer-overflow protection (their "guards").
- [CryptSan](https://dl.acm.org/doi/pdf/10.1145/3555776.3577635) — recent work on ARM with similar ideas; clever use of PAC to preserve the integrity of the pointer tag bits.
