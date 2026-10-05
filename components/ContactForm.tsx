'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';

const occasions = ['Wedding', 'Traditional ceremony', 'Everyday senator', 'Suit', 'Group or uniforms', 'Alteration', 'Something else'];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState(occasions[0]);
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Add your name and a short note so we know how to help.');
      return;
    }
    const lines = [
      `Hello Tatiana Stitches, my name is ${name.trim()}.`,
      `I am reaching out about: ${occasion}.`,
      date ? `I need it by: ${date}.` : '',
      '',
      message.trim(),
    ].filter((l, i) => l !== '' || i === 3);
    window.open(`${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  };

  const field =
    'w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/35 focus:border-coral focus:outline-none focus:ring-0 transition-colors';

  return (
    <form onSubmit={submit} className="space-y-8">
      <div>
        <label className="eyebrow text-cognac" htmlFor="name">
          Your name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError('');
          }}
          className={field}
          placeholder="Chinedu Okafor"
        />
      </div>

      <div>
        <p className="eyebrow text-cognac">What is it for?</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {occasions.map((o) => (
            <button
              type="button"
              key={o}
              onClick={() => setOccasion(o)}
              className={`border px-4 py-2 text-sm transition-colors duration-300 ${
                occasion === o ? 'border-coral bg-coral text-bone' : 'border-ink/20 text-ink/75 hover:border-ink hover:bg-ink hover:text-bone'
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="eyebrow text-cognac" htmlFor="date">
          When do you need it? <span className="normal-case tracking-normal text-ink/40">(optional)</span>
        </label>
        <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
      </div>

      <div>
        <label className="eyebrow text-cognac" htmlFor="message">
          Tell us a little more
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setError('');
          }}
          className={`${field} resize-none`}
          placeholder="I want a wine red agbada for my traditional wedding in December."
        />
      </div>

      {error && <p className="text-sm text-coral">{error}</p>}

      <button type="submit" className="btn btn-coral w-full sm:w-auto">
        Send on WhatsApp <ArrowRight size={16} />
      </button>
      <p className="text-sm text-ink/50">This opens WhatsApp with your message ready to send.</p>
    </form>
  );
}
