import Icon from '@/components/ui/icon';

const REVIEWS = [
  {
    name: 'Елена Васильева',
    role: 'Постоянный гость',
    text: 'Марлин а-ля планча — это что-то невероятное. Нигде в Москве я не пробовала ничего подобного. Атмосфера, сервис, каждая деталь — на уровне лучших ресторанов Парижа.',
    stars: 5,
  },
  {
    name: 'Михаил Орлов',
    role: 'Деловой ужин',
    text: 'Проводим корпоративные мероприятия только здесь. Приватный зал, безупречный сомелье, шеф выходит и рассказывает о каждом блюде. Это уровень.',
    stars: 5,
  },
  {
    name: 'Анна Соколова',
    role: 'Доставка',
    text: 'Заказала сет «Марлин Гурмэ» домой — приехало в идеальном состоянии, всё горячее, красивая упаковка. Ресторан у себя дома — это реально.',
    stars: 5,
  },
  {
    name: 'Дмитрий Романов',
    role: 'Годовщина',
    text: 'Праздновали годовщину свадьбы. Персонал заранее украсил стол, предложил специальное меню. Жена была в восторге. Обязательно вернёмся.',
    stars: 5,
  },
];

export default function ReviewsSection() {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-body tracking-[0.4em] text-gold uppercase mb-4">Впечатления</p>
          <h2 className="section-title">Отзывы гостей</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, i) => (
            <div key={i} className="card-luxury p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Icon key={j} name="Star" size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-display italic text-lg text-champagne/90 leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-10 h-10 bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <span className="font-display text-gold text-lg">{review.name[0]}</span>
                </div>
                <div>
                  <p className="font-body text-champagne text-sm font-medium">{review.name}</p>
                  <p className="text-xs font-body text-muted-foreground tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
