import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    siteType: '',
    pages: 1,
    design: '',
    features: [] as string[],
    timeline: ''
  });
  
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    let basePrice = 0;
    
    // Базовая цена по типу сайта
    switch (formData.siteType) {
      case 'landing': basePrice = 30000; break;
      case 'corporate': basePrice = 80000; break;
      case 'shop': basePrice = 150000; break;
      case 'custom': basePrice = 200000; break;
      default: basePrice = 50000;
    }
    
    // Цена за страницы
    const pagePrice = (formData.pages - 1) * 15000;
    
    // Дополнительные функции
    const featurePrice = formData.features.length * 25000;
    
    // Срочность
    const urgencyMultiplier = formData.timeline === 'urgent' ? 1.5 : 1;
    
    const total = (basePrice + pagePrice + featurePrice) * urgencyMultiplier;
    setCalculatedPrice(total);
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, features: [...prev.features, feature] }));
    } else {
      setFormData(prev => ({ ...prev, features: prev.features.filter(f => f !== feature) }));
    }
  };

  const testimonials = [
    {
      name: "Анна Петрова",
      company: "Beauty Studio",
      text: "Сайт превзошел все ожидания! Заказов стало в 3 раза больше.",
      rating: 5
    },
    {
      name: "Михаил Козлов", 
      company: "TechStart",
      text: "Профессиональный подход и отличный результат. Рекомендую!",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      company: "Online Shop",
      text: "Быстро, качественно и по разумной цене. Спасибо команде!",
      rating: 5
    }
  ];

  const services = [
    {
      icon: "Globe",
      title: "Лендинг пейджи",
      description: "Продающие одностраничники для вашего бизнеса",
      price: "от 30 000 ₽"
    },
    {
      icon: "Building2",
      title: "Корпоративные сайты",
      description: "Представительские сайты для компаний",
      price: "от 80 000 ₽"
    },
    {
      icon: "ShoppingCart",
      title: "Интернет-магазины",
      description: "Полнофункциональные магазины с системой оплат",
      price: "от 150 000 ₽"
    },
    {
      icon: "Palette",
      title: "Дизайн",
      description: "Уникальный дизайн под ваш бренд",
      price: "от 25 000 ₽"
    },
    {
      icon: "Smartphone",
      title: "Мобильная адаптация",
      description: "Идеальное отображение на всех устройствах",
      price: "включено"
    },
    {
      icon: "Zap",
      title: "SEO оптимизация",
      description: "Продвижение в поисковых системах",
      price: "от 20 000 ₽"
    }
  ];

  const portfolioItems = [
    {
      title: "Beauty Salon",
      category: "Лендинг",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      tags: ["React", "Tailwind", "Animations"]
    },
    {
      title: "Tech Company",
      category: "Корпоративный сайт",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      tags: ["Next.js", "TypeScript", "CMS"]
    },
    {
      title: "Fashion Store",
      category: "Интернет-магазин",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      tags: ["E-commerce", "Payment", "Mobile"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-inter bg-gradient-to-r from-bright-purple to-bright-pink bg-clip-text text-transparent">
              WebStudio
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Услуги', 'Портфолио', 'О нас', 'Отзывы', 'Контакты'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-dark-gray hover:text-bright-purple transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-bright-purple to-bright-pink text-white hover:opacity-90 transition-all duration-300">
              Заказать сайт
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-inter mb-6 bg-gradient-to-r from-bright-purple via-bright-pink to-emerald-green bg-clip-text text-transparent leading-tight">
              Создаем сайты<br />которые продают
            </h1>
            <p className="text-xl md:text-2xl text-dark-gray mb-8 max-w-3xl mx-auto font-light">
              Современные веб-решения для вашего бизнеса. От идеи до запуска за 14 дней.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-bright-purple to-bright-pink text-white hover:opacity-90 transition-all duration-300 text-lg px-8 py-4"
              >
                <Icon name="Rocket" className="mr-2" />
                Начать проект
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-bright-purple text-bright-purple hover:bg-bright-purple hover:text-white transition-all duration-300 text-lg px-8 py-4"
              >
                <Icon name="Play" className="mr-2" />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4 text-dark-gray">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для создания успешного онлайн-присутствия
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-purple-100 hover:border-bright-purple/50 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-bright-purple to-bright-pink rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl font-inter">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-bright-purple">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="калькулятор" className="py-16 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4 text-dark-gray">
              Калькулятор стоимости
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Узнайте примерную стоимость вашего проекта прямо сейчас
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-purple-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="siteType" className="text-lg font-medium">Тип сайта</Label>
                    <Select value={formData.siteType} onValueChange={(value) => setFormData(prev => ({ ...prev, siteType: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите тип сайта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="landing">Лендинг пейдж</SelectItem>
                        <SelectItem value="corporate">Корпоративный сайт</SelectItem>
                        <SelectItem value="shop">Интернет-магазин</SelectItem>
                        <SelectItem value="custom">Кастомное решение</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="pages" className="text-lg font-medium">Количество страниц</Label>
                    <Input 
                      type="number" 
                      min="1" 
                      value={formData.pages}
                      onChange={(e) => setFormData(prev => ({ ...prev, pages: parseInt(e.target.value) || 1 }))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-lg font-medium">Дополнительные функции</Label>
                    <div className="mt-2 space-y-3">
                      {['SEO оптимизация', 'Интеграция с CRM', 'Онлайн-чат', 'Аналитика', 'Блог'].map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <Checkbox 
                            id={feature}
                            checked={formData.features.includes(feature)}
                            onCheckedChange={(checked) => handleFeatureChange(feature, !!checked)}
                          />
                          <Label htmlFor={feature} className="text-sm font-normal">{feature}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-lg font-medium">Сроки</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите сроки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандартные (2-4 недели)</SelectItem>
                        <SelectItem value="urgent">Срочные (1-2 недели) +50%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center bg-gradient-to-br from-bright-purple/10 to-bright-pink/10 rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold font-inter bg-gradient-to-r from-bright-purple to-bright-pink bg-clip-text text-transparent mb-4">
                      {calculatedPrice.toLocaleString()} ₽
                    </div>
                    <p className="text-gray-600 mb-6">Примерная стоимость проекта</p>
                    <Button 
                      onClick={calculatePrice}
                      className="bg-gradient-to-r from-bright-purple to-bright-pink text-white hover:opacity-90 transition-all duration-300 mb-4"
                    >
                      <Icon name="Calculator" className="mr-2" />
                      Рассчитать стоимость
                    </Button>
                    <p className="text-sm text-gray-500">*Финальная стоимость зависит от технических требований</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="портфолио" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4 text-dark-gray">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Посмотрите на проекты, которыми мы гордимся
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-purple-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="ExternalLink" size={20} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-inter">{item.title}</CardTitle>
                  <CardDescription className="text-bright-purple font-medium">{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 text-bright-purple text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="отзывы" className="py-16 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4 text-dark-gray">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-purple-100">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-dark-gray">{testimonial.name}</div>
                    <div className="text-sm text-bright-purple">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="о нас" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6 text-dark-gray">
                О нашей команде
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Мы — команда профессионалов с опытом более 5 лет в веб-разработке. 
                Специализируемся на создании современных, быстрых и эффективных сайтов.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-purple mb-2">100+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-purple mb-2">5</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-purple mb-2">24/7</div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-purple mb-2">98%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-bright-purple to-bright-pink text-white hover:opacity-90 transition-all duration-300">
                <Icon name="Users" className="mr-2" />
                Познакомиться с командой
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-bright-purple to-bright-pink p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Наши принципы</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-3" size={20} />
                    Качество превыше всего
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-3" size={20} />
                    Соблюдение сроков
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-3" size={20} />
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-3" size={20} />
                    Прозрачность процесса
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-16 px-6 bg-dark-gray text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Напишите нам!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-4 text-bright-purple" size={24} />
                  <span>hello@webstudio.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-4 text-bright-purple" size={24} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-4 text-bright-purple" size={24} />
                  <span>Москва, ул. Тверская, 1</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Следите за нами</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-bright-purple text-bright-purple hover:bg-bright-purple hover:text-white">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-bright-purple text-bright-purple hover:bg-bright-purple hover:text-white">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-bright-purple text-bright-purple hover:bg-bright-purple hover:text-white">
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-inter text-dark-gray">Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="Тема сообщения" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-purple"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-bright-purple to-bright-pink text-white hover:opacity-90 transition-all duration-300">
                    <Icon name="Send" className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold font-inter bg-gradient-to-r from-bright-purple to-bright-pink bg-clip-text text-transparent mb-4">
              WebStudio
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 WebStudio. Все права защищены.
            </p>
            <p className="text-sm text-gray-500">
              Создаем сайты, которые работают на вас
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;