import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Match {
  id: string;
  sport: 'football' | 'hockey';
  homeTeam: string;
  awayTeam: string;
  league: string;
  time: string;
  prediction: {
    homeWin: number;
    draw?: number;
    awayWin: number;
    recommendation: 'home' | 'draw' | 'away';
  };
  stats: {
    homeForm: number;
    awayForm: number;
    homeGoals: number;
    awayGoals: number;
  };
}

const mockMatches: Match[] = [
  {
    id: '1',
    sport: 'football',
    homeTeam: 'Манчестер Сити',
    awayTeam: 'Ливерпуль',
    league: 'Премьер-лига',
    time: '20:00',
    prediction: {
      homeWin: 42,
      draw: 28,
      awayWin: 30,
      recommendation: 'home'
    },
    stats: {
      homeForm: 78,
      awayForm: 82,
      homeGoals: 2.4,
      awayGoals: 2.1
    }
  },
  {
    id: '2',
    sport: 'football',
    homeTeam: 'Реал Мадрид',
    awayTeam: 'Барселона',
    league: 'Ла Лига',
    time: '22:30',
    prediction: {
      homeWin: 38,
      draw: 26,
      awayWin: 36,
      recommendation: 'draw'
    },
    stats: {
      homeForm: 85,
      awayForm: 81,
      homeGoals: 2.8,
      awayGoals: 2.6
    }
  },
  {
    id: '3',
    sport: 'hockey',
    homeTeam: 'Тампа Бэй',
    awayTeam: 'Колорадо',
    league: 'NHL',
    time: '02:00',
    prediction: {
      homeWin: 48,
      awayWin: 52,
      recommendation: 'away'
    },
    stats: {
      homeForm: 72,
      awayForm: 79,
      homeGoals: 3.2,
      awayGoals: 3.5
    }
  },
  {
    id: '4',
    sport: 'hockey',
    homeTeam: 'СКА',
    awayTeam: 'ЦСКА',
    league: 'КХЛ',
    time: '19:30',
    prediction: {
      homeWin: 55,
      awayWin: 45,
      recommendation: 'home'
    },
    stats: {
      homeForm: 88,
      awayForm: 76,
      homeGoals: 3.8,
      awayGoals: 3.1
    }
  }
];

const Index = () => {
  const [selectedSport, setSelectedSport] = useState<'all' | 'football' | 'hockey'>('all');

  const filteredMatches = selectedSport === 'all' 
    ? mockMatches 
    : mockMatches.filter(m => m.sport === selectedSport);

  const getRecommendationColor = (rec: string) => {
    if (rec === 'home') return 'bg-success/20 text-success border-success/30';
    if (rec === 'away') return 'bg-warning/20 text-warning border-warning/30';
    return 'bg-muted text-muted-foreground border-border';
  };

  const getRecommendationText = (rec: string, hasDraw: boolean) => {
    if (rec === 'home') return 'П1';
    if (rec === 'away') return hasDraw ? 'П2' : 'П2';
    return 'X';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-3 tracking-tight">
            Прогнозы матчей
          </h1>
          <p className="text-muted-foreground text-lg">
            Анализ и предсказания на основе машинного обучения
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="TrendingUp" className="text-primary" size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold">87.3%</p>
                <p className="text-sm text-muted-foreground">Точность прогнозов</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="Trophy" className="text-primary" size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Матчей проанализировано</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="Activity" className="text-primary" size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-muted-foreground">Обновление данных</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs value={selectedSport} onValueChange={(v) => setSelectedSport(v as any)} className="mb-8">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Все матчи
            </TabsTrigger>
            <TabsTrigger value="football" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Trophy" size={16} className="mr-2" />
              Футбол
            </TabsTrigger>
            <TabsTrigger value="hockey" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Disc3" size={16} className="mr-2" />
              Хоккей
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 gap-6">
          {filteredMatches.map((match) => (
            <Card key={match.id} className="p-6 border-border bg-card hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {match.league}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Icon name="Clock" size={14} />
                      {match.time}
                    </div>
                  </div>

                  <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center mb-6">
                    <div className="text-right">
                      <p className="text-xl font-semibold mb-1">{match.homeTeam}</p>
                      <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                        <span>Форма</span>
                        <div className="w-16 bg-secondary rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-primary h-full rounded-full transition-all"
                            style={{ width: `${match.stats.homeForm}%` }}
                          />
                        </div>
                        <span className="font-semibold text-foreground">{match.stats.homeForm}%</span>
                      </div>
                    </div>

                    <div className="text-center px-4">
                      <div className="text-3xl font-bold text-muted-foreground">VS</div>
                    </div>

                    <div className="text-left">
                      <p className="text-xl font-semibold mb-1">{match.awayTeam}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{match.stats.awayForm}%</span>
                        <div className="w-16 bg-secondary rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-primary h-full rounded-full transition-all"
                            style={{ width: `${match.stats.awayForm}%` }}
                          />
                        </div>
                        <span>Форма</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Голы/матч</p>
                      <p className="text-lg font-bold">{match.stats.homeGoals}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Прогноз</p>
                      <Badge className={`${getRecommendationColor(match.prediction.recommendation)} font-bold text-base px-4 py-1`}>
                        {getRecommendationText(match.prediction.recommendation, !!match.prediction.draw)}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Голы/матч</p>
                      <p className="text-lg font-bold">{match.stats.awayGoals}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-72 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-6">
                  <p className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                    Вероятности
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Победа хозяев</span>
                        <span className="font-bold text-lg">{match.prediction.homeWin}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-success h-full rounded-full transition-all"
                          style={{ width: `${match.prediction.homeWin}%` }}
                        />
                      </div>
                    </div>

                    {match.prediction.draw !== undefined && (
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Ничья</span>
                          <span className="font-bold text-lg">{match.prediction.draw}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-muted-foreground h-full rounded-full transition-all"
                            style={{ width: `${match.prediction.draw}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Победа гостей</span>
                        <span className="font-bold text-lg">{match.prediction.awayWin}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-warning h-full rounded-full transition-all"
                          style={{ width: `${match.prediction.awayWin}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <Card className="p-12 text-center border-border bg-card">
            <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">
              Нет доступных матчей в этой категории
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
