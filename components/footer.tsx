export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
      <div className="text-center text-gray-400 text-sm space-y-2">
        <div>
          <p className="font-semibold mb-1">Data according to § 5 TMG / Angaben gemäß § 5 TMG:</p>
          <p>Sven Haiges, Buchenstr. 24, 82178 Puchheim, Germany</p>
        </div>
        <div>
          <p className="font-semibold mb-1">Contact/Kontakt:</p>
          <p>Phone/Telefon: +49 (0) 176-55786080 | E-Mail: <a href="mailto:techsauna@nopants.dev" className="text-pink-500 hover:text-pink-400">techsauna@nopants.dev</a></p>
        </div>
        <div>
          <p>Responsible for the content/Redaktionell verantwortlich: Sven Haiges | Source/Quelle: e-recht24.de</p>
        </div>
      </div>
    </footer>
  );
} 