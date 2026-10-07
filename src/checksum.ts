import { createHash, createHmac } from 'node:crypto';

export function computeChecksum(payload: string): string {
  return createHash('sha256').update(payload).digest('hex');
}

export function signPayload(payload: string, key: string): string {
  return createHmac('sha256', key).update(payload).digest('hex');
}

export function verifySignature(payload: string, key: string, signature: string): boolean {
  return signPayload(payload, key) === signature;
}
