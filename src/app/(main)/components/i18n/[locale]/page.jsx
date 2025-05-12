import Link from 'next/link';
import { getIntl } from '../../../../../config/intl';
import { i18n } from '../../../../../../i18n-config';

export default async function Home({ params: { locale } }) {
    const { locales, defaultLocale } = i18n;
    const intl = await getIntl(locale || defaultLocale);

    return (
        <div className="container mx-auto px-4">
            <header className="py-6 border-b mb-8 bg-gray-50">
                <nav dir="ltr" className="languages flex gap-3 justify-center">
                    {[...locales].sort().map((loc) => (
                        <Link
                            key={loc}
                            // This creates proper links to switch languages while staying on the same page
                            href={`./${loc}`}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                loc === (locale || defaultLocale)
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 border'
                            }`}
                        >
                            {loc.toUpperCase()}
                        </Link>
                    ))}
                </nav>
            </header>
            <main className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {intl.formatMessage(
                        { id: 'page.home.title' },
                        {
                            b: (chunks) => (
                                <b key="bold" className="text-primary">
                                    {chunks}
                                </b>
                            )
                        }
                    )}
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                    {intl.formatMessage({ id: 'page.home.description' })}
                </p>
            </main>
        </div>
    );
}
