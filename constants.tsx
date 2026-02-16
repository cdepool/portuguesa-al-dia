
import React from 'react';
import { KPIData, Phase, PluginItem, ScheduleEvent } from './types';

export const PERFORMANCE_KPIS: KPIData[] = [
  { metric: 'Tiempo de Carga', current: '>10.0s', target: '<3.0s', status: 'critical' },
  { metric: 'PHP Versión', current: '8.2.29', target: '8.3.0', status: 'warning' },
  { metric: 'Core Web Vitals (LCP)', current: '>10s', target: '<2.5s', status: 'critical' },
  { metric: 'Posts en DB', current: '14,154', target: 'Optimizado', status: 'warning' },
];

export const PHASES: Phase[] = [
  {
    id: 1,
    title: 'Emergencia y Estabilización',
    duration: 'Días 1-3',
    description: 'Acciones críticas para frenar riesgos de seguridad y mejorar la velocidad inmediata.',
    tasks: [
      'Eliminar WP File Manager (Riesgo Crítico)',
      'Instalar Wordfence & 2FA',
      'Configurar W3 Total Cache agresivo',
      'Backup completo verificado'
    ]
  },
  {
    id: 2,
    title: 'Optimización Estructural',
    duration: 'Semanas 1-2',
    description: 'Actualización de infraestructura y SEO técnico avanzado.',
    tasks: [
      'Migración a PHP 8.3 (Benchmarking +23%)',
      'Configurar Yoast News SEO & Sitemaps',
      'Cloudflare CDN Enterprise configuration',
      'Limpieza masiva de Base de Datos'
    ]
  },
  {
    id: 3,
    title: 'Engagement y Monetización',
    duration: 'Semanas 3-4',
    description: 'Sistemas para retención de audiencia y flujos de tráfico recurrente.',
    tasks: [
      'Mailchimp Newsletter Integration',
      'Web Push Notifications (OneSignal)',
      'Auto-posting en Redes Sociales',
      'Reemplazo de Quick Adsense por Ad Inserter'
    ]
  },
  {
    id: 4,
    title: 'Mantenimiento y Escalabilidad',
    duration: 'Continuo',
    description: 'Rutinas automatizadas para asegurar la estabilidad a largo plazo.',
    tasks: [
      'Monitorización GA4 & Search Console',
      'Revisiones de seguridad mensuales',
      'A/B Testing de conversión',
      'Optimización continua de imágenes'
    ]
  }
];

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  { time: 'Día 1', title: 'Hardening de Seguridad', milestone: 'Cierre de brechas críticas y eliminación de plugins vulnerables.', status: 'pending' },
  { time: 'Día 3', title: 'Optimización de Caché', milestone: 'Reducción del TTFB inicial por debajo de 200ms.', status: 'pending' },
  { time: 'Día 7', title: 'Actualización de Servidor', milestone: 'Salto a PHP 8.3 y ajuste de límites de memoria (512MB).', status: 'pending' },
  { time: 'Día 14', title: 'SEO News Ready', milestone: 'Indexación optimizada en Google News y sitemaps limpios.', status: 'pending' },
  { time: 'Día 21', title: 'Lanzamiento de Newsletter', milestone: 'Primer envío automatizado a la base de suscriptores.', status: 'pending' },
  { time: 'Día 30', title: 'Auditoría Final', milestone: 'Verificación de Core Web Vitals en verde.', status: 'pending' },
];

export const PLUGIN_AUDIT: PluginItem[] = [
  { name: 'WP File Manager', category: 'eliminar', reason: 'Vulnerabilidad crítica RCE (9.8/10)' },
  { name: 'Quick Adsense', category: 'eliminar', reason: 'Obsoleto desde 2019, rompe Core Web Vitals' },
  { name: 'Async JavaScript', category: 'revisar', reason: 'Posible causa del timeout de 10s' },
  { name: 'Elementor Pro', category: 'mantener', reason: 'Esencial pero requiere actualización a 3.35.1' },
  { name: 'Yoast SEO', category: 'mantener', reason: 'Core de visibilidad, requiere configuración avanzada' },
];
