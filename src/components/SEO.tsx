import { Head } from 'vite-react-ssg';
import defaultOgImage from '@/assets/2H0A0127.jpg';
import { resolveCanonicalUrl, resolveOgImageUrl, resolveSiteOrigin } from '@/lib/siteUrl';

const defaultIcon = '/favicon.png';

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

export const SEO = ({
  title = "Enemona Isaac's Design Portfolio",
  description = 'Discover the design portfolio of Enemona Isaac, a product designer and digital experience creator.',
  name = 'Enemona Isaac',
  type = 'website',
  image = defaultOgImage,
  icon = defaultIcon,
  url,
  pathname = '/',
  keywords = [],
}: SEOProps) => {
  const canonicalUrl =
    url ??
    (typeof window !== 'undefined' ? window.location.href : resolveCanonicalUrl(pathname));
  const ogImage = resolveOgImageUrl(image);
  const siteOrigin = resolveSiteOrigin();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href={icon} />
      <link rel="apple-touch-icon" href={icon} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={name} />

      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:domain" content={siteOrigin.replace(/^https?:\/\//, '')} />
    </Head>
  );
};
