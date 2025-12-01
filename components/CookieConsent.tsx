'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  functional: false,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);

    // Check localStorage only on client side
    try {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        // Small delay for better UX
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage not available
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    saveConsent(defaultPreferences);
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Don't render anything until mounted (client-side)
  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Main Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-cocoa-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-cocoa-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-cocoa-900 mb-2">
                  Wir respektieren Ihre Privatsphäre
                </h2>
                <p className="text-cocoa-600 text-sm leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                  Sie können wählen, welche Cookies Sie akzeptieren möchten. Weitere Informationen finden Sie
                  in unserer{' '}
                  <Link href="/datenschutz" className="text-navy-600 hover:underline font-medium">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
            </div>

            {/* Cookie Details (expandable) */}
            {showDetails && (
              <div className="mb-6 space-y-4 border-t border-b border-sand-200 py-6">
                {/* Necessary Cookies */}
                <div className="flex items-center justify-between p-4 bg-sand-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-cocoa-900">Notwendige Cookies</h3>
                      <span className="text-xs bg-navy-100 text-navy-700 px-2 py-0.5 rounded-full">
                        Erforderlich
                      </span>
                    </div>
                    <p className="text-sm text-cocoa-600">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-navy-600 rounded-full relative cursor-not-allowed">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-center justify-between p-4 bg-sand-50 rounded-xl">
                  <div className="flex-1">
                    <h3 className="font-semibold text-cocoa-900 mb-1">Funktionale Cookies</h3>
                    <p className="text-sm text-cocoa-600">
                      Ermöglichen erweiterte Funktionen wie Spracheinstellungen und personalisierte Inhalte.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.functional ? 'bg-navy-600' : 'bg-sand-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.functional ? 'right-1' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 bg-sand-50 rounded-xl">
                  <div className="flex-1">
                    <h3 className="font-semibold text-cocoa-900 mb-1">Analyse-Cookies</h3>
                    <p className="text-sm text-cocoa-600">
                      Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um sie zu verbessern.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-navy-600' : 'bg-sand-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.analytics ? 'right-1' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-4 bg-sand-50 rounded-xl">
                  <div className="flex-1">
                    <h3 className="font-semibold text-cocoa-900 mb-1">Marketing-Cookies</h3>
                    <p className="text-sm text-cocoa-600">
                      Werden verwendet, um Werbung relevanter für Sie zu gestalten.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.marketing ? 'bg-navy-600' : 'bg-sand-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.marketing ? 'right-1' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              {!showDetails ? (
                <>
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-sand-200 hover:bg-sand-300 text-cocoa-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 border-2 border-sand-300 hover:border-navy-600 text-cocoa-700 hover:text-navy-600 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Einstellungen
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={saveCustom}
                    className="flex-1 bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-sand-200 hover:bg-sand-300 text-cocoa-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="flex-1 border-2 border-sand-300 hover:border-navy-600 text-cocoa-700 hover:text-navy-600 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Zurück
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
