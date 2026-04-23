import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { COMPANY_INFO, WHATSAPP_URL } from '../lib/constants';

const footerLinks = {
  serviços: [
    { label: 'Aposentadoria por Idade', href: '/servicos/aposentadorias' },
    { label: 'Aposentadoria por Tempo', href: '/servicos/aposentadorias' },
    { label: 'BPC/LOAS', href: '/servicos/bpc-loas' },
    { label: 'Revisão de Benefício', href: '/servicos/revisao-de-beneficios' },
    { label: 'Benefício por Incapacidade', href: '/servicos/auxilios-e-beneficios' },
    { label: 'Planejamento Previdenciário', href: '/servicos/planejamento-previdenciario' },
    { label: 'Salário-Maternidade', href: '/servicos/auxilios-e-beneficios' },
    { label: 'Pensão por Morte', href: '/servicos/auxilios-e-beneficios' },
    { label: 'Contestações e Recursos', href: '/servicos/contestacoes-e-recursos' },
  ],
  empresa: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ],
  legal: [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'LGPD', href: '#' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080f1e] border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-4 lg:mb-0">
            <a href="#" className="inline-block mb-6">
              <img 
                src="/logo-branca.png" 
                alt="Raquel Rinaldi Advocacia" 
                className="h-24 w-auto object-contain"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm font-[family-name:var(--font-body)]">
              Advocacia especializada em direito previdenciário. Doutora em Direito e Professora. 
              Atendimento humanizado há mais de 15 anos.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a href={WHATSAPP_URL} className="flex items-center gap-3 text-white/60 hover:text-[#D4AF37] transition-colors text-sm">
                <Phone size={16} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-white/60 hover:text-[#D4AF37] transition-colors text-sm">
                <Mail size={16} />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold capitalize mb-5 text-sm">
                {title === 'serviços' ? 'Serviços' : title === 'empresa' ? 'Empresa' : 'Legal'}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/45 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/35 text-sm">
              © {currentYear} Raquel Rinaldi Advocacia. Todos os direitos reservados. {COMPANY_INFO.oab}
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/raquelrinaldioficial?igsh=c2V6ajU4b213aDB2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@superdoutora?_r=1&_t=ZS-95aXoeKq25q"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.26z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/raquelrinaldi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.youtube.com/@DoutoraRaquelRinaldi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.facebook.com/professoraraquelrinaldi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: COMPANY_INFO.name,
            description: 'Advocacia especializada em direito previdenciário com atuação nacional.',
            url: typeof window !== 'undefined' ? window.location.origin : '',
            telephone: COMPANY_INFO.phone.replace(/\D/g, ''),
            email: COMPANY_INFO.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'São Paulo',
              addressRegion: 'SP',
              addressCountry: 'BR',
            },
            areaServed: 'Brazil',
            serviceType: ['Direito Previdenciário', 'Aposentadoria', 'BPC/LOAS', 'Revisão de Benefício'],
          }),
        }}
      />
    </footer>
  );
}