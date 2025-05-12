import 'server-only';

import { createIntl } from '@formatjs/intl';
import { Locale } from '../../i18n-config';

export async function getIntl(locale: Locale) {
    console.info('getIntl', locale);
    return createIntl({
        locale: locale || 'en',
        defaultLocale: 'en',
        messages: (await import(`../locales/${locale || 'en'}.json`)).default
    });
}
