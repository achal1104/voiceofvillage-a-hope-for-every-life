// import { field, waterscarity, well, well1, dryland, droughtcondition, farmer, lakebed, stepwell, shepherd, cattlecamp } from './images.js'
// // Photographs only. Real stories (title, village, date, text) will be added from verified field reports.
// export const CATS = ['Farmer stories', 'Women’s stories', 'Water scarcity', 'Drought-affected land', 'Livestock & fodder', 'Village life']
// export const PHOTOS = [
//   { cat: CATS[0], img: farmer, pos: '70% 35%', alt: 'A farmer holding dried crop on cracked, parched earth' },
//   { cat: CATS[2], img: stepwell, pos: '50% 50%', alt: 'Women collecting water at the bottom of a deep stone stepwell' },
//   { cat: CATS[3], img: lakebed, pos: '50% 50%', alt: 'Two men digging in a cracked, dried-up lakebed' },
//   { cat: CATS[4], img: cattlecamp, pos: '50% 50%', alt: 'Cattle sheltered under green shade nets at a fodder camp' },
//   { cat: CATS[4], img: shepherd, pos: '50% 50%', alt: 'A herdsman with his sheep and goats on dry, cracked ground' },
//   { cat: CATS[1], img: waterscarity, pos: '50% 50%', alt: 'Women carrying metal water pots along a dirt path' },
//   { cat: CATS[0], img: field, pos: '50% 30%', alt: 'A farmer crouching on cracked dry earth' },
//   { cat: CATS[2], img: well, pos: '50% 50%', alt: 'Villagers crowding around a stone well' },
//   { cat: CATS[2], img: well1, pos: '50% 55%', alt: 'Women gathered around a large dry well' },
//   { cat: CATS[3], img: dryland, pos: '50% 70%', alt: 'Cracked dry farmland under a blue sky' },
//   { cat: CATS[5], img: droughtcondition, pos: '50% 50%', alt: 'Aerial view of a dry village' },
// ]
import { field, waterscarity, well, well1, dryland, droughtcondition, farmer, lakebed, stepwell, shepherd, cattlecamp } from './images.js'
// Photographs only. Real stories (title, village, date, text) will be added from verified field reports.
export const CATS = ['Farmer stories', 'Women’s stories', 'Water scarcity', 'Drought-affected land', 'Livestock & fodder', 'Village life']
export const PHOTOS = [
  { cat: CATS[0], img: farmer, pos: '70% 35%', alt: 'A farmer holding dried crop on cracked, parched earth' },
  { cat: CATS[2], img: stepwell, pos: '50% 50%', alt: 'Women collecting water at the bottom of a deep stone stepwell' },
  { cat: CATS[3], img: lakebed, pos: '50% 50%', alt: 'Two men digging in a cracked, dried-up lakebed' },
  { cat: CATS[4], img: cattlecamp, pos: '50% 50%', alt: 'Cattle sheltered under green shade nets at a fodder camp' },
  { cat: CATS[4], img: shepherd, pos: '50% 50%', alt: 'A herdsman with his sheep and goats on dry, cracked ground' },
  { cat: CATS[1], img: waterscarity, pos: '50% 50%', alt: 'Women carrying metal water pots along a dirt path' },
  { cat: CATS[0], img: field, pos: '50% 30%', alt: 'A farmer crouching on cracked dry earth' },
  { cat: CATS[2], img: well, pos: '50% 50%', alt: 'Villagers crowding around a stone well' },
  { cat: CATS[2], img: well1, pos: '50% 55%', alt: 'Women gathered around a large dry well' },
  { cat: CATS[3], img: dryland, pos: '50% 70%', alt: 'Cracked dry farmland under a blue sky' },
  { cat: CATS[5], img: droughtcondition, pos: '50% 50%', alt: 'Aerial view of a dry village' },
]

// ---- Story pages (opened from "Read Story"). Background explainers built only from published news; no invented testimonials. ----
export const CAT_SLUG = { 'Farmer stories': 'farmer-stories', 'Women’s stories': 'womens-stories', 'Water scarcity': 'water-scarcity', 'Drought-affected land': 'drought-affected-land', 'Livestock & fodder': 'livestock-fodder', 'Village life': 'village-life' }

