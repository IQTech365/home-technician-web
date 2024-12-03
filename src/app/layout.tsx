import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import InquiryModal from "./components/inquiryModal";
import WhatsappIcon from "./components/whatsappIcon";
import InstaIcon from "./components/instaIcon";
import FacebookIcon from "./components/facebookIcon";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Home Technician Website",
    template: "%s | Home Technician Website"
  },
  description: `
Welcome to Home Technician – Your Trusted Partner for Expert Repairs!

At Home Technician, we specialize in providing top-notch repair, 
installation, and maintenance services for your home's essential
 systems. With over 20 years of experience, we ensure comfort and 
 convenience for our customers through reliable and professional services.

Our Services Include:

AC Installation and Repair: Keep your home cool and comfortable 
with our expert air conditioning services.
Electrical Appliance Repairs: From chimneys to
 geysers, we handle it all with precision and care.
Routine Maintenance: Ensure the longevity and efficiency 
of your appliances with our regular maintenance packages.
We pride ourselves on using high-quality components sourced 
from trusted vendors, ensuring long-lasting results.
 As an environmentally conscious company, we aim to deliver 
 solutions that are both effective and sustainable.

Experience the difference with Home Technician – where customer 
satisfaction is our priority.

Contact us today for all your home repair needs!
`,
  keywords: `Home Technician, 
 ,home appliance repair service,
 Ac repairing near me,
 Window ac service gurgaon near me,
 Best window ac service gurgaon
 `,
  openGraph: {
    title: "Home Technician Website",
    description: `Welcome to Home Technician – Your Trusted Partner for Expert Repairs!

At Home Technician, we specialize in providing top-notch repair, 
installation, and maintenance services for your home's essential
 systems. With over 20 years of experience, we ensure comfort and 
 convenience for our customers through reliable and professional services.`,
    images: [{
      url: "./opengraph-image.png",
      alt: "Home Technician Website OpenGraph Image",
    }],
    url:"https://hometechnician.in",
    type: "website",
  },
facebook:{
  appId: 'your-app-id',
},
twitter:{
  card:"summary_large_image"
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <InquiryModal />
        <FacebookIcon />
        <WhatsappIcon />
        <InstaIcon />
        <Footer />
      </body>
    </html>
  );
}
