// DARKMODE DECODE terminology data. Edit records here; no build step required.
window.DECODE_DATA = {
  "version": 3,
  "categories": [
    "Marketing & Strategy",
    "Advertising & Media",
    "Brand & Graphic Design",
    "Web & Digital Products",
    "Content & Communications",
    "Photo, Video & Audio",
    "Print & Packaging",
    "Apparel & Textiles",
    "Technology & Data",
    "Business & Operations"
  ],
  "terms": [
    {
      "id": "cms",
      "term": "CMS",
      "expansion": "Content Management System",
      "categories": [
        3,
        4,
        8
      ],
      "definition": "Software for creating, organizing, and publishing digital content.",
      "keywords": "website editing website editor publishing",
      "example": "A team updates a website page through its CMS without editing the page code.",
      "related": [
        "Headless CMS",
        "DAM",
        "CRM"
      ],
      "confusion": "A CMS manages content; a CRM manages customer relationships."
    },
    {
      "id": "crm",
      "term": "CRM",
      "expansion": "Customer Relationship Management",
      "categories": [
        0,
        8,
        9
      ],
      "definition": "The practices and software used to organize customer relationships, interactions, and sales opportunities.",
      "keywords": "contacts sales pipeline customers",
      "example": "A salesperson records a follow-up call and the next action for a lead.",
      "related": [
        "CMS",
        "Lead generation"
      ],
      "confusion": ""
    },
    {
      "id": "dam",
      "term": "DAM",
      "expansion": "Digital Asset Management",
      "categories": [
        2,
        4,
        8
      ],
      "definition": "A system for organizing, finding, and controlling access to digital assets such as photos, logos, and video.",
      "keywords": "asset library files media",
      "example": "A designer retrieves the approved logo from a shared asset library.",
      "related": [
        "CMS",
        "Brand guidelines"
      ],
      "confusion": ""
    },
    {
      "id": "headless-cms",
      "term": "Headless CMS",
      "expansion": "",
      "categories": [
        3,
        4,
        8
      ],
      "definition": "A content management system that delivers content through an API, independently of the presentation layer.",
      "keywords": "content backend",
      "example": "One content entry can supply a website and a mobile app.",
      "related": [
        "CMS",
        "API"
      ],
      "confusion": ""
    },
    {
      "id": "seo",
      "term": "SEO",
      "expansion": "Search Engine Optimization",
      "categories": [
        0,
        3,
        4
      ],
      "definition": "Improving a website and its content to help search engines understand it and people discover it through unpaid search.",
      "keywords": "organic search google ranking",
      "example": "A team improves page titles and useful content for relevant searches.",
      "related": [
        "SEM",
        "SERP"
      ],
      "confusion": ""
    },
    {
      "id": "sem",
      "term": "SEM",
      "expansion": "Search Engine Marketing",
      "categories": [
        0,
        1
      ],
      "definition": "Marketing through search engines; commonly used to mean paid search advertising.",
      "keywords": "paid search google ads",
      "example": "A retailer buys search ads for product-related queries.",
      "related": [
        "SEO",
        "PPC"
      ],
      "confusion": "Some teams use SEM as an umbrella for both paid and organic search. Confirm the intended scope."
    },
    {
      "id": "ppc",
      "term": "PPC",
      "expansion": "Pay Per Click",
      "categories": [
        1
      ],
      "definition": "An advertising pricing model in which the advertiser pays for each click.",
      "keywords": "paid advertising search ads",
      "example": "A search campaign charges when someone clicks the ad.",
      "related": [
        "CPC",
        "CPM"
      ],
      "confusion": ""
    },
    {
      "id": "cpc",
      "term": "CPC",
      "expansion": "Cost Per Click",
      "categories": [
        1
      ],
      "definition": "Advertising spend divided by the number of clicks received.",
      "keywords": "ad cost metric",
      "example": "A campaign spends $100 for 50 clicks, giving a CPC of $2.",
      "related": [
        "PPC",
        "CPM"
      ],
      "confusion": ""
    },
    {
      "id": "cpm",
      "term": "CPM",
      "expansion": "Cost Per Mille",
      "categories": [
        1
      ],
      "definition": "The cost of one thousand advertising impressions.",
      "keywords": "thousand impressions ad cost",
      "example": "A $10 CPM means $10 per 1,000 impressions.",
      "related": [
        "Impression",
        "CPC"
      ],
      "confusion": ""
    },
    {
      "id": "ctr",
      "term": "CTR",
      "expansion": "Click-Through Rate",
      "categories": [
        1,
        4
      ],
      "definition": "Clicks divided by impressions, usually expressed as a percentage.",
      "keywords": "click rate engagement",
      "example": "An ad with 20 clicks from 1,000 impressions has a 2% CTR.",
      "related": [
        "Impression",
        "CPC"
      ],
      "confusion": ""
    },
    {
      "id": "cpa",
      "term": "CPA",
      "expansion": "Cost Per Acquisition / Action",
      "categories": [
        1,
        0
      ],
      "definition": "Advertising spend divided by the number of specified acquisitions or actions.",
      "keywords": "conversion cost",
      "example": "Define whether the measured action is a purchase, lead, or another conversion.",
      "related": [
        "Conversion",
        "CPL"
      ],
      "confusion": "CPA is only meaningful when the counted action is clearly defined."
    },
    {
      "id": "cpl",
      "term": "CPL",
      "expansion": "Cost Per Lead",
      "categories": [
        1,
        0
      ],
      "definition": "Marketing or advertising spend divided by the number of leads generated.",
      "keywords": "lead cost",
      "example": "A campaign spends $300 and generates 10 leads for a $30 CPL.",
      "related": [
        "Lead generation",
        "CPA"
      ],
      "confusion": ""
    },
    {
      "id": "roas",
      "term": "ROAS",
      "expansion": "Return on Ad Spend",
      "categories": [
        1,
        0
      ],
      "definition": "Revenue attributed to advertising divided by advertising spend.",
      "keywords": "ad revenue performance",
      "example": "$4,000 in attributed revenue from $1,000 in ads gives a 4:1 ROAS.",
      "related": [
        "ROI",
        "Attribution"
      ],
      "confusion": "ROAS measures attributed revenue against ad spend, not profit."
    },
    {
      "id": "roi",
      "term": "ROI",
      "expansion": "Return on Investment",
      "categories": [
        0,
        9
      ],
      "definition": "Net gain from an investment divided by its cost, often expressed as a percentage.",
      "keywords": "profit performance",
      "example": "A project evaluation compares the gain after relevant costs with the investment.",
      "related": [
        "ROAS"
      ],
      "confusion": ""
    },
    {
      "id": "kpi",
      "term": "KPI",
      "expansion": "Key Performance Indicator",
      "categories": [
        0,
        8,
        9
      ],
      "definition": "A selected measure used to track progress toward an important objective.",
      "keywords": "goals metrics reporting",
      "example": "A lead-generation team tracks qualified leads as a KPI.",
      "related": [
        "Conversion",
        "OKR"
      ],
      "confusion": ""
    },
    {
      "id": "okr",
      "term": "OKR",
      "expansion": "Objectives and Key Results",
      "categories": [
        0,
        9
      ],
      "definition": "A goal-setting method pairing a qualitative objective with measurable results.",
      "keywords": "goals planning",
      "example": "An objective to improve onboarding includes a measurable completion-rate target.",
      "related": [
        "KPI"
      ],
      "confusion": ""
    },
    {
      "id": "cta",
      "term": "CTA",
      "expansion": "Call to Action",
      "categories": [
        1,
        3,
        4
      ],
      "definition": "A prompt that asks someone to take a specific next step.",
      "keywords": "button action click",
      "example": "A landing page uses “Schedule a visit” as its main CTA.",
      "related": [
        "Landing page",
        "Conversion"
      ],
      "confusion": ""
    },
    {
      "id": "landing-page",
      "term": "Landing page",
      "expansion": "",
      "categories": [
        1,
        3
      ],
      "definition": "A page built for a particular audience, campaign, or action.",
      "keywords": "campaign destination",
      "example": "An ad links to a focused page with a relevant offer and form.",
      "related": [
        "CTA",
        "Conversion"
      ],
      "confusion": ""
    },
    {
      "id": "conversion",
      "term": "Conversion",
      "expansion": "",
      "categories": [
        0,
        1,
        3
      ],
      "definition": "A completed action that a business has defined as valuable.",
      "keywords": "goal purchase form submission",
      "example": "A submitted appointment request is counted as a conversion.",
      "related": [
        "Conversion rate",
        "Attribution"
      ],
      "confusion": ""
    },
    {
      "id": "conversion-rate",
      "term": "Conversion rate",
      "expansion": "",
      "categories": [
        0,
        1,
        3
      ],
      "definition": "Conversions divided by the chosen base, such as visits or clicks, expressed as a percentage.",
      "keywords": "cvr performance",
      "example": "Five purchases from 100 visits produce a 5% visit-to-purchase rate.",
      "related": [
        "Conversion",
        "A/B testing"
      ],
      "confusion": ""
    },
    {
      "id": "impression",
      "term": "Impression",
      "expansion": "",
      "categories": [
        1,
        4
      ],
      "definition": "One recorded display of an advertisement or piece of content under the platform's measurement rules.",
      "keywords": "ad views exposure",
      "example": "The same person may generate several impressions.",
      "related": [
        "Reach",
        "CPM"
      ],
      "confusion": "An impression does not necessarily mean someone noticed the content."
    },
    {
      "id": "reach",
      "term": "Reach",
      "expansion": "",
      "categories": [
        1,
        4
      ],
      "definition": "The number of distinct people or accounts exposed to content in a defined period.",
      "keywords": "unique audience",
      "example": "A campaign can have greater impressions than reach because of repeat exposure.",
      "related": [
        "Impression",
        "Frequency"
      ],
      "confusion": ""
    },
    {
      "id": "frequency",
      "term": "Frequency",
      "expansion": "",
      "categories": [
        1
      ],
      "definition": "The average number of impressions per reached person or account.",
      "keywords": "repetition exposure",
      "example": "6,000 impressions across 2,000 reached accounts gives an average frequency of 3.",
      "related": [
        "Reach",
        "Impression"
      ],
      "confusion": ""
    },
    {
      "id": "attribution",
      "term": "Attribution",
      "expansion": "",
      "categories": [
        0,
        1,
        8
      ],
      "definition": "Assigning credit for a conversion to marketing interactions using a chosen model.",
      "keywords": "conversion credit tracking",
      "example": "A last-click model gives credit to the last eligible click before a purchase.",
      "related": [
        "ROAS",
        "Conversion"
      ],
      "confusion": ""
    },
    {
      "id": "retargeting",
      "term": "Retargeting",
      "expansion": "",
      "categories": [
        0,
        1
      ],
      "definition": "Advertising to an audience based on prior interactions with a brand or property.",
      "keywords": "remarketing previous visitors",
      "example": "A campaign reaches people who previously visited a product page.",
      "related": [
        "Audience segmentation"
      ],
      "confusion": ""
    },
    {
      "id": "a-b-testing",
      "term": "A/B testing",
      "expansion": "",
      "categories": [
        0,
        1,
        3
      ],
      "definition": "Comparing two variants with allocated audiences to measure a defined outcome.",
      "keywords": "split testing experiment",
      "example": "A team compares two headlines while keeping the rest of the page consistent.",
      "related": [
        "Conversion rate"
      ],
      "confusion": ""
    },
    {
      "id": "audience-segmentation",
      "term": "Audience segmentation",
      "expansion": "",
      "categories": [
        0,
        1
      ],
      "definition": "Dividing an audience into groups with shared characteristics or needs.",
      "keywords": "target audience segments",
      "example": "A campaign uses different messages for new buyers and returning customers.",
      "related": [
        "Persona",
        "Positioning"
      ],
      "confusion": ""
    },
    {
      "id": "persona",
      "term": "Persona",
      "expansion": "",
      "categories": [
        0,
        3
      ],
      "definition": "A research-informed representation of a user or customer type.",
      "keywords": "buyer profile ideal customer",
      "example": "A persona summarizes a typical buyer's goals, needs, and barriers.",
      "related": [
        "Audience segmentation",
        "UX"
      ],
      "confusion": ""
    },
    {
      "id": "positioning",
      "term": "Positioning",
      "expansion": "",
      "categories": [
        0,
        2
      ],
      "definition": "How a brand or offering is intended to be understood relative to alternatives.",
      "keywords": "market differentiation",
      "example": "A brand positions its service around speed and expert support.",
      "related": [
        "Value proposition",
        "Brand strategy"
      ],
      "confusion": ""
    },
    {
      "id": "value-proposition",
      "term": "Value proposition",
      "expansion": "",
      "categories": [
        0,
        2
      ],
      "definition": "A clear statement of the benefit an offering provides and why it matters to a customer.",
      "keywords": "benefit promise",
      "example": "A service explains how it saves a busy team time each week.",
      "related": [
        "Positioning"
      ],
      "confusion": ""
    },
    {
      "id": "brand-strategy",
      "term": "Brand strategy",
      "expansion": "",
      "categories": [
        0,
        2
      ],
      "definition": "A plan defining a brand's role, audience, positioning, and consistent expression.",
      "keywords": "brand planning",
      "example": "A strategy guides identity, messaging, and customer experience.",
      "related": [
        "Positioning",
        "Brand identity"
      ],
      "confusion": ""
    },
    {
      "id": "brand-identity",
      "term": "Brand identity",
      "expansion": "",
      "categories": [
        0,
        2
      ],
      "definition": "The coordinated visual and verbal elements that identify and express a brand.",
      "keywords": "logo colors typography identity",
      "example": "A company uses a consistent logo, palette, typography, and voice.",
      "related": [
        "Brand guidelines",
        "Brand voice"
      ],
      "confusion": ""
    },
    {
      "id": "brand-guidelines",
      "term": "Brand guidelines",
      "expansion": "",
      "categories": [
        2,
        4
      ],
      "definition": "Documented rules for using a brand's visual and verbal identity.",
      "keywords": "brand standards style guide",
      "example": "Guidelines define logo clear space, approved colors, and writing tone.",
      "related": [
        "Brand identity",
        "Clear space"
      ],
      "confusion": ""
    },
    {
      "id": "brand-voice",
      "term": "Brand voice",
      "expansion": "",
      "categories": [
        2,
        4
      ],
      "definition": "The consistent personality and manner of expression in a brand's language.",
      "keywords": "copy tone writing",
      "example": "A brand maintains a direct, approachable voice across its website and emails.",
      "related": [
        "Tone",
        "Brand identity"
      ],
      "confusion": ""
    },
    {
      "id": "tone",
      "term": "Tone",
      "expansion": "",
      "categories": [
        4,
        2
      ],
      "definition": "The attitude or emotional quality of communication in a particular context.",
      "keywords": "writing mood",
      "example": "A service apology uses a more serious tone than a launch announcement.",
      "related": [
        "Brand voice"
      ],
      "confusion": ""
    },
    {
      "id": "creative-brief",
      "term": "Creative brief",
      "expansion": "",
      "categories": [
        0,
        2,
        9
      ],
      "definition": "A document aligning a team on the problem, audience, message, deliverables, and constraints.",
      "keywords": "project instructions",
      "example": "A brief states who an ad targets and what it should achieve.",
      "related": [
        "SOW",
        "Deliverable"
      ],
      "confusion": ""
    },
    {
      "id": "lead-generation",
      "term": "Lead generation",
      "expansion": "",
      "categories": [
        0,
        1
      ],
      "definition": "Activities that attract and capture interest from potential customers.",
      "keywords": "prospects inquiries",
      "example": "A campaign invites interested buyers to request a consultation.",
      "related": [
        "CRM",
        "CPL"
      ],
      "confusion": ""
    },
    {
      "id": "funnel",
      "term": "Funnel",
      "expansion": "",
      "categories": [
        0,
        1
      ],
      "definition": "A model of stages people may move through from awareness to a desired action.",
      "keywords": "customer journey awareness purchase",
      "example": "A team plans different content for awareness and consideration.",
      "related": [
        "Customer journey"
      ],
      "confusion": ""
    },
    {
      "id": "customer-journey",
      "term": "Customer journey",
      "expansion": "",
      "categories": [
        0,
        3
      ],
      "definition": "The interactions and experiences a customer has while pursuing a goal with a brand.",
      "keywords": "touchpoints experience",
      "example": "A journey map includes discovery, comparison, purchase, and support.",
      "related": [
        "Touchpoint",
        "UX"
      ],
      "confusion": ""
    },
    {
      "id": "touchpoint",
      "term": "Touchpoint",
      "expansion": "",
      "categories": [
        0,
        3
      ],
      "definition": "An interaction between a person and a brand or product.",
      "keywords": "interaction contact",
      "example": "A search result, store visit, and support email are different touchpoints.",
      "related": [
        "Customer journey"
      ],
      "confusion": ""
    },
    {
      "id": "usp",
      "term": "USP",
      "expansion": "Unique Selling Proposition",
      "categories": [
        0,
        2
      ],
      "definition": "A distinct, relevant reason offered for choosing a product or service.",
      "keywords": "differentiation unique benefit",
      "example": "An offering emphasizes a capability its audience cannot easily get elsewhere.",
      "related": [
        "Value proposition"
      ],
      "confusion": ""
    },
    {
      "id": "icp",
      "term": "ICP",
      "expansion": "Ideal Customer Profile",
      "categories": [
        0,
        9
      ],
      "definition": "A description of the customer or organization best suited to an offering.",
      "keywords": "ideal client fit",
      "example": "An agency defines its best-fit clients by needs, budget, and team capacity.",
      "related": [
        "Persona"
      ],
      "confusion": ""
    },
    {
      "id": "b2b",
      "term": "B2B",
      "expansion": "Business to Business",
      "categories": [
        0,
        9
      ],
      "definition": "Commerce or services sold from one business to another.",
      "keywords": "business customers",
      "example": "An agency sells a creative service to a retailer.",
      "related": [
        "B2C"
      ],
      "confusion": ""
    },
    {
      "id": "b2c",
      "term": "B2C",
      "expansion": "Business to Consumer",
      "categories": [
        0,
        9
      ],
      "definition": "Commerce or services sold by a business to individual consumers.",
      "keywords": "consumer customers",
      "example": "An apparel brand sells shirts directly to shoppers.",
      "related": [
        "B2B",
        "DTC"
      ],
      "confusion": ""
    },
    {
      "id": "dtc",
      "term": "DTC",
      "expansion": "Direct to Consumer",
      "categories": [
        0,
        7,
        9
      ],
      "definition": "A model where a brand sells to consumers without a traditional retail intermediary.",
      "keywords": "direct sales ecommerce",
      "example": "A clothing brand sells its products through its own online store.",
      "related": [
        "B2C"
      ],
      "confusion": ""
    },
    {
      "id": "media-buying",
      "term": "Media buying",
      "expansion": "",
      "categories": [
        1
      ],
      "definition": "Purchasing advertising placements or inventory to reach an audience.",
      "keywords": "ad placement spending",
      "example": "A media buyer selects placements, negotiates rates, and allocates spend.",
      "related": [
        "Media plan",
        "Programmatic advertising"
      ],
      "confusion": ""
    },
    {
      "id": "media-plan",
      "term": "Media plan",
      "expansion": "",
      "categories": [
        0,
        1
      ],
      "definition": "A plan for advertising channels, audience, timing, budget, and measurement.",
      "keywords": "campaign schedule channels",
      "example": "A launch plan splits spend across search, video, and display.",
      "related": [
        "Media buying"
      ],
      "confusion": ""
    },
    {
      "id": "programmatic-advertising",
      "term": "Programmatic advertising",
      "expansion": "",
      "categories": [
        1,
        8
      ],
      "definition": "Automated buying and selling of advertising inventory through software systems.",
      "keywords": "automated media display",
      "example": "A buying platform bids for eligible ad inventory using campaign rules.",
      "related": [
        "DSP"
      ],
      "confusion": ""
    },
    {
      "id": "dsp",
      "term": "DSP",
      "expansion": "Demand-Side Platform",
      "categories": [
        1,
        8
      ],
      "definition": "Software advertisers use to buy digital ad inventory from multiple sources.",
      "keywords": "programmatic buying",
      "example": "A media team manages programmatic bids and audiences in a DSP.",
      "related": [
        "Programmatic advertising"
      ],
      "confusion": ""
    },
    {
      "id": "native-advertising",
      "term": "Native advertising",
      "expansion": "",
      "categories": [
        1,
        4
      ],
      "definition": "Paid content designed to fit the format and experience of its placement.",
      "keywords": "sponsored content",
      "example": "A sponsored article uses the publication's editorial format with an advertising disclosure.",
      "related": [
        "Advertorial"
      ],
      "confusion": ""
    },
    {
      "id": "advertorial",
      "term": "Advertorial",
      "expansion": "",
      "categories": [
        1,
        4
      ],
      "definition": "An advertisement presented in an editorial-style format.",
      "keywords": "sponsored article",
      "example": "A paid feature explains a product through an article-style layout.",
      "related": [
        "Native advertising"
      ],
      "confusion": ""
    },
    {
      "id": "organic-content",
      "term": "Organic content",
      "expansion": "",
      "categories": [
        0,
        4
      ],
      "definition": "Content distributed without paying for its specific placement.",
      "keywords": "unpaid social posts",
      "example": "A business posts an update to its social profile without boosting it.",
      "related": [
        "Paid media"
      ],
      "confusion": ""
    },
    {
      "id": "paid-media",
      "term": "Paid media",
      "expansion": "",
      "categories": [
        1
      ],
      "definition": "Exposure purchased through advertising or sponsored placements.",
      "keywords": "advertising promotion",
      "example": "A brand pays to promote a video to a selected audience.",
      "related": [
        "Earned media",
        "Owned media"
      ],
      "confusion": ""
    },
    {
      "id": "earned-media",
      "term": "Earned media",
      "expansion": "",
      "categories": [
        0,
        4
      ],
      "definition": "Exposure gained through independent coverage, recommendations, or sharing.",
      "keywords": "press coverage publicity",
      "example": "A publication independently features a new product.",
      "related": [
        "Paid media",
        "Owned media"
      ],
      "confusion": ""
    },
    {
      "id": "owned-media",
      "term": "Owned media",
      "expansion": "",
      "categories": [
        0,
        4
      ],
      "definition": "Communication channels a brand controls, such as its website or email list.",
      "keywords": "brand channels",
      "example": "A company publishes an article on its own website.",
      "related": [
        "Paid media",
        "Earned media"
      ],
      "confusion": ""
    },
    {
      "id": "serp",
      "term": "SERP",
      "expansion": "Search Engine Results Page",
      "categories": [
        1,
        3,
        4
      ],
      "definition": "The page of results a search engine presents in response to a query.",
      "keywords": "google search results",
      "example": "A search results page may include ads and organic listings.",
      "related": [
        "SEO",
        "SEM"
      ],
      "confusion": ""
    },
    {
      "id": "utm",
      "term": "UTM",
      "expansion": "Urchin Tracking Module",
      "categories": [
        1,
        8
      ],
      "definition": "A convention for URL parameters used to label campaign traffic in analytics.",
      "keywords": "tracking links campaign source",
      "example": "A tagged link identifies a newsletter as the traffic source.",
      "related": [
        "Attribution",
        "Analytics"
      ],
      "confusion": ""
    },
    {
      "id": "typography",
      "term": "Typography",
      "expansion": "",
      "categories": [
        2,
        3,
        6
      ],
      "definition": "The selection and arrangement of type to make written language readable and expressive.",
      "keywords": "fonts text typesetting",
      "example": "A designer chooses type sizes, spacing, and hierarchy for a page.",
      "related": [
        "Typeface",
        "Kerning",
        "Leading"
      ],
      "confusion": ""
    },
    {
      "id": "typeface",
      "term": "Typeface",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "A family of letterform designs with a shared visual character.",
      "keywords": "font family lettering",
      "example": "A brand chooses a typeface for headlines and body copy.",
      "related": [
        "Font",
        "Typography"
      ],
      "confusion": ""
    },
    {
      "id": "font",
      "term": "Font",
      "expansion": "",
      "categories": [
        2,
        3,
        6
      ],
      "definition": "A particular implementation or style of a typeface, often delivered as a digital file.",
      "keywords": "type lettering",
      "example": "A designer selects a bold font for a headline.",
      "related": [
        "Typeface"
      ],
      "confusion": ""
    },
    {
      "id": "kerning",
      "term": "Kerning",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "Adjusting the spacing between particular pairs of characters.",
      "keywords": "letter spacing pairs",
      "example": "A designer adjusts the gap between A and V in a wordmark.",
      "related": [
        "Tracking",
        "Typography"
      ],
      "confusion": ""
    },
    {
      "id": "tracking",
      "term": "Tracking",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "Adjusting spacing across a range of characters.",
      "keywords": "letter spacing typography",
      "example": "A short uppercase label uses slightly wider tracking.",
      "related": [
        "Kerning",
        "Leading"
      ],
      "confusion": ""
    },
    {
      "id": "leading",
      "term": "Leading",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "The vertical distance between baselines of successive lines of text.",
      "keywords": "line spacing line height",
      "example": "Increasing leading can make a long paragraph easier to read.",
      "related": [
        "Typography",
        "Tracking"
      ],
      "confusion": ""
    },
    {
      "id": "hierarchy",
      "term": "Hierarchy",
      "expansion": "",
      "categories": [
        2,
        3,
        6
      ],
      "definition": "An arrangement that signals the relative importance of information.",
      "keywords": "visual order emphasis",
      "example": "A headline is more prominent than supporting text.",
      "related": [
        "Typography",
        "Contrast"
      ],
      "confusion": ""
    },
    {
      "id": "grid",
      "term": "Grid",
      "expansion": "",
      "categories": [
        2,
        3,
        6
      ],
      "definition": "A framework of columns, rows, or guides used to organize a layout.",
      "keywords": "layout alignment columns",
      "example": "A page uses a consistent column grid to align text and imagery.",
      "related": [
        "Whitespace"
      ],
      "confusion": ""
    },
    {
      "id": "whitespace",
      "term": "Whitespace",
      "expansion": "",
      "categories": [
        2,
        3,
        6
      ],
      "definition": "Unoccupied space around and between design elements, regardless of its color.",
      "keywords": "negative space breathing room",
      "example": "Space around a logo separates it from surrounding content.",
      "related": [
        "Clear space",
        "Grid"
      ],
      "confusion": ""
    },
    {
      "id": "clear-space",
      "term": "Clear space",
      "expansion": "",
      "categories": [
        2
      ],
      "definition": "The minimum area around a logo that must remain free of competing elements.",
      "keywords": "logo spacing exclusion zone",
      "example": "A brand guide uses the logo's height to define its clear space.",
      "related": [
        "Brand guidelines"
      ],
      "confusion": ""
    },
    {
      "id": "contrast",
      "term": "Contrast",
      "expansion": "",
      "categories": [
        2,
        3
      ],
      "definition": "The degree of difference between elements, such as light and dark colors.",
      "keywords": "readability difference",
      "example": "Light text on a dark background can create strong contrast.",
      "related": [
        "Accessibility",
        "Hierarchy"
      ],
      "confusion": ""
    },
    {
      "id": "vector",
      "term": "Vector",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "Artwork described by paths and mathematical shapes that can scale without pixelation.",
      "keywords": "scalable paths logo",
      "example": "A vector logo can be resized for a business card or a large sign.",
      "related": [
        "Raster",
        "Resolution"
      ],
      "confusion": ""
    },
    {
      "id": "raster",
      "term": "Raster",
      "expansion": "",
      "categories": [
        2,
        5,
        6
      ],
      "definition": "An image made from a fixed grid of pixels.",
      "keywords": "bitmap pixels photo",
      "example": "A photograph is a raster image and can lose sharpness when enlarged.",
      "related": [
        "Vector",
        "Resolution"
      ],
      "confusion": ""
    },
    {
      "id": "rgb",
      "term": "RGB",
      "expansion": "Red Green Blue",
      "categories": [
        2,
        3,
        5
      ],
      "definition": "An additive color model used by screens and other light-emitting devices.",
      "keywords": "screen color digital",
      "example": "A web graphic is prepared in RGB color.",
      "related": [
        "CMYK",
        "Color space"
      ],
      "confusion": ""
    },
    {
      "id": "cmyk",
      "term": "CMYK",
      "expansion": "Cyan Magenta Yellow Key",
      "categories": [
        2,
        6
      ],
      "definition": "A subtractive process-color model used in many printing workflows; key usually refers to black.",
      "keywords": "print ink four color",
      "example": "A printer requests artwork prepared for its CMYK production process.",
      "related": [
        "RGB",
        "Spot color"
      ],
      "confusion": ""
    },
    {
      "id": "hex",
      "term": "HEX",
      "expansion": "Hexadecimal Color Code",
      "categories": [
        2,
        3
      ],
      "definition": "A base-16 representation of color values; six-digit web codes represent red, green, and blue channels.",
      "keywords": "web color code",
      "example": "The CSS color #000000 represents black.",
      "related": [
        "RGB"
      ],
      "confusion": ""
    },
    {
      "id": "color-space",
      "term": "Color space",
      "expansion": "",
      "categories": [
        2,
        5,
        6
      ],
      "definition": "A defined range and interpretation of colors within a color model.",
      "keywords": "gamut srgb adobe rgb",
      "example": "A team uses sRGB for an image intended for typical web display.",
      "related": [
        "RGB",
        "CMYK"
      ],
      "confusion": ""
    },
    {
      "id": "spot-color",
      "term": "Spot color",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "A premixed ink printed as its own separation instead of being built only from process inks.",
      "keywords": "special ink brand color",
      "example": "A packaging job uses a separate spot ink for a brand color.",
      "related": [
        "CMYK"
      ],
      "confusion": ""
    },
    {
      "id": "gradient",
      "term": "Gradient",
      "expansion": "",
      "categories": [
        2,
        3
      ],
      "definition": "A gradual transition between colors or shades.",
      "keywords": "color blend fade",
      "example": "A title transitions from bright blue to green.",
      "related": [
        "RGB"
      ],
      "confusion": ""
    },
    {
      "id": "opacity",
      "term": "Opacity",
      "expansion": "",
      "categories": [
        2,
        3,
        5
      ],
      "definition": "How fully an element blocks what is behind it.",
      "keywords": "transparency alpha",
      "example": "A partially opaque overlay allows an image to remain visible underneath.",
      "related": [
        "Compositing"
      ],
      "confusion": ""
    },
    {
      "id": "mockup",
      "term": "Mockup",
      "expansion": "",
      "categories": [
        2,
        3,
        7
      ],
      "definition": "A representation showing how a design may look in its intended context.",
      "keywords": "preview visualization",
      "example": "A shirt mockup shows the proposed artwork placement.",
      "related": [
        "Prototype"
      ],
      "confusion": ""
    },
    {
      "id": "prototype",
      "term": "Prototype",
      "expansion": "",
      "categories": [
        3,
        9
      ],
      "definition": "A preliminary model used to explore or test how a product works.",
      "keywords": "demo test model",
      "example": "A clickable interface tests search and navigation before full development.",
      "related": [
        "Wireframe",
        "Mockup"
      ],
      "confusion": ""
    },
    {
      "id": "wireframe",
      "term": "Wireframe",
      "expansion": "",
      "categories": [
        3
      ],
      "definition": "A simplified layout showing structure and functionality before detailed visual styling.",
      "keywords": "page skeleton layout",
      "example": "A wireframe establishes the position of search, navigation, and results.",
      "related": [
        "Prototype",
        "UI"
      ],
      "confusion": ""
    },
    {
      "id": "ui",
      "term": "UI",
      "expansion": "User Interface",
      "categories": [
        2,
        3,
        8
      ],
      "definition": "The controls and presentation through which people interact with a product.",
      "keywords": "buttons screens interface",
      "example": "Search fields, toolbars, and result cards are parts of an interface.",
      "related": [
        "UX",
        "Design system"
      ],
      "confusion": ""
    },
    {
      "id": "ux",
      "term": "UX",
      "expansion": "User Experience",
      "categories": [
        0,
        3
      ],
      "definition": "A person's overall experience using or interacting with a product or service.",
      "keywords": "usability experience",
      "example": "A team studies whether people can quickly find the right definition.",
      "related": [
        "UI",
        "Usability"
      ],
      "confusion": ""
    },
    {
      "id": "usability",
      "term": "Usability",
      "expansion": "",
      "categories": [
        3
      ],
      "definition": "How effectively, efficiently, and satisfactorily people can use a system for their goals.",
      "keywords": "ease of use",
      "example": "A usability session checks whether someone can complete a search without help.",
      "related": [
        "UX",
        "Accessibility"
      ],
      "confusion": ""
    },
    {
      "id": "accessibility",
      "term": "Accessibility",
      "expansion": "",
      "categories": [
        2,
        3,
        4
      ],
      "definition": "Designing and building content and products so people with disabilities can use them.",
      "keywords": "a11y inclusive screen reader keyboard",
      "example": "A dialog supports keyboard navigation and clear focus indicators.",
      "related": [
        "WCAG",
        "Alt text"
      ],
      "confusion": ""
    },
    {
      "id": "wcag",
      "term": "WCAG",
      "expansion": "Web Content Accessibility Guidelines",
      "categories": [
        3
      ],
      "definition": "A set of guidelines for making web content more accessible to people with disabilities.",
      "keywords": "a11y accessibility guidelines",
      "example": "A team evaluates keyboard interaction and text contrast against relevant criteria.",
      "related": [
        "Accessibility"
      ],
      "confusion": ""
    },
    {
      "id": "alt-text",
      "term": "Alt text",
      "expansion": "Alternative Text",
      "categories": [
        3,
        4
      ],
      "definition": "Text that communicates the meaning or purpose of an image when it cannot be seen.",
      "keywords": "image description screen reader",
      "example": "A product image has a concise description of its meaningful details.",
      "related": [
        "Accessibility"
      ],
      "confusion": ""
    },
    {
      "id": "responsive-design",
      "term": "Responsive design",
      "expansion": "",
      "categories": [
        3
      ],
      "definition": "A design approach that adapts layouts to different screen sizes and conditions.",
      "keywords": "mobile tablet desktop layout",
      "example": "Cards display in two columns on desktop and one on a phone.",
      "related": [
        "Breakpoint"
      ],
      "confusion": ""
    },
    {
      "id": "breakpoint",
      "term": "Breakpoint",
      "expansion": "",
      "categories": [
        3
      ],
      "definition": "A threshold at which responsive layout or styling rules change.",
      "keywords": "media query screen width",
      "example": "A layout changes its navigation when the available width becomes narrow.",
      "related": [
        "Responsive design"
      ],
      "confusion": ""
    },
    {
      "id": "design-system",
      "term": "Design system",
      "expansion": "",
      "categories": [
        2,
        3
      ],
      "definition": "A coordinated set of reusable components, patterns, and rules for building consistent interfaces.",
      "keywords": "component library tokens",
      "example": "Products share button patterns, spacing rules, and color tokens.",
      "related": [
        "UI",
        "Design token"
      ],
      "confusion": ""
    },
    {
      "id": "design-token",
      "term": "Design token",
      "expansion": "",
      "categories": [
        2,
        3
      ],
      "definition": "A named value representing a design decision, such as color, spacing, or typography.",
      "keywords": "theme variable",
      "example": "A shared color token updates the accent across many components.",
      "related": [
        "Design system"
      ],
      "confusion": ""
    },
    {
      "id": "html",
      "term": "HTML",
      "expansion": "HyperText Markup Language",
      "categories": [
        3,
        8
      ],
      "definition": "The markup language used to structure web content.",
      "keywords": "web structure markup",
      "example": "Headings, paragraphs, links, and forms are defined with HTML elements.",
      "related": [
        "CSS",
        "JavaScript"
      ],
      "confusion": ""
    },
    {
      "id": "css",
      "term": "CSS",
      "expansion": "Cascading Style Sheets",
      "categories": [
        2,
        3,
        8
      ],
      "definition": "A language for describing the presentation and layout of web content.",
      "keywords": "web styling styles",
      "example": "CSS controls the dark theme, spacing, and responsive card layout.",
      "related": [
        "HTML"
      ],
      "confusion": ""
    },
    {
      "id": "javascript",
      "term": "JavaScript",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "A programming language widely used to add behavior to websites and build software.",
      "keywords": "js scripting interaction",
      "example": "JavaScript filters terminology as someone types.",
      "related": [
        "HTML",
        "API"
      ],
      "confusion": ""
    },
    {
      "id": "api",
      "term": "API",
      "expansion": "Application Programming Interface",
      "categories": [
        3,
        8
      ],
      "definition": "A defined way for one software component to request data or behavior from another.",
      "keywords": "integration software connection",
      "example": "A website requests product data through an inventory API.",
      "related": [
        "Webhook",
        "JSON"
      ],
      "confusion": ""
    },
    {
      "id": "webhook",
      "term": "Webhook",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "An event-triggered message sent by one system to a configured endpoint in another.",
      "keywords": "event notification integration",
      "example": "A form service notifies another system when a submission arrives.",
      "related": [
        "API"
      ],
      "confusion": ""
    },
    {
      "id": "json",
      "term": "JSON",
      "expansion": "JavaScript Object Notation",
      "categories": [
        3,
        8
      ],
      "definition": "A text format for representing structured data with objects, arrays, and values.",
      "keywords": "data interchange",
      "example": "An API returns a list of terms as JSON.",
      "related": [
        "API"
      ],
      "confusion": ""
    },
    {
      "id": "frontend",
      "term": "Frontend",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "The part of an application users directly interact with.",
      "keywords": "client side interface",
      "example": "The browser renders the search interface and result cards.",
      "related": [
        "Backend"
      ],
      "confusion": ""
    },
    {
      "id": "backend",
      "term": "Backend",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "The server-side systems that process logic, store data, and support an application.",
      "keywords": "server side database",
      "example": "A backend checks editor permissions before saving a definition.",
      "related": [
        "Frontend",
        "Database"
      ],
      "confusion": ""
    },
    {
      "id": "database",
      "term": "Database",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "An organized collection of data managed for storage, retrieval, and updates.",
      "keywords": "data storage records",
      "example": "A terminology database stores entries and their category relationships.",
      "related": [
        "SQL"
      ],
      "confusion": ""
    },
    {
      "id": "sql",
      "term": "SQL",
      "expansion": "Structured Query Language",
      "categories": [
        3,
        8
      ],
      "definition": "A language used to query and manage data in relational databases.",
      "keywords": "database queries",
      "example": "A query retrieves all terms assigned to a category.",
      "related": [
        "Database"
      ],
      "confusion": ""
    },
    {
      "id": "dns",
      "term": "DNS",
      "expansion": "Domain Name System",
      "categories": [
        3,
        8
      ],
      "definition": "A distributed system that resolves domain names to records used to locate internet services.",
      "keywords": "domain records hosting",
      "example": "A domain's DNS records direct web traffic toward its hosting service.",
      "related": [
        "Domain",
        "Hosting"
      ],
      "confusion": ""
    },
    {
      "id": "domain",
      "term": "Domain",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "A human-readable name within the internet's domain name hierarchy.",
      "keywords": "website address url",
      "example": "darkmodeworks.com is a domain name.",
      "related": [
        "DNS",
        "Hosting"
      ],
      "confusion": ""
    },
    {
      "id": "hosting",
      "term": "Hosting",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "Providing infrastructure that makes a website or application available over a network.",
      "keywords": "web server deploy",
      "example": "A static host serves HTML, CSS, and JavaScript files.",
      "related": [
        "Domain",
        "CDN"
      ],
      "confusion": ""
    },
    {
      "id": "cdn",
      "term": "CDN",
      "expansion": "Content Delivery Network",
      "categories": [
        3,
        8
      ],
      "definition": "A distributed network that delivers content from locations nearer to users or otherwise optimizes delivery.",
      "keywords": "edge caching speed",
      "example": "Images are served from distributed caches to reduce delivery time.",
      "related": [
        "Caching"
      ],
      "confusion": ""
    },
    {
      "id": "caching",
      "term": "Caching",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "Keeping reusable copies of data or results to reduce repeated work.",
      "keywords": "cache performance",
      "example": "A browser reuses a previously downloaded stylesheet.",
      "related": [
        "CDN"
      ],
      "confusion": ""
    },
    {
      "id": "https",
      "term": "HTTPS",
      "expansion": "HyperText Transfer Protocol Secure",
      "categories": [
        3,
        8
      ],
      "definition": "HTTP communication protected using TLS encryption and server authentication.",
      "keywords": "secure website ssl tls",
      "example": "A website uses HTTPS to protect data in transit.",
      "related": [
        "TLS"
      ],
      "confusion": ""
    },
    {
      "id": "tls",
      "term": "TLS",
      "expansion": "Transport Layer Security",
      "categories": [
        3,
        8
      ],
      "definition": "A cryptographic protocol for protecting data exchanged over a network.",
      "keywords": "encryption ssl",
      "example": "HTTPS uses TLS to secure browser-to-server communication.",
      "related": [
        "HTTPS"
      ],
      "confusion": ""
    },
    {
      "id": "version-control",
      "term": "Version control",
      "expansion": "",
      "categories": [
        3,
        8,
        9
      ],
      "definition": "Tracking changes to files over time so revisions can be compared and recovered.",
      "keywords": "git revision history",
      "example": "A team records each approved change to the application's code.",
      "related": [
        "Repository"
      ],
      "confusion": ""
    },
    {
      "id": "repository",
      "term": "Repository",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "A storage location for project files and, in version-control systems, their change history.",
      "keywords": "repo git source",
      "example": "A project repository contains code and documentation.",
      "related": [
        "Version control"
      ],
      "confusion": ""
    },
    {
      "id": "copywriting",
      "term": "Copywriting",
      "expansion": "",
      "categories": [
        0,
        4
      ],
      "definition": "Writing intended to communicate a message and encourage a response.",
      "keywords": "ad copy marketing writing",
      "example": "A writer creates a clear headline and call to action.",
      "related": [
        "CTA",
        "Brand voice"
      ],
      "confusion": ""
    },
    {
      "id": "content-strategy",
      "term": "Content strategy",
      "expansion": "",
      "categories": [
        0,
        4
      ],
      "definition": "Planning the purpose, creation, delivery, and governance of content.",
      "keywords": "editorial planning",
      "example": "A team defines audience needs and which content will address them.",
      "related": [
        "Editorial calendar"
      ],
      "confusion": ""
    },
    {
      "id": "editorial-calendar",
      "term": "Editorial calendar",
      "expansion": "",
      "categories": [
        4,
        9
      ],
      "definition": "A schedule for planning, producing, reviewing, and publishing content.",
      "keywords": "content schedule social calendar",
      "example": "A calendar assigns publication dates and owners to articles.",
      "related": [
        "Content strategy"
      ],
      "confusion": ""
    },
    {
      "id": "evergreen-content",
      "term": "Evergreen content",
      "expansion": "",
      "categories": [
        4
      ],
      "definition": "Content designed to remain useful beyond a short news or campaign cycle.",
      "keywords": "lasting content timeless",
      "example": "An explanation of basic typography can be maintained over time.",
      "related": [
        "Content strategy"
      ],
      "confusion": ""
    },
    {
      "id": "metadata",
      "term": "Metadata",
      "expansion": "",
      "categories": [
        3,
        4,
        8
      ],
      "definition": "Data that describes other data or content.",
      "keywords": "file information attributes",
      "example": "An image file includes information about its creator and capture date.",
      "related": [
        "Taxonomy"
      ],
      "confusion": ""
    },
    {
      "id": "taxonomy",
      "term": "Taxonomy",
      "expansion": "",
      "categories": [
        4,
        8
      ],
      "definition": "A structured classification system for organizing information.",
      "keywords": "categories classification",
      "example": "A term belongs to both web development and content marketing categories.",
      "related": [
        "Metadata"
      ],
      "confusion": ""
    },
    {
      "id": "pr",
      "term": "PR",
      "expansion": "Public Relations",
      "categories": [
        0,
        4
      ],
      "definition": "Managing communication and relationships between an organization and its publics.",
      "keywords": "press communications publicity",
      "example": "A team coordinates media inquiries and company announcements.",
      "related": [
        "Earned media",
        "Press release"
      ],
      "confusion": ""
    },
    {
      "id": "press-release",
      "term": "Press release",
      "expansion": "",
      "categories": [
        4
      ],
      "definition": "A formal announcement distributed to news media and other audiences.",
      "keywords": "news release announcement",
      "example": "A company announces a new location with key facts and media contact details.",
      "related": [
        "PR"
      ],
      "confusion": ""
    },
    {
      "id": "proofreading",
      "term": "Proofreading",
      "expansion": "",
      "categories": [
        4,
        6
      ],
      "definition": "Checking near-final text for errors in spelling, punctuation, grammar, and presentation.",
      "keywords": "typos copy check",
      "example": "A reviewer checks the final layout before print production.",
      "related": [
        "Copy editing"
      ],
      "confusion": ""
    },
    {
      "id": "copy-editing",
      "term": "Copy editing",
      "expansion": "",
      "categories": [
        4
      ],
      "definition": "Editing text for correctness, clarity, consistency, and suitability.",
      "keywords": "editing grammar style",
      "example": "An editor improves unclear sentences and applies a style guide.",
      "related": [
        "Proofreading"
      ],
      "confusion": ""
    },
    {
      "id": "storyboard",
      "term": "Storyboard",
      "expansion": "",
      "categories": [
        4,
        5
      ],
      "definition": "A sequence of frames illustrating planned shots or actions.",
      "keywords": "video planning frames",
      "example": "A team sketches the key moments in a commercial before filming.",
      "related": [
        "Shot list"
      ],
      "confusion": ""
    },
    {
      "id": "shot-list",
      "term": "Shot list",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "A planned list of shots needed for a production.",
      "keywords": "filming checklist",
      "example": "The crew lists the product close-ups and interview angles to capture.",
      "related": [
        "Storyboard"
      ],
      "confusion": ""
    },
    {
      "id": "b-roll",
      "term": "B-roll",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Supplementary footage used alongside or over the main action or interview.",
      "keywords": "cutaway supporting footage",
      "example": "Workshop footage plays while an interview continues in audio.",
      "related": [
        "A-roll"
      ],
      "confusion": ""
    },
    {
      "id": "a-roll",
      "term": "A-roll",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "The primary footage carrying a production's main action or narrative.",
      "keywords": "interview main footage",
      "example": "The main interview forms the narrative foundation of a video.",
      "related": [
        "B-roll"
      ],
      "confusion": ""
    },
    {
      "id": "frame-rate",
      "term": "Frame rate",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "The number of image frames recorded or displayed per second.",
      "keywords": "fps frames per second",
      "example": "Footage captured at a higher frame rate can support slow-motion playback.",
      "related": [
        "Shutter speed"
      ],
      "confusion": ""
    },
    {
      "id": "shutter-speed",
      "term": "Shutter speed",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "The duration for which each exposure records light.",
      "keywords": "exposure motion blur",
      "example": "A shorter exposure reduces motion blur in a moving subject.",
      "related": [
        "Aperture",
        "ISO"
      ],
      "confusion": ""
    },
    {
      "id": "aperture",
      "term": "Aperture",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "The opening in a lens that controls light entry and influences depth of field.",
      "keywords": "f stop lens opening",
      "example": "A wider aperture can help separate a subject from a blurred background.",
      "related": [
        "Depth of field",
        "ISO"
      ],
      "confusion": ""
    },
    {
      "id": "iso",
      "term": "ISO",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "A camera setting associated with image brightness and sensitivity or signal amplification, depending on the system.",
      "keywords": "camera exposure sensitivity",
      "example": "Raising digital ISO can brighten the recorded output but may increase visible noise.",
      "related": [
        "Aperture",
        "Shutter speed"
      ],
      "confusion": ""
    },
    {
      "id": "depth-of-field",
      "term": "Depth of field",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "The range of distances in a scene that appears acceptably sharp.",
      "keywords": "focus background blur",
      "example": "A portrait uses shallow depth of field to soften the background.",
      "related": [
        "Aperture"
      ],
      "confusion": ""
    },
    {
      "id": "white-balance",
      "term": "White balance",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Adjusting color rendering so neutral subjects appear neutral under the scene's lighting.",
      "keywords": "color temperature neutral",
      "example": "A photographer corrects a warm cast from indoor lighting.",
      "related": [
        "Color grading"
      ],
      "confusion": ""
    },
    {
      "id": "color-grading",
      "term": "Color grading",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Shaping the color and tonal appearance of footage or images for a desired look.",
      "keywords": "video color look",
      "example": "A commercial uses cooler shadows for a consistent visual mood.",
      "related": [
        "Color correction"
      ],
      "confusion": ""
    },
    {
      "id": "color-correction",
      "term": "Color correction",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Adjusting color and exposure to achieve a balanced or consistent starting image.",
      "keywords": "exposure balance",
      "example": "An editor matches white balance between two camera angles.",
      "related": [
        "Color grading"
      ],
      "confusion": ""
    },
    {
      "id": "codec",
      "term": "Codec",
      "expansion": "",
      "categories": [
        5,
        8
      ],
      "definition": "A method or implementation for encoding and decoding media data.",
      "keywords": "video compression encoding",
      "example": "An editor selects a codec appropriate for delivery and playback.",
      "related": [
        "Bitrate"
      ],
      "confusion": ""
    },
    {
      "id": "bitrate",
      "term": "Bitrate",
      "expansion": "",
      "categories": [
        5,
        8
      ],
      "definition": "The amount of data processed or transmitted per unit of time.",
      "keywords": "video quality bandwidth",
      "example": "A video export uses a chosen bitrate to balance quality and file size.",
      "related": [
        "Codec"
      ],
      "confusion": ""
    },
    {
      "id": "resolution",
      "term": "Resolution",
      "expansion": "",
      "categories": [
        2,
        5,
        6
      ],
      "definition": "The pixel dimensions or level of detail represented in an image or display, depending on context.",
      "keywords": "pixels image size",
      "example": "A vertical graphic measures 1080 by 1920 pixels.",
      "related": [
        "PPI",
        "DPI"
      ],
      "confusion": ""
    },
    {
      "id": "aspect-ratio",
      "term": "Aspect ratio",
      "expansion": "",
      "categories": [
        2,
        5
      ],
      "definition": "The proportional relationship between an image's width and height.",
      "keywords": "video dimensions widescreen",
      "example": "A 9:16 video is taller than it is wide.",
      "related": [
        "Resolution"
      ],
      "confusion": ""
    },
    {
      "id": "keyframe",
      "term": "Keyframe",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "A specified value or state at a point in an animation or media timeline.",
      "keywords": "animation motion tween",
      "example": "An animator sets start and end positions for a moving title.",
      "related": [
        "Easing"
      ],
      "confusion": ""
    },
    {
      "id": "easing",
      "term": "Easing",
      "expansion": "",
      "categories": [
        3,
        5
      ],
      "definition": "Changing the rate of an animation over time.",
      "keywords": "animation acceleration motion",
      "example": "A panel slows down as it settles into its final position.",
      "related": [
        "Keyframe"
      ],
      "confusion": ""
    },
    {
      "id": "compositing",
      "term": "Compositing",
      "expansion": "",
      "categories": [
        2,
        5
      ],
      "definition": "Combining visual elements into a single image or sequence.",
      "keywords": "layers vfx composite",
      "example": "An editor places a title and lighting effect over footage.",
      "related": [
        "Chroma key",
        "Opacity"
      ],
      "confusion": ""
    },
    {
      "id": "chroma-key",
      "term": "Chroma key",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Removing or replacing image areas based on a selected color.",
      "keywords": "green screen blue screen",
      "example": "A subject filmed against green is composited into another scene.",
      "related": [
        "Compositing"
      ],
      "confusion": ""
    },
    {
      "id": "foley",
      "term": "Foley",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Sound effects performed and recorded to match on-screen actions.",
      "keywords": "footsteps sound effects",
      "example": "An artist records footsteps in sync with a character walking.",
      "related": [
        "Sound design"
      ],
      "confusion": ""
    },
    {
      "id": "sound-design",
      "term": "Sound design",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Creating and arranging sound to support the experience or narrative.",
      "keywords": "audio effects sonic",
      "example": "A title reveal combines subtle impacts and atmospheric sound.",
      "related": [
        "Foley",
        "Mixing"
      ],
      "confusion": ""
    },
    {
      "id": "mixing",
      "term": "Mixing",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Balancing and processing audio elements into a coherent output.",
      "keywords": "audio balance",
      "example": "Dialogue, music, and effects are adjusted so speech stays intelligible.",
      "related": [
        "Mastering"
      ],
      "confusion": ""
    },
    {
      "id": "mastering",
      "term": "Mastering",
      "expansion": "",
      "categories": [
        5
      ],
      "definition": "Preparing a final audio mix for its intended release and playback requirements.",
      "keywords": "final audio delivery",
      "example": "An engineer checks the final mix's consistency and delivery specifications.",
      "related": [
        "Mixing"
      ],
      "confusion": ""
    },
    {
      "id": "bleed",
      "term": "Bleed",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "Artwork extending beyond the final trim edge to avoid unprinted slivers after cutting.",
      "keywords": "print edge trim",
      "example": "A background image extends past the cut line by the printer's specified amount.",
      "related": [
        "Trim size",
        "Safe area"
      ],
      "confusion": ""
    },
    {
      "id": "trim-size",
      "term": "Trim size",
      "expansion": "",
      "categories": [
        6
      ],
      "definition": "The finished dimensions of a printed piece after cutting.",
      "keywords": "final print size",
      "example": "A program ad is designed for its specified final width and height.",
      "related": [
        "Bleed"
      ],
      "confusion": ""
    },
    {
      "id": "safe-area",
      "term": "Safe area",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "An inset region intended to keep important content away from trim edges or other cropping risks.",
      "keywords": "safe margin text placement",
      "example": "Essential text sits inside the printer's recommended safe area.",
      "related": [
        "Bleed",
        "Trim size"
      ],
      "confusion": ""
    },
    {
      "id": "dpi",
      "term": "DPI",
      "expansion": "Dots Per Inch",
      "categories": [
        2,
        6
      ],
      "definition": "A measure of a printer's or output device's dot density.",
      "keywords": "print resolution",
      "example": "A printer's dot resolution describes its output marks, not an image's pixel count.",
      "related": [
        "PPI",
        "Resolution"
      ],
      "confusion": ""
    },
    {
      "id": "ppi",
      "term": "PPI",
      "expansion": "Pixels Per Inch",
      "categories": [
        2,
        5,
        6
      ],
      "definition": "The number of image or display pixels per inch at a particular size.",
      "keywords": "image pixel density",
      "example": "A 3,000-pixel-wide image placed at 10 inches has 300 PPI.",
      "related": [
        "DPI",
        "Resolution"
      ],
      "confusion": ""
    },
    {
      "id": "prepress",
      "term": "Prepress",
      "expansion": "",
      "categories": [
        6
      ],
      "definition": "Preparing and checking artwork for the printing process.",
      "keywords": "print preparation production",
      "example": "A prepress check reviews dimensions, separations, fonts, and image quality.",
      "related": [
        "Preflight",
        "Proof"
      ],
      "confusion": ""
    },
    {
      "id": "preflight",
      "term": "Preflight",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "Checking a production file for technical problems before output.",
      "keywords": "file validation print check",
      "example": "A preflight flags missing fonts or images below the required resolution.",
      "related": [
        "Prepress"
      ],
      "confusion": ""
    },
    {
      "id": "proof",
      "term": "Proof",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "A review copy used to check content, layout, or color before final production.",
      "keywords": "approval sample print",
      "example": "A client reviews a proof before authorizing a print run.",
      "related": [
        "Prepress"
      ],
      "confusion": ""
    },
    {
      "id": "offset-printing",
      "term": "Offset printing",
      "expansion": "",
      "categories": [
        6
      ],
      "definition": "A printing process transferring an inked image from a plate to a blanket and then onto a substrate.",
      "keywords": "lithography print run",
      "example": "A commercial printer uses offset equipment for a brochure run.",
      "related": [
        "Digital printing"
      ],
      "confusion": ""
    },
    {
      "id": "digital-printing",
      "term": "Digital printing",
      "expansion": "",
      "categories": [
        6
      ],
      "definition": "Printing directly from digital data without conventional offset plates.",
      "keywords": "short run variable printing",
      "example": "A shop prints a small run of personalized cards.",
      "related": [
        "Offset printing",
        "Variable data printing"
      ],
      "confusion": ""
    },
    {
      "id": "variable-data-printing",
      "term": "Variable data printing",
      "expansion": "",
      "categories": [
        6
      ],
      "definition": "Digital printing in which content changes between individual pieces.",
      "keywords": "personalized print",
      "example": "Each mailer prints a different recipient name and offer code.",
      "related": [
        "Digital printing"
      ],
      "confusion": ""
    },
    {
      "id": "die-cutting",
      "term": "Die cutting",
      "expansion": "",
      "categories": [
        6,
        7
      ],
      "definition": "Cutting material into a defined shape with tooling or equivalent cutting processes.",
      "keywords": "custom shape packaging",
      "example": "A carton is cut to its specified outline before folding.",
      "related": [
        "Dieline"
      ],
      "confusion": ""
    },
    {
      "id": "dieline",
      "term": "Dieline",
      "expansion": "",
      "categories": [
        2,
        6
      ],
      "definition": "A production template showing cut, fold, and other structural boundaries.",
      "keywords": "packaging template cut lines",
      "example": "A designer places graphics on the supplied carton dieline.",
      "related": [
        "Die cutting"
      ],
      "confusion": ""
    },
    {
      "id": "embossing",
      "term": "Embossing",
      "expansion": "",
      "categories": [
        6,
        7
      ],
      "definition": "Creating a raised relief in a material's surface.",
      "keywords": "raised finish texture",
      "example": "A paper cover features a raised logo.",
      "related": [
        "Debossing",
        "Foil stamping"
      ],
      "confusion": ""
    },
    {
      "id": "debossing",
      "term": "Debossing",
      "expansion": "",
      "categories": [
        6,
        7
      ],
      "definition": "Creating a recessed impression in a material's surface.",
      "keywords": "pressed finish indentation",
      "example": "A logo is pressed into a cover below the surrounding surface.",
      "related": [
        "Embossing"
      ],
      "confusion": ""
    },
    {
      "id": "foil-stamping",
      "term": "Foil stamping",
      "expansion": "",
      "categories": [
        6
      ],
      "definition": "Applying a foil layer to selected areas, commonly using heat and pressure.",
      "keywords": "metallic finish gold foil",
      "example": "A package uses metallic foil on its brand name.",
      "related": [
        "Embossing"
      ],
      "confusion": ""
    },
    {
      "id": "lamination",
      "term": "Lamination",
      "expansion": "",
      "categories": [
        6
      ],
      "definition": "Bonding a thin protective or decorative film to a surface.",
      "keywords": "protective film finish",
      "example": "A printed cover receives a matte film finish.",
      "related": [
        "Substrate"
      ],
      "confusion": ""
    },
    {
      "id": "substrate",
      "term": "Substrate",
      "expansion": "",
      "categories": [
        6,
        7
      ],
      "definition": "The base material on which printing, coating, or another process is applied.",
      "keywords": "material paper fabric",
      "example": "Paperboard is the substrate for a printed carton.",
      "related": [
        "Screen printing"
      ],
      "confusion": ""
    },
    {
      "id": "gsm",
      "term": "GSM",
      "expansion": "Grams per Square Metre",
      "categories": [
        6,
        7
      ],
      "definition": "A measure of material mass per unit area, commonly used for paper and fabrics.",
      "keywords": "fabric weight paper weight textile",
      "example": "A fabric specification lists 180 GSM to describe its mass per square metre.",
      "related": [
        "Substrate",
        "Tech pack"
      ],
      "confusion": "GSM measures mass per area, not thickness or quality on its own."
    },
    {
      "id": "gsm-technology",
      "term": "GSM",
      "expansion": "Global System for Mobile Communications",
      "categories": [
        8
      ],
      "definition": "A family of standards for second-generation digital cellular communication.",
      "keywords": "cellular mobile network telecom",
      "example": "A technology document uses GSM to refer to a cellular system.",
      "related": [
        "API"
      ],
      "confusion": "In textile and print contexts, GSM usually means grams per square metre."
    },
    {
      "id": "tech-pack",
      "term": "Tech pack",
      "expansion": "",
      "categories": [
        7,
        9
      ],
      "definition": "A production specification package describing how a garment or product should be made.",
      "keywords": "apparel specification manufacturing",
      "example": "A tech pack includes measurements, materials, construction details, and artwork placement.",
      "related": [
        "BOM",
        "Grading"
      ],
      "confusion": ""
    },
    {
      "id": "bom",
      "term": "BOM",
      "expansion": "Bill of Materials",
      "categories": [
        7,
        8,
        9
      ],
      "definition": "A structured list of materials, components, and quantities required to make a product.",
      "keywords": "parts components materials list",
      "example": "A garment BOM lists fabric, thread, labels, and fasteners.",
      "related": [
        "Tech pack"
      ],
      "confusion": ""
    },
    {
      "id": "grading",
      "term": "Grading",
      "expansion": "",
      "categories": [
        7
      ],
      "definition": "Adjusting a base garment pattern to produce a range of sizes.",
      "keywords": "apparel sizing pattern sizes",
      "example": "A pattern is graded from the approved base size into additional sizes.",
      "related": [
        "Tech pack"
      ],
      "confusion": ""
    },
    {
      "id": "seam-allowance",
      "term": "Seam allowance",
      "expansion": "",
      "categories": [
        7
      ],
      "definition": "The material between a stitching line and the cut edge.",
      "keywords": "sewing construction",
      "example": "A pattern includes extra fabric at the edges for seams.",
      "related": [
        "Tech pack"
      ],
      "confusion": ""
    },
    {
      "id": "warp",
      "term": "Warp",
      "expansion": "",
      "categories": [
        7
      ],
      "definition": "The lengthwise yarns in a woven fabric.",
      "keywords": "weaving lengthwise threads",
      "example": "Warp yarns are held under tension during weaving.",
      "related": [
        "Weft"
      ],
      "confusion": ""
    },
    {
      "id": "weft",
      "term": "Weft",
      "expansion": "",
      "categories": [
        7
      ],
      "definition": "The yarns that run across the warp in a woven fabric.",
      "keywords": "weaving crosswise threads",
      "example": "Weft yarns pass across the fabric during weaving.",
      "related": [
        "Warp"
      ],
      "confusion": ""
    },
    {
      "id": "knit",
      "term": "Knit",
      "expansion": "",
      "categories": [
        7
      ],
      "definition": "A fabric construction made by interlooping yarn.",
      "keywords": "knitted jersey loops",
      "example": "A jersey T-shirt uses a knit fabric structure.",
      "related": [
        "Woven"
      ],
      "confusion": ""
    },
    {
      "id": "woven",
      "term": "Woven",
      "expansion": "",
      "categories": [
        7
      ],
      "definition": "A fabric construction made by interlacing warp and weft yarns.",
      "keywords": "weave fabric construction",
      "example": "A button-up shirt may use a woven fabric.",
      "related": [
        "Knit",
        "Warp",
        "Weft"
      ],
      "confusion": ""
    },
    {
      "id": "screen-printing",
      "term": "Screen printing",
      "expansion": "",
      "categories": [
        6,
        7
      ],
      "definition": "Applying ink through open areas of a stencil carried on a mesh screen.",
      "keywords": "silkscreen t shirt decoration",
      "example": "A shop prints a graphic onto shirts using separate screens for selected colors.",
      "related": [
        "DTG",
        "Substrate"
      ],
      "confusion": ""
    },
    {
      "id": "dtg",
      "term": "DTG",
      "expansion": "Direct to Garment",
      "categories": [
        7
      ],
      "definition": "Inkjet printing applied directly to a garment using a suitable production process.",
      "keywords": "shirt printing digital textile",
      "example": "A shop prints a detailed illustration directly onto a cotton shirt.",
      "related": [
        "DTF",
        "Screen printing"
      ],
      "confusion": ""
    },
    {
      "id": "dtf",
      "term": "DTF",
      "expansion": "Direct to Film",
      "categories": [
        7
      ],
      "definition": "A decoration process that prints a design onto film for later transfer to fabric.",
      "keywords": "heat transfer apparel",
      "example": "A printed transfer is heat-applied to a garment.",
      "related": [
        "DTG"
      ],
      "confusion": ""
    },
    {
      "id": "sublimation",
      "term": "Sublimation",
      "expansion": "",
      "categories": [
        6,
        7
      ],
      "definition": "A process using heat to transfer sublimation dyes into suitable coated or polyester-based materials.",
      "keywords": "dye sublimation heat print",
      "example": "A polyester sports jersey receives an all-over printed design.",
      "related": [
        "DTF"
      ],
      "confusion": ""
    },
    {
      "id": "embroidery",
      "term": "Embroidery",
      "expansion": "",
      "categories": [
        7
      ],
      "definition": "Decorating material with stitched thread.",
      "keywords": "stitched logo garment",
      "example": "A company logo is stitched onto a polo shirt.",
      "related": [
        "Digitizing"
      ],
      "confusion": ""
    },
    {
      "id": "digitizing",
      "term": "Digitizing",
      "expansion": "",
      "categories": [
        7
      ],
      "definition": "Converting artwork into stitch instructions for an embroidery machine.",
      "keywords": "embroidery file stitches",
      "example": "A specialist determines stitch paths and densities for a logo.",
      "related": [
        "Embroidery"
      ],
      "confusion": ""
    },
    {
      "id": "moq",
      "term": "MOQ",
      "expansion": "Minimum Order Quantity",
      "categories": [
        6,
        7,
        9
      ],
      "definition": "The smallest quantity a supplier accepts for an order or production run.",
      "keywords": "minimum production order",
      "example": "A supplier requires an order of at least a specified number of units.",
      "related": [
        "Lead time"
      ],
      "confusion": ""
    },
    {
      "id": "lead-time",
      "term": "Lead time",
      "expansion": "",
      "categories": [
        6,
        7,
        9
      ],
      "definition": "The elapsed time between a defined starting event and completion or delivery.",
      "keywords": "production turnaround schedule",
      "example": "A supplier quotes production time from artwork approval to dispatch.",
      "related": [
        "MOQ"
      ],
      "confusion": ""
    },
    {
      "id": "ai",
      "term": "AI",
      "expansion": "Artificial Intelligence",
      "categories": [
        8
      ],
      "definition": "A broad field of systems designed to perform tasks associated with capabilities such as learning, perception, or reasoning.",
      "keywords": "machine intelligence",
      "example": "A tool classifies images or drafts text from instructions.",
      "related": [
        "Generative AI",
        "Machine learning"
      ],
      "confusion": ""
    },
    {
      "id": "machine-learning",
      "term": "Machine learning",
      "expansion": "",
      "categories": [
        8
      ],
      "definition": "Methods that learn patterns from data to perform tasks rather than relying only on explicitly programmed rules.",
      "keywords": "ml models training",
      "example": "A model learns patterns from labeled examples to classify new items.",
      "related": [
        "AI"
      ],
      "confusion": ""
    },
    {
      "id": "generative-ai",
      "term": "Generative AI",
      "expansion": "",
      "categories": [
        4,
        8
      ],
      "definition": "AI systems that produce content such as text, images, audio, or code based on learned patterns and input.",
      "keywords": "generate content ai creation",
      "example": "A creative team uses a model to explore initial copy ideas.",
      "related": [
        "AI",
        "LLM"
      ],
      "confusion": ""
    },
    {
      "id": "llm",
      "term": "LLM",
      "expansion": "Large Language Model",
      "categories": [
        4,
        8
      ],
      "definition": "A model trained on large amounts of language-related data to process and generate text and related representations.",
      "keywords": "language model text ai",
      "example": "An assistant uses a language model to draft or summarize text.",
      "related": [
        "Generative AI",
        "Prompt"
      ],
      "confusion": ""
    },
    {
      "id": "prompt",
      "term": "Prompt",
      "expansion": "",
      "categories": [
        4,
        8
      ],
      "definition": "Input that instructs or provides context to an AI system.",
      "keywords": "ai instructions query",
      "example": "A prompt specifies audience, goal, and constraints for a draft.",
      "related": [
        "LLM"
      ],
      "confusion": ""
    },
    {
      "id": "analytics",
      "term": "Analytics",
      "expansion": "",
      "categories": [
        0,
        8
      ],
      "definition": "Examining data to understand activity, patterns, or outcomes.",
      "keywords": "reporting data analysis",
      "example": "A team studies which campaigns generate qualified inquiries.",
      "related": [
        "KPI",
        "Attribution"
      ],
      "confusion": ""
    },
    {
      "id": "saas",
      "term": "SaaS",
      "expansion": "Software as a Service",
      "categories": [
        8,
        9
      ],
      "definition": "Software delivered as an online service managed by a provider.",
      "keywords": "cloud subscription software",
      "example": "A team accesses project-management software through a browser subscription.",
      "related": [
        "API"
      ],
      "confusion": ""
    },
    {
      "id": "sso",
      "term": "SSO",
      "expansion": "Single Sign-On",
      "categories": [
        8
      ],
      "definition": "A sign-in arrangement allowing one authenticated identity session to access multiple services.",
      "keywords": "login identity authentication",
      "example": "An employee signs into several work tools through the organization's identity provider.",
      "related": [
        "Authentication",
        "Authorization"
      ],
      "confusion": ""
    },
    {
      "id": "authentication",
      "term": "Authentication",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "Verifying a claimed identity.",
      "keywords": "sign in identity login",
      "example": "A user signs in through an identity provider.",
      "related": [
        "Authorization",
        "SSO"
      ],
      "confusion": ""
    },
    {
      "id": "authorization",
      "term": "Authorization",
      "expansion": "",
      "categories": [
        3,
        8
      ],
      "definition": "Determining which actions or resources an identity is permitted to access.",
      "keywords": "permissions access control roles",
      "example": "Only approved editors can change terminology entries.",
      "related": [
        "Authentication"
      ],
      "confusion": "Signing in verifies identity; it does not automatically grant editing permission."
    },
    {
      "id": "sow",
      "term": "SOW",
      "expansion": "Statement of Work",
      "categories": [
        9
      ],
      "definition": "A document describing a project's scope, deliverables, responsibilities, and working terms.",
      "keywords": "scope project agreement",
      "example": "A project SOW lists the pages to build and the review rounds included.",
      "related": [
        "Scope",
        "Deliverable"
      ],
      "confusion": ""
    },
    {
      "id": "scope",
      "term": "Scope",
      "expansion": "",
      "categories": [
        9
      ],
      "definition": "The defined boundaries of work included in a project.",
      "keywords": "project boundaries requirements",
      "example": "The first release includes search and browsing; editing is a later phase.",
      "related": [
        "SOW",
        "Scope creep"
      ],
      "confusion": ""
    },
    {
      "id": "scope-creep",
      "term": "Scope creep",
      "expansion": "",
      "categories": [
        9
      ],
      "definition": "Uncontrolled expansion of project requirements beyond the agreed scope.",
      "keywords": "extra work changing requirements",
      "example": "New deliverables are added without adjusting budget or timing.",
      "related": [
        "Scope",
        "Change request"
      ],
      "confusion": ""
    },
    {
      "id": "change-request",
      "term": "Change request",
      "expansion": "",
      "categories": [
        9
      ],
      "definition": "A documented proposal to alter agreed requirements, scope, or other project terms.",
      "keywords": "revision request project change",
      "example": "A requested feature is assessed for cost and schedule impact before approval.",
      "related": [
        "Scope creep"
      ],
      "confusion": ""
    },
    {
      "id": "deliverable",
      "term": "Deliverable",
      "expansion": "",
      "categories": [
        9
      ],
      "definition": "A specific output a project is expected to produce.",
      "keywords": "project output asset",
      "example": "A working prototype and downloadable source package are deliverables.",
      "related": [
        "SOW"
      ],
      "confusion": ""
    },
    {
      "id": "milestone",
      "term": "Milestone",
      "expansion": "",
      "categories": [
        9
      ],
      "definition": "A significant project event or checkpoint.",
      "keywords": "project checkpoint deadline",
      "example": "Prototype approval marks a milestone before implementation continues.",
      "related": [
        "Deliverable"
      ],
      "confusion": ""
    },
    {
      "id": "sop",
      "term": "SOP",
      "expansion": "Standard Operating Procedure",
      "categories": [
        9
      ],
      "definition": "Documented instructions for performing a recurring process consistently.",
      "keywords": "process instructions workflow",
      "example": "A team follows an SOP for preparing and checking email campaigns.",
      "related": [
        "QA"
      ],
      "confusion": ""
    },
    {
      "id": "qa",
      "term": "QA",
      "expansion": "Quality Assurance",
      "categories": [
        3,
        6,
        9
      ],
      "definition": "Planned activities that help ensure processes and outputs meet defined quality requirements.",
      "keywords": "quality check testing review",
      "example": "A team uses review criteria to catch problems before release.",
      "related": [
        "SOP"
      ],
      "confusion": ""
    },
    {
      "id": "raci",
      "term": "RACI",
      "expansion": "Responsible Accountable Consulted Informed",
      "categories": [
        9
      ],
      "definition": "A framework for clarifying participation and ownership across tasks or decisions.",
      "keywords": "roles responsibilities ownership",
      "example": "A launch plan identifies who does the work and who is accountable for approval.",
      "related": [
        "SOW"
      ],
      "confusion": ""
    },
    {
      "id": "agile",
      "term": "Agile",
      "expansion": "",
      "categories": [
        3,
        9
      ],
      "definition": "An approach to work emphasizing iterative delivery, collaboration, and adaptation.",
      "keywords": "iterative development",
      "example": "A team delivers useful increments and adjusts based on feedback.",
      "related": [
        "Sprint"
      ],
      "confusion": ""
    },
    {
      "id": "sprint",
      "term": "Sprint",
      "expansion": "",
      "categories": [
        3,
        9
      ],
      "definition": "A timeboxed work cycle, particularly in Scrum, aimed at producing progress toward a defined goal.",
      "keywords": "iteration scrum cycle",
      "example": "A team plans a focused set of work for a short development cycle.",
      "related": [
        "Agile"
      ],
      "confusion": ""
    },
    {
      "id": "mvp",
      "term": "MVP",
      "expansion": "Minimum Viable Product",
      "categories": [
        3,
        9
      ],
      "definition": "The smallest product used to test a key value or business hypothesis with real users.",
      "keywords": "first release validation",
      "example": "A team launches a focused service to learn whether users find it valuable.",
      "related": [
        "Prototype"
      ],
      "confusion": "A prototype explores a design; an MVP is used to test value or business assumptions."
    }
  ]
};
