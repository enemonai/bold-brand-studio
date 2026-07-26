import { Head } from 'vite-react-ssg';

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>> | null;
};

export function JsonLd({ data }: JsonLdProps) {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return null;
  }

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
