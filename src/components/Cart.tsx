import { useState } from 'react';
import { CartItem } from '@/types/cart';
import Icon from '@/components/ui/icon';

interface CartProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const DELIVERY_OPTIONS = [
  { label: 'Стандартная (60–90 мин)', price: 490 },
  { label: 'Экспресс (30–45 мин)', price: 990 },
];

const TIME_SLOTS = [
  'Как можно скорее', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
];

export default function Cart({ open, onClose, items, onRemove, onUpdateQuantity }: CartProps) {
  const [delivery, setDelivery] = useState(0);
  const [timeSlot, setTimeSlot] = useState('Как можно скорее');
  const [address, setAddress] = useState('');

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const deliveryCost = items.length > 0 ? DELIVERY_OPTIONS[delivery].price : 0;
  const total = subtotal + deliveryCost;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      <div
        className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 bg-charcoal border-l border-border flex flex-col transition-transform duration-500"
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-2xl text-champagne tracking-wide">Ваш заказ</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-gold transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-4">
              <Icon name="ShoppingBag" size={40} className="text-muted-foreground" />
              <p className="text-muted-foreground text-sm font-body tracking-wide">Корзина пуста</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-border">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                  )}
                  <div className="flex-1">
                    <p className="font-body text-champagne text-sm tracking-wide">{item.name}</p>
                    <p className="text-gold text-sm mt-1">{item.price.toLocaleString('ru')} ₽</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-7 h-7 border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
                    >
                      <Icon name="Minus" size={12} />
                    </button>
                    <span className="text-champagne w-6 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-7 h-7 border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
                    >
                      <Icon name="Plus" size={12} />
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-muted-foreground hover:text-red-400 transition-colors ml-1"
                    >
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-3">Адрес доставки</p>
                <input
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="Улица, дом, квартира"
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-champagne placeholder:text-muted-foreground focus:border-gold outline-none transition-colors font-body"
                />
              </div>

              <div>
                <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-3">Тип доставки</p>
                <div className="space-y-2">
                  {DELIVERY_OPTIONS.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setDelivery(i)}
                      className={`w-full flex justify-between items-center px-4 py-3 border text-sm font-body transition-colors ${delivery === i ? 'border-gold text-champagne' : 'border-border text-muted-foreground hover:border-gold/50'}`}
                    >
                      <span>{opt.label}</span>
                      <span className="text-gold">{opt.price.toLocaleString('ru')} ₽</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-3">Время доставки</p>
                <select
                  value={timeSlot}
                  onChange={e => setTimeSlot(e.target.value)}
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-champagne focus:border-gold outline-none transition-colors font-body"
                >
                  {TIME_SLOTS.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="space-y-2 text-sm font-body">
              <div className="flex justify-between text-muted-foreground">
                <span>Сумма заказа</span>
                <span>{subtotal.toLocaleString('ru')} ₽</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Доставка</span>
                <span>{deliveryCost.toLocaleString('ru')} ₽</span>
              </div>
              <div className="flex justify-between text-champagne font-medium pt-2 border-t border-border">
                <span>Итого</span>
                <span className="text-gold">{total.toLocaleString('ru')} ₽</span>
              </div>
            </div>
            <button className="btn-gold-filled w-full">
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </>
  );
}
