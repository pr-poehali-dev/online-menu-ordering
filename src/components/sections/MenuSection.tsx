import { useState } from 'react';
import { CartItem } from '@/types/cart';
import Icon from '@/components/ui/icon';

const DISH_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/e33d72d6-bcd4-411b-afab-0db9be10bc82.jpg';
const SEAFOOD_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/e924042a-4df1-4ce1-a498-5fb229f9beca.jpg';

const CATEGORIES = ['Все', 'Форель', 'Вырезка', 'Завтраки', 'Закуски'];

const MENU: { id: string; name: string; desc: string; price: number; cat: string; image: string; tag?: string }[] = [
  { id: 'f1', name: 'Форель на гриле', desc: 'Свежая форель на углях, сезонные овощи, соус из трав и лимона', price: 1200, cat: 'Форель', image: SEAFOOD_IMAGE, tag: 'Шеф рекомендует' },
  { id: 'f2', name: 'Копчёная форель', desc: 'Форель холодного копчения, сливочный сыр, каперсы, ржаной хлеб', price: 890, cat: 'Форель', image: SEAFOOD_IMAGE },
  { id: 'f3', name: 'Уха из форели', desc: 'Наваристый бульон из свежей форели, картофель, зелень, сливки', price: 480, cat: 'Форель', image: DISH_IMAGE },
  { id: 'f4', name: 'Форель запечённая', desc: 'Целая форель в духовке с розмарином, чесноком и лимонным маслом', price: 1400, cat: 'Форель', image: SEAFOOD_IMAGE },
  { id: 'f5', name: 'Икра форели', desc: 'Свежая икра форели, блин, сметана, зелёный лук', price: 650, cat: 'Форель', image: SEAFOOD_IMAGE, tag: 'Новинка' },
  { id: 'v1', name: 'Вырезка на гриле', desc: 'Говяжья вырезка средней прожарки, картофельное пюре, соус демиглас', price: 2400, cat: 'Вырезка', image: DISH_IMAGE, tag: 'Шеф рекомендует' },
  { id: 'v2', name: 'Вырезка с грибами', desc: 'Говяжья вырезка в сливочном соусе с белыми грибами и тимьяном', price: 2800, cat: 'Вырезка', image: DISH_IMAGE },
  { id: 'v3', name: 'Стейк из вырезки', desc: 'Стейк Шатобриан, овощи гриль, соус беарнез', price: 3600, cat: 'Вырезка', image: DISH_IMAGE },
  { id: 'b1', name: 'Блины с икрой форели', desc: 'Тонкие блины, икра форели, сметана, сливочное масло', price: 580, cat: 'Завтраки', image: DISH_IMAGE },
  { id: 'b2', name: 'Блины со сметаной', desc: 'Классические тонкие блины, домашняя сметана, варенье на выбор', price: 180, cat: 'Завтраки', image: DISH_IMAGE },
  { id: 'b3', name: 'Сырники творожные', desc: 'Воздушные сырники из деревенского творога, сметана, ягодный соус', price: 320, cat: 'Завтраки', image: DISH_IMAGE },
  { id: 'b4', name: 'Сырники с изюмом', desc: 'Творожные сырники с изюмом, ванильный соус, свежие ягоды', price: 360, cat: 'Завтраки', image: DISH_IMAGE },
  { id: 'k1', name: 'Крокет со стейком из форели', desc: 'Хрустящий крокет с сочным стейком из форели внутри, соус тартар, свежая зелень', price: 520, cat: 'Закуски', image: SEAFOOD_IMAGE },
  { id: 'k6', name: 'Форель холодного копчения', desc: 'Нежная форель х.к., сливочный сыр, каперсы, красный лук, ржаной хлеб', price: 680, cat: 'Закуски', image: SEAFOOD_IMAGE },
  { id: 'k3', name: 'Мясная тарелка', desc: 'Ассорти из вяленого и копчёного мяса, горчица, маринованные огурцы, ржаной хлеб', price: 980, cat: 'Закуски', image: DISH_IMAGE },
  { id: 'k4', name: 'Сырная тарелка', desc: 'Подборка выдержанных сыров, мёд, грецкий орех, виноград, крекеры', price: 850, cat: 'Закуски', image: DISH_IMAGE },
  { id: 'k5', name: 'Тарталетки', desc: 'Хрустящие тарталетки с начинкой: икра форели, сливочный сыр, зелень', price: 380, cat: 'Закуски', image: SEAFOOD_IMAGE },
];

interface MenuSectionProps {
  addToCart: (item: CartItem) => void;
}

export default function MenuSection({ addToCart }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filtered = activeCategory === 'Все' ? MENU : MENU.filter(d => d.cat === activeCategory);

  return (
    <div className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-body tracking-[0.4em] text-gold uppercase mb-4">Авторское меню</p>
          <h2 className="section-title">Наши блюда</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-body tracking-widest uppercase py-2 px-6 border transition-all duration-300 ${activeCategory === cat ? 'border-gold bg-gold text-obsidian' : 'border-border text-muted-foreground hover:border-gold/50 hover:text-champagne'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(dish => (
            <div key={dish.id} className="card-luxury group">
              <div className="relative overflow-hidden h-52">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 overlay-dark opacity-40 group-hover:opacity-20 transition-opacity" />
                {dish.tag && (
                  <span className="absolute top-4 left-4 text-xs font-body tracking-widest uppercase bg-gold text-obsidian px-3 py-1">
                    {dish.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-champagne mb-2">{dish.name}</h3>
                <p className="text-muted-foreground text-xs font-body leading-relaxed mb-4">{dish.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-body font-light text-lg">{dish.price.toLocaleString('ru')} ₽</span>
                  <button
                    onClick={() => addToCart({ id: dish.id, name: dish.name, price: dish.price, quantity: 1, image: dish.image })}
                    className="flex items-center gap-2 text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors border border-transparent hover:border-gold/40 px-3 py-2"
                  >
                    <Icon name="Plus" size={14} />
                    В корзину
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