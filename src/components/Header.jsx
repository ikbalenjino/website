export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">PT. Contoh Sukses</h1>
        <nav>
          <a href="/" className="px-3">Beranda</a>
          <a href="/about" className="px-3">Tentang</a>
          <a href="/services" className="px-3">Layanan</a>
          <a href="/contact" className="px-3">Kontak</a>
        </nav>
      </div>
    </header>
  );
}
