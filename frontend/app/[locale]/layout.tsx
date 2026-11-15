import {LanguageProvider} from '../context/LanguageContext'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const {locale} = await params
  const supportedLocale = locale === 'am' ? 'am' : 'en'

  return <LanguageProvider locale={supportedLocale}>{children}</LanguageProvider>
}