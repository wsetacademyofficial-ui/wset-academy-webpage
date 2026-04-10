import { motion } from 'motion/react';
import { LearningContent, GrapeInfo, RegionInfo } from '../types';
import WineMap from './WineMap';

interface LearningSectionProps {
  content: LearningContent[];
  grapes?: GrapeInfo[];
  regions?: RegionInfo[];
}

export default function LearningSection({ content, grapes, regions }: LearningSectionProps) {
  return (
    <div className="space-y-0">
      {/* Original Learning Modules */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
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
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Grape</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Climate</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Acidity</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Tannins</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Sweetness</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Body</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Flavour</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Oak</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Characteristics</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Aging</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {grapes.map((g, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">{g.grape}</td>
                      <td className="p-4 text-slate-600">{g.climate}</td>
                      <td className="p-4 text-slate-600">{g.acidity}</td>
                      <td className="p-4 text-slate-600">{g.tannins}</td>
                      <td className="p-4 text-slate-600">{g.sweetness}</td>
                      <td className="p-4 text-slate-600">{g.body}</td>
                      <td className="p-4 text-slate-600">{g.flavour}</td>
                      <td className="p-4 text-slate-600">{g.oak}</td>
                      <td className="p-4 text-slate-600">{g.characteristics}</td>
                      <td className="p-4 text-slate-600">{g.aging}</td>
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
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
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
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Country</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Region</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Grape</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Characteristics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {regions.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">{r.country}</td>
                      <td className="p-4 text-slate-600">{r.region}</td>
                      <td className="p-4 text-slate-600">{r.grape}</td>
                      <td className="p-4 text-slate-600">{r.characteristics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Interactive World Map */}
      <WineMap />
    </div>
  );
}
