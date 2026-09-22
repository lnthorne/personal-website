## Connectivity is not guaranteed

An offline-first experience is not simply a cache layer. It begins by deciding which work must remain possible when a connection disappears, and by making that promise visible in the product.

Local data, clear sync states, and thoughtful conflict handling turn an unreliable network from a source of lost work into a normal product constraint.

## Design for recovery

People should be able to see whether an action is saved locally, waiting to sync, or needs attention. Recovery should feel intentional rather than like an error state.

Useful status language is specific:

- **Saved on this device** means the work is safe.
- **Waiting to sync** explains that connectivity—not user action—is the missing piece.
- **Needs review** signals that a person should resolve a meaningful conflict.

## Treat the field as the primary environment

When software is used away from reliable power, Wi-Fi, or recent devices, the happy path must account for those conditions. Fast local reads, resumable uploads, and patient background sync are product features—not implementation details.
