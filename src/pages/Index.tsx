import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Виртуальный хостинг",
      description: "Надёжное размещение сайтов с высокой скоростью загрузки",
      price: "от 290₽/мес",
      features: ["SSD диски", "SSL сертификат", "Панель управления", "24/7 поддержка"],
      icon: "Server",
      popular: false
    },
    {
      title: "VPS/VDS серверы",
      description: "Полный контроль над виртуальным сервером",
      price: "от 750₽/мес", 
      features: ["Root доступ", "Выбор ОС", "Backup", "Мониторинг"],
      icon: "Monitor",
      popular: true
    },
    {
      title: "Облачные решения",
      description: "Масштабируемая облачная инфраструктура",
      price: "от 1500₽/мес",
      features: ["Авто масштабирование", "Load Balancer", "CDN", "API управление"],
      icon: "Cloud",
      popular: false
    }
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "99.9% Uptime",
      description: "Гарантированная стабильность работы"
    },
    {
      icon: "Zap",
      title: "Высокая скорость",
      description: "SSD диски и современное оборудование"
    },
    {
      icon: "Headphones",
      title: "24/7 Поддержка",
      description: "Техническая поддержка круглосуточно"
    },
    {
      icon: "Lock",
      title: "Безопасность",
      description: "DDoS защита и SSL сертификаты"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Server" size={32} className="text-corp-blue" />
            <span className="text-2xl font-bold text-corp-dark font-inter">HostPro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-corp-blue transition-colors">Услуги</a>
            <a href="#advantages" className="text-gray-600 hover:text-corp-blue transition-colors">Преимущества</a>
            <a href="#contact" className="text-gray-600 hover:text-corp-blue transition-colors">Контакты</a>
            <Button className="bg-corp-blue hover:bg-blue-700 text-white">
              Личный кабинет
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-corp-blue to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-inter">
            Надёжный хостинг <br />
            для вашего бизнеса
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Высокая производительность, круглосуточная поддержка и 99.9% времени безотказной работы. 
            Выберите оптимальное решение для вашего проекта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-corp-blue hover:bg-gray-100 text-lg px-8 py-3">
              Выбрать тариф
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-corp-blue text-lg px-8 py-3">
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-corp-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-corp-dark mb-4 font-inter">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр хостинг услуг для проектов любого масштаба
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative transition-all duration-300 hover:shadow-xl ${service.popular ? 'ring-2 ring-corp-blue' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-corp-blue text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-corp-blue/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-corp-blue" />
                  </div>
                  <CardTitle className="text-2xl font-inter">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-corp-blue font-inter">
                      {service.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-corp-blue hover:bg-blue-700 text-white">
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-corp-dark mb-4 font-inter">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Преимущества, которые делают нас лидером в сфере хостинга
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-corp-blue/10 rounded-full flex items-center justify-center">
                  <Icon name={advantage.icon} size={32} className="text-corp-blue" />
                </div>
                <h3 className="text-xl font-semibold text-corp-dark mb-2 font-inter">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-corp-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 font-inter">15,000+</div>
              <div className="text-blue-200">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 font-inter">99.9%</div>
              <div className="text-blue-200">Время безотказной работы</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 font-inter">24/7</div>
              <div className="text-blue-200">Техническая поддержка</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 font-inter">5 лет</div>
              <div className="text-blue-200">Опыт на рынке</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corp-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-corp-dark mb-4 font-inter">
            Готовы начать?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации или выберите подходящий тариф прямо сейчас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-corp-blue hover:bg-blue-700 text-white text-lg px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="border-corp-blue text-corp-blue hover:bg-corp-blue hover:text-white text-lg px-8 py-3">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Онлайн чат
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-corp-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Server" size={32} className="text-corp-blue" />
                <span className="text-2xl font-bold font-inter">HostPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Надёжный хостинг провайдер с многолетним опытом работы на рынке.
              </p>
              <div className="flex space-x-4">
                <Icon name="Mail" size={20} className="text-gray-400" />
                <Icon name="Phone" size={20} className="text-gray-400" />
                <Icon name="MessageSquare" size={20} className="text-gray-400" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-inter">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Виртуальный хостинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VPS серверы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Выделенные серверы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Облачные решения</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-inter">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">База знаний</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тикет система</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статус сервисов</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-inter">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  support@hostpro.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  24/7 поддержка
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HostPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;