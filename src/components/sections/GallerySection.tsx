const IMAGES = [
  { src: 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/dbee8d36-bc84-4c13-aba6-b43cece67e54.jpg', label: 'Основной зал' },
  { src: 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/e33d72d6-bcd4-411b-afab-0db9be10bc82.jpg', label: 'Авторские блюда' },
  { src: 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/9f8c368e-31bd-4f42-b323-355d2a994234.jpg', label: 'Приватный зал' },
  { src: 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/e924042a-4df1-4ce1-a498-5fb229f9beca.jpg', label: 'Морепродукты' },
  { src: 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/038322d8-8b01-47ad-b7be-54d78ba7bb6a.jpg', label: 'Символ ресторана' },
];

export default function GallerySection() {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-body tracking-[0.4em] text-gold uppercase mb-4">Атмосфера</p>
          <h2 className="section-title">Галерея</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${i === 0 ? 'col-span-2 row-span-1 md:col-span-1 md:row-span-2' : ''}`}
              style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                <span className="text-xs font-body tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
