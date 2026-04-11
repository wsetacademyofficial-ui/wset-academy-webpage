import { motion } from 'motion/react';
import { LearningContent, GrapeInfo, RegionInfo } from '../types';

interface LearningSectionProps {
  content: LearningContent[];
  grapes?: GrapeInfo[];
  regions?: RegionInfo[];
}

const countryColors: Record<string, string> = {
  'France': 'bg-blue-50 text-blue-700 border-blue-100',
  'Italy': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Spain': 'bg-amber-50 text-amber-700 border-amber-100',
  'USA': 'bg-indigo-50 text-indigo-700 border-indigo-100',
  'Australia': 'bg-orange-50 text-orange-700 border-orange-100',
  'Chile': 'bg-rose-50 text-rose-700 border-rose-100',
  'South Africa': 'bg-teal-50 text-teal-700 border-teal-100',
  'New Zealand': 'bg-cyan-50 text-cyan-700 border-cyan-100',
  'Hungary': 'bg-red-50 text-red-700 border-red-100',
  'Germany': 'bg-slate-100 text-slate-700 border-slate-200',
  'Portugal': 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100',
};

const getLevelColor = (level: string) => {
  const l = level.toLowerCase();
  if (l.includes('high')) return 'bg-rose-500';
  if (l.includes('med')) return 'bg-amber-500';
  if (l.includes('low')) return 'bg-emerald-500';
  return 'bg-slate-300';
};

const LevelIndicator = ({ level }: { level: string }) => {
  const l = level.toLowerCase();
  let width = 'w-0';
  if (l.includes('low')) width = 'w-1/3';
  else if (l.includes('med')) width = 'w-2/3';
  else if (l.includes('high')) width = 'w-full';
  else if (l.includes('full')) width = 'w-full';
  else if (l.includes('light')) width = 'w-1/3';

  if (level === 'N/A') return <span className="text-slate-300 text-xs font-bold">N/A</span>;

  return (
    <div className="flex flex-col gap-1 min-w-[80px]">
      <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">{level}</span>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${getLevelColor(level)} ${width} transition-all duration-500`} />
      </div>
    </div>
  );
};

export default function LearningSection({ content, grapes, regions }: LearningSectionProps) {
  // Pre-process regions for row merging
  const regionRows: (RegionInfo & { rowSpan?: number; isFirst?: boolean })[] = [];
  if (regions) {
    const countryCounts: Record<string, number> = {};
    regions.forEach(r => {
      countryCounts[r.country] = (countryCounts[r.country] || 0) + 1;
    });

    const processedCountries = new Set<string>();
    regions.forEach(r => {
      if (!processedCountries.has(r.country)) {
        regionRows.push({ ...r, rowSpan: countryCounts[r.country], isFirst: true });
        processedCountries.add(r.country);
      } else {
        regionRows.push({ ...r, isFirst: false });
      }
    });
  }

  return (
    <div className="space-y-0">
      {/* Original Learning Modules */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[98%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive Learning</h2>
            <p className="text-slate-500 max-w-2xl">Master the core concepts of the WSET curriculum through our curated study modules.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-video mb-6 overflow-hidden rounded-2xl bg-slate-200 card-shadow transition-all group-hover:card-shadow-hover">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.title}/800/450`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grapes Table Section */}
      {grapes && grapes.length > 0 && (
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-[98%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Grapes</h2>
              <p className="text-slate-500">Key characteristics of major grape varieties.</p>
            </motion.div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 card-shadow bg-white">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Grape</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Climate</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Acidity</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tannins</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sweetness</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Body</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Flavour</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Oak</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Characteristics</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aging</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {grapes.map((g, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{g.grape}</td>
                      <td className="p-4 text-slate-600">
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                          g.climate.toLowerCase().includes('hot') ? 'bg-orange-100 text-orange-700' : 
                          g.climate.toLowerCase().includes('cool') ? 'bg-blue-100 text-blue-700' : 
                          'bg-emerald-100 text-emerald-700'
                        }`}>
                          {g.climate}
                        </span>
                      </td>
                      <td className="p-4"><LevelIndicator level={g.acidity} /></td>
                      <td className="p-4"><LevelIndicator level={g.tannins} /></td>
                      <td className="p-4 text-slate-600 text-sm">{g.sweetness}</td>
                      <td className="p-4"><LevelIndicator level={g.body} /></td>
                      <td className="p-4 text-slate-600 text-sm max-w-[150px]">{g.flavour}</td>
                      <td className="p-4 text-slate-600 text-sm">{g.oak}</td>
                      <td className="p-4 text-slate-600 text-sm max-w-[200px]">{g.characteristics}</td>
                      <td className="p-4 text-slate-600 text-sm">{g.aging}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Regions Table Section */}
      {regions && regions.length > 0 && (
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-[98%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">By Region</h2>
              <p className="text-slate-500">Major wine producing regions and their signature grapes.</p>
            </motion.div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 card-shadow bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest w-32">Country</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Region</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Grape</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Characteristics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {regionRows.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors group">
                      {r.isFirst && (
                        <td 
                          rowSpan={r.rowSpan} 
                          className={`p-4 font-black text-lg align-top border-r border-slate-100 ${countryColors[r.country] || 'bg-slate-50 text-slate-700'}`}
                        >
                          <div className="sticky top-24">
                            {r.country}
                          </div>
                        </td>
                      )}
                      <td className="p-4 text-slate-900 font-medium group-hover:text-accent transition-colors">{r.region}</td>
                      <td className="p-4 text-slate-600 italic">{r.grape}</td>
                      <td className="p-4 text-slate-500 text-sm">{r.characteristics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
