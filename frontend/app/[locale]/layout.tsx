import { LanguageProvider } from "../context/LanguageContext";
import "../globals.css"; // Ensure your CSS is imported

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params for Next.js 15+ compatibility
  const { locale } = await params;
  
  // Load the correct dictionary (default to 'en' if not found)
  let dict;
  try {
    dict = (await import(`../../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    dict = (await import(`../../dictionaries/en.json`)).default;
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider locale={locale} dict={dict}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}