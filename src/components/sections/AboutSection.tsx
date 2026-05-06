const INTERIOR_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/9f8c368e-31bd-4f42-b323-355d2a994234.jpg';

export default function AboutSection() {
  return (
    <div className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={INTERIOR_IMAGE}
              alt="Интерьер ресторана Марлин"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-background border border-gold/30 p-6 hidden lg:block">
              <p className="font-display text-5xl text-gold">12</p>
              <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mt-1">лет опыта</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-body tracking-[0.4em] text-gold uppercase mb-4">История</p>
            <h2 className="section-title mb-6">О ресторане</h2>
            <div className="gold-divider mb-8" />

            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6">
              «Марлин» — это не просто ресторан. Это путешествие в мир высокой гастрономии, вдохновлённое
              величием атлантического марлина — одной из самых благородных рыб океана.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-8">
              Наш шеф-повар Александр Морозов прошёл путь от парижских бистро до токийских omakase-ресторанов.
              Каждое блюдо — это диалог между французской техникой и лучшими продуктами со всего мира.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { num: '2', label: 'звезды Мишлен' },
                { num: '48', label: 'посадочных мест' },
                { num: '180', label: 'позиций винной карты' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl text-gold mb-1">{stat.num}</p>
                  <p className="text-xs font-body tracking-wide text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}