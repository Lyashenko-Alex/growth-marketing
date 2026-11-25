import type { Locale } from './site';

export const packages = [
  { id: 'starter', name: { sl: 'Starter', en: 'Starter' }, price: 750, featured: false, features: ['competitive', 'strategy', 'seo', 'aio', 'analytics', 'articles2', 'report'] },
  { id: 'growth', name: { sl: 'Growth', en: 'Growth' }, price: 1900, featured: true, features: ['competitive', 'strategy', 'seo', 'aio', 'analytics', 'articles4', 'google', 'meta', 'social', 'creative', 'cro', 'report'] },
  { id: 'scale', name: { sl: 'Scale', en: 'Scale' }, price: 3000, featured: false, features: ['competitive', 'strategy', 'seo', 'aio', 'analytics', 'articles8', 'google', 'meta', 'social', 'creative', 'cro', 'email', 'automation', 'report'] }
] as const;

export const featureLabels: Record<string, Record<Locale, string>> = {
  competitive: { sl: 'Konkurenčna analiza.', en: 'Competitive analysis.' }, strategy: { sl: 'Growth marketing strategija.', en: 'Growth marketing strategy.' }, seo: { sl: 'SEO.', en: 'SEO.' }, aio: { sl: 'AIO/GEO.', en: 'AIO/GEO.' }, analytics: { sl: 'Marketinška analitika.', en: 'Marketing analytics.' }, articles2: { sl: '2 SEO članka na mesec.', en: 'Two SEO articles per month.' }, articles4: { sl: '4 SEO članki na mesec.', en: 'Four SEO articles per month.' }, articles8: { sl: '8 SEO člankov na mesec.', en: 'Eight SEO articles per month.' }, google: { sl: 'Upravljanje Google Ads.', en: 'Google Ads management.' }, meta: { sl: 'Upravljanje Meta Ads.', en: 'Meta Ads management.' }, social: { sl: 'Upravljanje družbenih omrežij.', en: 'Social media management.' }, creative: { sl: 'Oglasi in kreativne rešitve.', en: 'Advertising creatives.' }, cro: { sl: 'Optimizacija konverzij.', en: 'Conversion rate optimization.' }, email: { sl: 'E-poštni marketing.', en: 'Email marketing.' }, automation: { sl: 'Marketinška avtomatizacija.', en: 'Marketing automation.' }, report: { sl: 'Mesečno poročilo o uspešnosti.', en: 'Monthly performance report.' }
};

export const commercialConditions = { sl: ['Minimalno sodelovanje: tri mesece.', 'Fiksne mesečne cene paketov.', 'Oglaševalski proračuni niso vključeni.', 'Stroški sodelovanja z vplivneži in ustvarjalci niso vključeni.', 'Dodatne storitve je mogoče naročiti ločeno.'], en: ['Minimum engagement: three months.', 'Fixed monthly package prices.', 'Advertising budgets are not included.', 'Influencer and creator collaboration expenses are not included.', 'Additional services may be purchased separately.'] } as const;
