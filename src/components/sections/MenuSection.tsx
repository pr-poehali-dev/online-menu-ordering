import { useState } from 'react';
import { CartItem } from '@/types/cart';
import Icon from '@/components/ui/icon';

const DISH_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/e33d72d6-bcd4-411b-afab-0db9be10bc82.jpg';
const SEAFOOD_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/e924042a-4df1-4ce1-a498-5fb229f9beca.jpg';

const CATEGORIES = ['Все', 'Марлин', 'Морепродукты', 'Мясо', 'Десерты'];

const MENU: { id: string; name: string; desc: string; price: number; cat: string; image: string; tag?: string }[] = [
  { id: 'm1', name: 'Марлин а-ля планча', desc: 'Филе атлантического марлина на гриле, соус бер блан, икра морского ежа, трюфельное масло', price: 4800, cat: 'Марлин', image: DISH_IMAGE, tag: 'Шеф рекомендует' },
  { id: 'm2', name: 'Карпаччо из марлина', desc: 'Тонкие ломтики маринованного марлина, цитрусовая заправка, микрозелень, каперсы', price: 3200, cat: 'Марлин', image: SEAFOOD_IMAGE },
  { id: 'm3', name: 'Марлин в мисо-глазури', desc: 'Стейк марлина в японской глазури, кремовое пюре из сельдерея, дайкон', price: 5200, cat: 'Марлин', image: DISH_IMAGE, tag: 'Новинка' },
  { id: 'm4', name: 'Устрицы Fine de Claire', desc: '6 шт., лимон, уксусная гранита, ржаной хлеб', price: 2400, cat: 'Морепродукты', image: SEAFOOD_IMAGE },
  { id: 'm5', name: 'Лобстер термидор', desc: 'Канадский лобстер, соус биск, пармезан, свежие травы', price: 7800, cat: 'Морепродукты', image: SEAFOOD_IMAGE },
  { id: 'm6', name: 'Говяжья вырезка с трюфелем', desc: 'Медальон из мраморной говядины, соус перигор, картофель пай', price: 5600, cat: 'Мясо', image: DISH_IMAGE },
  { id: 'm7', name: 'Утиная грудка Магре', desc: 'Грудка утки с соусом из красного вина, конфи из редиса, полента', price: 3800, cat: 'Мясо', image: DISH_IMAGE },
  { id: 'm8', name: 'Шоколадный фондан Валрона', desc: 'Горячий шоколадный корж, ванильное мороженое, хрустящий пралине', price: 980, cat: 'Десерты', image: DISH_IMAGE },
  { id: 'm9', name: 'Крем-брюле с лавандой', desc: 'Классический французский десерт с ароматом прованской лаванды', price: 780, cat: 'Десерты', image: SEAFOOD_IMAGE },
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
