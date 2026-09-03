/*
 * Single source of truth for all site content.
 * Change the text / numbers here and the whole website updates.
 *
 * NOTE: the partner companies below are PLACEHOLDER brands so the layout can be
 * demoed. Replace them with the real companies you are tied up with.
 */

export const business = {
  name: 'Sunrise Poultry Farm',
  tagline: 'Healthy Birds. Honest Weight. On-Time Supply.',
  intro:
    'A family run poultry farm raising broiler and country chicken with clean sheds, ' +
    'vaccinated stock and controlled feed. We sell live birds, day-old chicks and farm ' +
    'fresh eggs — and we grow birds on contract for leading integrators.',
  founded: 2009,
  location: 'Namakkal, Tamil Nadu',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'sales@sunrisepoultry.in',
  address: 'Survey No. 118/2, Mohanur Road, Namakkal, Tamil Nadu 637001',
  hours: 'Mon – Sat · 6:00 AM to 7:00 PM',
}

export const stats = [
  { value: 45000, suffix: '+', label: 'Birds per cycle', icon: 'hen' },
  { value: 16, suffix: ' yrs', label: 'In the poultry trade', icon: 'award' },
  { value: 1.52, decimals: 2, label: 'Average FCR', icon: 'chart' },
  { value: 320, suffix: '+', label: 'Regular buyers', icon: 'truck' },
]

/* ---------------- What we sell ---------------- */
export const products = [
  {
    id: 'broiler',
    icon: 'hen',
    name: 'Broiler Chicken',
    weight: '1.8 – 2.6 kg live weight',
    price: '₹118',
    unit: 'per kg · live weight, farm gate',
    blurb:
      'Cobb-400 and Ross-308 birds finished in 38–42 days on a three phase feed plan. ' +
      'Weighed in front of you, loaded in ventilated crates.',
    tags: ['Vaccinated', 'Clean finisher feed', 'Same day loading'],
    accent: 'amber',
  },
  {
    id: 'country',
    icon: 'rooster',
    name: 'Country Chicken (Naatu Kozhi)',
    weight: '1.2 – 1.8 kg live weight',
    price: '₹320',
    unit: 'per kg · live weight',
    blurb:
      'Free-range Aseel and Gramapriya birds raised 90+ days on grain, greens and grit. ' +
      'Firm meat, deep colour, strong repeat demand.',
    tags: ['Free range', '90+ days', 'Deshi breed'],
    accent: 'rust',
  },
  {
    id: 'chicks',
    icon: 'chick',
    name: 'Day-Old Chicks',
    weight: '38 – 45 g at placement',
    price: '₹34',
    unit: 'per chick · minimum 500',
    blurb:
      'Hatchery fresh chicks from our breeder tie-up, vaccinated at the hatchery and ' +
      'delivered in climate boxes within 12 hours of hatch.',
    tags: ['Marek + HVT done', 'Uniform weight', 'Doorstep delivery'],
    accent: 'yellow',
  },
  {
    id: 'eggs',
    icon: 'egg',
    name: 'Farm Fresh Eggs',
    weight: '52 – 60 g per egg',
    price: '₹6.40',
    unit: 'per egg · tray of 30, bulk rates apply',
    blurb:
      'Table eggs from BV-300 layers, collected three times a day, candled and graded. ' +
      'Brown and white available. Daily supply contracts welcome.',
    tags: ['Graded', 'Collected 3× daily', 'Daily contract'],
    accent: 'cream',
  },
  {
    id: 'feed',
    icon: 'feed',
    name: 'Poultry Feed & Supplements',
    weight: '50 kg bags',
    price: '₹2,150',
    unit: 'per bag · pre-starter, starter, finisher',
    blurb:
      'Balanced mash and crumble feed milled by our partner mills, plus liver tonic, ' +
      'electrolytes and calcium grit for your own flock.',
    tags: ['Mill fresh', 'Batch tested', 'Bulk pricing'],
    accent: 'green',
  },
  {
    id: 'manure',
    icon: 'leaf',
    name: 'Dried Poultry Manure',
    weight: 'Loose or 40 kg bags',
    price: '₹1,900',
    unit: 'per tonne · ex-farm, transport extra',
    blurb:
      'Sun dried, screened litter for banana, coconut and vegetable farms. High in ' +
      'nitrogen and phosphorus, cleared shed-by-shed after every cycle.',
    tags: ['Sun dried', 'Screened', 'Tractor load'],
    accent: 'brown',
  },
]

