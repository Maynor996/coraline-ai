# coralineai AI — deploy notes

## Live (2026-10-25 Asia/Shanghai)
- Primary Site: https://coralineai.run (+ www)
- Worker: `coraline-ai` (fallback https://coraline-ai.chatgpt-plus.workers.dev)
- CF account: 1002569303@qq.com (QQ) — NOT Bgnwd15
- Local path: `/workspace/coralineai-web`

## Pricing
- Single $8.88 / Popular $16.99 / Creator $29.90

## Stripe webhook hub
`https://aizombie.app/api/payment/notify/stripe`
`STRIPE_APP_METADATA=coraline-ai`

## D1
- DB: `seedream-studio-db` · Prefix: `cai_` · Migrations: `cai_d1_migrations`

## Samples
- public/samples/coraline-ai/

## Video provider
- Primary Kie Seedance 2 Fast · Fallback TryAllAPI
