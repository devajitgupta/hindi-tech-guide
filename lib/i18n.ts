// lib/i18n.ts
import fs from 'fs';
import path from 'path';

type Translations = Record<string, string>;

export async function getTranslations(locale: string): Promise<Translations> {
  const supported = ['hi', 'en'];
  if (!supported.includes(locale)) locale = 'hi';
  const filePath = path.join(process.cwd(), 'locales', `${locale}.json`);
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(raw);
    return json;
  } catch (e) {
    console.error('i18n load error', e);
    return {};
  }
}
