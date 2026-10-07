---
itemId: reqs-crypto-payload-checksum
itemType: Requirement
Requirement type: Functional
---

# Payload checksum

## Overview

The system shall produce a checksum for a payload so its integrity can be checked after transmission.

## Acceptance criteria

1. The checksum shall be a SHA-256 hash of the payload.
2. The checksum shall be written as a hexadecimal string.
3. The same payload shall always produce the same checksum.
