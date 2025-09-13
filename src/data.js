import image01 from "./images/categories/category-2.jpg"
import image02 from "./images/categories/category-3.jpg"
import image03 from "./images/categories/category-4.jpg"
import image04 from "./images/categories/category-5.jpg"

//PRODUCTS***

import product1 from "./images/products/product-1.jpg"
import product2 from "./images/products/product-2.jpg"
import product3 from "./images/products/product-3.jpg"
import product4 from "./images/products/product-4.jpg"
import product5 from "./images/products/product-5.jpg"
import product6 from "./images/products/product-6.jpg"
import product7 from "./images/products/product-7.jpg"
import product8 from "./images/products/product-8.jpg"

export const pageLinks = [
    { id: 1, href: '/', text: 'Home' },
    { id: 2, href: '/woman', text: "woman's" },
    { id: 3, href: '/men', text: "men's" },
    { id: 4, href: '/shop', text: 'shop' },
    { id: 5, href: '/pages', text: 'pages' },
    { id: 6, href: '/Blog', text: 'Blog' },
    { id: 7, href: '/Contact', text: 'Contact' },
  ];

  export const Category =[
    {
        id: 1,
        name: "Men's fashion",
        item: "358 items",
        href: "SHOP NOW",
        img: image01,
    },
    {
        id: 2,
        name: "Kid's fashion",
        item: "273 items",
        href: "SHOP NOW",
        img: image02,
    },
    {
        id: 3,
        name: "Cosmetics",
        item: "159 items",
        href:"SHOP NOW",
        img: image03,
    },
    {
        id: 1,
        name: "Accessories",
        item: "792 items",
        href:"SHOP NOW",
        img: image04,
    },
  ]

 export const products = [
    {
      id: 1,
      name: "Buttons tweed blazer",
      price: 59.0,
      image: product1,
      tag: "NEW",
      rating: 5,
    },
    {
      id: 2,
      name: "Flowy striped skirt",
      price: 49.0,
      image: product2,
      tag: "",
      rating: 5,
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      price: 59.0,
      image: product3,
      tag: "OUT OF STOCK",
      rating: 5,
    },
    {
      id: 4,
      name: "Slim striped pocket shirt",
      price: 59.0,
      image: product4,
      tag: "",
      rating: 5,
    },
    {
      id: 5,
      name: "Fit micro corduroy shirt",
      price: 59.0,
      image: product5,
      tag: "",
      rating: 5,
    },
    {
      id: 6,
      name: "Tropical Kimono",
      price: 49.0,
      image: product6,
      tag: "SALE",
      rating: 5,
    },
    {
      id: 7,
      name: "Contrasting sunglasses",
      price: 59.0,
      image: product7,
      tag: "",
      rating: 5,
    },
    {
      id: 8,
      name: "Water resistant backpack",
      price: 49.0,
      image: product8,
      tag: "SALE",
      rating: 5,
    },
  ];

  import h1 from "./images/trends/ht-1.jpg"
  import h2 from "./images/trends/ht-2.jpg"
  import h3 from "./images/trends/ht-3.jpg"
  import b1 from "./images/trends/bs-1.jpg"
  import b2 from "./images/trends/bs-2.jpg"
  import b3 from "./images/trends/bs-3.jpg"
  import f1 from "./images/trends/f-1.jpg"
  import f2 from "./images/trends/f-2.jpg"
  import f3 from "./images/trends/f-3.jpg"

  export const sections = [
    {
      title: "HOT TREND",
      products: [
        { name: "Chain bucket bag", price: 59.0, rating: 5, image: h1 },
        { name: "Pendant earrings", price: 59.0, rating: 5, image: h2 },
        { name: "Cotton T-Shirt", price: 59.0, rating: 5, image: h3 },
      ],
    },
    {
      title: "BEST SELLER",
      products: [
        { name: "Cotton T-Shirt", price: 59.0, rating: 5, image: b1 },
        { name: "Zip-pockets pebbled tote briefcase", price: 59.0, rating: 5, image: b2 },
        { name: "Round leather bag", price: 59.0, rating: 5, image: b3 },
      ],
    },
    {
      title: "FEATURE",
      products: [
        { name: "Bow wrap skirt", price: 59.0, rating: 5, image: f1 },
        { name: "Metallic earrings", price: 59.0, rating: 5, image: f2 },
        { name: "Flap cross-body bag", price: 59.0, rating: 5, image: f3 },
      ],
    },
  ];

  export const projects = [
    {
      id: 1,
      name:"The Chloe Collection",
      title: "The Project Jacket",
      href: "Show Now",
    },
    {
      id: 2,
      name:"Chloe Collection",
      title: "The Project Jacket",
      href: "Show Now",
    },
    {
      id: 3,
      name:"Chloe Collection",
      title: "The Project Jacket",
      href: "Show Now",
    },
  ]

  export const section =[
    {
      id: 1,
      title: "Free Shipping",
      name: "For all oder over $99",
      href: "fa-solid fa-car",
    },
    {
      id: 2,
      title: "Money Back Guarantee",
      name: "If good have Problems",
      href: "fa-regular fa-money-bill-1",
    },
    {
      id: 3,
      title: "Online Support 24/7",
      name: "Dedicated support",
      href: "fa-solid fa-life-ring",
    },
    {
      id: 4,
      title: "Payment Secure",
      name: "100% secure payment",
      href: "fa-solid fa-headphones-simple",
    },
  ]

 

  // export const footer =[
  //   {
  //         image: pay1,
  //         image: pay2 ,
  //         image: pay3 ,
  //         image: pay4 ,
  //         image: pay5 ,
  //   },
  //   {
  //     title: "Quick Links",
  //     link :[
  //       {id: 1, href:"#", name:"My Account"},
  //       {id: 2, href:"#", name:"Orders Tracking"},
  //       {id: 3, href:"#", name:"Checkout"},
  //       {id: 4, href:"#", name:"Wishlist"},
  //     ],
  //   },
  // ]