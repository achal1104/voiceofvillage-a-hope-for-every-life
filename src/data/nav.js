import { MapPin, FilePlus2, Siren, Heart, Home, HandHeart, Handshake, BookOpen, BarChart3, Info, Mail } from 'lucide-react'

// Navbar structure (GullyCrix-style): three dropdowns + one text link + one button.
export const MENUS = [
  {
    key: 'involved', label: 'Get Involved', mega: true,
    cols: [
      { title: 'For villages', items: [
        ['/villages', MapPin, 'Explore Villages', 'Villages that need your support'],
        ['/register', FilePlus2, 'Register Your Village', 'Seven steps for Gram Panchayats'],
        ['/emergency', Siren, 'Emergency Needs', 'Water, food and fodder first'],
      ] },
      { title: 'For supporters', items: [
        ['/support', Heart, 'Support a Village', 'Contribute to approved campaigns'],
        ['/adopt', Home, 'Adopt a Village', 'One village, a lasting partnership'],
        ['/volunteer', HandHeart, 'Volunteer', 'Offer your time and skills'],
      ] },
    ],
  },
  {
    key: 'resources', label: 'Resources', badge: 'NEW',
    cols: [{ title: null, items: [
      ['/ground-reality', BookOpen, 'Ground Reality', 'Stories and photographs from the field'],
      ['/impact', BarChart3, 'Our Impact', 'Impact and transparency, reported honestly'],
    ] }],
  },
  {
    key: 'company', label: 'Company',
    cols: [{ title: null, items: [
      ['/about', Info, 'About Us', 'Who we are and what we stand on'],
      ['/ngo-csr', Handshake, 'NGO & CSR', 'Partner on projects and village impact'],
      ['/contact', Mail, 'Contact', 'Get in touch'],
    ] }],
  },
]
