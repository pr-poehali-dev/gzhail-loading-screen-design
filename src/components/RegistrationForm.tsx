import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface RegistrationFormProps {
  onComplete: () => void;
}

const RegistrationForm = ({ onComplete }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }

    if (!formData.password) {
      newErrors.password = 'Введите пароль';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      onComplete();
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 1200 1200">
          <defs>
            <pattern id="reg-gzhel-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <g>
                <path d="M 150 100 Q 130 110, 140 130 Q 145 140, 155 135 Q 165 130, 160 120 Q 155 110, 150 100" 
                      fill="#1E40AF" opacity="0.4" />
                <path d="M 140 130 Q 135 145, 145 155 L 155 155 Q 165 145, 160 130" 
                      fill="#3B82F6" opacity="0.3" />
                <circle cx="150" cy="100" r="3" fill="#1E40AF" opacity="0.5" />
              </g>
            </pattern>
          </defs>
          <rect width="1200" height="1200" fill="url(#reg-gzhel-pattern)" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 opacity-8 animate-float" style={{ animationDuration: '5s' }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M 50 20 Q 30 30, 40 50 Q 45 60, 55 55 Q 65 50, 60 40 Q 55 30, 50 20" 
                fill="#1E40AF" opacity="0.15" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-10 opacity-8 animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="25" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.15" />
          <path d="M 25 40 Q 35 25, 40 40 T 55 40" fill="none" stroke="#1E40AF" strokeWidth="2" opacity="0.15" />
        </svg>
      </div>

      <Card className="w-full max-w-md relative z-10 animate-fade-in border-2 shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 60 60" className="w-12 h-12">
              <path
                d="M 30 15 Q 20 20, 25 30 Q 28 35, 32 33 Q 36 30, 34 25 Q 32 20, 30 15"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M 25 30 Q 22 38, 28 43 L 32 43 Q 38 38, 34 30"
                fill="white"
                opacity="0.7"
              />
              <circle cx="26" cy="25" r="1.5" fill="white" />
              <circle cx="34" cy="25" r="1.5" fill="white" />
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Регистрация</CardTitle>
          <CardDescription className="text-base">
            Присоединяйтесь к миру традиционного искусства
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Ваше имя
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name="User" size={18} />
                </div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`pl-10 h-11 ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name="Mail" size={18} />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`pl-10 h-11 ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Пароль
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name="Lock" size={18} />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className={`pl-10 h-11 ${errors.password ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.password}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                Подтвердите пароль
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name="LockKeyhole" size={18} />
                </div>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  className={`pl-10 h-11 ${errors.confirmPassword ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  Регистрация...
                </>
              ) : (
                <>
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Зарегистрироваться
                </>
              )}
            </Button>

            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">
                Уже есть аккаунт?{' '}
                <button type="button" className="text-primary font-medium hover:underline">
                  Войти
                </button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
