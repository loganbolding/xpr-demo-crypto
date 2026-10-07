---
itemId: reqs-crypto-payload-signing
itemType: Requirement
Requirement type: Functional
---

# Payload signing

## Overview

The system shall sign payloads with a device key so a receiver can confirm where they came from.

## Acceptance criteria

1. The signature shall be an HMAC-SHA-256 of the payload using the device key.
2. Different keys shall produce different signatures for the same payload.
3. The system shall confirm a signature only when it matches the payload and key.
4. The system shall reject a signature when the payload or key has changed.
