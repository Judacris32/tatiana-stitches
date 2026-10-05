import type { Metadata } from 'next';
import '@fontsource/marcellus/400.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Tatiana Stitches | Bespoke Tailoring in Onitsha',
    template: '%s | Tatiana Stitches',
  },
  description:
    'Tatiana Stitches is the Onitsha tailoring studio of award winning creative director Chigbo Vitalis Agbo. Senators, agbada, isiagu and African textile styling, cut to your measure.',
  openGraph: {
    title: 'Tatiana Stitches',
    description: 'Bespoke African menswear and tailoring from Onitsha, Nigeria.',
    images: ['/images/work/ts-52.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