/* ---------------- Growth / rearing programme ---------------- */
export const growthStages = [
  {
    day: 'Day 0',
    title: 'Chick placement',
    weight: '42 g',
    icon: 'chick',
    detail:
      'Sheds pre-heated to 33°C, paper feeding for 72 hours, glucose and electrolyte ' +
      'water the moment the boxes are opened.',
  },
  {
    day: 'Day 1–10',
    title: 'Brooding',
    weight: '250 g',
    icon: 'brooder',
    detail:
      'Pre-starter crumble, 23 hours of light, litter turned daily. Weekly weight check ' +
      'against the breed standard chart.',
  },
  {
    day: 'Day 11–24',
    title: 'Grower phase',
    weight: '1.05 kg',
    icon: 'feed',
    detail:
      'Starter mash, Lasota and IBD vaccination, stocking density opened up to one ' +
      'square foot per bird.',
  },
  {
    day: 'Day 25–35',
    title: 'Finisher phase',
    weight: '1.90 kg',
    icon: 'hen',
    detail:
      'Finisher feed with the full withdrawal window respected. Ventilation and water ' +
      'flow logged twice a day.',
  },
  {
    day: 'Day 36–42',
    title: 'Lifting & sale',
    weight: '2.40 kg',
    icon: 'truck',
    detail:
      'Feed withdrawn 8 hours before catch, night loading, weighbridge slip and payment ' +
      'settled at the gate.',
  },
]

/* ---------------- Companies we work with ---------------- */
export const partners = [
  {
    name: 'AgriNest Foods',
    type: 'Integrator — contract broiler growing',
    since: 2014,
    scope: '3 sheds · 28,000 birds per cycle',
    logo: 'nest',
  },
  {
    name: 'Kaveri Feed Mills',
    type: 'Feed supply & nutrition support',
    since: 2012,
    scope: 'Pre-starter, starter and finisher supply',
    logo: 'mill',
  },
  {
    name: 'Ovo Hatcheries',
    type: 'Day-old chick supply',
    since: 2016,
    scope: 'Weekly placement of Cobb-400 chicks',
    logo: 'egg',
  },
  {
    name: 'FreshLine Retail',
    type: 'Dressed chicken off-take',
    since: 2019,
    scope: 'Daily 1.2 tonne live bird supply',
    logo: 'cart',
  },
  {
    name: 'GreenAcre Organics',
    type: 'Manure off-take',
    since: 2018,
    scope: '60 tonnes of dried litter per year',
    logo: 'leaf',
  },
  {
    name: 'VetCare Animal Health',
    type: 'Vaccination & veterinary cover',
    since: 2011,
    scope: 'Fortnightly farm visit and lab support',
    logo: 'shield',
  },
]

/* ---------------- Why buy from us ---------------- */
export const strengths = [
  {
    icon: 'shield',
    title: 'Bio-secure sheds',
    text: 'Foot dips, restricted entry, all-in all-out batches and a 14 day downtime with full disinfection between cycles.',
  },
  {
    icon: 'chart',
    title: 'Numbers you can check',
    text: 'Daily feed, water, mortality and weight logs per shed. Buyers are welcome to read the batch sheet before booking.',
  },
  {
    icon: 'truck',
    title: 'Loading on your schedule',
    text: 'Night and early morning catching, our own crates and two 3-tonne vehicles for local delivery inside 60 km.',
  },
  {
    icon: 'leaf',
    title: 'Clean feed policy',
    text: 'No growth promoters in the finisher phase. The withdrawal period is respected on every single batch.',
  },
]

export const testimonials = [
  {
    quote:
      'Six years of weekly loads and the weight has never once been short. If a batch is a day behind they call me before I call them.',
    name: 'Rafeeq A.',
    role: 'Wholesale chicken trader, Salem',
  },
  {
    quote:
      'We place chicks with them because the mortality stays under 3%. For an integrator that is the whole story.',
    name: 'Priya Raman',
    role: 'Procurement lead, AgriNest Foods',
  },
  {
    quote:
      'Country chicken from this farm actually tastes like country chicken. My weekend customers ask for it by name.',
    name: 'Karthik S.',
    role: 'Owner, Amma Mess, Namakkal',
  },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'What We Sell' },
  { id: 'growth', label: 'Growth Cycle' },
  { id: 'partners', label: 'Tie-Ups' },
  { id: 'contact', label: 'Contact' },
]
