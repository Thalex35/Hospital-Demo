import { Link } from "@tanstack/react-router";
import { Activity, Clock, Mail, MapPin, Phone } from "lucide-react";
import { businessConfig, mockDataNotice } from "@/data/business";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-hero-gradient text-primary-foreground">
              <Activity className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold">{businessConfig.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {businessConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/rendez-vous"
                search={{ service: undefined }}
                className="hover:text-foreground"
              >
                Prendre rendez-vous
              </Link>
            </li>
            <li>
              <Link to="/suivi" className="hover:text-foreground">
                Résultats en ligne
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Contact du créateur</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={businessConfig.contact.phoneHref} className="hover:text-foreground">
                {businessConfig.contact.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${businessConfig.contact.email}`} className="break-all hover:text-foreground">
                {businessConfig.contact.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Coordonnées d'un projet portfolio — aucune clinique réelle n'est représentée.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">À propos de la démo</h3>
          <p className="mt-4 flex gap-2 text-sm text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Les horaires et disponibilités vus dans les parcours sont des exemples fictifs.
          </p>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {businessConfig.name}. {mockDataNotice}
      </div>
    </footer>
  );
}
