import Icon from '@/components/ui/icon';

const CONTACTS = [
  { icon: 'MapPin', label: 'Адрес', value: 'Москва, Патриаршие пруды, ул. Малая Бронная, 32' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (495) 999-00-11' },
  { icon: 'Mail', label: 'Email', value: 'reserve@maison-restaurant.ru' },
  { icon: 'Clock', label: 'Часы работы', value: 'Пн–Вс: 12:00 — 23:00' },
];

export default function ContactsSection() {
  return (
    <div className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-body tracking-[0.4em] text-gold uppercase mb-4">Будем рады</p>
          <h2 className="section-title">Контакты</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {CONTACTS.map(c => (
              <div key={c.label} className="flex items-start gap-5">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name={c.icon} fallback="Info" size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-1">{c.label}</p>
                  <p className="text-champagne font-body text-sm">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-4">Социальные сети</p>
              <div className="flex gap-3">
                {['Instagram', 'MessageCircle', 'Youtube'].map(social => (
                  <button
                    key={social}
                    className="w-10 h-10 border border-border hover:border-gold text-muted-foreground hover:text-gold transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon name={social} fallback="Link" size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-background border border-border overflow-hidden">
            <div
              className="w-full h-64 bg-cover bg-center relative"
              style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/1f4832cd-4e04-4a49-9c8e-c4a2c7992247/files/dbee8d36-bc84-4c13-aba6-b43cece67e54.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={32} className="text-gold mx-auto mb-2" />
                  <p className="text-xs font-body tracking-widest uppercase text-champagne">Патриаршие пруды</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="font-display text-xl text-champagne mb-2">Как добраться</p>
              <p className="text-muted-foreground text-xs font-body leading-relaxed">
                5 минут пешком от метро Маяковская. Валет-парковка доступна ежедневно с 12:00 до 23:00.
                Вход с улицы Малая Бронная — ищите золотую вывеску.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
