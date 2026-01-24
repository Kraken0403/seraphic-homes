import ahmedabadMain from "@/assets/images/hero.jpg"
import rajkotMain from "@/assets/images/rajkot.jpg"
import vadodara from "@/assets/images/vadodara.png"
import mumbaiMain from "@/assets/images/mumbai.jpg"
import puneMain from "@/assets/images/pune.jpg"
import raipurMain from "@/assets/images/chhattisgarh.jpg"
import kolkataMain from "@/assets/images/kolkota.jpg"
import jaipurMain from "@/assets/images/jaipur.jpg"
import chandigarhMain from "@/assets/images/chandigarh.jpg"
import delhiMain from "@/assets/images/delhi.jpeg"

export const stores = [
  {
    slug: "ahmedabad",
    title: "Seraphic Homes",
    city: "Ahmedabad",
    address: "Ground Floor, Eyecon House, Behind Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054, India", // from LinkedIn listing :contentReference[oaicite:0]{index=0}
    description:
      "Our Ahmedabad studio is designed as an immersive luxury experience. Explore Hästens handcrafted beds and Küche 7 stainless steel kitchens, wardrobes and vanities in an elegant setting curated for discerning homeowners. Our consultants guide you through personalised solutions that blend form, comfort, and functionality.",
    phone: "+91 9898087501",
    email: "contact@seraphichomes.in",
    mapLink:
      "https://maps.app.goo.gl/CzpNh388qcfdxzv18",
    mainImage: ahmedabadMain,
    gallery: ["/stores/img-001.webp","/stores/img-004.webp"]
  },
  
  {
    slug: "vadodara",
    title: "Seraphic Homes",
    city: "Vadodara",
    address: "2nd Floor, Divya Siddhi, Near Shoppe Natu Bhai Circle, Inox Road, Vadiwadi, Vadodara, Gujarat 390007, India", // JustDial :contentReference[oaicite:1]{index=1}
    description: "",
    phone: "+91 9898518589",
    email: "vadodara@seraphichomes.in",
    mapLink: "https://maps.app.goo.gl/yaNyqWk4BB6SmYbZ8",
    mainImage: vadodara,
    gallery: ["/stores/vd-2.png","/stores/vd-4.jpg","/stores/vadodara.png"]
  },

  {
    slug: "rajkot",
    title: "Patel Interiors Pvt. Ltd.",
    city: "Rajkot",
    address: "Opp Masoom School, Nr Windsor Avenue, Off, Kalawad Rd, Mota Mava, Rajkot, Gujarat 360005", // approximate from map query
    description:
      "The Rajkot experience centre brings refined global craftsmanship to Gujarat. Discover the artistry of Hästens beds and the innovation of Küche 7 stainless steel kitchens, wardrobes and vanities with Miele and Siemens appliances, all within a calm and thoughtfully designed environment",
    phone: "+91 9427213610",
    email: "rajkot@seraphichomes.in",
    mapLink:
      "https://maps.app.goo.gl/5qodaNBuVDRy6XiW7",
    mainImage: rajkotMain,
    gallery: ["/stores/img-001.webp","/stores/img-004.webp"]
  },

  {
    slug: "delhi",
    title: "Zeqon",
    city: "Delhi",
    address: "GF- 02, Mehrauli-Gurgaon Rd, opposite to Metro pillar no.47, New Manglapuri, Sultanpur, New Delhi, Delhi 110030", // JustDial Zeqon Buildtech listing :contentReference[oaicite:2]{index=2}
    description:
      "Zeqon’s Delhi centre offers interior and design consultations in Rohini, showcasing curated luxurious home solutions.",
    phone: "+91 9999099012",
    email: "rajkot@seraphichomes.in",
    mapLink: "https://maps.app.goo.gl/cRyc61SpYkaKS1dXA",
    mainImage: delhiMain,
    gallery: ["/stores/img-001.webp","/stores/img-004.webp"]
  },

  {
    slug: "mumbai",
    title: "Hästens Worli",
    city: "Mumbai",
    address: "165, The View, 1st Floor, 2-4 Dr Annie Besant Rd, Above Tao Art Gallery, Worli, Mumbai 400018, Maharashtra, India", // official retail address :contentReference[oaicite:3]{index=3}
    description:
      "Discover the art of sleep at Hästens Worli, Mumbai — featuring handcrafted Swedish beds made with natural materials.",
    phone: "+91 8988686868",
    email: "contact@seraphichomes.in",
    timings: "Mon - Sat · 10:00 AM - 7:00 PM",
    mapLink: "https://maps.app.goo.gl/skx8d6W1M4vFRmeaA",
    mainImage: mumbaiMain,
    gallery: []
  },

  {
    slug: "pune",
    title: "Zeqon",
    city: "Pune",
    address: "Showroom No. 02, Ground Floor, Prime Business Bay, Opp. Croma, Baner Road, Pune, Maharashtra 411045, India", // from Zeqon site :contentReference[oaicite:4]{index=4}
    description:
      "Explore durable stainless steel kitchens and living solutions at Kuche7 Pune — premium modular designs for modern homes.",
    phone: "+91 9817776776",
    email: "info@kuche7.com",
    timings: "Mon - Sat · 10:00 AM - 7:00 PM",
    mapLink: "https://maps.app.goo.gl/2EM7gcuonXEd73hq5",
    mainImage: puneMain,
    gallery: ["/stores/img-001.webp","/stores/img-004.webp","/stores/img-009.webp","/stores/img-010.webp","/stores/img-014.webp"]
  },

  {
    slug: "raipur",
    title: "Zeqon",
    city: "Raipur",
    address: "Zeqon Luxury Land, opposite to Progressive Point, Lalpur, Raipur, Tikrapara, Chhattisgarh 492015", // generic — map location shows Zeqon flagship there per brand site :contentReference[oaicite:5]{index=5}
    description:
      "Zeqon Raipur offers contemporary kitchen systems and elegant interior design solutions for modern homes.",
    phone: "91 9898087501",
    email: "contact@seraphichomes.in",
    timings: "Mon - Sat · 10:00 AM - 7:00 PM",
    mapLink: "https://maps.app.goo.gl/z7hQEtfqLU6H2LUTA",
    mainImage: raipurMain,
    gallery: ["/stores/img-001.webp","/stores/img-004.webp","/stores/img-009.webp","/stores/img-010.webp","/stores/img-014.webp"]
  },

  {
    slug: "kolkata",
    title: "Zeqon",
    city: "Kolkata",
    address: "113/G, 113/G, Matheswartala Road, Topsia, Kolkata, West Bengal 700046", // Kuche7 Kolkata showroom (Zeqon partner) :contentReference[oaicite:6]{index=6}
    description:
      "Innovative Homes Kolkata offers premium modular kitchens, furniture, and appliance solutions featuring Kuche7 and European brands.",
    phone: "+91 7604012222",
    email: "contact@seraphichomes.in",
    timings: "Mon - Sat · 10:00 AM - 7:00 PM",
    mapLink: "https://maps.app.goo.gl/pNYWsxi3NbdvrPP27",
    mainImage: kolkataMain,
    gallery: ["/stores/img-001.webp","/stores/img-004.webp","/stores/img-009.webp","/stores/img-010.webp","/stores/img-014.webp"]
  },

  {
    slug: "jaipur",
    title: "Zeqon",
    city: "Jaipur",
    address: "Apparel Park, F-110, Mahal Rd, near Bombay hospital, Jaipur, Shri Kishanpura, Rajasthan 302022", // approximate (no structured listing found)
    description:
      "Visit Kuche 7 Jaipur for premium stainless steel modular kitchens and expert design experience tailored to your home.",
    phone: "+91 9817776776",
    email: "info@kuche7.com",
    timings: "Mon - Sat · 10:00 AM - 7:00 PM",
    mapLink: "https://maps.app.goo.gl/CQGxe1pqa1PiQM136",
    mainImage: jaipurMain,
    gallery: ["/stores/img-001.webp","/stores/img-004.webp","/stores/img-009.webp","/stores/img-010.webp","/stores/img-014.webp"]
  },

  {
    slug: "chandigarh",
    title: "Zeqon",
    city: "Chandigarh",
    address: "Building No., 1243, 1st Floor, JLPL, Industrial Estate, Sector 82, JLPL Industrial Area, Mohali, Punjab 140306", // approximate (no structured listing found)
    description:
      "Kuche 7 Chandigarh brings German-grade stainless steel modular kitchens with personalized design services.",
    phone: "+91 9817776776",
    email: "info@kuche7.com",
    timings: "Mon - Sat · 10:00 AM - 7:00 PM",
    mapLink: "https://maps.app.goo.gl/d1vckmoR8y1MnkKe7",
    mainImage: chandigarhMain,
    gallery: ["/stores/img-001.webp","/stores/img-004.webp","/stores/img-009.webp","/stores/img-010.webp","/stores/img-014.webp"]
  }
];
