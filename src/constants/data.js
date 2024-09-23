import demoPerson1 from '../assets/demoPerson1.jpeg';
import demoPerson2 from '../assets/demoPerson2.jpeg';
import demoPerson3 from '../assets/demoPerson3.jpg';
import mobile from '../assets/mobile.svg';
import piggy from '../assets/piggy.svg';
import productImg1 from '../assets/productImg1.webp';
import productImg2 from '../assets/productImg2.webp';
import productImg3 from '../assets/productImg3.webp';
import rocket from '../assets/rocket.svg';

export const navLinks = [
  { id: 1, name: 'Catalog', href: '#catalog' },
  {
    id: 2,
    name: 'How it works',
    href: '#how-it-works',
    dropdown: [
      { id: 21, name: 'How Printify works', href: '#how-printify-works' },
      { id: 22, name: 'Print on Demand', href: '#print-on-demand' },
      { id: 23, name: 'Print Quality Promise', href: '#print-quality-promise' },
      { id: 24, name: 'What it sell?', href: '#what-it-sell' },
    ],
  },
  { id: 3, name: 'Pricing', href: '#pricing' },
  { id: 4, name: 'Blog', href: '#blog' },
  {
    id: 5,
    name: 'Services',
    href: '#services',
    dropdown: [
      { id: 51, name: 'Printify Studio', href: '#printify-studio' },
      {
        id: 52,
        name: 'Printify Express Delivery',
        href: '#printify-express-delivery',
      },
      { id: 53, name: 'Transfer Products', href: '#transfer-products' },
      { id: 54, name: 'Order In Bulk', href: '#order-in-bulk' },
      { id: 55, name: 'Express Program', href: '#express-program' },
    ],
  },
  {
    id: 6,
    name: 'Use Cases',
    href: '#usecases',
    dropdown: [
      { id: 61, name: 'Merch for Fans', href: '#merch-for-fans' },
      { id: 62, name: 'Merch for eCommerce', href: '#merch-for-ecommerce' },
      { id: 63, name: 'Merch for Enterprises', href: '#merch-for-enterprises' },
      { id: 64, name: 'Grow Your Store', href: '#grow-your-store' },
    ],
  },
  {
    id: 7,
    name: 'Need Help?',
    href: '#need-help',
    dropdown: [
      { id: 71, name: 'Help Center', href: '#help-center' },
      { id: 72, name: 'Contacts', href: '#contacts' },
      { id: 73, name: 'My Requests', href: '#my-requests' },
    ],
  },
];

export const aboutUs = [
  {
    id: 1,
    imageUrl: piggy,
    title: 'Higher Profits',
    desc: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.',
  },
  {
    id: 2,
    imageUrl: rocket,
    title: 'Robust Scaling',
    desc: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.',
  },
  {
    id: 3,
    imageUrl: mobile,
    title: 'Best Selection',
    desc: 'With 900+ products and top quality brands, you can choose the best products for your business..',
  },
];

export const products = [
  {
    id: 1,
    image: productImg1,
    title: 'CREATE',
    desc: 'custom products',
    subText:
      'Easily add your designs to a wide range of products using our free tools',
  },
  {
    id: 2,
    image: productImg2,
    title: 'SELL',
    desc: 'on your terms',
    subText: 'You choose the products,sale price,and where to sell',
  },
  {
    id: 3,
    image: productImg3,
    title: 'WE HANDLE',
    desc: 'fulfillment',
    subText:
      'Once an order is placed, we automatically handle all the printing and delivery logistics',
  },
];

export const customerReviews = [
  {
    id: 1,
    img: demoPerson3,
    name: 'Demo User. 1',
    storeLink: 'Store link',
    star: '⭐⭐⭐⭐⭐',
    review:
      ' Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ',
  },
  {
    id: 2,
    img: demoPerson2,
    name: 'Demo User. 2',
    storeLink: 'Store link',
    star: '⭐⭐⭐⭐⭐',
    review:
      ' Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ',
  },
  {
    id: 3,
    img: demoPerson1,
    name: 'Demo User. 3',
    storeLink: 'Store link',
    star: '⭐⭐⭐⭐⭐',
    review:
      ' Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ',
  },
  {
    id: 4,
    img: demoPerson1,
    name: 'Demo User. 4',
    storeLink: 'Store link',
    star: '⭐⭐⭐⭐⭐',
    review:
      ' Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ',
  },
  {
    id: 5,
    img: demoPerson1,
    name: 'Demo User. 5',
    storeLink: 'Store link',
    star: '⭐⭐⭐⭐⭐',
    review:
      ' Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ',
  },
];

export const footerData = [
  {
    category: 'Integrations',
    links: [
      'Shopify',
      'Etsy',
      'eBay',
      'Amazon',
      'TikTok Shop',
      'PrestaShop',
      'BigCommerce',
      'Wix',
      'WooCommerce',
      'Squarespace',
      'Printify API',
      'Printify Pop-Up Store',
      'Shutterstock',
    ],
  },
  {
    category: 'Discover',
    links: [
      'Blog',
      'Guides',
      'Products',
      'Etsy print-on-demand',
      'Shopify print-on-demand',
      'Woocommerce print-on-demand',
      'Wix print-on-demand',
      'Squarespace print-on-demand',
      'Make Your Own Shirt',
      'Brands',
      'Pricing',
      'Shipping Rates',
      'Mockup Generator',
    ],
  },
  {
    category: 'Start selling',
    links: [
      'Custom T-shirts',
      'Custom Hoodies',
      'Custom Mugs',
      'Custom Socks',
      'Custom Backpacks',
      'Custom Branding',
      'Sell on Etsy',
      'Sell on Social Media',
      'Free T-shirt Designs',
      'Custom Products',
      'Custom All-Over-Print Hoodies',
      'Start a Clothing Line',
      'Start POD Business',
      'Bulk Orders',
      'Transferring To Printify',
    ],
  },
  {
    category: 'Printify',
    links: [
      'Print on Demand',
      'Print Providers',
      'Experts Program',
      'Printify Express Delivery',
      'Become a Partner',
      'About',
      'Printify Quality Promise',
      'Jobs',
      'Webinars',
      'Printing Profits Podcast',
      'Contact Us',
      'Affiliate',
      'Contact Sales',
      'POD Glossary',
      'Network Fulfillment Status',
      'Merchant Protection',
      'Security',
      'Sitemap',
    ],
  },
];
