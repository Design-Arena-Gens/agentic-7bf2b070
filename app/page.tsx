'use client';

import { useState } from 'react';
import { BookOpen, Wrench, History, Microscope, Package, FileText, Search, Download } from 'lucide-react';

interface WeaponData {
  era: string;
  type: string;
  name: string;
}

interface ResearchNote {
  id: string;
  category: string;
  content: string;
  timestamp: Date;
}

export default function Home() {
  const [selectedEra, setSelectedEra] = useState('');
  const [weaponType, setWeaponType] = useState('');
  const [weaponName, setWeaponName] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [researchNotes, setResearchNotes] = useState<ResearchNote[]>([]);
  const [newNote, setNewNote] = useState('');
  const [noteCategory, setNoteCategory] = useState('structural');

  const eras = [
    { id: 'flintlock', name: '17th-18th Century (Flintlock Era)', period: '1600-1830' },
    { id: '19th-early', name: 'Early 19th Century', period: '1830-1860' },
    { id: '19th-late', name: 'Late 19th Century (Industrial)', period: '1860-1900' },
    { id: '20th-early', name: 'Early 20th Century (WWI Era)', period: '1900-1920' },
    { id: '20th-mid', name: 'Mid 20th Century (WWII Era)', period: '1920-1945' },
  ];

  const weaponTypes = [
    'Revolver', 'Rifle', 'Pistol', 'Shotgun', 'Submachine Gun',
    'Bolt-Action Rifle', 'Lever-Action Rifle', 'Break-Action Shotgun'
  ];

  const researchCategories = [
    { id: 'structural', name: 'Structural Anatomy', icon: Wrench },
    { id: 'historical', name: 'Historical Accuracy', icon: History },
    { id: 'mechanical', name: 'Mechanical Components', icon: Microscope },
    { id: 'materials', name: 'Material Textures', icon: Package },
    { id: 'manufacturing', name: 'Manufacturing Techniques', icon: FileText },
  ];

  const technicalSpecs = {
    structural: [
      { name: 'Barrel Length', detail: 'Measure and document exact proportions' },
      { name: 'Cylinder/Magazine', detail: 'Capacity, rotation mechanism, loading system' },
      { name: 'Grip Design', detail: 'Ergonomics, material (wood/metal), checkering pattern' },
      { name: 'Sight System', detail: 'Front/rear sight design, alignment, height' },
      { name: 'Trigger Guard', detail: 'Shape, size, mounting method' },
      { name: 'Frame/Receiver', detail: 'Material thickness, screw placement, serial numbers' },
    ],
    mechanical: [
      { name: 'Action Type', detail: 'Single/double action, hammer/striker fired' },
      { name: 'Loading Mechanism', detail: 'Gate loading, break-action, magazine fed' },
      { name: 'Ejection System', detail: 'Manual/automatic, ejector rod design' },
      { name: 'Safety Mechanism', detail: 'Location, type, engagement method' },
      { name: 'Trigger Mechanism', detail: 'Pull weight, travel distance, reset' },
      { name: 'Locking System', detail: 'Barrel lock, cylinder lock, bolt design' },
    ],
    materials: [
      { name: 'Metal Finish', detail: 'Blued steel, nickel plating, brass, aging/patina' },
      { name: 'Wood Grain', detail: 'Species (walnut, oak), grain pattern, oil finish' },
      { name: 'Wear Patterns', detail: 'Edge wear, holster wear, handling marks' },
      { name: 'Engraving', detail: 'Decorative scroll work, manufacturer marks' },
      { name: 'Rust/Oxidation', detail: 'Natural aging, pitting, corrosion patterns' },
      { name: 'Surface Texture', detail: 'Machining marks, hand filing, casting texture' },
    ],
    historical: [
      { name: 'Manufacturer Data', detail: 'Company name, location, production years' },
      { name: 'Serial Numbers', detail: 'Format, location, date code systems' },
      { name: 'Proof Marks', detail: 'Military/civilian proof stamps, inspector marks' },
      { name: 'Variants', detail: 'Military vs civilian, export models, caliber options' },
      { name: 'Usage Context', detail: 'Military, law enforcement, civilian, frontier' },
      { name: 'Production Numbers', detail: 'Rarity, common vs uncommon features' },
    ],
  };

  const modelingGuidelines = [
    {
      category: 'Polygon Budget',
      items: [
        'FPS Weapon (1st person): 8,000-15,000 triangles',
        '3rd Person/Pickup: 2,000-5,000 triangles',
        'LOD0 (High): 100% detail',
        'LOD1: 60% polygon count',
        'LOD2: 30% polygon count',
        'LOD3: 15% polygon count',
      ]
    },
    {
      category: 'UV Mapping',
      items: [
        'Texture Atlas: 2048x2048 or 4096x4096',
        'Separate UV islands for different materials',
        'Straighten cylindrical parts for better texel density',
        'Mirror symmetrical parts when possible',
        'Pack small details efficiently',
        'Leave 2-4 pixel padding between islands',
      ]
    },
    {
      category: 'PBR Textures Required',
      items: [
        'Albedo/Base Color (no lighting info)',
        'Normal Map (tangent space)',
        'Metallic Map (metal vs non-metal)',
        'Roughness Map (surface micro-detail)',
        'Ambient Occlusion (crevice darkening)',
        'Height/Displacement (optional for close-ups)',
      ]
    },
    {
      category: 'Technical Requirements',
      items: [
        'Real-world scale (meters/centimeters)',
        'Pivot point at logical position (grip center)',
        'Clean topology (quads preferred)',
        'Proper smoothing groups/hard edges',
        'Baked high-poly details to low-poly',
        'Separate objects for animated parts',
      ]
    },
  ];

  const referenceResources = [
    {
      title: 'Primary Historical Sources',
      resources: [
        'Rock Island Auction Company - High-resolution weapon photos',
        'Forgotten Weapons YouTube - Detailed mechanical analysis',
        'C&Rsenal YouTube - Historical context and operation',
        'National Firearms Museum - Smithsonian collection',
        'Royal Armouries Museum (Leeds, UK) - European weapons',
        'Imperial War Museum - Military weapons archive',
      ]
    },
    {
      title: 'Technical Documentation',
      resources: [
        'Original manufacturer catalogs and blueprints',
        'Military technical manuals (TM series)',
        'Patent drawings from USPTO database',
        'Firearm assembly/disassembly manuals',
        'Gunsmith reference books (Kuhnhausen series)',
        'Historical gunmaking treatises',
      ]
    },
    {
      title: '3D Modeling References',
      resources: [
        'ArtStation - Professional game weapon models',
        'Sketchfab - Interactive 3D references',
        'GrabCAD - Technical CAD models',
        'Gun-3d-model collections - Measurement references',
        'Historical reenactment forums - Usage documentation',
        'Collector forums - Variant identification',
      ]
    },
  ];

  const addResearchNote = () => {
    if (newNote.trim()) {
      setResearchNotes([
        ...researchNotes,
        {
          id: Date.now().toString(),
          category: noteCategory,
          content: newNote,
          timestamp: new Date(),
        }
      ]);
      setNewNote('');
    }
  };

  const exportResearch = () => {
    const data = {
      weapon: { era: selectedEra, type: weaponType, name: weaponName },
      notes: researchNotes,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${weaponName || 'weapon'}-research-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vintage-50 via-vintage-100 to-vintage-200">
      <header className="bg-vintage-800 text-vintage-50 shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <Wrench className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Vintage Weapon Concept Research</h1>
              <p className="text-vintage-200">Game Asset Development & Historical Authenticity</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Weapon Selection Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-vintage-800 mb-6 flex items-center gap-2">
            <Search className="w-6 h-6" />
            Define Your Research Subject
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-vintage-700 mb-2">
                Historical Era
              </label>
              <select
                value={selectedEra}
                onChange={(e) => setSelectedEra(e.target.value)}
                className="w-full px-4 py-2 border border-vintage-300 rounded-lg focus:ring-2 focus:ring-vintage-500 focus:outline-none"
              >
                <option value="">Select Era</option>
                {eras.map(era => (
                  <option key={era.id} value={era.id}>
                    {era.name} ({era.period})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-vintage-700 mb-2">
                Weapon Type
              </label>
              <select
                value={weaponType}
                onChange={(e) => setWeaponType(e.target.value)}
                className="w-full px-4 py-2 border border-vintage-300 rounded-lg focus:ring-2 focus:ring-vintage-500 focus:outline-none"
              >
                <option value="">Select Type</option>
                {weaponTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-vintage-700 mb-2">
                Specific Model Name
              </label>
              <input
                type="text"
                value={weaponName}
                onChange={(e) => setWeaponName(e.target.value)}
                placeholder="e.g., Colt SAA, Winchester 1873"
                className="w-full px-4 py-2 border border-vintage-300 rounded-lg focus:ring-2 focus:ring-vintage-500 focus:outline-none"
              />
            </div>
          </div>

          {selectedEra && weaponType && (
            <div className="mt-4 p-4 bg-vintage-100 rounded-lg">
              <p className="text-sm text-vintage-700">
                <strong>Research Focus:</strong> {eras.find(e => e.id === selectedEra)?.name} {weaponType}
                {weaponName && ` - ${weaponName}`}
              </p>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="border-b border-vintage-200">
            <div className="flex flex-wrap">
              {[
                { id: 'overview', label: 'Overview', icon: BookOpen },
                { id: 'structural', label: 'Structural', icon: Wrench },
                { id: 'mechanical', label: 'Mechanical', icon: Microscope },
                { id: 'materials', label: 'Materials', icon: Package },
                { id: 'historical', label: 'Historical', icon: History },
                { id: 'modeling', label: '3D Modeling', icon: FileText },
                { id: 'references', label: 'References', icon: BookOpen },
                { id: 'notes', label: 'Research Notes', icon: FileText },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'text-vintage-700 border-b-2 border-vintage-700'
                      : 'text-vintage-500 hover:text-vintage-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-vintage-800 mb-4">Research Methodology Overview</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {researchCategories.map(cat => (
                      <div key={cat.id} className="p-4 bg-vintage-50 rounded-lg border border-vintage-200">
                        <div className="flex items-center gap-3 mb-2">
                          <cat.icon className="w-5 h-5 text-vintage-600" />
                          <h4 className="font-semibold text-vintage-800">{cat.name}</h4>
                        </div>
                        <p className="text-sm text-vintage-600">
                          Click the tab above to explore detailed research points for this category.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-vintage-800 text-vintage-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3">Key Research Questions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-vintage-300 mt-1">•</span>
                      <span>What specific vintage weapon era will be explored (19th century, early 20th century)?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vintage-300 mt-1">•</span>
                      <span>What technical modeling details are crucial for game asset development?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vintage-300 mt-1">•</span>
                      <span>What historical references provide accurate structural and design inspiration?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vintage-300 mt-1">•</span>
                      <span>How can vintage weapon design translate into game-ready 3D modeling?</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'structural' && (
              <div>
                <h3 className="text-xl font-bold text-vintage-800 mb-4">Weapon Structural Anatomy</h3>
                <p className="text-vintage-600 mb-6">
                  Document precise measurements and proportions for accurate 3D modeling. Each component must maintain historical accuracy while meeting game performance requirements.
                </p>
                <div className="space-y-3">
                  {technicalSpecs.structural.map((spec, idx) => (
                    <div key={idx} className="p-4 bg-vintage-50 rounded-lg border border-vintage-200 hover:border-vintage-400 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-vintage-800">{spec.name}</h4>
                          <p className="text-sm text-vintage-600 mt-1">{spec.detail}</p>
                        </div>
                        <input type="checkbox" className="mt-1 w-5 h-5 text-vintage-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'mechanical' && (
              <div>
                <h3 className="text-xl font-bold text-vintage-800 mb-4">Mechanical Component Details</h3>
                <p className="text-vintage-600 mb-6">
                  Understanding the mechanical operation is crucial for animated parts and interactive elements in-game.
                </p>
                <div className="space-y-3">
                  {technicalSpecs.mechanical.map((spec, idx) => (
                    <div key={idx} className="p-4 bg-vintage-50 rounded-lg border border-vintage-200 hover:border-vintage-400 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-vintage-800">{spec.name}</h4>
                          <p className="text-sm text-vintage-600 mt-1">{spec.detail}</p>
                        </div>
                        <input type="checkbox" className="mt-1 w-5 h-5 text-vintage-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div>
                <h3 className="text-xl font-bold text-vintage-800 mb-4">Material Texture Characteristics</h3>
                <p className="text-vintage-600 mb-6">
                  Texture mapping and material definition are essential for photorealistic rendering. Document wear patterns, aging, and manufacturing marks.
                </p>
                <div className="space-y-3">
                  {technicalSpecs.materials.map((spec, idx) => (
                    <div key={idx} className="p-4 bg-vintage-50 rounded-lg border border-vintage-200 hover:border-vintage-400 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-vintage-800">{spec.name}</h4>
                          <p className="text-sm text-vintage-600 mt-1">{spec.detail}</p>
                        </div>
                        <input type="checkbox" className="mt-1 w-5 h-5 text-vintage-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'historical' && (
              <div>
                <h3 className="text-xl font-bold text-vintage-800 mb-4">Historical Design Accuracy</h3>
                <p className="text-vintage-600 mb-6">
                  Research historical context to ensure authenticity. Players and enthusiasts will notice inaccuracies.
                </p>
                <div className="space-y-3">
                  {technicalSpecs.historical.map((spec, idx) => (
                    <div key={idx} className="p-4 bg-vintage-50 rounded-lg border border-vintage-200 hover:border-vintage-400 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-vintage-800">{spec.name}</h4>
                          <p className="text-sm text-vintage-600 mt-1">{spec.detail}</p>
                        </div>
                        <input type="checkbox" className="mt-1 w-5 h-5 text-vintage-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'modeling' && (
              <div>
                <h3 className="text-xl font-bold text-vintage-800 mb-4">Game-Ready 3D Modeling Guidelines</h3>
                <p className="text-vintage-600 mb-6">
                  Technical specifications for creating optimized game assets that balance visual quality with performance.
                </p>
                <div className="space-y-6">
                  {modelingGuidelines.map((section, idx) => (
                    <div key={idx} className="p-4 bg-vintage-50 rounded-lg border border-vintage-200">
                      <h4 className="font-semibold text-vintage-800 mb-3">{section.category}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-vintage-700">
                            <span className="text-vintage-500 mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-vintage-800 text-vintage-50 rounded-lg">
                  <h4 className="font-bold mb-2">Workflow Recommendation</h4>
                  <ol className="space-y-1 text-sm list-decimal list-inside">
                    <li>Create high-poly sculpt (ZBrush/Blender) with all details</li>
                    <li>Retopologize to game-ready polygon count</li>
                    <li>UV unwrap low-poly model</li>
                    <li>Bake high-poly details to texture maps</li>
                    <li>Create PBR materials in Substance Painter</li>
                    <li>Import to game engine and optimize</li>
                  </ol>
                </div>
              </div>
            )}

            {activeTab === 'references' && (
              <div>
                <h3 className="text-xl font-bold text-vintage-800 mb-4">Research References & Resources</h3>
                <p className="text-vintage-600 mb-6">
                  Curated sources for historical blueprints, mechanical drawings, and museum-grade references.
                </p>
                <div className="space-y-6">
                  {referenceResources.map((section, idx) => (
                    <div key={idx} className="p-4 bg-vintage-50 rounded-lg border border-vintage-200">
                      <h4 className="font-semibold text-vintage-800 mb-3">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.resources.map((resource, resIdx) => (
                          <li key={resIdx} className="flex items-start gap-2 text-sm text-vintage-700">
                            <span className="text-vintage-500 mt-1">•</span>
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-bold text-amber-900 mb-2">Research Best Practices</h4>
                  <ul className="space-y-1 text-sm text-amber-800">
                    <li>• Cross-reference multiple sources for accuracy</li>
                    <li>• Save high-resolution reference images (300+ DPI)</li>
                    <li>• Document sources for all reference material</li>
                    <li>• Focus on weapons in original, unrestored condition</li>
                    <li>• Note regional and temporal variations</li>
                    <li>• Capture details from multiple angles</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-vintage-800">Research Notes</h3>
                  <button
                    onClick={exportResearch}
                    className="flex items-center gap-2 px-4 py-2 bg-vintage-700 text-white rounded-lg hover:bg-vintage-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Export Research
                  </button>
                </div>

                <div className="mb-6 p-4 bg-vintage-50 rounded-lg border border-vintage-200">
                  <label className="block text-sm font-semibold text-vintage-700 mb-2">
                    Add Research Note
                  </label>
                  <select
                    value={noteCategory}
                    onChange={(e) => setNoteCategory(e.target.value)}
                    className="w-full px-4 py-2 mb-3 border border-vintage-300 rounded-lg focus:ring-2 focus:ring-vintage-500 focus:outline-none"
                  >
                    {researchCategories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Document your findings, measurements, observations..."
                    className="w-full px-4 py-2 border border-vintage-300 rounded-lg focus:ring-2 focus:ring-vintage-500 focus:outline-none h-24 resize-none"
                  />
                  <button
                    onClick={addResearchNote}
                    className="mt-3 px-6 py-2 bg-vintage-700 text-white rounded-lg hover:bg-vintage-800 transition-colors"
                  >
                    Add Note
                  </button>
                </div>

                <div className="space-y-3">
                  {researchNotes.length === 0 ? (
                    <p className="text-center text-vintage-500 py-8">No research notes yet. Start documenting your findings above.</p>
                  ) : (
                    researchNotes.map(note => (
                      <div key={note.id} className="p-4 bg-white rounded-lg border border-vintage-200 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-semibold text-vintage-600 uppercase">
                            {researchCategories.find(c => c.id === note.category)?.name}
                          </span>
                          <span className="text-xs text-vintage-400">
                            {note.timestamp.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-vintage-800 whitespace-pre-wrap">{note.content}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className="bg-gradient-to-r from-vintage-700 to-vintage-800 text-vintage-50 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">Quick Reference: Essential Measurements</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-vintage-200">Physical Dimensions</h4>
              <ul className="space-y-1">
                <li>• Overall length</li>
                <li>• Barrel length</li>
                <li>• Height (grip to top)</li>
                <li>• Width (max)</li>
                <li>• Weight (loaded/unloaded)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-vintage-200">Mechanical Specs</h4>
              <ul className="space-y-1">
                <li>• Caliber/cartridge</li>
                <li>• Capacity</li>
                <li>• Rate of fire</li>
                <li>• Effective range</li>
                <li>• Muzzle velocity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-vintage-200">Visual Details</h4>
              <ul className="space-y-1">
                <li>• Finish type</li>
                <li>• Grip material</li>
                <li>• Markings location</li>
                <li>• Wear patterns</li>
                <li>• Unique features</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-vintage-900 text-vintage-300 mt-16 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            Vintage Weapon Research Tool | Game Asset Development | Historical Authenticity & Realistic Modeling
          </p>
          <p className="text-xs mt-2 text-vintage-400">
            For educational and game development purposes only
          </p>
        </div>
      </footer>
    </div>
  );
}
