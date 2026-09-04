/*
 * Single source of truth for all site content.
 * Change the text / numbers here and the whole website updates.
 */

export const business = {
  name: 'SM Poultry Farm',
  tagline: 'Broiler and country chicken, direct from the farm.',
  intro:
    'We have been rearing poultry at Thalaivasal since 2001. The farm runs around ' +
    '10,000 birds a cycle and lifts five batches a year. We sell broiler and country ' +
    'chicken, day-old chicks, eggs and feed — weighed at the gate, no middleman.',
  founded: 2001,
  location: 'Thalaivasal, Attur, Salem',
  phone: '+91 93441 43376',
  whatsapp: '919344143376',
  email: 'rajasekarv362@gmail.com',
  address: 'Thalaivasal, Attur, Salem, Tamil Nadu',
  hours: 'All days · 7:00 AM to 8:00 PM',
}

export const stats = [
  { value: 10000, label: 'Birds per cycle', icon: 'hen' },
  { value: 25, suffix: ' yrs', label: 'Rearing since 2001', icon: 'award' },
  { value: 1.5, decimals: 1, label: 'Average FCR', icon: 'chart' },
  { value: 5, label: 'Batches a year', icon: 'truck' },
]

/* ---------------- What we sell ---------------- */
export const products = [
  {
    id: 'broiler',
    icon: 'hen',
    name: 'Broiler Chicken',
    weight: 'Around 1.9 kg live weight',
    price: '₹200',
    unit: 'per kg · live weight, farm gate',
    blurb:
      'Broiler birds raised to market weight on a staged feed plan. Weighed in ' +
      'front of you and loaded the same day.',
    tags: ['Weighed at the gate', 'Same day loading', 'Bulk orders'],
    accent: 'amber',
  },
  {
    id: 'country',
    icon: 'rooster',
    name: 'Country Chicken (Naatu Kozhi)',
    weight: 'Around 1.2 – 1.6 kg live weight',
    price: '₹250',
    unit: 'per kg · live weight',
    blurb:
      'Country birds grown slowly on grain and range. Firmer meat and deeper ' +
      'colour than broiler, with steady repeat demand.',
    tags: ['Deshi breed', 'Slow grown', 'Weighed at the gate'],
    accent: 'rust',
  },
  {
    id: 'chicks',
    icon: 'chick',
    name: 'Day-Old Chicks',
    weight: 'Minimum order 180 chicks',
    price: '₹200',
    unit: 'per chick · minimum 180',
    blurb:
      'Hatchery fresh chicks supplied for your own rearing. Ring ahead — chicks ' +
      'go out against the hatch date, not from stock.',
    tags: ['Booked in advance', 'Minimum 180', 'Collected or delivered'],
    accent: 'yellow',
  },
  {
    id: 'eggs',
    icon: 'egg',
    name: 'Farm Fresh Eggs',
    weight: 'Trays of 30',
    price: '₹5 – 6',
    unit: 'per egg · rate moves with the market',
    blurb:
      'Table eggs collected daily and trayed. Regular supply for shops, messes ' +
      'and households — daily or weekly standing orders welcome.',
    tags: ['Collected daily', 'Trays of 30', 'Standing orders'],
    accent: 'cream',
  },
  {
    id: 'feed',
    icon: 'feed',
    name: 'Poultry Feed',
    weight: '50 kg bags',
    price: '₹80 – 100',
    unit: 'per 50 kg bag',
    blurb:
      'Feed supplied for your own flock alongside our chicks. Ask for the current ' +
      'rate — feed prices move faster than anything else on this page.',
    tags: ['50 kg bags', 'Bulk pricing', 'With chick orders'],
    accent: 'green',
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
      'Shed pre-heated before the boxes arrive, paper feeding for the first few ' +
      'days, and water put down the moment the chicks are in.',
  },
  {
    day: 'Day 1–10',
    title: 'Brooding',
    weight: '250 g',
    icon: 'brooder',
    detail:
      'Pre-starter feed under the brooder, long light hours and litter turned ' +
      'daily. Weights checked against the standard chart every week.',
  },
  {
    day: 'Day 11–24',
    title: 'Grower phase',
    weight: '1.00 kg',
    icon: 'feed',
    detail:
      'Starter feed, vaccination on schedule, and the birds spread out as the ' +
      'stocking density is opened up.',
  },
  {
    day: 'Day 25–35',
    title: 'Finisher phase',
    weight: '1.60 kg',
    icon: 'hen',
    detail:
      'Finisher feed with the withdrawal period respected. Ventilation and water ' +
      'flow checked morning and evening.',
  },
  {
    day: 'Day 36–40',
    title: 'Lifting & sale',
    weight: '1.90 kg',
    icon: 'truck',
    detail:
      'Feed withdrawn before the catch, birds caught in the cool hours, weighed ' +
      'at the gate and settled on the spot.',
  },
]

/* ---------------- Companies we work with ---------------- */
export const partners = [
  {
    name: 'SMK',
    type: 'Current tie-up',
    logo: 'nest',
  },
  {
    name: 'Suguna',
    type: 'Integrator',
    logo: 'mill',
  },
]

/* ---------------- The person behind the farm ---------------- */
export const founder = {
  name: 'Rajasekaran Viswanathan',
  role: 'Founder',
  since: 2001,
  line:
    'Started the farm at Thalaivasal in 2001 and has run every batch since — ' +
    'placing the chicks, walking the sheds and settling the weight at the gate ' +
    'himself.',
  /*
   * His own words, if you want them on the card. Leave it empty and the card
   * simply leaves the quote out — better a short card than a sentence he
   * never said.
   */
  quote: '',
  facts: [
    { icon: 'award', text: 'Rearing since 2001' },
    { icon: 'hen', text: '10,000 birds a cycle' },
    { icon: 'truck', text: '5 batches a year' },
  ],
}

/* ---------------- Why buy from us ---------------- */
export const strengths = [
  {
    icon: 'chart',
    title: 'Weighed in front of you',
    text: 'Live weight is taken at the gate before loading. No guesswork on the count and no argument about the kilos afterwards.',
  },
  {
    icon: 'truck',
    title: 'Stock moving all year',
    text: 'Five batches a year means there is almost always a lot coming up, instead of one seasonal lift you have to wait for.',
  },
  {
    icon: 'shield',
    title: 'Grown to order',
    text: 'Tell us the weight band you need and how many, and we will place your birds in the next batch going in.',
  },
  {
    icon: 'leaf',
    title: 'Straight from the shed',
    text: 'You buy from the people who reared the birds. Nobody sits between the shed and your shop adding a margin.',
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

/* Digits-only version of the phone number, for tel: links. */
export const phoneHref = `tel:+${business.whatsapp}`
