# Digital Art Portraits — Cloudflare Upload Guide

This folder is a **Cloudflare migration package**. It is not uploaded as a ZIP through a normal “website upload” screen. It is deployed once as a Cloudflare Worker application after the owner has purchased `digitalartportraits.com`.

## What this package keeps

The responsive desktop and mobile gallery, all public portrait pages, basket, WhatsApp selection handoff, manual Whish/OMT/Western Union process, customer email order lookup, payment-proof upload, and private owner payment confirmation are included.

High-resolution portraits are intentionally **not** uploaded to Cloudflare. The owner continues to fulfil confirmed orders by sharing only the purchased file from restricted Google Drive.

## What to do tomorrow

1. Buy `digitalartportraits.com` in Cloudflare Registrar. Enable two-factor authentication, domain lock, and automatic renewal.
2. Create a Cloudflare **D1 database** named `digital-art-portraits-orders` and copy its ID into `wrangler.jsonc`.
3. Create a private Cloudflare **R2 bucket** named `digital-art-portraits-receipts`.
4. In the Cloudflare project, add two secrets: `ADMIN_PASSWORD` and `SESSION_SECRET`. Never send either value through chat or email.
5. Run `pnpm install`, `pnpm cf:db:apply`, then `pnpm cf:deploy` from this folder. Cloudflare will provide a temporary `workers.dev` address for testing.
6. Check the desktop and mobile gallery, create a test order, upload a test receipt, and sign into `/owner/orders` with the new owner password.
7. In Cloudflare, connect `digitalartportraits.com` only after the test is successful.

## Important media note

At first, the Cloudflare application safely reads the current public preview images and video through `MEDIA_ORIGIN`, so the gallery can be tested without exposing master files. Before closing the current website hosting, copy the public low-resolution gallery images, mock-ups, size guides, and preview videos into Cloudflare R2 and replace the `MEDIA_ORIGIN` proxy. This is a separate media migration step.

## Do not do these things

- Do not upload the high-resolution master portraits to the public gallery bucket.
- Do not make the receipt bucket public.
- Do not use “Anyone with the link” for Google Drive fulfilment.
- Do not confirm a payment only because the customer sent a WhatsApp message or receipt. Verify that the transfer arrived first.
- Do not connect the final domain until testing is complete.
