"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Palette, Zap, Layout, Code, Eye, Sparkles } from "lucide-react"

export default function DesignDocumentation() {
  const [activeSection, setActiveSection] = useState("principles")

  const sections = [
    { id: "principles", title: "Core Principles", icon: Sparkles },
    { id: "colors", title: "Color Philosophy", icon: Palette },
    { id: "motion", title: "Motion & Animation", icon: Zap },
    { id: "layouts", title: "Layout Patterns", icon: Layout },
    { id: "components", title: "Component Rules", icon: Code },
    { id: "implementation", title: "Implementation Guide", icon: Eye },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-balance">
              ConsentChain
              <span className="block text-4xl font-normal text-white/90 mt-2">Design System Documentation</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl text-pretty">
              The complete guide to our anti-SaaS, joyful design philosophy that breaks every convention and creates
              organic, living interfaces that feel like art installations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-white/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {section.title}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              {activeSection === "principles" && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Design Principles</h2>

                  <div className="grid gap-6">
                    <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">🚫 Anti-SaaS Rebellion</h3>
                      <p className="text-gray-700 text-lg">
                        Completely reject cookie-cutter SaaS layouts. No centered cards, no predictable grids, no boring
                        hero sections. Every element should feel unexpected and joyful.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-red-100 to-amber-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">🌿 Organic Positioning</h3>
                      <p className="text-gray-700 text-lg">
                        Elements float, scatter, and position themselves like a magazine collage. Use asymmetrical
                        layouts, overlapping elements, and natural clustering.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">💫 Living Interfaces</h3>
                      <p className="text-gray-700 text-lg">
                        Everything breathes, pulses, and moves with organic motion. Gradients morph, elements orbit, and
                        the interface feels alive and responsive to user presence.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">🎨 Emotional Journey</h3>
                      <p className="text-gray-700 text-lg">
                        Every scroll, hover, and interaction should evoke joy and surprise. Design for emotional impact,
                        not just functionality.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "colors" && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Color Philosophy</h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl">
                      <h3 className="text-2xl font-bold mb-3">Kadir Nelson Inspired Palette</h3>
                      <p className="text-lg opacity-90">
                        Rich, saturated warm tones that evoke emotion and energy. Deep oranges, burgundy reds, and
                        golden browns create a sophisticated yet joyful atmosphere.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <div className="h-20 bg-orange-600 rounded-lg"></div>
                        <p className="text-sm font-mono">#ea580c</p>
                        <p className="text-sm text-gray-600">Primary Orange</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 bg-red-600 rounded-lg"></div>
                        <p className="text-sm font-mono">#dc2626</p>
                        <p className="text-sm text-gray-600">Vibrant Red</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 bg-amber-600 rounded-lg"></div>
                        <p className="text-sm font-mono">#d97706</p>
                        <p className="text-sm text-gray-600">Golden Amber</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 bg-red-800 rounded-lg"></div>
                        <p className="text-sm font-mono">#991b1b</p>
                        <p className="text-sm text-gray-600">Deep Burgundy</p>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Gradient Rules</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Always use multi-stop gradients (3+ colors)</li>
                        <li>• Blend warm tones: orange → red → amber</li>
                        <li>• Add subtle opacity variations for depth</li>
                        <li>• Make gradients "breathe" with time-based animations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "motion" && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Motion & Animation</h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Neural Depth Motion</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Multi-layered parallax effects that create the illusion of depth and dimension.
                      </p>
                      <div className="bg-white/50 p-4 rounded-lg font-mono text-sm">
                        <code>transform: translateZ(var(--depth)) rotateX(var(--tilt))</code>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Organic Breathing</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Elements pulse and breathe with natural, sine-wave based animations.
                      </p>
                      <div className="bg-white/50 p-4 rounded-lg font-mono text-sm">
                        <code>animation: breathe 4s ease-in-out infinite</code>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Orbital Motion</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Elements orbit around invisible centers, creating dynamic, living compositions.
                      </p>
                      <div className="bg-white/50 p-4 rounded-lg font-mono text-sm">
                        <code>animation: orbit 20s linear infinite</code>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Animation Principles</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Use easing functions: ease-in-out, cubic-bezier</li>
                        <li>• Layer multiple animations for complexity</li>
                        <li>• Tie animations to scroll position for parallax</li>
                        <li>• Make hover states feel magical and responsive</li>
                        <li>• Use transform3d for hardware acceleration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "layouts" && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Layout Patterns</h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Magazine Collage</h3>
                      <p className="text-gray-700 text-lg">
                        Elements scattered organically across the canvas, overlapping and clustering like a designer's
                        mood board. No rigid grids or predictable alignment.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Asymmetrical Balance</h3>
                      <p className="text-gray-700 text-lg">
                        Heavy elements on one side balanced by multiple lighter elements on the other. Creates visual
                        tension and interest.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Layered Storytelling</h3>
                      <p className="text-gray-700 text-lg">
                        Content unfolds in layers as users scroll, with elements appearing, transforming, and
                        disappearing in choreographed sequences.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Layout Rules</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Break the grid - use absolute positioning creatively</li>
                        <li>• Overlap elements for depth and visual interest</li>
                        <li>• Use negative space as a design element</li>
                        <li>• Create visual paths that guide the eye naturally</li>
                        <li>• Mix different content types in unexpected ways</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "components" && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Component Rules</h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Buttons That Live</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Every button should feel alive with hover effects, micro-animations, and personality.
                      </p>
                      <div className="bg-white/50 p-4 rounded-lg">
                        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:scale-105 transition-transform">
                          Living Button
                        </button>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Cards That Float</h3>
                      <p className="text-gray-700 text-lg">
                        Cards should never sit flat. They hover, tilt, and respond to mouse movement with subtle 3D
                        transformations.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Typography That Breathes</h3>
                      <p className="text-gray-700 text-lg">
                        Text isn't static. Headlines can have subtle animations, and important text should draw
                        attention through motion and color.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Component Guidelines</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Every interactive element needs a hover state</li>
                        <li>• Use box-shadow and transform for depth</li>
                        <li>• Add subtle animations to draw attention</li>
                        <li>• Make loading states beautiful and engaging</li>
                        <li>• Use the warm color palette consistently</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "implementation" && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Implementation Guide</h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-slate-100 to-gray-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">CSS Custom Properties</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Use CSS variables for consistent theming and easy customization.
                      </p>
                      <div className="bg-white/50 p-4 rounded-lg font-mono text-sm space-y-1">
                        <div>--primary-orange: #ea580c;</div>
                        <div>--primary-red: #dc2626;</div>
                        <div>--primary-amber: #d97706;</div>
                        <div>--depth-1: 10px;</div>
                        <div>--depth-2: 20px;</div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Animation Keyframes</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Reusable animation keyframes for consistent motion across components.
                      </p>
                      <div className="bg-white/50 p-4 rounded-lg font-mono text-sm">
                        <div>@keyframes breathe {`{`}</div>
                        <div className="ml-4">0%, 100% {`{ transform: scale(1); }`}</div>
                        <div className="ml-4">50% {`{ transform: scale(1.05); }`}</div>
                        <div>{`}`}</div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">React Hooks</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Custom hooks for scroll-based animations and mouse tracking.
                      </p>
                      <div className="bg-white/50 p-4 rounded-lg font-mono text-sm">
                        <div>const {`{ scrollY }`} = useScroll()</div>
                        <div>const {`{ mouseX, mouseY }`} = useMousePosition()</div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Implementation Checklist</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>✅ Set up CSS custom properties for colors</li>
                        <li>✅ Create reusable animation keyframes</li>
                        <li>✅ Implement scroll-based parallax hooks</li>
                        <li>✅ Add mouse tracking for interactive elements</li>
                        <li>✅ Use transform3d for hardware acceleration</li>
                        <li>✅ Test animations on different devices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
