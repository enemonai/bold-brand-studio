import { Head } from 'vite-react-ssg';
import defaultOgImage from '@/assets/2H0A0127.jpg';
import { siteContent } from '@/data/site-content.generated';
import { resolveCanonicalUrl, resolveOgImageUrl, resolveSiteOrigin } from '@/lib/siteUrl';

const fallbackTitle = "Enemona Isaac's Design Portfolio";
const fallbackDescription =
  'Discover the design portfolio of Enemona Isaac, a product designer and digital experience creator.';
const fallbackName = 'Enemona Isaac';
const fallbackIcon = '/favicon.png';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  icon?: string;
  url?: string;
  pathname?: string;
  keywords?: string[];
}

function nonEmpty(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export const SEO = ({
  title,
  description,
  name,
  type = 'website',
  image,
  icon,
  url,
  pathname = '/',
  keywords = [],
}: SEOProps) => {
  const seo = siteContent.seo;
  const resolvedTitle = nonEmpty(title, nonEmpty(seo?.metaTitle, fallbackTitle));
  const resolvedDescription = nonEmpty(
    description,
    nonEmpty(seo?.metaDescription, fallbackDescription)
  );
  const resolvedName = nonEmpty(name, nonEmpty(seo?.siteName, fallbackName));
  const resolvedImage = nonEmpty(image, nonEmpty(seo?.ogImageUrl, defaultOgImage));
  const resolvedIcon = nonEmpty(icon, nonEmpty(seo?.faviconUrl, fallbackIcon));

  const canonicalUrl =
    url ??
    (typeof window !== 'undefined' ? window.location.href : resolveCanonicalUrl(pathname));
  const ogImage = resolveOgImageUrl(resolvedImage);
  const siteOrigin = resolveSiteOrigin();

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href={resolvedIcon} />
      <link rel="apple-touch-icon" href={resolvedIcon} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={resolvedName} />

      <meta name="twitter:creator" content={resolvedName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:domain" content={siteOrigin.replace(/^https?:\/\//, '')} />
    </Head>
  );
};
