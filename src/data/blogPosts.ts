export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'quote';
  text?: string;
  items?: string[];
  attribution?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'kitchen-renovation-guide-edmonton',
    title: 'How to Plan a Kitchen Renovation: A Step-by-Step Guide',
    excerpt: 'A kitchen renovation is one of the highest-return investments you can make in your home. Here is how to do it right — from budget to final reveal.',
    category: 'Kitchens',
    date: 'March 5, 2026',
    dateISO: '2026-03-05',
    readTime: '6 min read',
    image: '/blog/how-to-plan-a-kitchen-renovation-a-step-by-step-guide.jpg',
    featured: true,
    content: [
      { type: 'paragraph', text: 'A kitchen renovation is one of the most impactful investments you can make in your home. Done right, it transforms daily life, dramatically increases resale value, and creates a space you will actually want to spend time in. Done poorly, it creates months of stress and a result you will spend years trying to fix.' },
      { type: 'heading', text: '1. Define Your Goals Before You Talk to Anyone' },
      { type: 'paragraph', text: 'Before reaching out to a single contractor or setting foot in a showroom, spend time getting honest about what you actually need. Are you renovating to enjoy the space yourself, or primarily to sell? Do you cook serious meals every day, or is this mostly a social space? These answers will determine every decision that follows — layout, appliance quality, material choices, and budget allocation.' },
      { type: 'heading', text: '2. Set a Realistic Budget — Then Add a Buffer' },
      { type: 'paragraph', text: 'In Edmonton, a mid-range kitchen renovation typically runs between $25,000 and $60,000 depending on size, material choices, and scope. High-end projects can exceed $100,000. Whatever number you land on, build in a 15–20% contingency for surprises. Unexpected plumbing issues, structural discoveries, or material price changes are common, and a buffer protects your project from grinding to a halt.' },
      { type: 'list', items: ['Small kitchen (under 100 sq ft): $20,000 – $35,000', 'Mid-size kitchen (100–200 sq ft): $35,000 – $65,000', 'Large or luxury kitchen (200+ sq ft): $65,000+'] },
      { type: 'heading', text: '3. Prioritize Layout Over Aesthetics' },
      { type: 'paragraph', text: 'The single biggest mistake homeowners make is spending the majority of their budget on visible finishes while neglecting the functional layout. A beautiful kitchen with poor workflow will frustrate you every day. Work with your contractor to optimize the work triangle — the relationship between your sink, refrigerator, and stove — and ensure adequate counter space on either side of the range.' },
      { type: 'heading', text: '4. Choose Materials That Last' },
      { type: 'paragraph', text: 'Quartz countertops, solid wood or high-quality MDF cabinetry, and porcelain tile are investments that hold up for decades. Avoid the temptation to cut costs on surfaces that take daily wear. Where you can economize is on items that can be upgraded later: lighting fixtures, hardware, and some appliances.' },
      { type: 'quote', text: 'The materials you choose will be the things you touch every single day for the next 15 years. That is not where you want to compromise.', attribution: 'Aarth Construction' },
      { type: 'heading', text: '5. Work With One Point of Contact' },
      { type: 'paragraph', text: 'Managing multiple trades on your own — a separate plumber, electrician, and cabinet installer — is a recipe for scheduling conflicts, communication gaps, and cost overruns. A full-service renovation contractor coordinates all trades under one roof, taking the management burden off you entirely. At Aarth Construction, we handle everything from permits through to final walkthrough.' },
    ],
  },
  {
    slug: '5-signs-bathroom-needs-renovation',
    title: '5 Signs Your Bathroom Needs a Renovation (Not Just a Deep Clean)',
    excerpt: 'Outdated tile, poor ventilation, persistent mould — some bathroom problems go beyond cleaning. Here are five signs it is time to renovate.',
    category: 'Bathrooms',
    date: 'February 18, 2026',
    dateISO: '2026-02-18',
    readTime: '4 min read',
    image: '/blog/5-signs-your-bathroom-needs-a-renovation-not-just-a-deep-clean.jpg',
    content: [
      { type: 'paragraph', text: 'A bathroom that needs attention does not always announce itself dramatically. More often, the signs are gradual — a persistent mustiness, grout that never looks clean no matter how hard you scrub, or a layout that makes mornings unnecessarily complicated. Here are five signals that a renovation is the right move, not another coat of paint.' },
      { type: 'heading', text: '1. Persistent Mould or Mildew Behind the Walls' },
      { type: 'paragraph', text: 'Surface mould is a cleaning problem. Mould that keeps returning after repeated treatments, or that appears in new spots, is a ventilation or waterproofing problem. This typically means moisture is finding its way behind your tile or into your drywall — and a renovation is the only proper fix. Left unaddressed, it becomes a structural and health issue.' },
      { type: 'heading', text: '2. Cracked, Loose, or Failing Tile' },
      { type: 'paragraph', text: 'Cracked grout and loose tiles are not cosmetic issues — they are water intrusion points. Once water gets behind tile, it attacks the substrate and eventually the framing. If you have more than a few tiles showing movement or cracking, a full retile is more cost-effective than spot repairs that fail within months.' },
      { type: 'heading', text: '3. Inadequate Ventilation' },
      { type: 'paragraph', text: 'If your mirror fogs heavily after every shower and takes 20+ minutes to clear, your ventilation fan is undersized or malfunctioning. Poor ventilation is the primary driver of mould growth, paint peeling, and cabinet warping in bathrooms. A renovation is an opportunity to install properly sized exhaust to code.' },
      { type: 'heading', text: '4. Plumbing Problems That Keep Returning' },
      { type: 'paragraph', text: 'A drain that clogs repeatedly, a toilet that runs constantly, or faucets that drip immediately after being fixed often indicate aging infrastructure behind the walls. If your home was built before 1990, the pipes themselves may need replacing — something only visible during a renovation.' },
      { type: 'heading', text: '5. The Layout No Longer Makes Sense for Your Life' },
      { type: 'paragraph', text: 'A bathroom designed for a single person in 1985 is not going to work well for a family of four in 2026. If you are consistently working around the layout — not enough storage, no double vanity, a tub you never use taking up space that could be a walk-in shower — a renovation pays for itself in daily quality of life.' },
      { type: 'quote', text: 'The bathroom is the most used room in any home. It deserves to work for you, not against you.', attribution: 'Aarth Construction' },
    ],
  },
  {
    slug: 'basement-finishing-what-to-know',
    title: 'Basement Finishing 101: What Edmonton Homeowners Need to Know',
    excerpt: 'A finished basement can add up to 30% to your home\'s livable square footage. Here is what to know before you start — permits, moisture, and layout.',
    category: 'Basements',
    date: 'February 3, 2026',
    dateISO: '2026-02-03',
    readTime: '5 min read',
    image: '/blog/basement-finishing-101-what-edmonton-homeowners-need-to-know.jpg',
    content: [
      { type: 'paragraph', text: 'A finished basement can add 30% or more to your home\'s livable square footage at a fraction of the cost per square foot of an above-grade addition. In Edmonton, where long winters make indoor space especially valuable, a well-executed basement finish is one of the best investments a homeowner can make.' },
      { type: 'heading', text: 'Permits Are Non-Negotiable' },
      { type: 'paragraph', text: 'Every basement development in Edmonton requires a building permit. This is not optional, and pulling permits is not just bureaucracy — it is protection. Unpermitted work is a liability when you sell, may not be covered by your home insurance, and can force you to tear out completed work if discovered. A reputable contractor handles permits as a standard part of the project.' },
      { type: 'heading', text: 'Address Moisture Before You Frame' },
      { type: 'paragraph', text: 'Moisture is the enemy of every basement finish. Before a single stud goes up, any existing water intrusion issues must be resolved. This means checking foundation cracks, grading around the home exterior, and window well drainage. Spray foam insulation against the foundation wall is standard in Edmonton for its dual role as insulation and vapour barrier.' },
      { type: 'list', items: ['Check for efflorescence (white mineral deposits) — indicates past moisture', 'Ensure sump pit and pump are functional before framing', 'Use moisture-resistant drywall (Type X or green board) in all basement applications', 'Maintain minimum 7\'6" ceiling height for a comfortable living space'] },
      { type: 'heading', text: 'Plan the Layout Around Support Columns and Mechanicals' },
      { type: 'paragraph', text: 'Every basement has constraints: support posts, the furnace and hot water tank, electrical panels, and drain access points. A skilled contractor works these into the design rather than around them — a support column can become a feature wall, and mechanical rooms can be tucked behind well-designed utility closets.' },
      { type: 'heading', text: 'Egress Windows Are Both Code and Common Sense' },
      { type: 'paragraph', text: 'If your basement will include a bedroom, Alberta Building Code requires an egress window — a window large enough to escape through in an emergency. Even for non-bedroom uses, egress windows dramatically improve natural light and make the space feel less like a basement and more like a proper living area.' },
      { type: 'quote', text: 'A basement done right is not just extra space. It is a complete living environment that adds real value to your home and your life.', attribution: 'Aarth Construction' },
    ],
  },
  {
    slug: 'best-flooring-options-edmonton-homes',
    title: 'The Best Flooring Options for Edmonton Homes',
    excerpt: 'Edmonton\'s climate creates unique demands on flooring — extreme cold, humidity swings, and heavy foot traffic. Here is how to choose the right material.',
    category: 'Flooring',
    date: 'January 22, 2026',
    dateISO: '2026-01-22',
    readTime: '5 min read',
    image: '/blog/the-best-flooring-options-for-edmonton-homes.jpg',
    content: [
      { type: 'paragraph', text: 'Flooring in Edmonton faces challenges that homeowners in milder climates never consider: dramatic temperature swings between winter and summer, low humidity in winter that causes natural materials to contract, and high humidity in summer that causes them to expand. Choosing the wrong product leads to gapping, cupping, or delamination within a few years.' },
      { type: 'heading', text: 'Engineered Hardwood: The Best of Both Worlds' },
      { type: 'paragraph', text: 'For most Edmonton living spaces, engineered hardwood is the ideal choice. It has the genuine wood surface of solid hardwood but a multi-ply plywood core that handles humidity fluctuation far better. It can be installed over radiant in-floor heating — a popular choice in our climate — and can be refinished 2–3 times over its lifetime.' },
      { type: 'heading', text: 'Luxury Vinyl Plank (LVP): The Practical Choice' },
      { type: 'paragraph', text: 'LVP has evolved dramatically. Premium LVP products are fully waterproof, dimensionally stable across extreme temperature ranges, and realistic enough that most guests cannot tell it apart from hardwood at a glance. It is the right choice for basements, laundry rooms, mudrooms, and any space where water or heavy foot traffic is a concern.' },
      { type: 'list', items: ['Engineered hardwood: Best for main living areas, bedrooms, dining rooms', 'LVP: Best for basements, kitchens, bathrooms, high-traffic areas', 'Porcelain tile: Best for bathrooms, entryways, mudrooms', 'Carpet: Best for bedrooms, home offices — adds warmth and sound absorption'] },
      { type: 'heading', text: 'What to Avoid in Edmonton' },
      { type: 'paragraph', text: 'Solid hardwood over concrete slabs or in basements is generally not recommended in Edmonton — the humidity swings are too severe. Laminate, while inexpensive, is not waterproof and does not hold up well in our climate over time. Cheap LVP with thin wear layers (under 6mm) dents and scratches quickly under normal family use.' },
      { type: 'heading', text: 'Installation Matters as Much as the Product' },
      { type: 'paragraph', text: 'Even the best flooring product will fail if installed incorrectly. Proper acclimatization (letting the product adjust to your home\'s temperature and humidity for 48–72 hours before installation), correct subfloor preparation, and appropriate expansion gaps are all critical. This is why we recommend professional installation for every flooring project.' },
    ],
  },
  {
    slug: 'how-to-choose-right-contractor-edmonton',
    title: 'How to Choose the Right Renovation Contractor in Edmonton',
    excerpt: 'Not every contractor is created equal. Here are the questions to ask, the red flags to watch for, and how to protect yourself before signing anything.',
    category: 'Advice',
    date: 'January 9, 2026',
    dateISO: '2026-01-09',
    readTime: '6 min read',
    image: '/blog/how-to-choose-the-right-renovation-contractor-in-edmonton.jpg',
    content: [
      { type: 'paragraph', text: 'Hiring a renovation contractor is one of the largest financial decisions most homeowners make. The difference between a great contractor and a problematic one is not always obvious on the surface. Here is how to evaluate your options systematically — before you sign anything.' },
      { type: 'heading', text: 'Verify Licensing and Insurance' },
      { type: 'paragraph', text: 'In Alberta, general contractors do not require a provincial license, but they must carry liability insurance and ensure their workers are covered under WCB (Workers\' Compensation Board). Always ask for proof of both. If a contractor is reluctant to provide these documents, that is your answer.' },
      { type: 'list', items: ['Request a current Certificate of Insurance — it should name your address', 'Confirm WCB clearance — you can verify online at wcb.ab.ca', 'Check for any BBB complaints or negative Google reviews older than 6 months', 'Ask for references from projects completed in the last 12 months'] },
      { type: 'heading', text: 'Get a Detailed Written Quote — Not a Ballpark' },
      { type: 'paragraph', text: 'A professional contractor should provide a written quote that breaks down labour costs, material costs, and a projected timeline. Vague quotes ("somewhere between $20,000 and $40,000") are not quotes — they are placeholders that give the contractor room to escalate costs later. If a contractor cannot or will not provide a detailed quote, move on.' },
      { type: 'heading', text: 'Red Flags to Watch For' },
      { type: 'list', items: ['Asking for more than 25–30% deposit upfront', 'No physical business address or only a PO box', 'Reluctance to pull permits ("we can save time if we skip those")', 'Pressure to decide immediately or "lock in" pricing', 'No written contract or agreement'] },
      { type: 'heading', text: 'Understand What One Point of Contact Means' },
      { type: 'paragraph', text: 'A full-service renovation contractor coordinates all trades — plumbing, electrical, framing, drywall, finishing — and gives you one person to communicate with throughout the project. This is very different from a contractor who sub-contracts everything and disappears, leaving you to field calls from three different tradespeople.' },
      { type: 'quote', text: 'The cheapest quote rarely delivers the best value. Total cost of ownership — including callbacks, repairs, and your time — is what matters.', attribution: 'Aarth Construction' },
    ],
  },
  {
    slug: 'commercial-renovation-office-fitout-guide',
    title: 'Office Fit-Outs in Edmonton: What Business Owners Need to Know',
    excerpt: 'A well-designed office fit-out improves productivity, reflects your brand, and helps attract talent. Here is how to approach the process from planning to handover.',
    category: 'Commercial',
    date: 'December 14, 2025',
    dateISO: '2025-12-14',
    readTime: '5 min read',
    image: '/blog/office-fit-outs-in-edmonton-what-business-owners-need-to-know.jpg',
    content: [
      { type: 'paragraph', text: 'The way your office looks and functions sends a message — to your team, to your clients, and to candidates evaluating your company. A thoughtfully designed commercial space is not an overhead expense; it is an investment in productivity, culture, and brand perception.' },
      { type: 'heading', text: 'Start With a Programming Study' },
      { type: 'paragraph', text: 'Before any design work begins, document how your team actually works. How many people need private offices vs. open plan workstations? Do you have frequent client meetings that require presentation-ready spaces? Do you need collaboration areas separate from focus work areas? This information drives every design decision that follows.' },
      { type: 'heading', text: 'Budget for Tenant Improvements Properly' },
      { type: 'paragraph', text: 'Commercial fit-out costs in Edmonton typically range from $80 to $200+ per square foot depending on finish level and complexity. Basic office space runs around $80–100/sq ft. Mid-range finishes with proper acoustics, branded elements, and quality millwork run $120–160/sq ft. High-end finishes — executive offices, client-facing boardrooms — can reach $200+/sq ft.' },
      { type: 'heading', text: 'Understand Your Lease Before You Build' },
      { type: 'paragraph', text: 'Most commercial leases specify what improvements you can make, who owns them at lease end, and whether the landlord provides a Tenant Improvement (TI) allowance. TI allowances in Edmonton typically range from $25–75/sq ft. Understand your allowance, your permitted scope, and your restoration obligations before construction starts.' },
      { type: 'list', items: ['Negotiate TI allowance before signing the lease — it is much harder after', 'Clarify which improvements are "fixtures" owned by the landlord at lease end', 'Ensure your contractor understands commercial scheduling — most work must happen without disrupting active tenants in the building', 'Build in occupancy permit timing — commercial inspections can take longer than residential'] },
      { type: 'heading', text: 'Acoustics Are Often Overlooked' },
      { type: 'paragraph', text: 'Open-plan offices are notorious for noise problems that kill focused work. Sound masking systems, acoustic ceiling tiles, carpet in collaboration areas, and strategic use of glass vs. solid partitions all need to be considered in the design phase. Retrofitting acoustics after the fact is expensive and usually inadequate.' },
      { type: 'quote', text: 'The best office fit-outs are designed from the inside out — starting with how people work and ending with how it looks.', attribution: 'Aarth Construction' },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const categories = [...new Set(blogPosts.map((p) => p.category))];
