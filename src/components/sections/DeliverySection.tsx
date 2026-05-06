import { CartItem } from '@/types/cart';
import Icon from '@/components/ui/icon';

interface DeliverySectionProps {
  addToCart: (item: CartItem) => void;
}

const DISH_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/e33d72d6-bcd4-411b-afab-0db9be10bc82.jpg';
const SEAFOOD_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/e924042a-4df1-4ce1-a498-5fb229f9beca.jpg';
const MARLIN_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/038322d8-8b01-47ad-b7be-54d78ba7bb6a.jpg';

const DELIVERY_ITEMS = [
  { id: 'd1', name: 'Сет «Марлин Гурмэ»', desc: '5 блюд из марлина + соусы + хлеб', price: 8900, image: MARLIN_IMAGE },
  { id: 'd2', name: 'Ужин для двоих', desc: 'Закуска, основное, десерт, бутылка вина', price: 12500, image: DISH_IMAGE },
  { id: 'd3', name: 'Морской коктейль', desc: 'Устрицы, лобстер, крабовые клешни, соусы', price: 9800, image: SEAFOOD_IMAGE },
];

const PERKS = [
  { icon: 'Clock', label: 'Доставка 45–90 мин' },
  { icon: 'Thermometer', label: 'Термо-упаковка' },
  { icon: 'Award', label: 'Ресторанное качество' },
  { icon: 'MapPin', label: 'По всему городу' },
];

export default function DeliverySection({ addToCart }: DeliverySectionProps) {
  return (
    <div className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-body tracking-[0.4em] text-gold uppercase mb-4">На дом</p>
          <h2 className="section-title">Доставка</h2>
          <div className="gold-divider mx-auto mt-6 mb-6" />
          <p className="text-muted-foreground font-body font-light max-w-xl mx-auto text-sm leading-relaxed">
            Высокая кухня MAISON теперь доступна в вашем доме. Бесплатная доставка от 5 000 ₽.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {PERKS.map(perk => (
            <div key={perk.label} className="flex flex-col items-center gap-3 p-6 border border-border text-center">
              <Icon name={perk.icon} fallback="Star" size={24} className="text-gold" />
              <p className="text-xs font-body tracking-wide text-muted-foreground">{perk.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DELIVERY_ITEMS.map(item => (
            <div key={item.id} className="card-luxury group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-champagne mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-xs font-body mb-4 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-body text-lg">{item.price.toLocaleString('ru')} ₽</span>
                  <button
                    onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, quantity: 1, image: item.image })}
                    className="flex items-center gap-2 btn-gold py-2 px-4 text-xs"
                  >
                    <Icon name="Plus" size={12} />
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}