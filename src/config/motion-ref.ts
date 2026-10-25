/**
 * Durations for coralineai-web. No reference reel hosted.
 */
import type { ZombieEffectSlug } from '@/core/ai/zombie-prompts';

export const WORKERS_DEV_ORIGIN = 'https://coraline-ai.chatgpt-plus.workers.dev';

export const DURATIONS: Record<ZombieEffectSlug, number> = {
  'coraline-ai': 10,
};

/** No motion-control reference video — pure i2v. */
export function getChatGttReferenceVideoUrl(
  _slug: ZombieEffectSlug,
  _appUrl?: string
): string {
  return '';
}

export function getChatGttDuration(slug: ZombieEffectSlug): number {
  return DURATIONS[slug] ?? 10;
}
