import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import InvoiceDetail from "./pages/InvoiceDetail";
import { useEffect, useState } from "react";

function App() {
  const [invoices, setInvoices] = useState([]);

  // const invoi = [
  //   {
  //     id: "INV-001",
  //     invoiceName: "Brand Identity Package",
  //     date: "2025-04-01",
  //     paymentTerms: "Next 30 Days",
  //     projectDescription: "Brand Identity Design",
  //     status: "paid",
  //     sender: {
  //       street: "19 Union Terrace",
  //       city: "London",
  //       postCode: "E1 6RF",
  //       country: "United Kingdom",
  //     },
  //     receiver: {
  //       name: "Apex Digital Ltd",
  //       email: "billing@apexdigital.co.uk",
  //       street: "200 King Street",
  //       city: "Manchester",
  //       postCode: "M2 4LQ",
  //       country: "United Kingdom",
  //     },
  //     items: [
  //       { id: "ITM-001-1", name: "Logo Design", quantity: 1, price: 500.0 },
  //       {
  //         id: "ITM-001-2",
  //         name: "Brand Style Guide",
  //         quantity: 1,
  //         price: 350.0,
  //       },
  //       {
  //         id: "ITM-001-3",
  //         name: "Business Card Design",
  //         quantity: 2,
  //         price: 75.0,
  //       },
  //       {
  //         id: "ITM-001-4",
  //         name: "Letterhead Design",
  //         quantity: 1,
  //         price: 100.0,
  //       },
  //     ],
  //   },
  //   {
  //     id: "INV-002",
  //     invoiceName: "E-commerce Website Build",
  //     date: "2025-04-03",
  //     paymentTerms: "Next 14 Days",
  //     projectDescription: "Web Development",
  //     status: "pending",
  //     sender: {
  //       street: "45 Accra Ring Road",
  //       city: "Accra",
  //       postCode: "GA-144",
  //       country: "Ghana",
  //     },
  //     receiver: {
  //       name: "BrightMark Agency",
  //       email: "accounts@brightmark.gh",
  //       street: "12 Cantonments Avenue",
  //       city: "Accra",
  //       postCode: "GA-023",
  //       country: "Ghana",
  //     },
  //     items: [
  //       { id: "ITM-002-1", name: "UI/UX Design", quantity: 1, price: 600.0 },
  //       {
  //         id: "ITM-002-2",
  //         name: "Frontend Development",
  //         quantity: 1,
  //         price: 900.0,
  //       },
  //       {
  //         id: "ITM-002-3",
  //         name: "Backend Development",
  //         quantity: 1,
  //         price: 1100.0,
  //       },
  //       {
  //         id: "ITM-002-4",
  //         name: "Payment Gateway Setup",
  //         quantity: 1,
  //         price: 200.0,
  //       },
  //       { id: "ITM-002-5", name: "QA & Testing", quantity: 10, price: 50.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-003",
  //     invoiceName: "Mobile App Development",
  //     date: "2025-04-05",
  //     paymentTerms: "Next 60 Days",
  //     projectDescription: "Mobile Application Development",
  //     status: "draft",
  //     sender: {
  //       street: "7 Adeola Odeku Street",
  //       city: "Lagos",
  //       postCode: "101001",
  //       country: "Nigeria",
  //     },
  //     receiver: {
  //       name: "Fintech Ventures Inc.",
  //       email: "finance@fintechventures.ng",
  //       street: "Plot 1234 Ahmadu Bello Way",
  //       city: "Abuja",
  //       postCode: "900001",
  //       country: "Nigeria",
  //     },
  //     items: [
  //       {
  //         id: "ITM-003-1",
  //         name: "iOS App Development",
  //         quantity: 1,
  //         price: 1400.0,
  //       },
  //       {
  //         id: "ITM-003-2",
  //         name: "Android App Development",
  //         quantity: 1,
  //         price: 1400.0,
  //       },
  //       { id: "ITM-003-3", name: "API Integration", quantity: 1, price: 400.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-004",
  //     invoiceName: "SEO & Content Strategy",
  //     date: "2025-04-06",
  //     paymentTerms: "Next 30 Days",
  //     projectDescription: "Search Engine Optimisation",
  //     status: "paid",
  //     sender: {
  //       street: "88 Trans Amadi Road",
  //       city: "Port Harcourt",
  //       postCode: "500001",
  //       country: "Nigeria",
  //     },
  //     receiver: {
  //       name: "GrowthPulse Media",
  //       email: "payments@growthpulse.io",
  //       street: "14 Wimpole Street",
  //       city: "London",
  //       postCode: "W1G 9SX",
  //       country: "United Kingdom",
  //     },
  //     items: [
  //       { id: "ITM-004-1", name: "SEO Audit", quantity: 1, price: 250.0 },
  //       { id: "ITM-004-2", name: "Blog Articles", quantity: 5, price: 60.5 },
  //       {
  //         id: "ITM-004-3",
  //         name: "Keyword Research Report",
  //         quantity: 1,
  //         price: 167.5,
  //       },
  //     ],
  //   },
  //   {
  //     id: "INV-005",
  //     invoiceName: "Monthly Support Retainer",
  //     date: "2025-04-07",
  //     paymentTerms: "Next 7 Days",
  //     projectDescription: "IT Support & Maintenance",
  //     status: "pending",
  //     sender: {
  //       street: "302 Maple Drive",
  //       city: "Austin",
  //       postCode: "TX 78701",
  //       country: "United States",
  //     },
  //     receiver: {
  //       name: "Stackline Solutions",
  //       email: "invoices@stacklinesolutions.com",
  //       street: "900 Congress Ave",
  //       city: "Austin",
  //       postCode: "TX 78701",
  //       country: "United States",
  //     },
  //     items: [
  //       { id: "ITM-005-1", name: "Bug Fixes", quantity: 3, price: 30.0 },
  //       {
  //         id: "ITM-005-2",
  //         name: "Performance Monitoring",
  //         quantity: 1,
  //         price: 60.0,
  //       },
  //     ],
  //   },
  //   {
  //     id: "INV-006",
  //     invoiceName: "Enterprise Cloud Setup",
  //     date: "2025-04-08",
  //     paymentTerms: "Next 45 Days",
  //     projectDescription: "Cloud Infrastructure",
  //     status: "paid",
  //     sender: {
  //       street: "22 Cyber City",
  //       city: "Gurugram",
  //       postCode: "122002",
  //       country: "India",
  //     },
  //     receiver: {
  //       name: "NovaTech Enterprises",
  //       email: "accounts@novatech.in",
  //       street: "14 Rajiv Gandhi IT Park",
  //       city: "Pune",
  //       postCode: "411014",
  //       country: "India",
  //     },
  //     items: [
  //       {
  //         id: "ITM-006-1",
  //         name: "Cloud Infrastructure Setup",
  //         quantity: 1,
  //         price: 2000.0,
  //       },
  //       {
  //         id: "ITM-006-2",
  //         name: "CI/CD Pipeline Configuration",
  //         quantity: 1,
  //         price: 1500.0,
  //       },
  //       { id: "ITM-006-3", name: "Security Audit", quantity: 1, price: 900.0 },
  //       {
  //         id: "ITM-006-4",
  //         name: "Staff Training Session",
  //         quantity: 2,
  //         price: 250.0,
  //       },
  //     ],
  //   },
  //   {
  //     id: "INV-007",
  //     invoiceName: "Photography & Editing",
  //     date: "2025-04-09",
  //     paymentTerms: "Next 14 Days",
  //     projectDescription: "Product Photography",
  //     status: "draft",
  //     sender: {
  //       street: "5 Portobello Road",
  //       city: "London",
  //       postCode: "W11 2DA",
  //       country: "United Kingdom",
  //     },
  //     receiver: {
  //       name: "Luxe Interiors Co.",
  //       email: "studio@luxeinteriors.co.uk",
  //       street: "78 Sloane Street",
  //       city: "London",
  //       postCode: "SW1X 9AT",
  //       country: "United Kingdom",
  //     },
  //     items: [
  //       {
  //         id: "ITM-007-1",
  //         name: "Product Photography (half day)",
  //         quantity: 1,
  //         price: 175.0,
  //       },
  //       {
  //         id: "ITM-007-2",
  //         name: "Photo Retouching",
  //         quantity: 10,
  //         price: 10.0,
  //       },
  //     ],
  //   },
  //   {
  //     id: "INV-008",
  //     invoiceName: "Shopify Store Build",
  //     date: "2025-04-10",
  //     paymentTerms: "Next 30 Days",
  //     projectDescription: "E-commerce Development",
  //     status: "pending",
  //     sender: {
  //       street: "33 Rue de Rivoli",
  //       city: "Paris",
  //       postCode: "75004",
  //       country: "France",
  //     },
  //     receiver: {
  //       name: "Maison Blanche Boutique",
  //       email: "comptabilite@maisonblanche.fr",
  //       street: "12 Boulevard Haussmann",
  //       city: "Paris",
  //       postCode: "75009",
  //       country: "France",
  //     },
  //     items: [
  //       {
  //         id: "ITM-008-1",
  //         name: "Shopify Store Setup",
  //         quantity: 1,
  //         price: 500.0,
  //       },
  //       {
  //         id: "ITM-008-2",
  //         name: "Product Page Design",
  //         quantity: 5,
  //         price: 80.0,
  //       },
  //       {
  //         id: "ITM-008-3",
  //         name: "Payment Gateway Integration",
  //         quantity: 1,
  //         price: 200.75,
  //       },
  //     ],
  //   },
  //   {
  //     id: "INV-009",
  //     invoiceName: "Social Media Management",
  //     date: "2025-04-11",
  //     paymentTerms: "Next 7 Days",
  //     projectDescription: "Social Media Marketing",
  //     status: "draft",
  //     sender: {
  //       street: "Plot 7 Spintex Road",
  //       city: "Accra",
  //       postCode: "GA-023",
  //       country: "Ghana",
  //     },
  //     receiver: {
  //       name: "Kente Fashion House",
  //       email: "admin@kentefashion.gh",
  //       street: "15 Oxford Street, Osu",
  //       city: "Accra",
  //       postCode: "GA-112",
  //       country: "Ghana",
  //     },
  //     items: [
  //       { id: "ITM-009-1", name: "Instagram Posts", quantity: 4, price: 12.0 },
  //       {
  //         id: "ITM-009-2",
  //         name: "Monthly Analytics Report",
  //         quantity: 1,
  //         price: 40.0,
  //       },
  //     ],
  //   },
  //   {
  //     id: "INV-010",
  //     invoiceName: "ERP System Implementation",
  //     date: "2025-04-12",
  //     paymentTerms: "Next 60 Days",
  //     projectDescription: "Enterprise Resource Planning",
  //     status: "paid",
  //     sender: {
  //       street: "Unter den Linden 21",
  //       city: "Berlin",
  //       postCode: "10117",
  //       country: "Germany",
  //     },
  //     receiver: {
  //       name: "Schmidt Manufacturing GmbH",
  //       email: "rechnungen@schmidt-mfg.de",
  //       street: "Industriestraße 44",
  //       city: "Munich",
  //       postCode: "80807",
  //       country: "Germany",
  //     },
  //     items: [
  //       {
  //         id: "ITM-010-1",
  //         name: "ERP Licensing (annual)",
  //         quantity: 1,
  //         price: 3000.0,
  //       },
  //       {
  //         id: "ITM-010-2",
  //         name: "Custom Module Development",
  //         quantity: 2,
  //         price: 1200.0,
  //       },
  //       { id: "ITM-010-3", name: "Data Migration", quantity: 1, price: 750.0 },
  //       {
  //         id: "ITM-010-4",
  //         name: "On-site Training",
  //         quantity: 3,
  //         price: 166.67,
  //       },
  //     ],
  //   },
  //   {
  //     id: "INV-011",
  //     invoiceName: "IT Consulting Services",
  //     date: "2025-04-14",
  //     paymentTerms: "Next 30 Days",
  //     projectDescription: "IT Consulting",
  //     status: "pending",
  //     sender: {
  //       street: "24 Bourdillon Road",
  //       city: "Lagos",
  //       postCode: "101233",
  //       country: "Nigeria",
  //     },
  //     receiver: {
  //       name: "Crestview Holdings",
  //       email: "finance@crestviewholdings.ng",
  //       street: "3 Idowu Taylor Street",
  //       city: "Lagos",
  //       postCode: "101001",
  //       country: "Nigeria",
  //     },
  //     items: [
  //       {
  //         id: "ITM-011-1",
  //         name: "Network Assessment",
  //         quantity: 1,
  //         price: 150.0,
  //       },
  //       {
  //         id: "ITM-011-2",
  //         name: "IT Roadmap Consultation",
  //         quantity: 1,
  //         price: 180.0,
  //       },
  //       { id: "ITM-011-3", name: "Written Report", quantity: 1, price: 60.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-012",
  //     invoiceName: "Brand Identity Design",
  //     date: "2025-04-15",
  //     paymentTerms: "Next 45 Days",
  //     projectDescription: "Graphic Design",
  //     status: "draft",
  //     sender: {
  //       street: "101 Rue Saint-Catherine",
  //       city: "Montréal",
  //       postCode: "H2X 1Z6",
  //       country: "Canada",
  //     },
  //     receiver: {
  //       name: "Lumière Cosmetics Inc.",
  //       email: "ap@lumierecosmetics.ca",
  //       street: "55 Wellington Street",
  //       city: "Toronto",
  //       postCode: "M5V 3A6",
  //       country: "Canada",
  //     },
  //     items: [
  //       {
  //         id: "ITM-012-1",
  //         name: "Brand Strategy Workshop",
  //         quantity: 1,
  //         price: 800.0,
  //       },
  //       {
  //         id: "ITM-012-2",
  //         name: "Logo & Visual Identity",
  //         quantity: 1,
  //         price: 950.0,
  //       },
  //       {
  //         id: "ITM-012-3",
  //         name: "Packaging Design",
  //         quantity: 3,
  //         price: 250.0,
  //       },
  //       {
  //         id: "ITM-012-4",
  //         name: "Brand Guidelines Document",
  //         quantity: 1,
  //         price: 250.0,
  //       },
  //     ],
  //   },
  // ];

  // localStorage.setItem("invoices", JSON.stringify(invoi));

  // const invoic = [
  //   {
  //     id: "INV-001",
  //     invoiceName: "Brand Identity Package",
  //     date: "2025-04-01",
  //     paymentTerms: "Net 30",
  //     projectDescription: "Brand Identity Design",
  //     status: "paid",
  //     sender: {
  //       street: "19 Union Terrace",
  //       city: "London",
  //       postCode: "E1 6RF",
  //       country: "United Kingdom",
  //     },
  //     receiver: {
  //       name: "Apex Digital Ltd",
  //       email: "billing@apexdigital.co.uk",
  //       street: "200 King Street",
  //       city: "Manchester",
  //       postCode: "M2 4LQ",
  //       country: "United Kingdom",
  //     },
  //     items: [
  //       { name: "Logo Design", quantity: 1, price: 500.0 },
  //       { name: "Brand Style Guide", quantity: 1, price: 350.0 },
  //       { name: "Business Card Design", quantity: 2, price: 75.0 },
  //       { name: "Letterhead Design", quantity: 1, price: 100.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-002",
  //     invoiceName: "E-commerce Website Build",
  //     date: "2025-04-03",
  //     paymentTerms: "Net 14",
  //     projectDescription: "Web Development",
  //     status: "pending",
  //     sender: {
  //       street: "45 Accra Ring Road",
  //       city: "Accra",
  //       postCode: "GA-144",
  //       country: "Ghana",
  //     },
  //     receiver: {
  //       name: "BrightMark Agency",
  //       email: "accounts@brightmark.gh",
  //       street: "12 Cantonments Avenue",
  //       city: "Accra",
  //       postCode: "GA-023",
  //       country: "Ghana",
  //     },
  //     items: [
  //       { name: "UI/UX Design", quantity: 1, price: 600.0 },
  //       { name: "Frontend Development", quantity: 1, price: 900.0 },
  //       { name: "Backend Development", quantity: 1, price: 1100.0 },
  //       { name: "Payment Gateway Setup", quantity: 1, price: 200.0 },
  //       { name: "QA & Testing", quantity: 10, price: 50.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-003",
  //     invoiceName: "Mobile App Development",
  //     date: "2025-04-05",
  //     paymentTerms: "Net 60",
  //     projectDescription: "Mobile Application Development",
  //     status: "draft",
  //     sender: {
  //       street: "7 Adeola Odeku Street",
  //       city: "Lagos",
  //       postCode: "101001",
  //       country: "Nigeria",
  //     },
  //     receiver: {
  //       name: "Fintech Ventures Inc.",
  //       email: "finance@fintechventures.ng",
  //       street: "Plot 1234 Ahmadu Bello Way",
  //       city: "Abuja",
  //       postCode: "900001",
  //       country: "Nigeria",
  //     },
  //     items: [
  //       { name: "iOS App Development", quantity: 1, price: 1400.0 },
  //       { name: "Android App Development", quantity: 1, price: 1400.0 },
  //       { name: "API Integration", quantity: 1, price: 400.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-004",
  //     invoiceName: "SEO & Content Strategy",
  //     date: "2025-04-06",
  //     paymentTerms: "Net 30",
  //     projectDescription: "Search Engine Optimisation",
  //     status: "paid",
  //     sender: {
  //       street: "88 Trans Amadi Road",
  //       city: "Port Harcourt",
  //       postCode: "500001",
  //       country: "Nigeria",
  //     },
  //     receiver: {
  //       name: "GrowthPulse Media",
  //       email: "payments@growthpulse.io",
  //       street: "14 Wimpole Street",
  //       city: "London",
  //       postCode: "W1G 9SX",
  //       country: "United Kingdom",
  //     },
  //     items: [
  //       { name: "SEO Audit", quantity: 1, price: 250.0 },
  //       { name: "Blog Articles", quantity: 5, price: 60.5 },
  //       { name: "Keyword Research Report", quantity: 1, price: 167.5 },
  //     ],
  //   },
  //   {
  //     id: "INV-005",
  //     invoiceName: "Monthly Support Retainer",
  //     date: "2025-04-07",
  //     paymentTerms: "Net 7",
  //     projectDescription: "IT Support & Maintenance",
  //     status: "pending",
  //     sender: {
  //       street: "302 Maple Drive",
  //       city: "Austin",
  //       postCode: "TX 78701",
  //       country: "United States",
  //     },
  //     receiver: {
  //       name: "Stackline Solutions",
  //       email: "invoices@stacklinesolutions.com",
  //       street: "900 Congress Ave",
  //       city: "Austin",
  //       postCode: "TX 78701",
  //       country: "United States",
  //     },
  //     items: [
  //       { name: "Bug Fixes", quantity: 3, price: 30.0 },
  //       { name: "Performance Monitoring", quantity: 1, price: 60.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-006",
  //     invoiceName: "Enterprise Cloud Setup",
  //     date: "2025-04-08",
  //     paymentTerms: "Net 45",
  //     projectDescription: "Cloud Infrastructure",
  //     status: "paid",
  //     sender: {
  //       street: "22 Cyber City",
  //       city: "Gurugram",
  //       postCode: "122002",
  //       country: "India",
  //     },
  //     receiver: {
  //       name: "NovaTech Enterprises",
  //       email: "accounts@novatech.in",
  //       street: "14 Rajiv Gandhi IT Park",
  //       city: "Pune",
  //       postCode: "411014",
  //       country: "India",
  //     },
  //     items: [
  //       { name: "Cloud Infrastructure Setup", quantity: 1, price: 2000.0 },
  //       { name: "CI/CD Pipeline Configuration", quantity: 1, price: 1500.0 },
  //       { name: "Security Audit", quantity: 1, price: 900.0 },
  //       { name: "Staff Training Session", quantity: 2, price: 250.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-007",
  //     invoiceName: "Photography & Editing",
  //     date: "2025-04-09",
  //     paymentTerms: "Net 14",
  //     projectDescription: "Product Photography",
  //     status: "draft",
  //     sender: {
  //       street: "5 Portobello Road",
  //       city: "London",
  //       postCode: "W11 2DA",
  //       country: "United Kingdom",
  //     },
  //     receiver: {
  //       name: "Luxe Interiors Co.",
  //       email: "studio@luxeinteriors.co.uk",
  //       street: "78 Sloane Street",
  //       city: "London",
  //       postCode: "SW1X 9AT",
  //       country: "United Kingdom",
  //     },
  //     items: [
  //       { name: "Product Photography (half day)", quantity: 1, price: 175.0 },
  //       { name: "Photo Retouching", quantity: 10, price: 10.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-008",
  //     invoiceName: "Shopify Store Build",
  //     date: "2025-04-10",
  //     paymentTerms: "Net 30",
  //     projectDescription: "E-commerce Development",
  //     status: "pending",
  //     sender: {
  //       street: "33 Rue de Rivoli",
  //       city: "Paris",
  //       postCode: "75004",
  //       country: "France",
  //     },
  //     receiver: {
  //       name: "Maison Blanche Boutique",
  //       email: "comptabilite@maisonblanche.fr",
  //       street: "12 Boulevard Haussmann",
  //       city: "Paris",
  //       postCode: "75009",
  //       country: "France",
  //     },
  //     items: [
  //       { name: "Shopify Store Setup", quantity: 1, price: 500.0 },
  //       { name: "Product Page Design", quantity: 5, price: 80.0 },
  //       { name: "Payment Gateway Integration", quantity: 1, price: 200.75 },
  //     ],
  //   },
  //   {
  //     id: "INV-009",
  //     invoiceName: "Social Media Management",
  //     date: "2025-04-11",
  //     paymentTerms: "Net 7",
  //     projectDescription: "Social Media Marketing",
  //     status: "draft",
  //     sender: {
  //       street: "Plot 7 Spintex Road",
  //       city: "Accra",
  //       postCode: "GA-023",
  //       country: "Ghana",
  //     },
  //     receiver: {
  //       name: "Kente Fashion House",
  //       email: "admin@kentefashion.gh",
  //       street: "15 Oxford Street, Osu",
  //       city: "Accra",
  //       postCode: "GA-112",
  //       country: "Ghana",
  //     },
  //     items: [
  //       { name: "Instagram Posts", quantity: 4, price: 12.0 },
  //       { name: "Monthly Analytics Report", quantity: 1, price: 40.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-010",
  //     invoiceName: "ERP System Implementation",
  //     date: "2025-04-12",
  //     paymentTerms: "Net 60",
  //     projectDescription: "Enterprise Resource Planning",
  //     status: "paid",
  //     sender: {
  //       street: "Unter den Linden 21",
  //       city: "Berlin",
  //       postCode: "10117",
  //       country: "Germany",
  //     },
  //     receiver: {
  //       name: "Schmidt Manufacturing GmbH",
  //       email: "rechnungen@schmidt-mfg.de",
  //       street: "Industriestraße 44",
  //       city: "Munich",
  //       postCode: "80807",
  //       country: "Germany",
  //     },
  //     items: [
  //       { name: "ERP Licensing (annual)", quantity: 1, price: 3000.0 },
  //       { name: "Custom Module Development", quantity: 2, price: 1200.0 },
  //       { name: "Data Migration", quantity: 1, price: 750.0 },
  //       { name: "On-site Training", quantity: 3, price: 166.67 },
  //     ],
  //   },
  //   {
  //     id: "INV-011",
  //     invoiceName: "IT Consulting Services",
  //     date: "2025-04-14",
  //     paymentTerms: "Net 30",
  //     projectDescription: "IT Consulting",
  //     status: "pending",
  //     sender: {
  //       street: "24 Bourdillon Road",
  //       city: "Lagos",
  //       postCode: "101233",
  //       country: "Nigeria",
  //     },
  //     receiver: {
  //       name: "Crestview Holdings",
  //       email: "finance@crestviewholdings.ng",
  //       street: "3 Idowu Taylor Street",
  //       city: "Lagos",
  //       postCode: "101001",
  //       country: "Nigeria",
  //     },
  //     items: [
  //       { name: "Network Assessment", quantity: 1, price: 150.0 },
  //       { name: "IT Roadmap Consultation", quantity: 1, price: 180.0 },
  //       { name: "Written Report", quantity: 1, price: 60.0 },
  //     ],
  //   },
  //   {
  //     id: "INV-012",
  //     invoiceName: "Brand Identity Design",
  //     date: "2025-04-15",
  //     paymentTerms: "Net 45",
  //     projectDescription: "Graphic Design",
  //     status: "draft",
  //     sender: {
  //       street: "101 Rue Saint-Catherine",
  //       city: "Montréal",
  //       postCode: "H2X 1Z6",
  //       country: "Canada",
  //     },
  //     receiver: {
  //       name: "Lumière Cosmetics Inc.",
  //       email: "ap@lumierecosmetics.ca",
  //       street: "55 Wellington Street",
  //       city: "Toronto",
  //       postCode: "M5V 3A6",
  //       country: "Canada",
  //     },
  //     items: [
  //       { name: "Brand Strategy Workshop", quantity: 1, price: 800.0 },
  //       { name: "Logo & Visual Identity", quantity: 1, price: 950.0 },
  //       { name: "Packaging Design", quantity: 3, price: 250.0 },
  //       { name: "Brand Guidelines Document", quantity: 1, price: 250.0 },
  //     ],
  //   },
  // ];
  // const _invoices = localStorage.setItem("invoices", JSON.stringify(invoic));

  const updateLocal = () => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  };

  useEffect(() => {
    const _invoices = JSON.parse(localStorage.getItem("invoices"));
    setInvoices(_invoices);
  }, []);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Home
                invoices={invoices}
                setInvoices={setInvoices}
                updateLocal={updateLocal}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <InvoiceDetail
                invoices={invoices}
                setInvoices={setInvoices}
                updateLocal={updateLocal}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
