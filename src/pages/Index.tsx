import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Ремонт под ключ',
    description: 'Полный цикл работ от дизайна до финальной уборки',
    icon: 'Home',
    features: ['Демонтажные работы', 'Черновая отделка', 'Чистовая отделка', 'Финальная уборка']
  },
  {
    id: '2',
    title: 'Дизайн-проект',
    description: 'Разработка индивидуального интерьера',
    icon: 'PenTool',
    features: ['3D визуализация', 'Планировка', 'Подбор материалов', 'Авторский надзор']
  },
  {
    id: '3',
    title: 'Инженерные системы',
    description: 'Проектирование и монтаж коммуникаций',
    icon: 'Wrench',
    features: ['Электрика', 'Водоснабжение', 'Отопление', 'Вентиляция']
  },
  {
    id: '4',
    title: 'Офисы и коммерция',
    description: 'Ремонт офисных и коммерческих помещений',
    icon: 'Building2',
    features: ['Планировка офиса', 'Зонирование', 'Кабельные системы', 'Отделка премиум']
  },
  {
    id: '5',
    title: 'Коттеджи и дома',
    description: 'Ремонт загородных домов и коттеджей',
    icon: 'Castle',
    features: ['Фасадные работы', 'Кровля', 'Внутренняя отделка', 'Ландшафт']
  },
  {
    id: '6',
    title: 'Квартиры',
    description: 'Ремонт квартир любой сложности',
    icon: 'Key',
    features: ['Перепланировка', 'Евроремонт', 'Капитальный ремонт', 'Косметический ремонт']
  }
];

const projects: Project[] = [
  {
    id: '1',
    title: 'Современная квартира',
    location: 'г. Уфа, ул. Ленина',
    image: 'https://cdn.poehali.dev/projects/a46abaad-9a66-4a89-9535-5f751fde47b1/files/7162cc76-5aa1-4704-afb2-712266fd6e29.jpg',
    description: 'Полный ремонт трёхкомнатной квартиры с перепланировкой'
  },
  {
    id: '2',
    title: 'Элитная кухня',
    location: 'г. Стерлитамак',
    image: 'https://cdn.poehali.dev/projects/a46abaad-9a66-4a89-9535-5f751fde47b1/files/ed85d5c7-3421-433a-8fa8-f7c8ffe1942a.jpg',
    description: 'Дизайн и ремонт кухни-гостиной премиум класса'
  },
  {
    id: '3',
    title: 'Загородный коттедж',
    location: 'с. Ташлы, Красноусольск',
    image: 'https://cdn.poehali.dev/projects/a46abaad-9a66-4a89-9535-5f751fde47b1/files/daf5c789-991d-4db6-8bc8-81566b06fca4.jpg',
    description: 'Комплексный ремонт коттеджа с отделкой фасада'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Home" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">DOMMASTER</h1>
                <p className="text-xs text-muted-foreground">Строительство и ремонт</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </nav>

            <Button className="hidden lg:flex" size="lg">
              <Icon name="Phone" size={18} className="mr-2" />
              8 (917) 737-89-10
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Работаем в Стерлитамаке, Салавате, Ишимбае
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Дизайн и ремонт квартир, коттеджей и офисов
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Гарантируем соблюдение сроков по договору. 100% точная смета без увеличения цены
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('portfolio')}>
                Посмотреть работы
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-border bg-white">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="CheckCircle2" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Фиксированные сроки</p>
                    <p className="text-sm text-muted-foreground">По договору с гарантией</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-white">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Calculator" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Точная смета</p>
                    <p className="text-sm text-muted-foreground">Без скрытых платежей</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-white">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Гарантия качества</p>
                    <p className="text-sm text-muted-foreground">До 3 лет на работы</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных и ремонтных работ любой сложности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="p-6 border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делаем проекты под ключ: от разработки дизайн-проекта и ремонта до влажной уборки после себя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-border hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">О компании DOMMASTER</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                  <div>
                    <p className="text-4xl font-bold">50+</p>
                    <p className="text-muted-foreground">Специалистов</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Профессиональная команда строителей, дизайнеров и инженеров
                </p>
              </Card>

              <Card className="p-8 border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Icon name="Briefcase" className="text-primary" size={32} />
                  </div>
                  <div>
                    <p className="text-4xl font-bold">200+</p>
                    <p className="text-muted-foreground">Проектов</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Успешно завершённых объектов по всей республике
                </p>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                DOMMASTER — это команда профессионалов с многолетним опытом в сфере строительства и ремонта. 
                Мы специализируемся на комплексных решениях: от разработки дизайн-проекта до финальной уборки помещения.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Наша философия — прозрачность и честность. Мы составляем подробную смету перед началом работ 
                и гарантируем, что итоговая стоимость не изменится. Все работы выполняются строго в оговоренные сроки.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Официальный договор</p>
                    <p className="text-sm text-muted-foreground">Юридические гарантии и защита прав</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="FileCheck" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Поэтапная приёмка</p>
                    <p className="text-sm text-muted-foreground">Контроль качества на каждом этапе</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Соблюдение сроков</p>
                    <p className="text-sm text-muted-foreground">Штрафы за задержку в договоре</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Финальная уборка</p>
                    <p className="text-sm text-muted-foreground">Сдаём объект полностью готовым</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">Контакты</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Свяжитесь с нами удобным способом
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="p-8 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Icon name="Phone" className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-2">Телефон</p>
                    <a href="tel:+79177378910" className="text-2xl font-bold hover:text-primary transition-colors">
                      8 (917) 737-89-10
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Icon name="Mail" className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-2">Email</p>
                    <a href="mailto:rsk.dommaster@inbox.ru" className="text-lg font-bold hover:text-primary transition-colors break-all">
                      rsk.dommaster@inbox.ru
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border">
              <p className="text-center font-semibold mb-6 text-lg">Напишите нам в мессенджерах:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp: 8 (917) 737-89-10
                </Button>
                <Button size="lg" className="bg-[#0088cc] hover:bg-[#006BA1] text-white">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram: 8 (917) 737-89-10
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary rounded-lg p-2">
                  <Icon name="Home" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">DOMMASTER</h3>
                  <p className="text-xs text-gray-400">Строительство и ремонт</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональный ремонт и строительство в Стерлитамаке, Салавате, Ишимбае
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Портфолио</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79177378910" className="hover:text-white transition-colors">8 (917) 737-89-10</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:rsk.dommaster@inbox.ru" className="hover:text-white transition-colors">rsk.dommaster@inbox.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Стерлитамак, Салават, Ишимбай</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 DOMMASTER. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;