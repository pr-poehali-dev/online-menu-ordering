interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/038322d8-8b01-47ad-b7be-54d78ba7bb6a.jpg';

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,6,4,0.45) 0%, rgba(8,6,4,0.65) 60%, rgba(8,6,4,0.95) 100%)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <p className="text-xs font-body tracking-[0.4em] text-gold uppercase mb-6">
          Ресторан высокой кухни
        </p>

        <h1 className="font-display font-light text-champagne mb-4" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1, letterSpacing: '0.1em' }}>
          МАРЛИН
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="gold-divider flex-1 max-w-24" />
          <p className="font-display italic text-xl text-gold/80" style={{ letterSpacing: '0.05em' }}>
            Марлин. Океан. Совершенство.
          </p>
          <div className="gold-divider flex-1 max-w-24" />
        </div>

        <p className="font-body font-light text-champagne/70 text-sm tracking-widest max-w-lg mx-auto mb-12 leading-relaxed">
          Атлантический марлин — символ силы и благородства — в центре нашего авторского меню.
          Безупречная техника, редкие ингредиенты, незабываемые впечатления.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo('menu')} className="btn-gold-filled">
            Смотреть меню
          </button>
          <button onClick={() => scrollTo('booking')} className="btn-gold">
            Забронировать стол
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-slow">
        <span className="text-xs font-body tracking-widest text-gold/60 uppercase">Листайте вниз</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </div>
  );
}