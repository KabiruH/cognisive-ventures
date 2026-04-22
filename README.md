# Cognisive Ventures Limited — Website

Official website for **Cognisive Ventures Limited**, a Nairobi-based IT solutions company specialising in hardware repair, software support, networking, and computer supply. Built by [Ubiru Systems](https://ubiruafrica.co.ke).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + Inline Styles |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| UI Primitives | Radix UI |
| Deployment | Vercel (recommended) |

---
## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd cognisive-ventures

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Contact & Business Info

| Field | Value |
|---|---|
| Location | Superior Arcade, 2nd Floor, Shop 2-02, Accra Road, Nairobi |
| Phone | 0735 606 059 |
| Email | hello@cognisive.co.ke |

---

## Deployment

The project is optimised for deployment on **Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Alternatively, build and host the `/.next` output on any Node.js-compatible server.

---

## Development Notes

- **Styling approach:** All responsive behaviour is handled via CSS media queries inside `<style>` tags within each component, rather than Tailwind utility classes. This ensures consistent rendering regardless of Tailwind's JIT scanning.
- **Images:** All images use Next.js `<Image />` with appropriate `sizes` props for optimised delivery at each breakpoint.
- **Forms:** The contact form uses React Hook Form with Zod schema validation. The `onSubmit` handler currently logs to console — replace with your email API or backend endpoint.
- **Fonts:** Loaded via Google Fonts in `globals.css`. Syne is used for all headings; DM Sans for body and UI text.

---

*Built by [Ubiru Systems](ubiruafrica@gmail.com)*