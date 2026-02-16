
import React, { useState } from 'react';
import { PERFORMANCE_KPIS, PHASES, PLUGIN_AUDIT, SCHEDULE_EVENTS } from './constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const App: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const chartData = [
    { name: 'Actual', value: 10, fill: '#ef4444' },
    { name: 'Meta', value: 3, fill: '#22c55e' }
  ];

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden">
      {/* Header / Hero */}
      <header className="bg-slate-950 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 -ml-48 -mb-48"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Informe Estratégico 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Portuguesa Al Día <br/>
                <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Plan de Rescate</span>
              </h1>
              <p className="mt-8 text-slate-400 max-w-xl text-xl leading-relaxed">
                Diagnóstico de emergencia y hoja de ruta para la modernización del portal líder de noticias en la región.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Salud del Sitio</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-3xl font-bold text-red-500 uppercase tracking-tighter">Crítica</span>
                    <span className="text-slate-600">/</span>
                    <span className="text-slate-400">10s Load</span>
                  </div>
                </div>
                <div className="h-px bg-white/10"></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Dominio en Riesgo</p>
                  <p className="text-xl font-mono text-indigo-400">portuguesaaldia.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-12">
        {/* KPI Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PERFORMANCE_KPIS.map((kpi, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{kpi.metric}</p>
              <div className="flex items-baseline justify-between mt-2">
                <h3 className={`text-3xl font-black ${
                  kpi.status === 'critical' ? 'text-red-600' : kpi.status === 'warning' ? 'text-amber-600' : 'text-emerald-600'
                }`}>
                  {kpi.current}
                </h3>
                <span className="text-slate-300 font-bold text-xs">GOAL: {kpi.target}</span>
              </div>
              <div className="mt-6 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-1000 ${
                   kpi.status === 'critical' ? 'bg-red-500 w-full' : kpi.status === 'warning' ? 'bg-amber-500 w-2/3' : 'bg-emerald-500 w-1/3'
                }`}></div>
              </div>
            </div>
          ))}
        </section>

        {/* ¿POR QUÉ ACTUAR AHORA? - SECCIÓN DESTACADA */}
        <section className="mb-20">
          <div className="bg-red-600 rounded-[3rem] p-1 overflow-hidden shadow-2xl shadow-red-200">
            <div className="bg-white rounded-[2.8rem] p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-red-600 font-black text-4xl md:text-5xl tracking-tighter mb-4 italic uppercase">
                  ¿Por qué actuar ahora?
                </h2>
                <p className="text-slate-500 text-lg">
                  La inacción técnica está destruyendo el potencial de monetización y la confianza de los lectores.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-red-50 hover:border-red-100 transition-all">
                  <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">53% de Abandono</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Los usuarios móviles abandonan el sitio si tarda más de 3 segundos en cargar. Estamos perdiendo más de la mitad del tráfico potencial cada minuto.</p>
                </div>

                <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-red-50 hover:border-red-100 transition-all">
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Penalización de Google</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Con un LCP mayor a 10s, Google News dejará de indexar contenidos pronto. El tráfico orgánico caerá en picada si no alcanzamos el "Verde" en Core Web Vitals.</p>
                </div>

                <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-red-50 hover:border-red-100 transition-all">
                  <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Brechas de Seguridad</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Plugins obsoletos como WP File Manager exponen el servidor a inyecciones de código. Un hackeo podría destruir años de archivos históricos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Action Plan Section */}
            <section>
              <h2 className="text-3xl font-black mb-8 tracking-tighter flex items-center gap-4">
                <span className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                Plan Maestro de Acción
              </h2>
              <div className="flex gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
                {PHASES.map((phase, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhase(idx)}
                    className={`px-8 py-4 rounded-3xl text-sm font-black transition-all whitespace-nowrap uppercase tracking-tighter ${
                      activePhase === idx 
                        ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-300 scale-105' 
                        : 'bg-white text-slate-400 hover:text-indigo-600 border border-slate-200'
                    }`}
                  >
                    Fase {phase.id}: {phase.title.split(' ')[0]}
                  </button>
                ))}
              </div>
              
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl min-h-[450px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <span className="bg-indigo-100 text-indigo-700 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest">{PHASES[activePhase].duration}</span>
                      <h3 className="text-4xl font-black mt-4 tracking-tighter text-slate-900">{PHASES[activePhase].title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-2xl">
                    {PHASES[activePhase].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PHASES[activePhase].tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-50/50 p-5 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-bold text-slate-800 tracking-tight">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CRONOGRAMA DE EJECUCIÓN */}
            <section className="bg-slate-900 p-10 rounded-[3rem] text-white">
              <h2 className="text-3xl font-black mb-12 tracking-tighter flex items-center gap-4">
                <span className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Cronograma Detallado
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {SCHEDULE_EVENTS.map((event, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-emerald-500 transition-colors">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-black text-emerald-400 text-xs tracking-widest uppercase">{event.time}</div>
                      </div>
                      <div className="text-xl font-black mb-2">{event.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{event.milestone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Plugin Audit Section */}
            <section>
              <h2 className="text-3xl font-black mb-8 tracking-tighter flex items-center gap-4">
                 <span className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-red-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                Auditoría Técnica
              </h2>
              <div className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-xl">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-black tracking-widest">
                    <tr>
                      <th className="px-8 py-6">Componente</th>
                      <th className="px-8 py-6">Veredicto</th>
                      <th className="px-8 py-6">Justificación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {PLUGIN_AUDIT.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6 font-black text-slate-900">{item.name}</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                            item.category === 'eliminar' ? 'bg-red-100 text-red-600' :
                            item.category === 'revisar' ? 'bg-amber-100 text-amber-600' :
                            'bg-emerald-100 text-emerald-600'
                          }`}>
                            {item.category}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-sm text-slate-500 font-medium">{item.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* Quick Stats Dashboard */}
            <div className="bg-white border border-slate-200 p-8 rounded-[3rem] shadow-xl">
              <h4 className="font-black text-xl mb-6 tracking-tighter">Impacto Esperado</h4>
              <div className="space-y-4">
                <div className="p-4 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                  <span className="text-emerald-700 font-bold text-sm">Velocidad PHP</span>
                  <span className="text-xl font-black text-emerald-600">+23%</span>
                </div>
                <div className="p-4 rounded-3xl bg-indigo-50 border border-indigo-100 flex items-center justify-between">
                  <span className="text-indigo-700 font-bold text-sm">Retención User</span>
                  <span className="text-xl font-black text-indigo-600">+40%</span>
                </div>
                <div className="p-4 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-700 font-bold text-sm">Ahorro Datos</span>
                  <span className="text-xl font-black text-slate-600">3.4GB/m</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-900 text-white p-8 rounded-[3rem] shadow-2xl">
              <h4 className="font-black text-xl mb-4 tracking-tighter">Contactar Especialista</h4>
              <p className="text-indigo-200 text-sm mb-6 leading-relaxed">Inicie la fase de rescate técnico hoy mismo para asegurar la viabilidad de su portal informativo.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-widest">Soporte 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-widest">Respuesta en &lt; 2h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-32 border-t border-slate-200 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">© 2026 Portuguesa Al Día</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 text-sm font-bold transition-colors uppercase tracking-widest">SEGURIDAD</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 text-sm font-bold transition-colors uppercase tracking-widest">INFRAESTRUCTURA</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
