/**
 * Locked coralineai AI prompt — single photo → i2v.
 * Source: MakeViral / remixmeme template (adapted). Standalone — no remixmeme.com dependency.
 * Uses @image1 for Seedance / Kie i2v.
 */

export const PRIMARY_EFFECT = 'coraline-ai' as const;

export const ZOMBIE_EFFECT_SLUGS = ['coraline-ai'] as const;

export type ZombieEffectSlug = (typeof ZOMBIE_EFFECT_SLUGS)[number];

export function isZombieEffectSlug(value: string): value is ZombieEffectSlug {
  return (ZOMBIE_EFFECT_SLUGS as readonly string[]).includes(value);
}

export function isSingleImageEffect(slug: string): boolean {
  return slug === 'coraline-ai';
}

export function isTripleImageEffect(_slug: string): boolean {
  return false;
}

export function isMotionControlEffect(_slug: string): boolean {
  return false;
}

export function isAdTextEffect(_slug: string): boolean {
  return false;
}

export function sanitizeAdText(note?: string): string {
  return (note || '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 40);
}

export const CORALINE_AI_PROMPT = `A button eyes doll makeup reveal, like a real vertical Halloween makeup video filmed on a phone held at arm's length in a dim bedroom: the person faces the camera from the chest up. Photorealistic, one take with one hand-swipe transition.

The person in the clip is the person in @image1, in every frame: copy the exact face from @image1 (face shape, eye color and eye shape, eyebrows, nose, mouth, skin tone, age, hair color, hair length and hairstyle, and any beard, moustache, glasses or freckles) and the clothes from @image1, so their friends recognize them at once. The face shape, nose, mouth, hair and clothes stay the same from the first frame to the last, also under the doll makeup after the swipe: never a different person, never morph.

0-4 s, BEFORE: the person exactly as in @image1, no makeup look, relaxed, looking calmly into the lens with a small curious tilt of the head.
4-5 s, THE SWIPE: they sweep one open hand across the lens from one side to the other, and the frame goes dark for a moment behind the hand, with a soft whoosh.
5-10 s, AFTER: the hand moves away and the same person is revealed as an unsettling handmade porcelain doll: porcelain-white doll skin with fine black hairline cracks across the forehead, the cheeks and the jaw, two oversized glossy black four-hole buttons in place of the eyes, sewn on with carefully stitched black thread at the button edges, thin high-arched black eyebrows and dark plum lips; no real eyes show anywhere, only the two buttons. Keep the same identifiable facial outline, hairstyle, clothing colors and pose from @image1. The room now sits in deep purple and green shadow with one soft light on the face. They tilt the head slowly to one side, a slow, strange smile spreads, and one hand reaches toward the camera as it pushes in on the button-eyed face. The face stays large, sharp and well lit.

Not a film character: no black bob wig unless @image1 shows one, no polka-dot dress, no yellow raincoat, no blue hair, no needle, no thread in the hands. No blood, no gore. Audio: a slow, creepy music-box lullaby, a whoosh on the swipe and a soft creak at the reveal, no words, no singing. Exactly one person. No text, no subtitles, no logos, no watermark.`;

const PROMPTS: Record<ZombieEffectSlug, string> = {
  'coraline-ai': CORALINE_AI_PROMPT,
};

export function getZombiePrompt(slug: ZombieEffectSlug): string {
  return PROMPTS[slug];
}

export function buildZombiePrompt(slug: string, note?: string): string {
  const base =
    (isZombieEffectSlug(slug) ? PROMPTS[slug] : PROMPTS['coraline-ai']) ||
    PROMPTS['coraline-ai'];
  const extra = note?.trim();
  return extra ? `${base}\n\nUser note: ${extra}` : base;
}

export function listZombiePrompts(): Array<{ slug: ZombieEffectSlug; prompt: string }> {
  return ZOMBIE_EFFECT_SLUGS.map((slug) => ({ slug, prompt: PROMPTS[slug] }));
}
