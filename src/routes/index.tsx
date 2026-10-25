import { createFileRoute } from '@tanstack/react-router';

import { getLocale } from '@/paraglide/runtime.js';
import { ZombieHugHome } from '@/components/zombiehug-home';
import { copy, zhLang } from '@/components/zombiehug/copy';
import { absUrl, buildSeoHead, ldJson, localizedAbsoluteUrl } from '@/lib/seo';

export const Route = createFileRoute('/')({
  head: () => {
    const t = copy(zhLang(getLocale()));
    const title = t.metaTitle;
    const description = t.metaDescription;
    const url = localizedAbsoluteUrl('/');
    const ogImage = absUrl('/samples/coraline-ai/poster.jpg');
    const videoUrl = absUrl('/samples/coraline-ai/sample.mp4');
    const brandName = 'coralineai AI';

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: brandName,
          url,
          description,
          inLanguage: ['es', 'en', 'zh'],
        },
        {
          '@type': 'SoftwareApplication',
          name: brandName,
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          url,
          description,
          offers: {
            '@type': 'Offer',
            price: '8.88',
            priceCurrency: 'USD',
            category: 'one-time',
          },
        },
        {
          '@type': 'VideoObject',
          name: 'coralineai AI — demo',
          description,
          thumbnailUrl: ogImage,
          contentUrl: videoUrl,
          uploadDate: '2026-10-25T00:00:00+08:00',
          duration: 'PT10S',
        },
        {
          '@type': 'FAQPage',
          mainEntity: t.faqs.map(([question, answer]) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: answer,
            },
          })),
        },
      ],
    };

    return buildSeoHead({
      path: '/',
      title,
      description,
      ogImage,
      keywords: "coralineai, CoralineAI, coralineai.run, coraline filter, button eye doll, other mother makeup, button eyes reveal, AI Halloween, photo to video, Seedance, from $8.88",
      extraMeta: [ldJson(jsonLd)],
    });
  },
  component: ZombieHugHome,
});
