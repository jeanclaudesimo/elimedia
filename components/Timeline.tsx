import { IconComponent } from './CardGrid';
import type { TimelineStep } from '@/types';

interface TimelineProps {
  title: string;
  subtitle?: string;
  steps: TimelineStep[];
}

export default function Timeline({ title, subtitle, steps }: TimelineProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-navy-600 font-medium mb-2">{subtitle}</p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900">
            {title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cocoa-200 -translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'
                  }`}
                >
                  <div
                    className={`bg-white p-6 rounded-xl shadow-card border border-sand-200 ${
                      index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                    }`}
                  >
                    <span className="text-sm font-semibold text-navy-600 mb-2 block">
                      Schritt {step.step}
                    </span>
                    <h3 className="text-xl font-semibold text-cocoa-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-cocoa-600">{step.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-cocoa-700 rounded-full flex items-center justify-center z-10 shadow-lg">
                  {step.icon ? (
                    <IconComponent name={step.icon} className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  )}
                </div>

                {/* Empty space for opposite side */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cocoa-200" />

            {steps.map((step) => (
              <div key={step.id} className="relative flex mb-8 last:mb-0">
                {/* Circle */}
                <div className="w-12 h-12 bg-cocoa-700 rounded-full flex items-center justify-center z-10 flex-shrink-0 shadow-lg">
                  {step.icon ? (
                    <IconComponent name={step.icon} className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white font-bold">{step.step}</span>
                  )}
                </div>

                {/* Content */}
                <div className="ml-6 bg-white p-5 rounded-xl shadow-card border border-sand-200 flex-1">
                  <span className="text-sm font-semibold text-navy-600 mb-1 block">
                    Schritt {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-cocoa-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-cocoa-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
