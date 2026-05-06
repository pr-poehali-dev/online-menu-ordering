import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  scrollTo: (id: string) => void;
  cartCount: number;
  onCartOpen: () => void;
  scrolled: boolean;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'menu', label: 'Меню' },
  { id: 'about', label: 'О нас' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'booking', label: 'Бронирование' },
  { id: 'delivery', label: 'Доставка' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Navigation({ activeSection, scrollTo, cartCount, onCartOpen, scrolled }: NavigationProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(14, 10, 8, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid hsl(40 15% 18%)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="font-display text-2xl tracking-[0.3em] text-gold hover:text-gold-light transition-colors"
        >
          MAISON
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={onCartOpen}
          className="relative flex items-center gap-2 btn-gold py-2 px-4"
        >
          <Icon name="ShoppingBag" size={16} />
          <span className="text-xs tracking-widest uppercase">Корзина</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-gold text-obsidian text-xs font-bold rounded-full flex items-center justify-center font-body">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
