"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import ContactForm from './components/ContactForm';

const heroItems = {
  title: 'Welcome to Business OnePager',
  description: 'Your partner in achieving excellence.'
};

const aboutItems = {
  description: 'We are dedicated to providing top-notch services.'
};

const servicesItems = [
  { value: 'Service 1', description: 'Description of service 1.' },
  { value: 'Service 2', description: 'Description of service 2.' },
  { value: 'Service 3', description: 'Description of service 3.' }
];

const testimonialsItems = [
  { quote: 'Service was fantastic!' },
  { quote: 'I highly recommend them!' }
];

const policyItems = {
  terms: 'View our terms of service.',
};

const contactItems = {
  form: <ContactForm />
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-gradient-to-r from-[#E6F0FA] to-[#FFFFFF] py-16">
        <SimpleHero {...heroItems} primaryButtonText="Learn More" secondaryButtonText="Contact Us" />
      </section>
      <section id="about" className="bg-white py-16">
        <MinimalAbout {...aboutItems} />
      </section>
      <section id="services" className="bg-[#F7F9FC] py-16">
        <SimpleKPIBento items={servicesItems} className="max-w-6xl mx-auto" />
      </section>
      <section id="testimonials" className="bg-soft-noise py-16">
        {testimonialsItems.map((testimonial, index) => (
          <blockquote key={index} className="text-center italic">{testimonial.quote}</blockquote>
        ))}
      </section>
      <section id="policy" className="bg-white py-16">
        <p>{policyItems.terms}</p>
      </section>
      <section id="contact" className="bg-white py-16">
        {contactItems.form}
      </section>
      <footer className="bg-white py-6">
        <SimpleFooter columns={[]} copyrightText="© 2023 Business OnePager" onPrivacyClick={() => {}} />
      </footer>
    </SiteThemeProvider>
  );
}