import {
  Berkshire_Swash,
  Libre_Baskerville,
  Niconne,
  Poppins,
} from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  variable: "--font-berkshire-swash",
  weight: ["400"],
});

const niconne = Niconne({
  subsets: ["latin"],
  variable: "--font-niconne",
  weight: ["400"],
});

const appleChancery = LocalFont({
  src: [{ path: "../assets/fonts/apple-chancery-webfont.woff", weight: "400" }],
  variable: "--font-apple-chancery",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400"],
});

export const metadata = {
  title: "Narendra ♡ Aarthi - 1 Feb, 2024",
  description: "We can’t wait to celebrate our special day with you",
  openGraph: {
    title: "Narendra ♡ Aarthi - 1 Feb, 2024",
    description: "We can’t wait to celebrate our special day with you",
    url: "https://aarthi-weds.narendraprasath.design/",
    images: [
      {
        url: "https://aarthi-weds.narendraprasath.design/images/og-image.jpg",
        width: 828,
        height: 1190,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${berkshireSwash.variable} ${niconne.variable} ${appleChancery.variable} ${libreBaskerville.variable} ${poppins.variable}`}
      >
        {children}

        <>
          {/* Google tag (gtag.js) */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-XTGS8E8XHC`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XTGS8E8XHC', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      </body>
    </html>
  );
}
