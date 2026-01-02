# Super Steve Massage Therapy - Project Handoff Document

> **Last Updated:** January 1, 2026  
> **Status:** ✅ Ready for Clover API Integration  
> **Next Session:** Meeting with Steve to integrate Clover

---

## Quick Start for New Machine

```bash
# 1. Clone the repo
git clone https://github.com/notmemoo/SuperSteveMassage.git
cd SuperSteveMassage

# 2. Install dependencies
npm install

# 3. Create .env.local (see Environment Variables below)

# 4. Run development server
npm run dev
```

---

## Project Overview

| Field | Value |
|-------|-------|
| **Client** | Super Steve Massage Therapy LLC |
| **Therapist** | Steve Thompson LMT, MA60714361 |
| **Location** | University Place, WA |
| **Tech Stack** | Next.js 16, React, Tailwind CSS, TypeScript |
| **GitHub Repo** | `notmemoo/SuperSteveMassage` |
| **Live Site** | `superstevemassage.vercel.app` |

---

## Environment Variables

Create a `.env.local` file with:

```env
RESEND_API_KEY=re_xxxxxxxxxx
CONTACT_EMAIL=memomar168@gmail.com

# COMING SOON - Clover API (to be added during integration)
# CLOVER_API_KEY=
# CLOVER_MERCHANT_ID=
# CLOVER_ENVIRONMENT=sandbox
```

---

## Current Status (January 2026)

### ✅ Completed & Working

| Feature | Status | Notes |
|---------|--------|-------|
| Homepage | ✅ Done | Hero, Services, About, Testimonials, Contact |
| Navigation | ✅ Done | Sticky header, mobile menu, smooth scroll |
| Contact Form | ✅ Done | Sends emails via Resend API |
| Intake Form (`/intake`) | ✅ Done | 5-step form with body diagram & digital signatures |
| Book Page (`/book`) | ✅ Placeholder | Links to MassageBook temporarily |
| Gift Cards (`/gift-cards`) | ✅ Placeholder | Ready for Clover integration |
| SEO | ✅ Done | Sitemap, robots.txt, structured data |
| Code Quality | ✅ Clean | 0 lint warnings, build passes |

### 🎯 Ready for Clover Integration

Both `/book` and `/gift-cards` pages have placeholder UI ready to be connected to Clover:
- Service selection cards already designed
- Gift card amount options in place
- Just need to wire up Clover payment processing

---

## Clover Integration Plan

### What We Need from Steve

1. **Clover Merchant ID** - Found in Clover Dashboard → Account & Setup
2. **API Token** - Generate at clover.com/dashboard → API Tokens
3. **Confirm environment** - Sandbox (testing) or Production

### Integration Steps

1. **Install Clover SDK**
   ```bash
   npm install clover-sdk  # or use REST API directly
   ```

2. **Create API Route** - `app/api/clover/route.ts`
   - Handle payment processing
   - Create orders
   - Gift card purchases

3. **Update Book Page**
   - Connect service selection to Clover inventory
   - Implement date/time picker
   - Process deposits or full payments

4. **Update Gift Cards Page**
   - Create gift card codes
   - Process payments
   - Send digital gift cards via email

### Clover API Documentation

- **REST API:** https://docs.clover.com/reference
- **E-commerce:** https://docs.clover.com/docs/clover-e-commerce
- **Payment Processing:** https://docs.clover.com/docs/processing-payments

---

## Project Structure

```
super-steve-massage/
├── app/
│   ├── api/
│   │   ├── contact/route.ts    # Contact form email (Resend)
│   │   └── intake/route.ts     # Intake form email (Resend)
│   ├── intake/page.tsx         # 5-step intake form
│   ├── book/page.tsx           # Booking (needs Clover)
│   ├── gift-cards/page.tsx     # Gift cards (needs Clover)
│   ├── layout.tsx              # Root layout, fonts, SEO
│   └── page.tsx                # Homepage
├── components/
│   ├── Hero.tsx, Services.tsx, About.tsx, etc.
│   └── intake/                 # Intake form components
├── public/
│   └── images/
│       ├── steve.jpg           # Steve's hiking photo
│       └── diagram.jpg         # Body diagram for intake
└── .env.local                  # API keys (DO NOT COMMIT)
```

---

## Services & Pricing

| Service | Duration Options | Price Range |
|---------|------------------|-------------|
| Deep Tissue | 30-120 min | $55-$168 |
| Steve's Signature | 45-120 min | $85-$195 |
| Deep Stretch | 30-90 min | $55-$133 |
| Cupping Massage | 30-90 min | $84-$166 |
| Gua Sha | 30-90 min | $83-$165 |
| Prenatal Massage | 30-60 min | $45-$77 |

---

## Important Notes

1. **MassageBook Links** - All "Book Now" buttons currently link to MassageBook as fallback. Replace with Clover when ready.

2. **Email Configuration** - Contact email now uses `process.env.CONTACT_EMAIL` with fallback to `memomar168@gmail.com`.

3. **Intake Form** - Submits to Steve's email with beautiful HTML formatting. Includes body diagram markers, medical history, and digital signatures.

4. **Resend Free Tier** - Currently using `onboarding@resend.dev` as sender. For production, verify a custom domain in Resend dashboard.

---

## Design System

| Element | Value |
|---------|-------|
| Primary Color | `#C4704A` (terracotta) |
| Secondary | `#E8D5C4` (peach) |
| Background | `#FDFBF9` (warm white) |
| Text | `#2D2D2D` (dark gray) |
| Heading Font | Playfair Display |
| Body Font | Lato |

---

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Check for issues
npm start        # Start production server
```

---

## Contact Info

- **Business Phone:** (253) 970-9615
- **Address:** 7406 27Th St W #23, University Place, WA 98466
- **Hours:** 7 days/week, by appointment

---

**Ready to integrate Clover! 🚀**