export const STORIES = [
  {
    slug: 'farmer-stories', title: 'Farmer stories', cat: CATS[0], img: farmer, pos: '70% 35%',
    summary: 'When the rain fails, a farmer loses the season, not just a crop. Here is what the drought of 2026 looks like for farming families.',
    intro: 'A failed monsoon does not end with one lost harvest. Seed, labour and loans are already spent before the first dry spell, and many families are left with nothing to sell and a debt to carry into the next season.',
    sections: [
      ['Declared drought, in numbers', 'On 26 September 2026 the Maharashtra government declared 265 of the state’s 358 tehsils drought-affected, after rainfall fell about 18 per cent short of the annual average. Declaration unlocks relief measures for farmers, but relief takes time to reach the field.'],
      ['What farmers worry about first', 'Reports from Beed, in Marathwada, describe cotton plants that never grew past knee height, and farmers worried about drinking water for their families and feed for their cattle. Crop inspection teams have also been visiting fields, for example in Barshi, to assess the damage.'],
      ['Where village funding helps', 'Seed support for the next season, farm ponds and desilted streams that hold water longer, and fodder for the cattle that a farm family depends on. Each of these can be funded in a small, verifiable amount and documented with photographs and bills.'],
    ],
    facts: [['265 of 358', 'tehsils declared drought-affected (26 Sep 2026)'], ['≈18%', 'rainfall deficit against the annual average']],
    news: ['n1', 'n6'], needs: ['Seed & input support', 'Farm ponds and desilting', 'Fodder for cattle'],
  },
  {
    slug: 'womens-stories', title: 'Women’s stories', cat: CATS[1], img: waterscarity, pos: '50% 50%',
    summary: 'In many villages, finding water is women’s daily work. Scarcity turns it into hours of walking, carrying and waiting.',
    intro: 'When wells dry up, the search for water falls first on women and girls. Time spent walking to a distant source or waiting for a tanker is time not spent on farm work, school or rest.',
    sections: [
      ['A region leaning on tankers', 'Lokmat Times reported in May 2026 that 156 tankers were supplying water in Marathwada and that around three lakh people were depending on tanker water. Another Lokmat Times report from late April counted 100 tankers serving 89 villages and hamlets.'],
      ['The cost of waiting', 'In Ambad taluka of Jalna, 39 tankers were serving 32 villages in November 2026, and villagers were waiting for the water to arrive. The days people wait for a tanker are days a household’s routine is held up.'],
      ['Where village funding helps', 'Reliable drinking water close to home. That can mean a tanker for the emergency weeks, but also water storage tanks, repaired hand pumps and recharge structures so the same village needs fewer tankers next year.'],
    ],
    facts: [['156', 'tankers running in Marathwada (May 2026)'], ['≈3 lakh', 'people dependent on tanker water']],
    news: ['n2', 'n3'], needs: ['Drinking-water tankers', 'Storage tanks and hand pumps', 'Recharge structures'],
  },
  {
    slug: 'water-scarcity', title: 'Water scarcity', cat: CATS[2], img: stepwell, pos: '50% 50%',
    summary: 'Dry wells, one per cent reservoirs and tankers in winter: how water scarcity is showing up in villages right now.',
    intro: 'Water scarcity in Maharashtra is no longer only a summer story. In 2026, tankers began running long before the hot season.',
    sections: [
      ['Winter drought', 'In November 2026 eSakal reported drought conditions in Ambad taluka during winter itself, with 39 tankers serving 32 villages, the most in Jalna district. The report notes villagers facing a dry drought after years of heavy rain.'],
      ['A reservoir at one per cent', 'In Adul, Paithan taluka, a percolation tank that supplies the village was reported to hold only about one per cent of its capacity. Villagers were asking for deepening of the tank and for tankers, and local herders were relying on what little water was left for their animals.'],
      ['Where village funding helps', 'Short term: tankers and water points. Long term: tank deepening, check dams and borewell recharge. Funders can choose either, and every rupee is tied to a named village and a documented outcome.'],
    ],
    facts: [['39 tankers', 'serving 32 villages in Ambad, Jalna (Nov 2026)'], ['≈1%', 'storage left in Adul’s percolation tank']],
    news: ['n3', 'n4', 'n7'], needs: ['Tanker supply', 'Tank deepening', 'Borewell recharge'],
  },
  {
    slug: 'drought-affected-land', title: 'Drought-affected land', cat: CATS[3], img: lakebed, pos: '50% 50%',
    summary: 'Cracked soil and dry lakebeds are the visible face of drought. Communities are already working to bring water back.',
    intro: 'Cracked fields and dry lakebeds are what most people picture when they hear the word drought. They also mark the places where restoring water storage can make the biggest difference.',
    sections: [
      ['Fields under review', 'An inter-ministerial central team visited Barshi in Solapur district to inspect crop conditions with farmers, part of the assessment that follows a drought declaration.'],
      ['Communities restoring rivers', 'In Beed, residents of about 41 villages joined a desilting drive on five rivers, aimed at creating storage for roughly 364.8 crore litres of water and helping groundwater recharge. It shows what village-level effort can do when materials and machinery are funded.'],
      ['Where village funding helps', 'Desilting, farm ponds, check dams and contour work. These are visible, measurable projects, which makes them well suited to funders who need clear reporting.'],
    ],
    facts: [['41 villages', 'joined the Beed river desilting drive'], ['≈364.8 crore L', 'storage capacity targeted']],
    news: ['n5', 'n6'], needs: ['River and tank desilting', 'Farm ponds', 'Check dams'],
  },
  {
    slug: 'livestock-fodder', title: 'Livestock & fodder', cat: CATS[4], img: cattlecamp, pos: '50% 50%',
    summary: 'Cattle, sheep and goats are a family’s savings. When fodder and water run short, they are the first to suffer.',
    intro: 'For a farming family, animals are income, savings and insurance in one. Selling them in distress is often the last option, and it is hard to undo.',
    sections: [
      ['Water for animals', 'In Adul village the dwindling water in the local tank was being used by herders to keep their animals alive, even as villagers pushed for deepening and tankers.'],
      ['Feed worries in Marathwada', 'Farmers in Beed have said they are concerned about drinking water and feed for their cattle as the drought deepens.'],
      ['Where village funding helps', 'Fodder deliveries, drinking-water troughs for cattle and support to fodder camps. The Emergency Needs page lists the current priorities.'],
    ],
    facts: [['Fodder + water', 'the two shortages that hit livestock first']],
    news: ['n4', 'n1'], needs: ['Fodder supply', 'Water troughs', 'Fodder camp support'],
  },
  {
    slug: 'herders', title: 'Herders', cat: CATS[4], img: shepherd, pos: '50% 50%',
    summary: 'Shepherds and herders move with water and grass. In a drought year, both are further away.',
    intro: 'Herding families follow grazing and water. When both dry up across a region, the distance they must cover grows and the risk to their animals rises.',
    sections: [
      ['A dry landscape', 'With 265 tehsils declared drought-affected in 2026, large parts of the state have thin grazing and low water in village tanks.'],
      ['Local water is shared', 'In Adul, the last water in a nearly empty tank was shared between households and herds, which shows how closely people and animals depend on the same source.'],
      ['Where village funding helps', 'Water points along grazing routes, fodder support in the worst weeks, and tank restoration so herds have a source close to the village.'],
    ],
    facts: [['265', 'tehsils with drought declared in 2026']],
    news: ['n1', 'n4'], needs: ['Water points', 'Fodder support', 'Tank restoration'],
  },
  {
    slug: 'village-life', title: 'Village life', cat: CATS[5], img: droughtcondition, pos: '50% 50%',
    summary: 'A drought changes a village’s whole routine, but villages also organise to recover. See how work and relief are reaching them.',
    intro: 'Seen from above, a drought-hit village looks quiet. Inside it, schedules bend around the arrival of the tanker, the price of fodder and the next government announcement.',
    sections: [
      ['Public work for local jobs', 'Maharashtra set aside ₹6,728 crore under the VB-G RAM G rural employment programme, with an emphasis on building long-term village assets like water-conservation structures while giving drought-hit households work.'],
      ['Villages doing it together', 'The Beed desilting drive, in which about 41 villages took part, shows that local organisation is already strong. Funding gives that effort machinery, fuel and materials.'],
      ['Where village funding helps', 'Corporate and NGO partners can sit beside government work: funding what public schemes do not reach in time, and documenting results openly.'],
    ],
    facts: [['₹6,728 crore', 'earmarked for rural employment (2026)']],
    news: ['n1', 'n5'], needs: ['Water-conservation works', 'Community machinery and fuel', 'Documentation and reporting'],
  },
]