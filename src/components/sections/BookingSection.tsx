import { useState } from 'react';
import Icon from '@/components/ui/icon';

const RESTAURANT_IMAGE = 'https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/dbee8d36-bc84-4c13-aba6-b43cece67e54.jpg';

export default function BookingSection() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2', comment: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full bg-background border border-border px-4 py-3 text-sm text-champagne placeholder:text-muted-foreground focus:border-gold outline-none transition-colors font-body";

  return (
    <div className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${RESTAURANT_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.4em] text-gold uppercase mb-4">Резервация</p>
          <h2 className="section-title">Забронировать стол</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        {sent ? (
          <div className="text-center py-12 border border-gold/30 bg-background/20 backdrop-blur-sm">
            <Icon name="CheckCircle" size={48} className="text-gold mx-auto mb-4" />
            <h3 className="font-display text-2xl text-champagne mb-2">Заявка принята</h3>
            <p className="text-muted-foreground text-sm font-body">Мы свяжемся с вами для подтверждения бронирования</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 border border-gold/20 bg-background/20 backdrop-blur-sm p-8">
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                placeholder="Ваше имя"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                required
                placeholder="Телефон"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="date"
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                className={inputClass}
              />
              <select
                value={form.time}
                onChange={e => setForm({ ...form, time: e.target.value })}
                className={inputClass}
              >
                <option value="">Время</option>
                {['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <select
              value={form.guests}
              onChange={e => setForm({ ...form, guests: e.target.value })}
              className={inputClass}
            >
              {[1,2,3,4,5,6,7,8].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
              ))}
            </select>
            <textarea
              rows={3}
              placeholder="Особые пожелания (аллергии, особый повод, предпочтения)"
              value={form.comment}
              onChange={e => setForm({ ...form, comment: e.target.value })}
              className={inputClass + ' resize-none'}
            />
            <button type="submit" className="btn-gold-filled w-full mt-2">
              Забронировать стол
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
