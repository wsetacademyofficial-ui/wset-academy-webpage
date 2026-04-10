import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Plus, X, StickyNote } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Note {
  id: string;
  coordinates: [number, number];
  text: string;
}

export default function WineMap() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [newNoteText, setNewNoteText] = useState("");

  const handleMapClick = (event: any) => {
    if (!isAddingNote) return;

    // This is a simplified way to get coordinates. 
    // In a real app, you'd use the projection to convert screen pixels to lat/long.
    // react-simple-maps doesn't expose the projection easily in the onClick of ComposableMap.
    // So we'll just disable the "click anywhere to add" for now and maybe use markers.
  };

  const addNoteAtCenter = () => {
    const newNote: Note = {
      id: Math.random().toString(36).substr(2, 9),
      coordinates: [0, 20], // Default center-ish
      text: "New study note..."
    };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote);
    setNewNoteText(newNote.text);
  };

  const updateNote = () => {
    if (!selectedNote) return;
    setNotes(notes.map(n => n.id === selectedNote.id ? { ...n, text: newNoteText } : n));
    setSelectedNote(null);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
    setSelectedNote(null);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive Wine Map</h2>
            <p className="text-slate-500 max-w-2xl">Explore global wine regions and add your own study notes directly to the map. Use mouse wheel or pinch to zoom.</p>
          </div>
          <button 
            onClick={addNoteAtCenter}
            className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-2xl font-bold hover:bg-accent-dark transition-all active:scale-95 shadow-lg shadow-accent/20"
          >
            <Plus size={20} />
            Add Note
          </button>
        </div>

        <div className="relative aspect-[16/9] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 card-shadow">
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={8}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button onClick={() => zoomIn()} className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md hover:bg-slate-50 transition-colors text-slate-600 font-bold">+</button>
                  <button onClick={() => zoomOut()} className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md hover:bg-slate-50 transition-colors text-slate-600 font-bold">-</button>
                  <button onClick={() => resetTransform()} className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md hover:bg-slate-50 transition-colors text-slate-600 font-bold">⟲</button>
                </div>

                <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                  <ComposableMap projectionConfig={{ scale: 140 }}>
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#E2E8F0"
                            stroke="#FFFFFF"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: "none" },
                              hover: { fill: "#CBD5E1", outline: "none" },
                              pressed: { fill: "#94A3B8", outline: "none" },
                            }}
                          />
                        ))
                      }
                    </Geographies>

                    {notes.map((note) => (
                      <Marker 
                        key={note.id} 
                        coordinates={note.coordinates}
                        onClick={() => {
                          setSelectedNote(note);
                          setNewNoteText(note.text);
                        }}
                      >
                        <g className="cursor-pointer group">
                          <circle r={6} fill="#2563EB" stroke="#fff" strokeWidth={2} />
                          <motion.circle 
                            r={12} 
                            fill="#2563EB" 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.2 }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        </g>
                      </Marker>
                    ))}
                  </ComposableMap>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>

          {/* Note Editor Modal */}
          <AnimatePresence>
            {selectedNote && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 z-20"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-accent">
                    <StickyNote size={18} />
                    <span className="font-bold text-sm uppercase tracking-wider">Study Note</span>
                  </div>
                  <button onClick={() => setSelectedNote(null)} className="text-slate-400 hover:text-slate-600">
                    <X size={20} />
                  </button>
                </div>
                <textarea
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  className="w-full h-32 p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-accent/20 resize-none text-slate-700 mb-4"
                  placeholder="Enter your notes here..."
                />
                <div className="flex gap-2">
                  <button 
                    onClick={updateNote}
                    className="flex-1 bg-accent text-white py-2 rounded-xl font-bold text-sm hover:bg-accent-dark transition-colors"
                  >
                    Save Note
                  </button>
                  <button 
                    onClick={() => deleteNote(selectedNote.id)}
                    className="px-4 bg-rose-50 text-rose-600 py-2 rounded-xl font-bold text-sm hover:bg-rose-100 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
