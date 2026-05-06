import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import MenuSection from '@/components/sections/MenuSection';
import AboutSection from '@/components/sections/AboutSection';
import GallerySection from '@/components/sections/GallerySection';
import BookingSection from '@/components/sections/BookingSection';
import DeliverySection from '@/components/sections/DeliverySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactsSection from '@/components/sections/ContactsSection';
import Navigation from '@/components/Navigation';
import Cart from '@/components/Cart';
import { CartItem } from '@/types/cart';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = ['home', 'menu', 'about', 'gallery', 'booking', 'delivery', 'reviews', 'contacts'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i)
        .filter(i => i.quantity > 0)
    );
  };

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="min-h-screen bg-background" style={{ scrollBehavior: 'smooth' }}>
      <Navigation
        activeSection={activeSection}
        scrollTo={scrollTo}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        scrolled={scrolled}
      />
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      <main>
        <div id="home"><HeroSection scrollTo={scrollTo} /></div>
        <div id="menu"><MenuSection addToCart={addToCart} /></div>
        <div id="about"><AboutSection /></div>
        <div id="gallery"><GallerySection /></div>
        <div id="booking"><BookingSection /></div>
        <div id="delivery"><DeliverySection addToCart={addToCart} /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="contacts"><ContactsSection /></div>
      </main>
      <footer className="bg-charcoal border-t border-border py-12 text-center">
        <p className="font-display text-4xl text-gold tracking-[0.3em] mb-4">MAISON</p>
        <p className="text-muted-foreground text-xs font-body tracking-widest uppercase">
          © 2026 MAISON. Все права защищены.
        </p>
      </footer>
    </div>
  );
}
