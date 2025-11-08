import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <header className="bg-white border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <path
                  d="M 20 10 Q 15 15, 20 20 T 20 30"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="17" cy="14" r="2" fill="white" />
                <circle cx="23" cy="14" r="2" fill="white" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-primary">Гжель</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl font-bold text-primary mb-4">Традиционный русский промысел</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя уникальное искусство гжельской керамики с её узнаваемой бело-синей росписью
          </p>
        </section>

        <Tabs defaultValue="history" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="history" className="text-base">
              <Icon name="BookOpen" size={20} className="mr-2" />
              История
            </TabsTrigger>
            <TabsTrigger value="gallery" className="text-base">
              <Icon name="Images" size={20} className="mr-2" />
              Галерея
            </TabsTrigger>
            <TabsTrigger value="learning" className="text-base">
              <Icon name="Palette" size={20} className="mr-2" />
              Обучение
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="animate-fade-in">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-6">История промысла Гжель</h3>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Гжель — один из традиционных российских центров производства керамики, расположенный в
                        Раменском районе Московской области. Название происходит от села Гжель.
                      </p>
                      <p>
                        Промысел известен с XIV века. Особую известность получил в XVIII веке, когда местные
                        мастера начали изготавливать посуду из белой глины с синей подглазурной росписью.
                      </p>
                      <p>
                        Характерная черта гжели — уникальная роспись кобальтом на белом фоне. Мастера используют
                        различные оттенки синего цвета, создавая неповторимые узоры с цветочными мотивами.
                      </p>
                      <div className="flex gap-4 mt-6">
                        <div className="flex items-center gap-2 text-primary">
                          <Icon name="Calendar" size={20} />
                          <span className="font-semibold">XIV век</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <Icon name="MapPin" size={20} />
                          <span className="font-semibold">Московская область</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://cdn.poehali.dev/projects/1689d285-ecfb-4a0c-857e-0187d082e5af/files/b9906adf-ad16-450b-bdb5-29a174bef474.jpg"
                      alt="Гжельская керамика"
                      className="rounded-lg shadow-xl w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  img: 'https://cdn.poehali.dev/projects/1689d285-ecfb-4a0c-857e-0187d082e5af/files/b9906adf-ad16-450b-bdb5-29a174bef474.jpg',
                  title: 'Чайник и ваза',
                  desc: 'Классические изделия с традиционной росписью'
                },
                {
                  img: 'https://cdn.poehali.dev/projects/1689d285-ecfb-4a0c-857e-0187d082e5af/files/924d65b1-8e25-4868-bc6a-22c2c922208d.jpg',
                  title: 'Декоративные тарелки',
                  desc: 'Коллекция посуды с цветочными узорами'
                },
                {
                  img: 'https://cdn.poehali.dev/projects/1689d285-ecfb-4a0c-857e-0187d082e5af/files/40006b54-cf17-47b7-8f05-58685b1162b1.jpg',
                  title: 'Процесс росписи',
                  desc: 'Мастер за работой над изделием'
                }
              ].map((item, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                  <CardContent className="p-4">
                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learning" className="animate-fade-in">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-6">Обучение росписи Гжель</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="https://cdn.poehali.dev/projects/1689d285-ecfb-4a0c-857e-0187d082e5af/files/40006b54-cf17-47b7-8f05-58685b1162b1.jpg"
                      alt="Обучение росписи"
                      className="rounded-lg shadow-lg w-full mb-6"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Brush" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-2">Основные техники</h4>
                        <p className="text-foreground">
                          Изучите традиционные приёмы мазковой росписи. Освойте работу с кобальтом и создание
                          плавных переходов цвета.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center">
                        <Icon name="Flower" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-2">Цветочные узоры</h4>
                        <p className="text-foreground">
                          Научитесь рисовать классические гжельские розы, листья и травы. Познакомьтесь с
                          композицией орнамента.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Sparkles" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-2">Авторский стиль</h4>
                        <p className="text-foreground">
                          Развивайте собственную манеру росписи на основе традиционных техник. Создавайте
                          уникальные изделия.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                        Начать обучение
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 Гжель — традиционный русский промысел</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
