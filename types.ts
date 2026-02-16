
export interface KPIData {
  metric: string;
  current: string;
  target: string;
  status: 'critical' | 'warning' | 'good';
}

export interface Phase {
  id: number;
  title: string;
  duration: string;
  description: string;
  tasks: string[];
}

export interface PluginItem {
  name: string;
  category: 'mantener' | 'revisar' | 'eliminar';
  reason: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  milestone: string;
  status: 'completed' | 'in-progress' | 'pending';
}
