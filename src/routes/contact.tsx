import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { businessConfig } from "@/data/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${businessConfig.name}` },
      {
        name: "description",
        content:
          "Contactez le créateur de ce projet portfolio santé.",
      },
      { property: "og:title", content: `Contact — ${businessConfig.name}` },
      {
        property: "og:description",
        content: "Coordonnées du créateur du projet et formulaire de démonstration.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="border-b border-border bg-soft-gradient">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Parlons du projet</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Une question sur cette démonstration ou un projet similaire ? Contactez le créateur.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <Card className="border-border/70 shadow-soft">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-xl font-bold">Envoyer un message de démonstration</h2>
            {sent ? (
              <div className="mt-6 rounded-2xl border border-success/40 bg-success/10 p-6">
                <p className="font-semibold text-success">Message envoyé</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Merci ! Cette confirmation est illustrative : le formulaire n'envoie aucune donnée.
                </p>
                <Button variant="outline" className="mt-4" onClick={() => setSent(false)}>
                  Écrire un autre message
                </Button>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success("Message simulé — aucune donnée envoyée");
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="c-name">Nom complet</Label>
                  <Input id="c-name" required placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-phone">Téléphone</Label>
                  <Input
                    id="c-phone"
                    required
                    inputMode="tel"
                    pattern="[+0-9 ()-]{8,20}"
                    maxLength={20}
                    placeholder="+509 …"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" maxLength={120} placeholder="vous@exemple.com" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="c-msg">Votre message</Label>
                  <Textarea
                    id="c-msg"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={2000}
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" /> Envoyer
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="space-y-4">
          {[
            {
              icon: Phone,
              t: "Téléphone",
              d: businessConfig.contact.phone,
              href: businessConfig.contact.phoneHref,
            },
            {
              icon: Mail,
              t: "Email",
              d: businessConfig.contact.email,
              href: `mailto:${businessConfig.contact.email}`,
            },
          ].map((c) => (
            <Card key={c.t} className="border-border/70">
              <CardContent className="flex gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{c.t}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                    >
                      {c.d}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-0 bg-hero-gradient text-primary-foreground">
            <CardContent className="p-5">
              <MessageSquare className="h-6 w-6" />
              <p className="mt-3 font-semibold">Préférez WhatsApp ?</p>
              <p className="mt-1 text-sm opacity-90">
                Contactez directement le créateur du projet sur WhatsApp.
              </p>
              <a
                href={businessConfig.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold underline underline-offset-4"
              >
                Ouvrir WhatsApp
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
