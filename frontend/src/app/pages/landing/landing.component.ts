import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface LearningModule {
  id: string;
  category: string;
  title: string;
  description: string;
  level: number;
  progress: number;
  imageUrl: string;
  badgeClass: string;
}

interface DailyMission {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  iconBg: string;
}

interface PlatformStat {
  value: string;
  label: string;
  textColorClass: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  public isLoggedIn: boolean = true;
  public userXP: number = 250;
  public userLevel: number = 12;
  public userProgress: number = 75;

  public userProfile = {
    name: 'Usuario 1',
    role: 'student',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6TjHFC-bJVkkmYN3aSHGlI3T_Vl9WcN_6vpy-kQHTOziNxPyY5jmzYlh5SraRTELrEkn-mc4jdYrNN34xv8hD9YqwMx-9mB0hW44oVfcp2jc8rYJ7arO8OPRdZYW3taql2vWzHgznbFn0LMgVt6hzTLB8Ehj2H9Tyr6xj0UUzsY1u4TFO83TtSwNVQPFOgwFLlwf0kpf1FRT7uCJM_RqRESmoeCFO64PQ_PSmP6fNoyksIT0e4Rt6'
  };

  public platformStats: PlatformStat[] = [
    { value: '150+', label: 'Módulos Interactivos', textColorClass: 'text-success' },
    { value: '2.4M', label: 'Árboles Virtuales Plantados', textColorClass: 'text-info' },
    { value: '850', label: 'Escuelas Asociadas', textColorClass: 'text-warning' },
    { value: '98%', label: 'Compromiso Estudiantil', textColorClass: 'text-success' }
  ];

  public learningModules: LearningModule[] = [
    {
      id: 'm1',
      category: 'Vida Marina',
      title: 'Ecosistemas Marinos',
      description: 'Descubre cómo los arrecifes de coral protegen nuestras costas y sostienen miles de especies.',
      level: 2,
      progress: 65,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF8BAsMj9OW2aGDO7OuyWGzUeUi3FoVdSMPDPtlNmLqUcP8V4C4iJxjHR0l-3ajIuhn2RncZm4uGEqGLvR1gM39AZ01vmTxUPRWP8_Ai9wcjdGx6ZuCyJum9vQEF0caZkcH6SdVupmEvqPMi4E2lnP9yUYzMV9t2U84tdsyqDg1-qdJFzxQ1OuALXL26MzhCscB9XWHhsTKoOD_oAmAo8d-oqpSKZ0WrCw9KK-5PWC-CfAE-fqBDom',
      badgeClass: 'bg-info-subtle text-info-emphasis'
    },
    {
      id: 'm2',
      category: 'Sostenibilidad',
      title: 'Energía Renovable',
      description: 'Aprende sobre energía solar, eólica e hídrica y cómo pueden reemplazar los combustibles fósiles.',
      level: 4,
      progress: 12,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSBFSjWjX5JDGGeBCrUf1oPXRIBeixJC8MZ8S0PuO-8PnIQpWJKwVthOetIIxxp3k4vPN2Cvd_-b_PqxgNCVhzyOR6-OVMuAIDURayY4-uZJBQBgJKXj-i-VtPjxsaxUvzyvUQEA25T3Jmg0n24U6YexLtVkGY6WhLNroIkSGz3v2am-6nW1SwH0Jx2x20qPtybCt9NrB7fwJNQXkcwyIxcfbr_KPkjDfB79z4OaAWtp4dhGjonHas',
      badgeClass: 'bg-warning-subtle text-warning-emphasis'
    },
    {
      id: 'm3',
      category: 'Protección Forestal',
      title: 'Protección de Bosques',
      description: 'Los pulmones de nuestro planeta están en riesgo. Comprende la ciencia de la reforestación.',
      level: 1,
      progress: 0,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJLaksW58eLpCjXIfBjJxhe_ASHc1xpytHw5whZQylgyEudc2BDFKnOeTN6aGHXxYBcauUFHT2vXaxBbzhEMneO8xXkpcZ33eOJZ-iCQO8MilNr021sdlO5_6-CW5rs8K_HwKeXhdrfZZ4Tx8Orqln6N9CgJ9kWbIQG6Ww0iIAWQCuqVcUFCO-5gjnaBlqBcIAY5K9nwK9rx2UPgnAdKcvSCqRVu2OquIl_DLEVQCnHJhNNgONW_aJ',
      badgeClass: 'bg-success-subtle text-success-emphasis'
    }
  ];

  public dailyMissions: DailyMission[] = [
    {
      id: 'mission-1',
      title: 'Guerrero del Reciclaje',
      description: 'Separa los residuos reciclabes hoy en tu hogar.',
      xpReward: 50,
      iconBg: 'bg-warning'
    },
    {
      id: 'mission-2',
      title: 'Ahorrador de Agua',
      description: 'Toma una ducha en menos de 5 minutos.',
      xpReward: 30,
      iconBg: 'bg-info'
    }
  ];

  ngOnInit(): void {}
}