const INTERIOR_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/bucket/9cfe31c1-9e85-4b3a-a0c0-d9c2c4b4f09a.jpg';

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
            <div className="absolute -bottom-6 -right-6 bg-background border border-teal/40 p-6 hidden lg:block">
              <p className="font-display text-5xl text-teal-light">12</p>
              <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mt-1">лет опыта</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-body tracking-[0.4em] text-teal-light uppercase mb-4">История</p>
            <h2 className="section-title mb-6">О ресторане</h2>
            <div className="teal-divider mb-8" />

            <p className="text-muted-foreground font-body font-light leading-relaxed mb-8">
              «Марлин» — это не просто ресторан. Это путешествие в мир высокой гастрономии, вдохновлённое
              величием атлантического марлина — одной из самых благородных рыб океана.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-teal/30">
              {[
                { num: '12', label: 'лет опыта' },
                { num: '48', label: 'посадочных мест' },
                { num: '180', label: 'позиций винной карты' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl text-teal-light mb-1">{stat.num}</p>
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