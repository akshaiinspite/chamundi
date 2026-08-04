import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const enPath = path.join(rootDir, 'src/i18n/locales/en.json');
const frPath = path.join(rootDir, 'src/i18n/locales/fr.json');
const dePath = path.join(rootDir, 'src/i18n/locales/de.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));
const de = JSON.parse(fs.readFileSync(dePath, 'utf8'));

en.preloader = {
  celebrating: 'Celebrating',
  yearsHealing: '25 Years of Healing & Excellence',
  trustedCare: 'Trusted Ayurvedic Care',
  personalizedCare: 'Personalized Ayurvedic Care',
  yogaMeditation: 'Yoga & Meditation'
};
fr.preloader = {
  celebrating: 'Célébration de',
  yearsHealing: "25 Ans de Guérison & d'Excellence",
  trustedCare: 'Soins Ayurvédiques de Confiance',
  personalizedCare: 'Soins Ayurvédiques Personnalisés',
  yogaMeditation: 'Yoga & Méditation'
};
de.preloader = {
  celebrating: 'Feier von',
  yearsHealing: '25 Jahre Heilung & Exzellenz',
  trustedCare: 'Vertrauenswürdige Ayurveda-Pflege',
  personalizedCare: 'Personalisierte Ayurveda-Pflege',
  yogaMeditation: 'Yoga & Meditation'
};

en.pageHero = { home: 'Home' };
fr.pageHero = { home: 'Accueil' };
de.pageHero = { home: 'Startseite' };

en.trust.jeannieTag = 'Visited Chamundi for Ayurveda for 18 Years';
fr.trust.jeannieTag = "A visité Chamundi pour l'Ayurveda pendant 18 ans";
de.trust.jeannieTag = 'Besucht Chamundi seit 18 Jahren für Ayurveda';

en.trust.jeannieRetreatVisits = '18 Annual Retreat Visits';
fr.trust.jeannieRetreatVisits = '18 Retraites Annuelles';
de.trust.jeannieRetreatVisits = '18 Jährliche Retreat-Besuche';

en.trust.viewDetails = 'View Details →';
fr.trust.viewDetails = 'Voir Détails →';
de.trust.viewDetails = 'Details Anzeigen →';

en.videoTestimonialsComponent = {
  label: 'Testimonials',
  title: 'What Our Clients Say About Us'
};
fr.videoTestimonialsComponent = {
  label: 'Témoignages',
  title: 'Ce que Nos Clients Disent de Nous'
};
de.videoTestimonialsComponent = {
  label: 'Erfahrungsberichte',
  title: 'Was Unsere Kunden Über Uns Sagen'
};

en.ayurvedaPage = {
  title: 'Ayurvedic Treatments in Kerala',
  subtitle: 'Ancient Wisdom · Modern Healing',
  breadcrumb: 'Ayurveda',
  intro: "Welcome to Chamundi Hill Palace, where ancient Ayurvedic wisdom meets serene Kerala landscapes. Recognized as one of the best Ayurvedic retreats in Kerala, we offer a complete range of authentic Ayurvedic treatments designed to purify, rejuvenate, and restore the body's natural harmony. Every therapy begins with an individual Ayurvedic consultation led by our resident doctor, who carefully studies your body constitution (Dosha), health history, and lifestyle. Based on this, a personalized treatment plan is crafted — ensuring every guest receives care suited to their unique needs.",
  watchTestimonials: 'Watch Guest Testimonials',
  stats: {
    years: 'Years of Ayurveda',
    guests: 'Repeat Guests',
    doctors: 'Certified Doctors',
    panchakarma: 'Day Panchakarma'
  },
  programsLabel: 'Programs',
  programsTitle: 'Our Signature Ayurvedic Treatments',
  treatments: {
    rejuvenation: {
      title: 'Rejuvenation Program',
      duration: '7, 14, 21 or 28 Days',
      body: "Experience authentic Ayurvedic rejuvenation in Kerala at Chamundi Hill Palace, where ancient healing meets serene natural beauty. Our programs are designed to restore energy, balance, and inner harmony through traditional Rasayana therapy. Each program begins with a doctor's consultation and includes detoxification, oil massages, herbal steam baths, Panchakarma, and Ayurvedic meals complemented by yoga and meditation. Treatments are personalized according to your body type (Prakriti) and health goals.",
      statNum: '3000+',
      statYears: 'Years of',
      statSub: 'Ayurvedic Science'
    },
    stressRelief: {
      title: 'Stress Relief Program',
      duration: '14 or 21 Days',
      body: 'Find calm and clarity with the Stress Relief Program at Chamundi Hill Palace. Designed to ease tension, anxiety, and fatigue, this program blends time-tested Ayurvedic therapies with a holistic healing approach. Each treatment plan includes Abhyanga (herbal oil massage), Shirodhara (oil pouring therapy), herbal steam baths, and detoxification therapies — all tailored to restore balance to your body and mind. Guided yoga and meditation sessions, along with a nutritious Ayurvedic diet, support deep relaxation and better sleep.',
      statNum: '15+',
      statYears: 'Repeat Guests',
      statSub: ' Every Year'
    },
    panchakarma: {
      title: 'Panchakarma Treatment',
      duration: '28 Days',
      body: 'Experience authentic Panchakarma treatment in Kerala at Chamundi Hill Palace, a renowned Ayurvedic wellness retreat dedicated to deep detoxification and rejuvenation. This 28-day program follows classical Ayurvedic purification therapies that cleanse the body, balance the Doshas, and restore lasting vitality. Your treatment plan may include Vamana (emesis), Virechana (purgation), Nasya (nasal therapy), Basti (medicated enemas), and Raktamokshana (blood purification).',
      statNum: '28',
      statYears: 'Days Full',
      statSub: 'Panchakarma Program'
    },
    weightLoss: {
      title: 'Weight Loss Program',
      duration: '28 Days',
      body: 'Discover natural weight management through Ayurveda with the 28-Day Weight Loss Program. This holistic program combines Ayurvedic therapies, balanced nutrition, and mindful practices to promote sustainable fat reduction and overall vitality. Your personalized plan may include Udvartana (herbal powder massage) and Abhyanga (oil massage) to improve circulation and break down excess fat, along with herbal steam baths for detoxification and metabolism enhancement.',
      statNum: '100%',
      statYears: 'Certified',
      statSub: 'Ayurvedic Doctors'
    }
  },
  readMore: 'Read More',
  consultationIncluded: '*Consultation included',
  inclusions: {
    label: 'All-Inclusive Packages',
    title: 'What is Included in Your Package',
    desc: 'On arrival a free consultation for Kerala ayurvedic treatments will be arranged with our resident ayurveda doctor, who will patiently listen to you. Based on the consultation the best treatment will be discussed. The duration of the treatment will be 7 to 28 days.',
    treatmentsTitle: 'Various Treatments',
    treatmentsDesc: 'As discussed during consultation you will be given the opportunity to choose different ayurveda treatment programs that suits you. You will experience various ayurveda treatments that is suitable for you. Accommodation will be arranged to suit your treatment program.',
    foodTitle: 'Food',
    foodDesc: '3 meals including morning and evening tea / coffee and the best organic food grown in the surrounding area.',
    highlights: 'Package Highlights',
    dailyTreatments: 'Daily Treatments',
    yogaMeditation: 'Yoga & Meditation',
    ayurvedicDiet: 'Ayurvedic Diet',
    medicalExams: 'Medical Exams',
    doctorConsulting: 'Doctor Consulting',
    stayDuration: '7-28 Days Stay',
    listBadge: 'Treatments List',
    listTitle: 'Kerala Ayurvedic Treatment Programs',
    item1: '7, 14, 28, days Rejuvanation Program',
    item2: '14 to 21 days stress Relief Program',
    item3: '28 Days Panchakarma Treatment Program',
    item4: '28 Days Weight Loss Program',
    listNote: 'These are some of the Ayurvedic treatment programs that are being practiced at Chamundi Hill Palace'
  },
  videoModalTitle: 'Guest Video Testimonials'
};

fr.ayurvedaPage = {
  title: 'Traitements Ayurvédiques au Kérala',
  subtitle: 'Sagesse Ancienne · Guérison Moderne',
  breadcrumb: 'Ayurveda',
  intro: "Bienvenue au Chamundi Hill Palace, où la sagesse ancienne de l'Ayurveda rencontre les paysages sereins du Kérala. Reconnu comme l'un des meilleurs centres de retraite ayurvédique au Kérala, nous proposons une gamme complète de soins ayurvédiques authentiques conçus pour purifier, rajeunir et restaurer l'harmonie naturelle du corps. Chaque thérapie commence par une consultation individuelle dirigée par notre médecin résident, qui étudie attentivement votre constitution corporelle (Dosha), votre historique de santé et votre mode de vie. Sur cette base, un plan de traitement personnalisé est élaboré — garantissant à chaque client des soins adaptés à ses besoins uniques.",
  watchTestimonials: 'Regarder les Témoignages des Clients',
  stats: {
    years: "Années d'Ayurveda",
    guests: 'Clients Fidèles',
    doctors: 'Médecins Certifiés',
    panchakarma: 'Jours de Panchakarma'
  },
  programsLabel: 'Programmes',
  programsTitle: 'Nos Traitements Ayurvédiques Signature',
  treatments: {
    rejuvenation: {
      title: 'Programme de Rajeunissement',
      duration: '7, 14, 21 ou 28 Jours',
      body: "Découvrez le rajeunissement ayurvédique authentique au Kérala au Chamundi Hill Palace, où les soins anciens rencontrent la beauté naturelle. Nos programmes sont conçus pour restaurer l'énergie, l'équilibre et l'harmonie intérieure grâce à la thérapie traditionnelle Rasayana. Chaque programme commence par une consultation médicale et comprend une désintoxication, des massages aux huiles, des bains de vapeur aux herbes, le Panchakarma et des repas ayurvédiques complétés par le yoga et la méditation. Les soins sont personnalisés selon votre profil (Prakriti) et vos objectifs de santé.",
      statNum: '3000+',
      statYears: 'Années de',
      statSub: 'Science Ayurvédique'
    },
    stressRelief: {
      title: 'Programme Anti-Stress',
      duration: '14 ou 21 Jours',
      body: "Retrouvez calme et clarté avec le programme anti-stress du Chamundi Hill Palace. Conçu pour apaiser les tensions, l'anxiété et la fatigue, ce programme associe des thérapies ayurvédiques éprouvées à une approche de guérison globale. Chaque plan comprend l'Abhyanga (massage à l'huile d'herbes), le Shirodhara (versement d'huile tiède), des bains de vapeur et des désintoxications adaptées. Des séances de yoga et de méditation accompagnent un régime ayurvédique nutritif pour favoriser un sommeil réparateur.",
      statNum: '15+',
      statYears: 'Clients Fidèles',
      statSub: 'Chaque Année'
    },
    panchakarma: {
      title: 'Traitement Panchakarma',
      duration: '28 Jours',
      body: "Faites l'expérience du véritable traitement Panchakarma au Kérala au Chamundi Hill Palace, un centre renommé dédié à la purification profonde et au rajeunissement. Ce programme de 28 jours suit les thérapies de purification ayurvédiques classiques qui nettoient l'organisme, rééquilibrent les Doshas et restaurent une vitalité durable. Votre plan peut inclure Vamana, Virechana, Nasya, Basti et Raktamokshana.",
      statNum: '28',
      statYears: 'Jours Complets de',
      statSub: 'Programme Panchakarma'
    },
    weightLoss: {
      title: 'Programme de Perte de Poids',
      duration: '28 Jours',
      body: "Découvrez la gestion naturelle du poids grâce à l'Ayurveda avec notre programme de 28 jours. Ce programme global associe thérapies ayurvédiques, nutrition équilibrée et pratiques de pleine conscience pour favoriser une réduction durable des graisses et une vitalité globale. Votre plan personnalisé peut inclure l'Udvartana (massage à la poudre d'herbes) et l'Abhyanga ainsi que des bains de vapeur.",
      statNum: '100%',
      statYears: 'Médecins',
      statSub: 'Ayurvédiques Certifiés'
    }
  },
  readMore: 'En Savoir Plus',
  consultationIncluded: '*Consultation incluse',
  inclusions: {
    label: 'Formules Tout Compris',
    title: 'Ce qui est Inclus dans Votre Formule',
    desc: 'À votre arrivée, une consultation gratuite pour les soins ayurvédiques du Kérala sera organisée avec notre médecin résident, qui prendra le temps de vous écouter. Le meilleur traitement sera défini ensemble pour une durée de 7 à 28 jours.',
    treatmentsTitle: 'Soins Personnalisés',
    treatmentsDesc: "Après la consultation, vous aurez la possibilité de choisir les programmes de soins ayurvédiques les plus adaptés. Votre hébergement sera organisé pour s'harmoniser avec votre programme.",
    foodTitle: 'Alimentation Biologique',
    foodDesc: '3 repas comprenant le thé/café du matin et du soir, avec les meilleurs produits biologiques cultivés sur nos terres.',
    highlights: 'Points Forts de la Formule',
    dailyTreatments: 'Soins Quotidiens',
    yogaMeditation: 'Yoga & Méditation',
    ayurvedicDiet: 'Régime Ayurvédique',
    medicalExams: 'Examens Médicaux',
    doctorConsulting: 'Consultation Médicale',
    stayDuration: 'Séjour 7-28 Jours',
    listBadge: 'Liste des Soins',
    listTitle: 'Programmes de Soins Ayurvédiques du Kérala',
    item1: 'Programme de Rajeunissement de 7, 14, 28 jours',
    item2: 'Programme Anti-Stress de 14 à 21 jours',
    item3: 'Programme de Traitement Panchakarma de 28 Jours',
    item4: 'Programme de Perte de Poids de 28 Jours',
    listNote: 'Voici les principaux programmes de soins ayurvédiques dispensés au Chamundi Hill Palace'
  },
  videoModalTitle: 'Témoignages Vidéo des Clients'
};

de.ayurvedaPage = {
  title: 'Ayurveda-Behandlungen in Kerala',
  subtitle: 'Alte Weisheit · Moderne Heilung',
  breadcrumb: 'Ayurveda',
  intro: 'Willkommen im Chamundi Hill Palace, wo alte ayurvedische Weisheit auf die friedvollen Landschaften Keralas trifft. Als eines der besten Ayurveda-Retreats in Kerala bieten wir ein vollständiges Spektrum authentischer Behandlungen zur Reinigung, Verjüngung und Wiederherstellung des natürlichen Körpergleichgewichts. Jede Therapie beginnt mit einer persönlichen Erstkonsultation bei unserem erfahrenen Arzt, der Ihre Konstitution (Dosha), Krankengeschichte und Lebensweise analysiert. Darauf aufbauend wird ein maßgeschneiderter Behandlungsplan erstellt.',
  watchTestimonials: 'Gästebewertungen Ansehen',
  stats: {
    years: 'Jahre Ayurveda',
    guests: 'Stammgäste',
    doctors: 'Zertifizierte Ärzte',
    panchakarma: 'Tage Panchakarma'
  },
  programsLabel: 'Programme',
  programsTitle: 'Unsere Signatur-Ayurveda-Behandlungen',
  treatments: {
    rejuvenation: {
      title: 'Verjüngungsprogramm',
      duration: '7, 14, 21 oder 28 Tage',
      body: 'Erleben Sie authentische ayurvedische Verjüngung im Chamundi Hill Palace in Kerala. Unsere Rasayana-Therapien stellen Energie, Gleichgewicht und innere Harmonie wieder her. Jedes Programm umfasst ärztliche Beratungen, Entgiftung, Ölmassagen, Kräuterdampfbäder, Panchakarma sowie ayurvedische Mahlzeiten, ergänzt durch tägliches Yoga und Meditation.',
      statNum: '3000+',
      statYears: 'Jahre',
      statSub: 'Ayurvedische Wissenschaft'
    },
    stressRelief: {
      title: 'Anti-Stress-Programm',
      duration: '14 oder 21 Tage',
      body: 'Finden Sie Ruhe und Klarheit mit dem Anti-Stress-Programm im Chamundi Hill Palace. Entwickelt zur Linderung von Verspannungen, Angstzuständen und Erschöpfung, kombiniert dieses Programm bewährte ayurvedische Therapien wie Abhyanga (Ölmassage) und Shirodhara (Stirnguss) mit geführter Meditation und gesunder Ernährung.',
      statNum: '15+',
      statYears: 'Stammgäste',
      statSub: 'Jedes Jahr'
    },
    panchakarma: {
      title: 'Panchakarma-Behandlung',
      duration: '28 Tage',
      body: 'Erleben Sie die klassische 28-Tage-Panchakarma-Kur zur tiefen Entgiftung und Verjüngung. Das Programm reinigt den Körper gründlich, bringt die Doshas ins Gleichgewicht und stellt nachhaltige Vitalität wieder her.',
      statNum: '28',
      statYears: 'Volle Tage',
      statSub: 'Panchakarma-Programm'
    },
    weightLoss: {
      title: 'Gewichtsverlust-Programm',
      duration: '28 Tage',
      body: 'Entdecken Sie ein natürliches Gewichtsmanagement durch Ayurveda. Dieses ganzheitliche Programm kombiniert Therapien wie Udvartana (Kräuterpulver-Massage) mit gezielter Ernährung und Yoga für einen nachhaltigen Fettabbau.',
      statNum: '100%',
      statYears: 'Zertifizierte',
      statSub: 'Ayurveda-Ärzte'
    }
  },
  readMore: 'Mehr Lesen',
  consultationIncluded: '*Konsultation inbegriffen',
  inclusions: {
    label: 'All-Inclusive-Pakete',
    title: 'Was in Ihrem Paket Enthalten Ist',
    desc: 'Bei der Ankunft erwartet Sie eine kostenlose Beratung mit unserem erfahrenen Ayurveda-Arzt, um das optimale 7- bis 28-tägige Behandlungsprogramm abzustimmen.',
    treatmentsTitle: 'Verschiedene Behandlungen',
    treatmentsDesc: 'Nach der Konsultation wählen Sie gemeinsam die passenden ayurvedischen Therapien. Ihre Unterkunft wird perfekt darauf abgestimmt.',
    foodTitle: 'Verpflegung',
    foodDesc: '3 Mahlzeiten inklusive Morgen- und Nachmittagstee/Kaffee mit den besten Bio-Zutaten aus eigenem Anbau.',
    highlights: 'Paket-Highlights',
    dailyTreatments: 'Tägliche Behandlungen',
    yogaMeditation: 'Yoga & Meditation',
    ayurvedicDiet: 'Ayurvedische Ernährung',
    medicalExams: 'Medizinische Untersuchungen',
    doctorConsulting: 'Ärztliche Beratung',
    stayDuration: '7-28 Tage Aufenthalt',
    listBadge: 'Behandlungsliste',
    listTitle: 'Kerala Ayurveda-Behandlungsprogramme',
    item1: '7, 14, 28 Tage Verjüngungsprogramm',
    item2: '14 bis 21 Tage Anti-Stress-Programm',
    item3: '28 Tage Panchakarma-Behandlungsprogramm',
    item4: '28 Tage Gewichtsverlust-Programm',
    listNote: 'Dies sind die im Chamundi Hill Palace durchgeführten Hauptbehandlungsprogramme'
  },
  videoModalTitle: 'Gästevideo-Bewertungen'
};

en.accommodationPage = {
  title: 'Accommodation & Facilities',
  subtitle: 'Heritage Rooms Designed for Peace, Comfort & Recovery',
  breadcrumb: 'Accommodation',
  stats: {
    years: 'Years',
    rated: 'Rated',
    doctors: 'Certified Doctors',
    guests: 'Repeat Guests'
  },
  facilitiesLabel: 'Facilities',
  facilitiesTitle: 'Everything You Need',
  items: {
    spacious: {
      title: 'Spacious Rooms',
      desc: 'All rooms are spacious and comfortable, with private bathrooms. Some rooms are within the main building and some are even more quietly located with beautiful views.'
    },
    cuisine: {
      title: 'Ayurvedic Cuisine',
      desc: 'Sumptuous Keralan vegetarian food served for all three meals, in addition to morning and evening tea/coffee. Ayurvedic Herbal water available throughout the day.'
    },
    amenities: {
      title: 'Modern Amenities',
      desc: 'Free Wi-Fi 24 hours. Assistance is assured by our loving staff all along your stay. Free Cooking Demonstration done once every 15 days.'
    },
    nature: {
      title: 'Nature Experiences',
      desc: 'Rubber Plantation Visit, 100+ years old Hindu temple visit, and spice tours within the centre premises.'
    },
    excursions: {
      title: 'Excursions',
      desc: 'Thekkady visit including Tea Plantation & factory, Elephant Ride, Boat ride, Spice garden visit. Kumarakom backwater half-day trip.'
    },
    farm: {
      title: 'Organic Farm',
      desc: 'Spices, vegetables, fruits sourced from our own organic farm. Five cows on-site producing fresh milk, ghee, curd, and paneer. Farm-to-table approach enhances purity.'
    }
  },
  yogaHall: {
    label: 'Yoga Hall',
    title: 'Practice in a Peaceful Setting',
    rating: 'Guest Rating',
    p1: "Yoga is a major element of our treatment programs. During the treatment period, our yoga teacher will set up personalized sessions based on your fitness level and the doctor's recommendation.",
    p2: "Daily yoga helps improve flexibility, reduce stress, and support the body's natural detoxification process. Breathing techniques and guided meditation are also included to enhance mental clarity and emotional calm. Whether you're a beginner or an advanced practitioner, our yoga retreats are tailored to elevate your overall wellness."
  }
};

fr.accommodationPage = {
  title: 'Hébergement & Équipements',
  subtitle: 'Chambres Patrimoniales Conçues pour la Paix, le Confort & la Récupération',
  breadcrumb: 'Hébergement',
  stats: {
    years: "Ans d'Excellence",
    rated: "Note d'Excellence",
    doctors: 'Médecins Certifiés',
    guests: 'Clients Fidèles'
  },
  facilitiesLabel: 'Équipements',
  facilitiesTitle: 'Tout ce dont Vous Avez Besoin',
  items: {
    spacious: {
      title: 'Chambres Spacieuses',
      desc: "Toutes nos chambres sont spacieuses et confortables, dotées de salles de bains privatives. Certaines se trouvent dans le bâtiment principal, d'autres au calme avec de magnifiques vues."
    },
    cuisine: {
      title: 'Cuisine Ayurvédique',
      desc: "Un délicieux repas végétarien du Kérala servi pour les trois repas quotidiennes, ainsi que le thé/café du matin et de l'après-midi. Eau d'herbes ayurvédiques disponible toute la journée."
    },
    amenities: {
      title: 'Équipements Modernes',
      desc: 'Wi-Fi gratuit 24h/24. Assistance chaleureuse assurée par notre équipe durant tout votre séjour. Démonstration de cuisine gratuite tous les 15 jours.'
    },
    nature: {
      title: 'Expériences en Nature',
      desc: "Visite des plantations d'hévéas, découverte d'un temple hindou de plus de 100 ans et visites du jardin d'épices sur le domaine."
    },
    excursions: {
      title: 'Excursions',
      desc: "Visite de Thekkady avec plantation de thé et fabrique, promenade à dos d'éléphant, balade en bateau. Demi-journée dans les backwaters de Kumarakom."
    },
    farm: {
      title: 'Ferme Biologique',
      desc: 'Épices, légumes et fruits issus de notre propre ferme bio. Cinq vaches sur place produisent du lait frais, du ghee et du fromage pour une pureté optimale.'
    }
  },
  yogaHall: {
    label: 'Salle de Yoga',
    title: 'Pratiquez dans un Cadre Paisible',
    rating: 'Avis des Clients',
    p1: 'Le yoga est un pilier majeur de nos programmes de soins. Durant votre séjour, notre professeur de yoga établit des séances personnalisées selon votre niveau et les recommandations du médecin.',
    p2: 'Le yoga quotidien améliore la souplesse, réduit le stress et favorise le processus naturel de désintoxication. La respiration guidée et la méditation renforcent la clarté mentale et le calme intérieur.'
  }
};

de.accommodationPage = {
  title: 'Unterkunft & Einrichtungen',
  subtitle: 'Heritage-Zimmer für Ruhe, Komfort & Erholung',
  breadcrumb: 'Unterkunft',
  stats: {
    years: 'Jahre Erholung',
    rated: 'Bewertung',
    doctors: 'Zertifizierte Ärzte',
    guests: 'Stammgäste'
  },
  facilitiesLabel: 'Einrichtungen',
  facilitiesTitle: 'Alles Was Sie Brauchen',
  items: {
    spacious: {
      title: 'Geräumige Zimmer',
      desc: 'Alle Zimmer sind geräumig und komfortabel mit eigenem Bad ausgestattet. Manche befinden sich im Hauptgebäude, andere in ruhigerer Lage mit schöner Aussicht.'
    },
    cuisine: {
      title: 'Ayurvedische Küche',
      desc: 'Köstliche vegetarische Mahlzeiten aus Kerala zu allen drei Tageszeiten plus Kräuterteepausen und durchgehendes ayurvedisches Kräuterwasser.'
    },
    amenities: {
      title: 'Moderne Annehmlichkeiten',
      desc: 'Kostenloses WLAN rund um die Uhr. Herzlicher Service unseres Teams. Alle 15 Tage kostenlose Kochdemonstrationen.'
    },
    nature: {
      title: 'Naturerlebnisse',
      desc: 'Besuch von Kautschukplantagen, über 100 Jahre alten Tempeln und Gewürzführungen direkt auf dem Anwesen.'
    },
    excursions: {
      title: 'Ausflüge',
      desc: 'Ausflüge nach Thekkady mit Teeplantagen, Elefantenreiten und Bootsfahrten. Halbtagsausflüge zu den Backwaters von Kumarakom.'
    },
    farm: {
      title: 'Bio-Bauernhof',
      desc: 'Gewürze, Gemüse und Früchte aus eigenem Anbau. Eigene Kühe vor Ort liefern frische Milch, Ghee und Paneer.'
    }
  },
  yogaHall: {
    label: 'Yoga-Halle',
    title: 'Praktizieren Sie in friedlicher Umgebung',
    rating: 'Gästebewertung',
    p1: 'Yoga bildet ein wichtiges Fundament unserer Therapien. Ihr Yoga-Lehrer stimmt die Einheiten individuell auf Ihr Fitnessniveau und die Empfehlungen des Arztes ab.',
    p2: 'Tägliches Yoga steigert die Beweglichkeit, baut Stress ab und unterstützt die natürliche Entgiftung des Körpers.'
  }
};

en.panchakarmaPage = {
  title: 'Panchakarma Treatment',
  subtitle: '28 Days of Authentic Purification & Renewal',
  breadcrumb: 'Panchakarma',
  label: '28 Days Program',
  heading: '28 Days Panchakarma Treatment in Kerala',
  p1: 'Chamundi Hill Palace is providing 28 days Panchakarma treatment in Kerala for purification of the body. This type of treatment is a purification process carried out by eliminating many toxins from the body. It includes five different types of therapies.',
  p2: 'These five different purification therapies are carried out with the aim of improving the health condition to a great extent. By the end of the treatment process the body gets toned. The functions of sensory organs is greatly improved. This includes improvement in metabolism, mental relaxation and an overall feeling of well being.',
  fiveActions: 'The Five Actions',
  fiveTherapiesTitle: 'Five Purification Therapies',
  therapies: {
    vamana: { name: 'Vamana', desc: 'Therapeutic emesis for upper body cleansing and Kapha balancing' },
    virechana: { name: 'Virechana', desc: 'Purgation therapy for detoxifying the liver, spleen and lower GI tract' },
    nasya: { name: 'Nasya', desc: 'Nasal administration of herbal oils for head and sinus purification' },
    basti: { name: 'Basti', desc: 'Medicated enema therapy — considered the most powerful of the five actions' },
    raktamokshana: { name: 'Raktamokshana', desc: 'Blood purification therapy to address skin, blood and Pitta disorders' }
  }
};

fr.panchakarmaPage = {
  title: 'Traitement Panchakarma',
  subtitle: '28 Jours de Purification & de Renouveau Authentiques',
  breadcrumb: 'Panchakarma',
  label: 'Programme 28 Jours',
  heading: '28 Jours de Traitement Panchakarma au Kérala',
  p1: 'Le Chamundi Hill Palace propose un traitement Panchakarma complet de 28 jours au Kérala pour la purification du corps. Ce traitement élimine en profondeur les toxines accumulées à travers cinq thérapies spécifiques.',
  p2: "Ces cinq thérapies de purification visent à améliorer considérablement votre santé globale. À la fin du processus, le corps est tonifié, le métabolisme optimisé, et l'esprit apaisé.",
  fiveActions: 'Les Cinq Actions',
  fiveTherapiesTitle: 'Cinq Thérapies de Purification',
  therapies: {
    vamana: { name: 'Vamana', desc: "Émèse thérapeutique pour le nettoyage du haut du corps et l'équilibre de Kapha" },
    virechana: { name: 'Virechana', desc: 'Thérapie de purgation pour désintoxiquer le foie, la rate et le système digestif' },
    nasya: { name: 'Nasya', desc: "Administration nasale d'huiles d'herbes pour la purification de la tête et des sinus" },
    basti: { name: 'Basti', desc: 'Lavement médicamenteux — considéré comme la plus puissante des cinq actions' },
    raktamokshana: { name: 'Raktamokshana', desc: 'Thérapie de purification sanguine traitant les troubles de la peau et de Pitta' }
  }
};

de.panchakarmaPage = {
  title: 'Panchakarma-Behandlung',
  subtitle: '28 Tage authentische Reinigung & Erneuerung',
  breadcrumb: 'Panchakarma',
  label: '28-Tage-Programm',
  heading: '28 Tage Panchakarma-Behandlung in Kerala',
  p1: 'Das Chamundi Hill Palace bietet ein 28-tägiges Panchakarma-Programm in Kerala zur tiefen Körperreinigung an, das Toxine durch fünf Haupttherapien sanft und gründlich ausscheidet.',
  p2: 'Diese Reinigungstherapien stärken den gesamten Organismus, verbessern den Stoffwechsel und schenken tiefe mentale Entspannung.',
  fiveActions: 'Die Fünf Handlungen',
  fiveTherapiesTitle: 'Fünf Reinigungstherapien',
  therapies: {
    vamana: { name: 'Vamana', desc: 'Therapeutisches Erbrechen zur Reinigung des Oberkörpers und zum Ausgleich von Kapha' },
    virechana: { name: 'Virechana', desc: 'Abführtherapie zur Entgiftung von Leber, Milz und Magen-Darm-Trakt' },
    nasya: { name: 'Nasya', desc: 'Nasale Anwendung von Kräuterölen zur Kopf- und Nasennebenhöhlenreinigung' },
    basti: { name: 'Basti', desc: 'Medizinische Einläufe — gilt als die wirkungsvollste der fünf Handlungen' },
    raktamokshana: { name: 'Raktamokshana', desc: 'Blutreinigungstherapie bei Haut- und Pitta-Störungen' }
  }
};

en.whatWeOfferPage = {
  title: 'What We Offer',
  subtitle: 'Authentic Ayurvedic Treatments & Healing Retreat',
  breadcrumb: 'What We Offer',
  stats: {
    ayurvedicCare: 'Ayurvedic Care',
    accommodation: 'Accommodation',
    yogaWellness: 'Yoga & Wellness',
    mealsDiet: 'Meals & Diet'
  },
  inclusions: 'Inclusions',
  palaceTitle: 'Chamundi Hill Palace Ayurveda Treatment Centre',
  palaceDesc: 'Everything you need for a complete healing journey — included in your stay.',
  categoryPrefix: 'Category',
  inclusionsSuffix: 'Inclusions',
  categories: {
    ayurvedicCare: {
      title: 'Ayurvedic Care',
      item1: 'A detailed Ayurvedic consultation with our resident doctor upon arrival.',
      item2: 'Our doctor is always available, attentive to every concern of yours, during your whole stay.',
      item3: 'Ayurvedic treatments, twice a day, as prescribed by the doctor.',
      item4: 'Ayurvedic medicines which are prescribed by the doctor as part of your treatment plan.',
      item5: 'Abdominal cleansing every 8th day of treatment, or as recommended by doctor.',
      item6: 'On the last day of your stay, Doctor will give you a specific diet chart for you to follow.'
    },
    accommodation: {
      title: 'Accommodation',
      item1: 'Accommodation inside our premises - Comfortable ensuite rooms at Ayurvedic Treatment Centre.',
      item2: 'Airport pick up and drop (free one way for minimum 1 week, free both ways for min 2 weeks).',
      item3: 'Assistance with your travel needs before/after your stay in the centre.'
    },
    yogaWellness: {
      title: 'Yoga & Wellness',
      item1: 'Daily morning and evening Yoga sessions, 6 days a week, which are free for all who live in the centre.',
      item2: 'Spice tours within the Centre.'
    },
    mealsDiet: {
      title: 'Meals & Diet',
      item1: 'All meals, vegetarian & freshly cooked, made from organically grown vegetables and spices.',
      item2: 'During treatments, Ayurvedic diet is ensured.'
    }
  }
};

fr.whatWeOfferPage = {
  title: 'Ce que Nous Offrons',
  subtitle: 'Soins Ayurvédiques Authentiques & Retraite de Guérison',
  breadcrumb: 'Ce que Nous Offrons',
  stats: {
    ayurvedicCare: 'Soins Ayurvédiques',
    accommodation: 'Hébergement',
    yogaWellness: 'Yoga & Bien-être',
    mealsDiet: 'Repas & Régime'
  },
  inclusions: 'Inclusions',
  palaceTitle: 'Chamundi Hill Palace Centre de Soins Ayurvédiques',
  palaceDesc: 'Tout ce dont vous avez besoin pour un parcours de guérison complet — inclus dans votre séjour.',
  categoryPrefix: 'Catégorie',
  inclusionsSuffix: 'Inclusions',
  categories: {
    ayurvedicCare: {
      title: 'Soins Ayurvédiques',
      item1: 'Une consultation ayurvédique détaillée avec notre médecin résident dès votre arrivée.',
      item2: 'Notre médecin est toujours disponible et attentif à chacun de vos besoins tout au long du séjour.',
      item3: 'Deux soins ayurvédiques par jour, selon la prescription médicale.',
      item4: 'Médicaments ayurvédiques prescrits par le médecin dans le cadre de votre plan de traitement.',
      item5: "Purification abdominale tous les 8 jours de soin, ou selon l'avis médical.",
      item6: 'Le dernier jour, le médecin vous remettra un programme alimentaire spécifique à suivre.'
    },
    accommodation: {
      title: 'Hébergement',
      item1: 'Hébergement au sein du domaine — Chambres confortables avec salle de bains privative.',
      item2: 'Transferts aéroport (aller simple gratuit dès 1 semaine, aller-retour gratuit pour 2 semaines minimum).',
      item3: "Assistance pour l'organisation de vos déplacements avant et après votre séjour."
    },
    yogaWellness: {
      title: 'Yoga & Bien-être',
      item1: 'Séances quotidiennes de Yoga matin et soir, 6 jours par semaine, ouvertes à tous les résidents.',
      item2: "Visites guidées du jardin d'épices sur le domaine."
    },
    mealsDiet: {
      title: 'Repas & Régime',
      item1: 'Tous les repas végétariens fraîchement cuisinés avec les légumes et épices bio du domaine.',
      item2: 'Suivi rigoureux du régime ayurvédique personnalisé durant la période de soins.'
    }
  }
};

de.whatWeOfferPage = {
  title: 'Was Wir Anbieten',
  subtitle: 'Authentische Ayurveda-Behandlungen & Heilungs-Retreat',
  breadcrumb: 'Was Wir Anbieten',
  stats: {
    ayurvedicCare: 'Ayurveda-Pflege',
    accommodation: 'Unterkunft',
    yogaWellness: 'Yoga & Wellness',
    mealsDiet: 'Mahlzeiten & Ernährung'
  },
  inclusions: 'Leistungen',
  palaceTitle: 'Chamundi Hill Palace Ayurveda-Behandlungszentrum',
  palaceDesc: 'Alles, was Sie für eine vollständige Heilungsreise benötigen — im Aufenthalt inbegriffen.',
  categoryPrefix: 'Kategorie',
  inclusionsSuffix: 'Leistungen',
  categories: {
    ayurvedicCare: {
      title: 'Ayurveda-Pflege',
      item1: 'Ausführliche Erstkonsultation mit unserem Chefarzt bei der Ankunft.',
      item2: 'Unser Arzt steht Ihnen während des gesamten Aufenthalts für alle Anliegen zur Seite.',
      item3: 'Zweimal tägliche ayurvedische Behandlungen nach ärztlicher Verordnung.',
      item4: 'Ayurvedische Arzneien als Teil Ihres individuellen Behandlungsplans.',
      item5: 'Bauchreinigung an jedem 8. Behandlungstag oder nach ärztlicher Empfehlung.',
      item6: 'Am Abreisetag erhalten Sie einen spezifischen Ernährungsplan für zu Hause.'
    },
    accommodation: {
      title: 'Unterkunft',
      item1: 'Komfortable Zimmer mit eigenem Bad direkt auf dem Anwesen.',
      item2: 'Flughafentransfer (einfache Fahrt kostenlos ab 1 Woche, Hin- und Rückfahrt kostenlos ab 2 Wochen).',
      item3: 'Unterstützung bei allen Reiseangelegenheiten vor und nach Ihrem Aufenthalt.'
    },
    yogaWellness: {
      title: 'Yoga & Wellness',
      item1: 'Tägliche Yoga-Einheiten morgens und abends (6 Tage/Woche) für alle Gäste kostenlos.',
      item2: 'Geführte Gewürztouren auf dem Gelände.'
    },
    mealsDiet: {
      title: 'Mahlzeiten & Ernährung',
      item1: 'Frisch zubereitete vegetarische Mahlzeiten aus eigenen Bio-Zutaten.',
      item2: 'Individuelle ayurvedische Diät während der gesamten Behandlungszeit.'
    }
  }
};

en.yogaCoursePage = {
  title: 'Yoga Course in Kerala',
  subtitle: 'Intensive Hatha Yoga Training at Chamundi Hill Palace',
  breadcrumb: 'Yoga Course',
  p1: 'Join us for an Intense Hatha Yoga Training Course in Kerala at Chamundi Hill Palace, where the true essence of Yoga is realized. This immersive course offers practical and theoretical knowledge, suitable for beginners and experienced practitioners. Learn core principles of Hatha Yoga, including asanas, pranayama, and mindfulness.',
  p2: "This Hatha Yoga course is the perfect starting point for advancing your practice and becoming a certified instructor. Upon completion, you'll be eligible for our Yoga Teacher Training Course (TTC) to further develop your skills.",
  detailsLabel: 'Course Details',
  detailsTitle: '4-Week Immersive Experience',
  detailsSubtitle: '6 hours of lessons daily (Mon–Fri) and 2 hours on Saturdays. Sundays are free for rest and integration.',
  features: {
    yogaClasses: { title: 'Yoga Classes', desc: 'Traditional Hatha Yoga training with expert instructors in our dedicated yoga hall.' },
    smallGroups: { title: 'Small Groups', desc: 'Personalized attention with a maximum of 10 participants, ensuring high-quality training.' },
    holistic: { title: 'Holistic Learning', desc: 'Combine yoga practice with Ayurveda workshops, meditation sessions, and spiritual teachings.' },
    accommodation: { title: 'Accommodation', desc: 'Twin-sharing basis in ensuite double bed rooms in our new Villa, 250m from the yoga hall.' },
    meals: { title: 'Meals Included', desc: '3 meals including morning and evening tea/coffee. Ayurvedic Herbal water available all day.' },
    workshops: { title: 'Workshops', desc: 'Additional workshops on Ayurveda awareness (4h), Carnatic Vocal Music breathing (4h), and Ayurvedic Cooking (4h).' }
  },
  curriculumLabel: 'Curriculum',
  curriculumTitle: 'Yoga Course Syllabus',
  syllabus: {
    item1: { title: 'Yoga Philosophy', desc: 'Introduction to Yoga Darshana of Patanjali — Chitta, Chitta Bhumis, Chitta Vrittis, Niropdhopaya, Samadhi, Sadhana, Vibhuti and Kaivalya pada.' },
    item2: { title: 'Yogic Anatomy & Physiology', desc: 'Understanding Chakras, Koshas, Pranas, Nadis, and the Vayus — how these elements work together to influence health and well-being.' },
    item3: { title: 'Yoga Therapy', desc: 'Learn how Yoga addresses common ailments, both physical and mental, promoting psychological healing through natural, holistic approaches.' },
    item4: { title: 'Asanas', desc: 'Seated, Backward bending, Forward bending, Twisting, Inverted, Balancing — minimum 40 asanas plus Surya Namaskar variations including Kalari Namaskaram.' },
    item5: { title: 'Pranayama', desc: 'Basic breathing, Kapalbhati, Nadi Shodhana, Bhastrika, Bhramari, Ujjai, Shitali, Shithkaari, and Nada pranayama — 30 minutes daily.' },
    item6: { title: 'Meditation', desc: 'Mantra, Breath watching, Visualization, Body scan, Walking, and Chakra awareness meditation — 30 minutes daily.' }
  },
  pranayamaTitle: 'Pranayama Practice',
  meditationTitle: 'Meditation Practice',
  dailyRoutine: 'Daily Routine',
  dailySchedule: 'Daily Schedule',
  schedule: {
    pranayama: 'Pranayama',
    asanas: 'Asanas',
    breakfast: 'Breakfast',
    theory: 'Theory',
    lunch: 'Lunch',
    meditation: 'Meditation',
    chanting: 'Chanting',
    dinner: 'Dinner'
  },
  locationLabel: 'Location',
  sanctuaryTitle: 'A Sanctuary for Yoga',
  locationP1: 'Chamundi Hill Palace is quietly and beautifully nestled atop the Nadukani Hills, offering breathtaking views in every direction. The entire campus is adorned with lush greenery, medicinal plants, and vibrant flora — ideal for hosting even a complete spice garden tour within the premises.',
  locationP2: 'The natural peace and silence in this blessed setting will serve as a powerful inspiration throughout your yoga journey. There are many walking trails around, and day visits can be made to the backwater heartland of Alleppey or Kumarakom, or excursions to Kuttikanam or Periyar.'
};

fr.yogaCoursePage = {
  title: 'Cours de Yoga au Kérala',
  subtitle: 'Formation Intensive en Hatha Yoga au Chamundi Hill Palace',
  breadcrumb: 'Cours de Yoga',
  p1: 'Rejoignez-nous pour un cours intensif de formation en Hatha Yoga au Kérala au Chamundi Hill Palace. Ce programme immersif associe théorie et pratique, convenant aussi bien aux débutants qu\'aux pratiquants avancés.',
  p2: 'Ce cours de Hatha Yoga constitue un tremplin idéal pour approfondir votre pratique ou devenir enseignant certifié.',
  detailsLabel: 'Détails du Cours',
  detailsTitle: 'Expérience Immersive de 4 Semaines',
  detailsSubtitle: '6 heures de cours quotidiens (du lundi au vendredi) et 2 heures le samedi. Dimanche libre pour le repos.',
  features: {
    yogaClasses: { title: 'Cours de Yoga', desc: 'Formation traditionnelle au Hatha Yoga avec des enseignants experts dans notre salle dédiée.' },
    smallGroups: { title: 'Petits Groupes', desc: 'Attention personnalisée avec un maximum de 10 participants par session.' },
    holistic: { title: 'Apprentissage Global', desc: 'Combinez la pratique du yoga avec des ateliers ayurvédiques et de la méditation.' },
    accommodation: { title: 'Hébergement', desc: 'Chambres doubles partagées avec salle de bain privative dans notre nouvelle Villa.' },
    meals: { title: 'Repas Inclus', desc: '3 repas complets ainsi que le thé/café du matin et du soir. Eau infusée disponible en permanence.' },
    workshops: { title: 'Ateliers Spéciaux', desc: "Ateliers complémentaires sur l'Ayurveda (4h), le chant carnatique (4h) et la cuisine ayurvédique (4h)." }
  },
  curriculumLabel: 'Programme',
  curriculumTitle: 'Syllabus du Cours de Yoga',
  syllabus: {
    item1: { title: 'Philosophie du Yoga', desc: 'Introduction au Yoga Darshana de Patanjali — Chitta, Samadhi, Sadhana et Kaivalya pada.' },
    item2: { title: 'Anatomie Yogique & Physiologie', desc: 'Compréhension des Chakras, Koshas, Pranas et Nadis pour la santé holistique.' },
    item3: { title: 'Yoga Thérapie', desc: 'Apprenez comment le Yoga traite les affections physiques et mentales de manière naturelle.' },
    item4: { title: 'Asanas', desc: 'Plus de 40 asanas principales ainsi que les variations de Surya Namaskar et Kalari Namaskaram.' },
    item5: { title: 'Pranayama', desc: 'Exercices de respiration quotidienne : Kapalbhati, Nadi Shodhana, Bhastrika, Bhramari, etc.' },
    item6: { title: 'Méditation', desc: 'Méditation par mantra, observation du souffle, balayage corporel et conscience des chakras.' }
  },
  pranayamaTitle: 'Pratique du Pranayama',
  meditationTitle: 'Pratique de la Méditation',
  dailyRoutine: 'Routine Quotidienne',
  dailySchedule: 'Emploi du Temps Quotidien',
  schedule: {
    pranayama: 'Pranayama',
    asanas: 'Asanas',
    breakfast: 'Petit Déjeuner',
    theory: 'Théorie',
    lunch: 'Déjeuner',
    meditation: 'Méditation',
    chanting: 'Chants',
    dinner: 'Dîner'
  },
  locationLabel: 'Emplacement',
  sanctuaryTitle: 'Un Sanctuaire pour le Yoga',
  locationP1: 'Le Chamundi Hill Palace est amoureusement niché au sommet des collines de Nadukani, offrant des vues spectaculaires sur la nature environnante. Le campus est orné de verdure luxuriante et de plantes médicinales.',
  locationP2: "La sérénité naturelle de ce lieu sacré sera une source constante d'inspiration tout au long de votre parcours de yoga."
};

de.yogaCoursePage = {
  title: 'Yoga-Kurs in Kerala',
  subtitle: 'Intensives Hatha Yoga Training im Chamundi Hill Palace',
  breadcrumb: 'Yoga-Kurs',
  p1: 'Nehmen Sie an unserem intensiven Hatha-Yoga-Ausbildungskurs im Chamundi Hill Palace teil. Dieser Kurs vermittelt fundiertes Praxis- und Theoriewissen für Anfänger und Fortgeschrittene.',
  p2: 'Der Kurs ist der ideale Grundstein zur Vertiefung Ihrer Praxis oder für eine spätere Yogalehrer-Ausbildung.',
  detailsLabel: 'Kursdetails',
  detailsTitle: '4-Wöchige Intensive Erfahrung',
  detailsSubtitle: 'Täglich 6 Stunden Unterricht (Mo–Fr) und 2 Stunden am Samstag. Sonntage stehen zur freien Verfügung.',
  features: {
    yogaClasses: { title: 'Yoga-Einheiten', desc: 'Traditionelles Hatha Yoga mit erfahrenen Lehrern in unserer ruhigen Halle.' },
    smallGroups: { title: 'Kleine Gruppen', desc: 'Individuelle Betreuung mit maximal 10 Teilnehmern pro Kurs.' },
    holistic: { title: 'Ganzheitliches Lernen', desc: 'Kombination aus Yoga-Praxis, Ayurveda-Workshops und Meditation.' },
    accommodation: { title: 'Unterkunft', desc: 'Doppelzimmer zur Zweierbelegung mit Bad in unserer neuen Villa.' },
    meals: { title: 'Inklusive Verpflegung', desc: '3 Mahlzeiten sowie Teepausen und Kräuterwasser rund um die Uhr.' },
    workshops: { title: 'Workshops', desc: 'Zusätzliche Workshops zu Ayurveda (4h), Gesang/Atemlehre (4h) und ayurvedischem Kochen (4h).' }
  },
  curriculumLabel: 'Lehrplan',
  curriculumTitle: 'Yoga-Kurs Lehrplan',
  syllabus: {
    item1: { title: 'Yoga-Philosophie', desc: 'Einführung in Patanjalis Yoga Darshana — Chitta, Samadhi, Sadhana und Kaivalya Pada.' },
    item2: { title: 'Yogische Anatomie', desc: 'Verständnis von Chakren, Koshas, Prana und Nadis für die Gesundheit.' },
    item3: { title: 'Yoga-Therapie', desc: 'Einsatz von Yoga bei körperlichen und mentalen Beschwerden zur ganzheitlichen Heilung.' },
    item4: { title: 'Asanas', desc: 'Über 40 Grundhaltungen sowie Variationen des Sonnengrußes und Kalari Namaskaram.' },
    item5: { title: 'Pranayama', desc: 'Tägliche Atemübungen: Kapalbhati, Nadi Shodhana, Bhastrika, Bhramari etc.' },
    item6: { title: 'Meditation', desc: 'Mantra-Meditation, Atembeobachtung, Body-Scan und Chakren-Meditation.' }
  },
  pranayamaTitle: 'Pranayama-Praxis',
  meditationTitle: 'Meditations-Praxis',
  dailyRoutine: 'Tagesablauf',
  dailySchedule: 'Tagesplan',
  schedule: {
    pranayama: 'Pranayama',
    asanas: 'Asanas',
    breakfast: 'Frühstück',
    theory: 'Theorie',
    lunch: 'Mittagessen',
    meditation: 'Meditation',
    chanting: 'Gesang',
    dinner: 'Abendessen'
  },
  locationLabel: 'Lage',
  sanctuaryTitle: 'Ein Zufluchtsort für Yoga',
  locationP1: 'Chamundi Hill Palace liegt malerisch auf den Nadukani-Hügeln und bietet atemberaubende Ausblicke in die Natur. Das Anwesen ist von üppigem Grün und Heilpflanzen umgeben.',
  locationP2: 'Die natürliche Stille dieses Ortes bietet beste Inspiration für Ihre persönliche Yoga-Reise.'
};

en.galleryPage = {
  title: 'Photo & Video Gallery',
  subtitle: 'Explore the Timeless Beauty and Healing Atmosphere of Chamundi Hill Palace',
  breadcrumb: 'Gallery',
  highlightsLabel: 'Highlights',
  highlightsTitle: 'Featured Retreat Moments',
  photosLabel: 'Photos',
  photosTitle: 'Our Retreat Collection',
  photosDesc: 'Browse through authentic moments of serene landscapes, classical Ayurveda treatments, yoga practices, and heritage accommodations.',
  videosLabel: 'Videos',
  videosTitle: 'Experience Chamundi Hill Palace',
  categories: {
    all: 'All',
    nature: 'Retreat & Nature',
    ayurveda: 'Ayurveda & Wellness',
    yoga: 'Yoga & Meditation',
    accommodation: 'Accommodation',
    dining: 'Dining & Organic'
  }
};

fr.galleryPage = {
  title: 'Galerie Photos & Vidéos',
  subtitle: "Explorez la Beauté Intemporelle et l'Atmosphère Apaisante du Chamundi Hill Palace",
  breadcrumb: 'Galerie',
  highlightsLabel: 'Points Forts',
  highlightsTitle: 'Moments Forts de la Retraite',
  photosLabel: 'Photos',
  photosTitle: 'Notre Collection de la Retraite',
  photosDesc: 'Découvrez des instants authentiques de paysages sereins, de soins ayurvédiques traditionnels, de yoga et de nos hébergements.',
  videosLabel: 'Vidéos',
  videosTitle: 'Découvrez Chamundi Hill Palace',
  categories: {
    all: 'Tous',
    nature: 'Retraite & Nature',
    ayurveda: 'Ayurveda & Bien-être',
    yoga: 'Yoga & Méditation',
    accommodation: 'Hébergement',
    dining: 'Restauration & Bio'
  }
};

de.galleryPage = {
  title: 'Foto- & Video-Galerie',
  subtitle: 'Entdecken Sie die zeitlose Schönheit und heilende Atmosphäre des Chamundi Hill Palace',
  breadcrumb: 'Galerie',
  highlightsLabel: 'Highlights',
  highlightsTitle: 'Besondere Retreat-Momente',
  photosLabel: 'Fotos',
  photosTitle: 'Unsere Retreat-Kollektion',
  photosDesc: 'Stöbern Sie durch Aufnahmen unserer Landschaften, Behandlungen, Yoga-Einheiten und Unterkünfte.',
  videosLabel: 'Videos',
  videosTitle: 'Erleben Sie Chamundi Hill Palace',
  categories: {
    all: 'Alle',
    nature: 'Retreat & Natur',
    ayurveda: 'Ayurveda & Wellness',
    yoga: 'Yoga & Meditation',
    accommodation: 'Unterkunft',
    dining: 'Gastronomie & Bio'
  }
};

en.contactPage = {
  title: 'Contact Us',
  subtitle: 'Your Journey to Wellness Begins Here',
  breadcrumb: 'Contact',
  getInTouch: 'Get in Touch',
  connectTitle: 'Connect With Us',
  connectDesc: 'Whether you have a question about our Ayurvedic treatments, want to plan your stay, or simply need more details about our packages, feel free to reach out. Our dedicated team is available to guide you through each step.',
  quickContact: 'Quick Contact',
  fullName: 'Full Name',
  namePlaceholder: 'Your full name',
  emailAddress: 'Email Address',
  phone: 'Phone Number',
  interest: 'Treatment Interest',
  selectTreatment: 'Select a treatment',
  generalEnquiry: 'General Enquiry',
  message: 'Message',
  msgPlaceholder: 'Tell us about your wellness goals...',
  send: 'Send Enquiry',
  sent: '✓ Enquiry Sent!',
  centerTitle: 'Chamundi Hill Palace Ayurveda Treatment Centre',
  addressLabel: 'Address',
  phoneLabel: 'Phone',
  emailLabel: 'Email',
  availabilityLabel: 'Availability',
  openYearRound: 'Open year-round.',
  websiteLabel: 'Website',
  chatWhatsapp: 'Chat on WhatsApp'
};

fr.contactPage = {
  title: 'Contactez-nous',
  subtitle: 'Votre Voyage vers le Bien-être Commence Ici',
  breadcrumb: 'Contact',
  getInTouch: 'Contactez-nous',
  connectTitle: 'Échangez Avec Nous',
  connectDesc: 'Que vous ayez des questions sur nos soins ayurvédiques, que vous souhaitiez planifier votre séjour ou obtenir des précisions sur nos formules, notre équipe se tient à votre entière disposition.',
  quickContact: 'Contact Rapide',
  fullName: 'Nom Complet',
  namePlaceholder: 'Votre nom complet',
  emailAddress: 'Adresse E-mail',
  phone: 'Numéro de Téléphone',
  interest: 'Intérêt de Traitement',
  selectTreatment: 'Sélectionnez un traitement',
  generalEnquiry: 'Demande Générale',
  message: 'Message',
  msgPlaceholder: 'Parlez-nous de vos objectifs de bien-être...',
  send: 'Envoyer la Demande',
  sent: '✓ Demande Envoyée!',
  centerTitle: 'Chamundi Hill Palace Centre de Soins Ayurvédiques',
  addressLabel: 'Adresse',
  phoneLabel: 'Téléphone',
  emailLabel: 'E-mail',
  availabilityLabel: 'Disponibilité',
  openYearRound: "Ouvert toute l'année.",
  websiteLabel: 'Site Web',
  chatWhatsapp: 'Discuter sur WhatsApp'
};

de.contactPage = {
  title: 'Kontaktieren Sie Uns',
  subtitle: 'Ihre Reise zum Wohlbefinden Beginnt Hier',
  breadcrumb: 'Kontakt',
  getInTouch: 'In Kontakt Treten',
  connectTitle: 'Verbinden Sie Sich Mit Uns',
  connectDesc: 'Ob Fragen zu Behandlungen, Aufenthalt oder Paketen — unser Team steht Ihnen jederzeit zur Seite.',
  quickContact: 'Schneller Kontakt',
  fullName: 'Vollständiger Name',
  namePlaceholder: 'Ihr vollständiger Name',
  emailAddress: 'E-Mail-Adresse',
  phone: 'Telefonnummer',
  interest: 'Behandlungsinteresse',
  selectTreatment: 'Behandlung auswählen',
  generalEnquiry: 'Allgemeine Anfrage',
  message: 'Nachricht',
  msgPlaceholder: 'Erzählen Sie uns von Ihren Wellness-Zielen...',
  send: 'Anfrage Senden',
  sent: '✓ Anfrage Gesendet!',
  centerTitle: 'Chamundi Hill Palace Ayurveda-Behandlungszentrum',
  addressLabel: 'Adresse',
  phoneLabel: 'Telefon',
  emailLabel: 'E-Mail',
  availabilityLabel: 'Verfügbarkeit',
  openYearRound: 'Ganzjährig geöffnet.',
  websiteLabel: 'Webseite',
  chatWhatsapp: 'Auf WhatsApp Chatten'
};

en.feedbackPage = {
  title: 'Guest Experiences & Testimonials',
  subtitle: 'Real Stories from Real Guests',
  breadcrumb: 'Feedback',
  heroStats: {
    rated: 'Average Guest Rating',
    repeatGuests: 'Repeat Retreat Guests',
    certifiedDoctors: 'Certified Ayurvedic Doctors',
    panchakarma: 'Days Authentic Panchakarma'
  },
  videoSectionLabel: 'Video Reviews',
  videoSectionTitle: 'Hear Directly from Our Guests',
  videoSectionDesc: 'Watch authentic video testimonials recorded by guests during and after their healing stay at Chamundi Hill Palace.',
  reviewsLabel: 'Written Reviews',
  reviewsTitle: 'What Our Guests Say'
};

fr.feedbackPage = {
  title: 'Expériences & Témoignages des Clients',
  subtitle: 'De Vraies Histoires de Vrais Clients',
  breadcrumb: 'Avis',
  heroStats: {
    rated: 'Note Moyenne des Clients',
    repeatGuests: 'Clients Fidèles de la Retraite',
    certifiedDoctors: 'Médecins Ayurvédiques Certifiés',
    panchakarma: 'Jours de Panchakarma Authentique'
  },
  videoSectionLabel: 'Avis Vidéo',
  videoSectionTitle: 'Écoutez Directement nos Clients',
  videoSectionDesc: 'Regardez des témoignages vidéo authentiques enregistrés par nos clients pendant et après leur séjour au Chamundi Hill Palace.',
  reviewsLabel: 'Avis Écrits',
  reviewsTitle: 'Ce que Disent nos Clients'
};

de.feedbackPage = {
  title: 'Gästeerfahrungen & Erfahrungsberichte',
  subtitle: 'Echte Geschichten von echten Gästen',
  breadcrumb: 'Feedback',
  heroStats: {
    rated: 'Durchschnittliche Gästebewertung',
    repeatGuests: 'Stammgäste der Retraite',
    certifiedDoctors: 'Zertifizierte Ayurveda-Ärzte',
    panchakarma: 'Tage authentisches Panchakarma'
  },
  videoSectionLabel: 'Video-Bewertungen',
  videoSectionTitle: 'Hören Sie direkt von unseren Gästen',
  videoSectionDesc: 'Sehen Sie authentische Video-Erfahrungsberichte von unseren Gästen während und nach ihrem Aufenthalt im Chamundi Hill Palace.',
  reviewsLabel: 'Schriftliche Bewertungen',
  reviewsTitle: 'Was unsere Gäste sagen'
};

en.feedback = {
  heroStats: en.feedbackPage.heroStats,
  videoSectionLabel: en.feedbackPage.videoSectionLabel,
  videoSectionTitle: en.feedbackPage.videoSectionTitle,
  videoSectionDesc: en.feedbackPage.videoSectionDesc,
  reviewsLabel: en.feedbackPage.reviewsLabel,
  reviewsTitle: en.feedbackPage.reviewsTitle
};
fr.feedback = {
  heroStats: fr.feedbackPage.heroStats,
  videoSectionLabel: fr.feedbackPage.videoSectionLabel,
  videoSectionTitle: fr.feedbackPage.videoSectionTitle,
  videoSectionDesc: fr.feedbackPage.videoSectionDesc,
  reviewsLabel: fr.feedbackPage.reviewsLabel,
  reviewsTitle: fr.feedbackPage.reviewsTitle
};
de.feedback = {
  heroStats: de.feedbackPage.heroStats,
  videoSectionLabel: de.feedbackPage.videoSectionLabel,
  videoSectionTitle: de.feedbackPage.videoSectionTitle,
  videoSectionDesc: de.feedbackPage.videoSectionDesc,
  reviewsLabel: de.feedbackPage.reviewsLabel,
  reviewsTitle: de.feedbackPage.reviewsTitle
};

en.offeringsSection = {
  label: 'What We Offer',
  title: 'Holistic Ayurvedic Programs',
  duration: 'Duration',
  flowTitle: 'Treatment Flow',
  supervised: '*Supervised by certified Ayurvedic doctors',
  bookFlow: 'Book Program',
  items: {
    panchakarma: {
      title: "28 Days' Panchakarma",
      description: "Experience authentic Kerala Panchakarma at Chamundi Hill Palace. This 28-day program balances the Doshas, detoxifies the body, and restores lasting vitality through customized traditional purification therapies, Ayurvedic diet, and daily yoga under expert guidance.",
      duration: '28 Days',
      step1: 'Deep oil massage (Abhyanga) and steam therapy (Svedana) loosen deep-seated cellular toxins.',
      step2: 'The five purification procedures safely eliminate metabolic waste from the biological channels.',
      step3: 'Rejuvenating herbs and structured diet rebuild digestive fire and secure lasting immunity.'
    },
    detox: {
      title: 'Body Detoxification',
      description: 'A comprehensive purification program designed to eliminate deep-seated metabolic waste, cleanse the bodily channels, and restore overall vital energy.',
      duration: '14 - 20 Days',
      step1: 'Preparation (Purvakarma) utilizing customized herbal steam baths and synchronized oil massages to liquefy toxins.',
      step2: 'Eliminative therapies (Pradhanakarma) specifically tailored to flush metabolic waste from biological channels.',
      step3: 'Rebuilding (Paschatkarma) using a restorative diet and specialized Ayurvedic herbs to lock in strength and immunity.'
    },
    rejuvenation: {
      title: 'Rejuvenation Program',
      description: 'Experience authentic Ayurvedic rejuvenation at Chamundi Hill Palace. Designed to restore energy and inner harmony, this program utilizes traditional Rasayana therapy, detoxifying oil massages, and custom nutrition to slow cellular aging and promote lasting wellness.',
      duration: '7 - 28 Days',
      step1: 'Detailed diagnosis determines your native body constitution and specific biological imbalances.',
      step2: 'Four-hand synchronized massages, herbal bags, and fresh organic meals revitalize tissues.',
      step3: 'Guided breathwork, yoga, and rasayana herbs lock in energy, brightness, and deep stability.'
    },
    yoga: {
      title: 'Yoga & Meditation',
      description: 'Experience guided yoga and meditation sessions tailored to your fitness level and Ayurvedic needs. Held in a peaceful hall surrounded by nature, these daily practices enhance flexibility, balance breathing, and bring calm to the mind.',
      duration: 'Daily Sessions',
      step1: 'Conscious breathing practices calm the nervous system and sweep debris from spiritual channels.',
      step2: 'Slow, customized physical postures stretch and tone lines in harmony with your doshic state.',
      step3: 'Guided visual meditation and yoga nidra transition the consciousness into peace.'
    },
    weightLoss: {
      title: 'Weight Loss Program',
      description: 'Discover natural weight management through Ayurveda at Chamundi Hill Palace. This holistic program combines traditional therapies like Udvartana, a customized metabolic diet, and daily yoga for sustainable fat reduction and overall vitality.',
      duration: '14 - 28 Days',
      step1: 'Dry herbal powders are massaged vigorously into the body to crack subcutaneous adipose deposits.',
      step2: 'Sweat chamber therapy liquefies toxins, stimulates metabolic paths, and cleanses the pores.',
      step3: 'A warming, light organic diet combined with detoxifying herbal decoctions sustains weight loss.'
    },
    stressRelief: {
      title: 'Stress Relief Program',
      description: 'Find calm and clarity with the Stress Relief Program at Chamundi Hill Palace. This holistic program combines traditional Ayurvedic therapies, gentle yoga, and a custom diet to ease tension, combat burnout, and restore mental peace.',
      duration: '14 - 21 Days',
      step1: 'Localized warm steam and rhythmic herbal bundle massages release physical tension nodes.',
      step2: 'Herbal paste is applied to the crown, followed by warm coconut milk dhara to soothe brainwaves.',
      step3: 'Gentle, cooling aromatherapy, meditation, and nerve-strengthening nutrition complete the reset.'
    }
  }
};

fr.offeringsSection = {
  label: 'Ce que Nous Offrons',
  title: 'Programmes Ayurvédiques Holistiques',
  duration: 'Durée',
  flowTitle: 'Déroulement du Soin',
  supervised: '*Supervisé par des médecins ayurvédiques certifiés',
  bookFlow: 'Réserver le Programme',
  items: {
    panchakarma: {
      title: 'Panchakarma de 28 Jours',
      description: 'Découvrez le véritable Panchakarma du Kérala au Chamundi Hill Palace. Ce programme de 28 jours équilibre les Doshas, élimine les toxines et restaure une vitalité durable.',
      duration: '28 Jours',
      step1: "Le massage à l'huile (Abhyanga) et le bain de vapeur (Svedana) libèrent les toxines profondes.",
      step2: 'Les cinq procédures de purification éliminent les déchets métaboliques en toute sécurité.',
      step3: 'Les plantes de rajeunissement et le régime structuré ravivent le feu digestif et l immunité.'
    },
    detox: {
      title: 'Détoxification du Corps',
      description: 'Un programme de purification complet conçu pour éliminer les déchets métaboliques profonds et nettoyer les canaux du corps.',
      duration: '14 - 20 Jours',
      step1: "Préparation (Purvakarma) avec bains de vapeur aux herbes et massages à l'huile synchronisés.",
      step2: 'Thérapies éliminatoires (Pradhanakarma) sur mesure pour évacuer les toxines.',
      step3: 'Reconstitution (Paschatkarma) grâce à une alimentation réparatrice et des plantes spécifiques.'
    },
    rejuvenation: {
      title: 'Programme de Rajeunissement',
      description: 'Vivez un rajeunissement ayurvédique authentique pour restaurer votre énergie et votre harmonie intérieure.',
      duration: '7 - 28 Jours',
      step1: 'Un diagnostic précis détermine votre constitution naturelle et vos déséquilibres.',
      step2: 'Massages synchronisés à quatre mains, pochons d herbes et repas bio revitalisants.',
      step3: 'Exercices de respiration, yoga et plantes Rasayana stabilisent l énergie et la sérénité.'
    },
    yoga: {
      title: 'Yoga & Méditation',
      description: 'Profitez de séances de yoga et de méditation guidées, adaptées à votre niveau et à vos besoins ayurvédiques.',
      duration: 'Séances Quotidiennes',
      step1: 'Respiration consciente pour apaiser le système nerveux et libérer les tensions.',
      step2: 'Postures physiques douces et personnalisées pour étirer et tonifier le corps.',
      step3: 'Méditation guidée et Yoga Nidra pour amener l esprit vers une paix profonde.'
    },
    weightLoss: {
      title: 'Programme de Perte de Poids',
      description: 'Découvrez la gestion naturelle du poids grâce à l Ayurveda avec l Udvartana et une nutrition métabolique.',
      duration: '14 - 28 Jours',
      step1: 'Massages aux poudres d herbes sèches pour stimuler la circulation et réduire les graisses.',
      step2: 'Bains de vapeur pour liquéfier les toxines et stimuler le métabolisme.',
      step3: 'Alimentation bio légère et décoctions de plantes pour pérenniser la perte de poids.'
    },
    stressRelief: {
      title: 'Programme Anti-Stress',
      description: 'Retrouvez calme et clarté grâce aux soins ayurvédiques traditionnels, au yoga doux et à une alimentation adaptée.',
      duration: '14 - 21 Jours',
      step1: 'Vapeurs locales et massages aux pochons d herbes pour dénouer les tensions physiques.',
      step2: 'Application de pâte d herbes et Shirodhara au lait de coco tiède pour apaiser l esprit.',
      step3: 'Aromathérapie apaisante, méditation et nutrition renforçant les nerfs.'
    }
  }
};

de.offeringsSection = {
  label: 'Was Wir Anbieten',
  title: 'Ganzheitliche Ayurveda-Programme',
  duration: 'Dauer',
  flowTitle: 'Behandlungsablauf',
  supervised: '*Betreut von zertifizierten Ayurveda-Ärzten',
  bookFlow: 'Programm Buchen',
  items: {
    panchakarma: {
      title: '28 Tage Panchakarma',
      description: 'Erleben Sie authentisches Kerala-Panchakarma im Chamundi Hill Palace. Das 28-Tage-Programm bringt die Doshas ins Gleichgewicht und reinigt den Körper gründlich.',
      duration: '28 Tage',
      step1: 'Ölmassage (Abhyanga) und Dampfbad (Svedana) lösen tief sitzende Giftstoffe.',
      step2: 'Die fünf Reinigungsverfahren scheiden Stoffwechselabfälle sicher aus.',
      step3: 'Verjüngungskräuter und gezielte Ernährung stärken die Verdauung und Immunität.'
    },
    detox: {
      title: 'Körperentgiftung',
      description: 'Ein umfassendes Reinigungsprogramm zur Beseitigung tiefer Stoffwechselabfälle und Erneuerung der Körperkanäle.',
      duration: '14 - 20 Tage',
      step1: 'Vorbereitung (Purvakarma) mit Kräuterdampfbädern und Synchronmassagen.',
      step2: 'Hauptbehandlungen (Pradhanakarma) zur gezielten Ausleitung von Giftstoffen.',
      step3: 'Nachbehandlung (Paschatkarma) mit aufbauender Ernährung und Kräutern.'
    },
    rejuvenation: {
      title: 'Verjüngungsprogramm',
      description: 'Authentische ayurvedische Verjüngung zur Wiederherstellung von Energie und innerer Harmonie.',
      duration: '7 - 28 Tage',
      step1: 'Diagnose bestimmt Ihre Konstitution und individuelle Ungleichgewichte.',
      step2: 'Synchrone Vierhandmassagen, Kräuterstempel und Bio-Mahlzeiten.',
      step3: 'Atemübungen, Yoga und Rasayana-Kräuter schenken tiefe Stabilität.'
    },
    yoga: {
      title: 'Yoga & Meditation',
      description: 'Geführte Yoga- und Meditationseinheiten, angepasst an Ihr Fitnessniveau und Ihre ayurvedischen Bedürfnisse.',
      duration: 'Tägliche Einheiten',
      step1: 'Bewusste Atemübungen beruhigen das Nervensystem.',
      step2: 'Sanfte Asanas dehnen und kräftigen den Körper im Einklang mit den Doshas.',
      step3: 'Geführte Meditation und Yoga Nidra führen zu tiefem inneren Frieden.'
    },
    weightLoss: {
      title: 'Gewichtsverlust-Programm',
      description: 'Natürliche Gewichtsregulierung durch Ayurveda mit Udvartana-Massagen und gezielter Ernährung.',
      duration: '14 - 28 Tage',
      step1: 'Trockene Kräuterpulvermassagen zur Stimulation des Fettstoffwechsels.',
      step2: 'Dampftherapie regt den Stoffwechsel an und reinigt die Poren.',
      step3: 'Leichte Bio-Ernährung und Entgiftungstees sichern den Erfolg.'
    },
    stressRelief: {
      title: 'Anti-Stress-Programm',
      description: 'Finden Sie Ruhe und Klarheit mit ayurvedischen Therapien, sanftem Yoga und nahrhafter Diät.',
      duration: '14 - 21 Tage',
      step1: 'Lokale Kräuterdampf- und Stempelmassagen lösen Verspannungen.',
      step2: 'Kräuterpaste und Kokosmilch-Guss beruhigen die Nerven.',
      step3: 'Kühlende Aromatherapie, Meditation und Nervennahrung.'
    }
  }
};

en.history = {
  label: 'Our Heritage',
  title: 'The Chamundi Hill Palace Legacy',
  description: 'From the seed of vision in 1935 to our Silver Jubilee as a global Ayurvedic destination, our journey has been defined by tradition, compassion, and dedication to holistic healing.',
  exploreHistory: 'Explore History',
  retreatFocus: 'Retreat Focus',
  retreatFocusVal: 'Authentic Kerala Heritage',
  historicalNarrative: 'Historical Narrative',
  foundingPrinciples: 'Founded on the principles of traditional Indian Ayurveda & Uncompromising Quality',
  authenticLegacy: 'Certified Authentic Legacy',
  closeView: 'Close View',
  timeline: {
    '1935': {
      year: '1935',
      title: "Crafting tomorrow's Royalty",
      caption: 'The foundation of vision, hard work and a legacy in the making.',
      description: 'Nestled atop the Nadukani Hills, the visionaries of Chamundi Hill began surveying the pristine land. Laborers worked painstakingly to clear paths, discover indigenous herbs, and plan the estate. The fertile red soil and cooling hill breeze made this the perfect sanctuary for a healing legacy.',
      infographicLabel: 'Acres Cleared',
      infographicValue: '15+',
      badge: 'The Seed of Vision'
    },
    '1945': {
      year: '1945',
      title: 'Where Dreams took root in',
      caption: 'A vision takes shape and a dream begins to flourish.',
      description: 'The foundations of the estate structures were laid using local timber, mountain stones, and traditional craftsmanship. The primary house construction began under the watchful eye of the family elders, symbolizing a dream taking deep structural roots in the soil.',
      infographicLabel: 'Traditional Pillars',
      infographicValue: '24',
      badge: 'Structural Roots'
    },
    '1963': {
      year: '1963',
      title: 'A Divine Union, a Healing Legacy Begins',
      caption: 'Tradition, compassion and care come together to serve humanity.',
      description: 'A blessed marriage union brought together two prominent families with deep roots in traditional Kerala wellness and architecture. This merger synthesized centuries of herbal knowledge and established a dedicated family mission of healing and community care.',
      infographicLabel: 'Combined Lineages',
      infographicValue: '2',
      badge: 'A Sacred Merger'
    },
    '1990': {
      year: '1990',
      title: 'Transformation in progress since',
      caption: 'Evolving with time, staying true to purpose.',
      description: 'As the legacy passed to the next generation, the estate underwent extensive renovation to adapt heritage facilities for guests while carefully preserving the authentic Nalukettu courtyard architecture, creating a perfect balance of heritage and wellness comfort.',
      infographicLabel: 'Preserved Courtyards',
      infographicValue: '100%',
      badge: 'Heritage Revival'
    },
    '1999': {
      year: '1999',
      title: "Chamundi's Legacy begins. Grand Inauguration",
      caption: 'A legacy of healing and service officially begins.',
      description: 'The formal inauguration of Chamundi Hill Palace as a dedicated heritage Ayurvedic retreat. The lighting of the traditional brass Nilavilakku lamp by community elders officially opened the sanctuary to seekers of physical and spiritual restoration.',
      infographicLabel: 'Sacred Lamp Lit',
      infographicValue: "Nov '99",
      badge: 'Grand Opening'
    },
    '2000': {
      year: '2000',
      title: 'The Rise of a Healing Haven',
      caption: 'A place where wellness grows and lives are transformed.',
      description: 'The sanctuary expanded its organic herb and spice gardens, laying down structured Panchakarma courses supervised by resident Ayurvedic doctors. Seekers from surrounding states and abroad began arriving to experience authentic, natural cures.',
      infographicLabel: 'Medicinal Species',
      infographicValue: '150+',
      badge: 'Retreat Expansion'
    },
    'global-era': {
      year: 'Global Era',
      title: 'The Global Destination for Ayurveda',
      caption: 'Where ancient wisdom heals and wellness knows no borders.',
      description: 'Chamundi Hill Palace gained international recognition. Accredited for its absolute authenticity, the retreat welcomed guests from over 50 countries, spreading the therapeutic benefits of genuine Kerala Panchakarma and Hatha Yoga globally.',
      infographicLabel: 'Global Guests From',
      infographicValue: '50+ Countries',
      badge: 'Global Acclaim'
    },
    '2024': {
      year: '25 Years',
      title: '25 Years of Ayurvedic Excellence',
      caption: 'Om, Shanti, Shanti, Shanti. A journey of 25 years. A promise for generations.',
      description: 'Celebrating 25 years of formal healing operations and a century-long foundational journey. Chamundi Hill Palace stands proud as an eco-conscious, strictly authentic sanctuary where ancient science meets tranquil nature, promising peace for generations to come.',
      infographicLabel: 'Healing Years',
      infographicValue: '25+',
      badge: 'Silver Jubilee'
    }
  }
};

fr.history = {
  label: 'Notre Patrimoine',
  title: "L'Héritage de Chamundi Hill Palace",
  description: "De la vision initiale en 1935 à notre Jubilé d'Argent en tant que destination ayurvédique mondiale, notre parcours s'est caractérisé par la tradition, la compassion et le dévouement aux soins holistiques.",
  exploreHistory: "Explorer l'Histoire",
  retreatFocus: 'Focus de la Retraite',
  retreatFocusVal: 'Héritage Authentique du Kerala',
  historicalNarrative: 'Récit Historique',
  foundingPrinciples: "Fondé sur les principes de l'Ayurveda traditionnel indien et une qualité sans compromis",
  authenticLegacy: 'Héritage Authentique Certifié',
  closeView: 'Fermer',
  timeline: {
    '1935': {
      year: '1935',
      title: 'Façonner la Royauté de Demain',
      caption: "La fondation d'une vision, du travail acharné et un héritage en devenir.",
      description: 'Niché au sommet des collines de Nadukani, les visionnaires de Chamundi Hill ont commencé à explorer cette terre préservée. Des ouvriers ont débroussaillé les sentiers, découvert des herbes indigènes et planifié le domaine.',
      infographicLabel: 'Hectares Dégagés',
      infographicValue: '15+',
      badge: "La Graine d'une Vision"
    },
    '1945': {
      year: '1945',
      title: 'Où les Rêves ont pris Racines',
      caption: "Une vision prend forme et un rêve commence à s'épanouir.",
      description: 'Les fondations du domaine ont été posées avec du bois local, des pierres de montagne et un artisanat traditionnel. La construction de la maison principale a débuté sous l œil bienveillant des aînés.',
      infographicLabel: 'Piliers Traditionnels',
      infographicValue: '24',
      badge: 'Racines Structurelles'
    },
    '1963': {
      year: '1963',
      title: 'Une Union Divine, un Héritage Guérisseur Commence',
      caption: "Tradition, compassion et soins se réunissent pour servir l'humanité.",
      description: 'Un mariage béni a réuni deux familles éminentes ancrées dans le bien-être traditionnel du Kérala. Cette fusion a combiné des siècles de savoirs médicinaux et une mission familiale de soins.',
      infographicLabel: 'Lignées Combinées',
      infographicValue: '2',
      badge: 'Une Fusion Sacrée'
    },
    '1990': {
      year: '1990',
      title: 'Transformation en cours depuis',
      caption: 'Évoluer avec son temps, rester fidèle à son objectif.',
      description: 'Alors que l héritage passait à la génération suivante, le domaine a bénéficié d une rénovation majeure pour accueillir des clients tout en préservant l architecture authentique à cour intérieure Nalukettu.',
      infographicLabel: 'Patios Préservés',
      infographicValue: '100%',
      badge: 'Renouveau du Patrimoine'
    },
    '1999': {
      year: '1999',
      title: "Début de l'Héritage de Chamundi. Grande Inauguration",
      caption: 'Un héritage de guérison et de service commence officiellement.',
      description: 'Inauguration officielle du Chamundi Hill Palace en tant que retraite ayurvédique patrimoniale. L allumage de la lampe traditionnelle en laiton Nilavilakku a ouvert le sanctuaire aux visiteurs.',
      infographicLabel: 'Lampe Sacrée Allumée',
      infographicValue: 'Nov 1999',
      badge: 'Grande Ouverture'
    },
    '2000': {
      year: '2000',
      title: "L'Essor d'un Havre de Guérison",
      caption: 'Un lieu où le bien-être grandit et où les vies se transforment.',
      description: 'Le sanctuaire a agrandi ses jardins d herbes et d épices bio, instaurant des cures de Panchakarma structurées et supervisées par des médecins ayurvédiques résidents.',
      infographicLabel: 'Espèces Médicinales',
      infographicValue: '150+',
      badge: 'Expansion de la Retraite'
    },
    'global-era': {
      year: 'Ère Mondiale',
      title: "La Destination Mondiale pour l'Ayurveda",
      caption: 'Où la sagesse ancienne guérit et le bien-être ne connaît pas de frontières.',
      description: 'Chamundi Hill Palace a acquis une renommée internationale. Accréditée pour son authenticité, la retraite accueille des clients de plus de 50 pays.',
      infographicLabel: 'Invités du Monde de',
      infographicValue: '50+ Pays',
      badge: 'Reconnaissance Mondiale'
    },
    '2024': {
      year: '25 Ans',
      title: "25 Ans d'Excellence Ayurvédique",
      caption: 'Om, Shanti, Shanti, Shanti. Un voyage de 25 ans. Une promesse pour des générations.',
      description: 'Célébration de 25 ans de soins officiels et d un siècle d histoire. Chamundi Hill Palace est un sanctuaire éco-responsable et authentique où la science ancienne rencontre la nature sereine.',
      infographicLabel: 'Années de Guérison',
      infographicValue: '25+',
      badge: "Jubilé d'Argent"
    }
  }
};

de.history = {
  label: 'Unser Erbe',
  title: 'Das Erbe von Chamundi Hill Palace',
  description: 'Vom ersten Samenkorn der Vision im Jahr 1935 bis zu unserem silbernen Jubiläum als globales Ayurveda-Ziel war unsere Reise von Tradition, Mitgefühl und Hingabe an die ganzheitliche Heilung geprägt.',
  exploreHistory: 'Geschichte entdecken',
  retreatFocus: 'Fokus des Rückzugsortes',
  retreatFocusVal: 'Authentisches Kerala-Erbe',
  historicalNarrative: 'Historische Erzählung',
  foundingPrinciples: 'Gegründet auf den Prinzipien des traditionellen indischen Ayurveda & kompromissloser Qualität',
  authenticLegacy: 'Zertifiziertes authentisches Erbe',
  closeView: 'Schließen',
  timeline: {
    '1935': {
      year: '1935',
      title: 'Erschaffung des Adels von Morgen',
      caption: 'Das Fundament einer Vision, harter Arbeit und eines im Entstehen begriffenen Erbes.',
      description: 'Auf den Nadukani-Hügeln begannen die Visionäre von Chamundi Hill mit der Erkundung des unberührten Landes. Arbeiter ebneten Pfade, entdeckten einheimische Kräuter und planten das Anwesen.',
      infographicLabel: 'Geräumte Fläche',
      infographicValue: '15+ Hektar',
      badge: 'Der Samen der Vision'
    },
    '1945': {
      year: '1945',
      title: 'Wo Träume Wurzeln schlugen',
      caption: 'Eine Vision nimmt Gestalt an und ein Traum beginnt zu blühen.',
      description: 'Das Fundament des Anwesens wurde aus lokalem Holz, Bergsteinen und traditioneller Handwerkskunst gelegt. Der Hausbau begann unter den Augen der Familienältesten.',
      infographicLabel: 'Traditionelle Säulen',
      infographicValue: '24',
      badge: 'Strukturelle Wurzeln'
    },
    '1963': {
      year: '1963',
      title: 'Eine göttliche Vereinigung, ein Erbe der Heilung beginnt',
      caption: 'Tradition, Mitgefühl und Pflege kommen zusammen, um der Menschheit zu dienen.',
      description: 'Eine gesegnete Hochzeit verband zwei bedeutende Familien mit tiefen Wurzeln im Kerala-Ayurveda. Diese Vereinigung vereinte jahrhundertealtes Heilwissen.',
      infographicLabel: 'Vereinte Erblinien',
      infographicValue: '2',
      badge: 'Eine heilige Fusion'
    },
    '1990': {
      year: '1990',
      title: 'Transformation im Gange seit',
      caption: 'Sich mit der Zeit entwickeln, dem Zweck treu bleiben.',
      description: 'Mit dem Übergang auf die nächste Generation wurde das Anwesen umfassend renoviert, um Gäste aufzunehmen und gleichzeitig die Nalukettu-Innenhofarchitektur zu bewahren.',
      infographicLabel: 'Erhaltene Innenhöfe',
      infographicValue: '100%',
      badge: 'Erneuerung des Erbes'
    },
    '1999': {
      year: '1999',
      title: 'Chamundis Erbe beginnt. Große Einweihung',
      caption: 'Ein Erbe der Heilung und des Dienstes beginnt offiziell.',
      description: 'Feierliche Einweihung des Chamundi Hill Palace als traditionelles Ayurveda-Resort. Das Entzünden der Nilavilakku-Messinglampe eröffnete das Refugium für Gäste.',
      infographicLabel: 'Heilige Lampe entzündet',
      infographicValue: 'Nov 1999',
      badge: 'Große Eröffnung'
    },
    '2000': {
      year: '2000',
      title: 'Der Aufstieg eines Ortes der Heilung',
      caption: 'Ein Ort, an dem Wohlbefinden wächst und Leben verwandelt werden.',
      description: 'Erweiterung der Bio-Kräuter- und Gewürzgärten sowie Einführung strukturierter Panchakarma-Kuren unter ärztlicher Leitung.',
      infographicLabel: 'Heilpflanzenarten',
      infographicValue: '150+',
      badge: 'Erweiterung des Rückzugsortes'
    },
    'global-era': {
      year: 'Globale Ära',
      title: 'Das globale Reiseziel für Ayurveda',
      caption: 'Wo alte Weisheit heilt und Wohlbefinden keine Grenzen kennt.',
      description: 'Chamundi Hill Palace erlangte internationale Anerkennung. Für seine Authentizität ausgezeichnet, empfängt das Resort Gäste aus über 50 Ländern.',
      infographicLabel: 'Globale Gäste aus',
      infographicValue: '50+ Ländern',
      badge: 'Globale Anerkennung'
    },
    '2024': {
      year: '25 Jahre',
      title: '25 Jahre ayurvedische Spitzenklasse',
      caption: 'Om, Shanti, Shanti, Shanti. Eine Reise von 25 Jahren. Ein Versprechen für Generationen.',
      description: 'Feier von 25 Jahren offizieller Heilpraxis und eines hundertjährigen Fundaments. Chamundi Hill Palace steht stolz als umweltbewusstes, authentisches Refugium.',
      infographicLabel: 'Jahre der Heilung',
      infographicValue: '25+',
      badge: 'Silbernes Jubiläum'
    }
  }
};

en.dayAtChamundi = {
  label: 'Daily Life & Inclusions',
  title: 'A Day at Chamundi Hill Palace',
  description: 'Experience a balanced daily rhythm structured around authentic Ayurvedic healing, organic nutrition, guided yoga practices, and tranquil relaxation.',
  tabs: {
    schedule: 'Daily Schedule',
    nourishment: 'Organic Food & Nutrition',
    rooms: 'Accommodation',
    excursions: 'Excursions & Inclusions'
  },
  nourishmentTag: 'Farm to Table',
  nourishmentTitle: 'Fresh Organic Ayurvedic Meals',
  nourishmentDesc: 'Enjoy delicious, wholesome Keralan vegetarian dishes prepared according to Ayurvedic principles using organic vegetables and spices grown on our estate.',
  nourishmentBullet1: '100% Organic vegetarian meals customized to your doctor-prescribed Dosha diet plan.',
  nourishmentBullet2: 'Freshly harvested herbs, medicinal teas, and purified herbal water served throughout the day.',
  nourishmentBullet3: 'Friendly communal dining environment encouraging calm eating habits and peaceful atmosphere.',
  roomsTag: 'Restful Sanctuary',
  roomsTitle: 'Heritage Comfort & Tranquility',
  roomsDesc1: 'Relax in peaceful rooms designed with natural materials, cooling cross-breezes, and soothing views of tropical greenery.',
  roomsDesc2: 'Choose between palace guest rooms or hillside view cottages equipped with modern private amenities.',
  roomsBullet1: 'Ensuite private bathroom',
  roomsBullet2: 'Daily housekeeping & fresh linens',
  roomsBullet3: 'Scenic hill or garden balcony',
  roomsBullet4: 'Quiet, serene atmosphere',
  activity: 'Weekly Activity',
  complimentary: 'Included with stay',
  includedTitle: 'What is Included in Your Retreat Stay'
};

fr.dayAtChamundi = {
  label: 'Vie Quotidienne & Inclusions',
  title: 'Une Journée au Chamundi Hill Palace',
  description: 'Vivez un rythme quotidien équilibré, structuré autour de la guérison ayurvédique authentique, d une nutrition biologique, du yoga et de la relaxation.',
  tabs: {
    schedule: 'Programme Quotidien',
    nourishment: 'Cuisine Bio & Nutrition',
    rooms: 'Hébergement',
    excursions: 'Excursions & Inclusions'
  },
  nourishmentTag: 'De la Ferme à la Table',
  nourishmentTitle: 'Repas Bio Ayurvédiques Frais',
  nourishmentDesc: 'Dégustez de délicieux plats végétariens du Kerala préparés selon les principes ayurvédiques avec des légumes et épices de nos jardins.',
  nourishmentBullet1: 'Repas 100% végétariens et biologiques adaptés au plan de régime de votre médecin.',
  nourishmentBullet2: 'Herbes fraîchement récoltées, tisanes et eau infusée aux plantes servies toute la journée.',
  nourishmentBullet3: 'Espace repas convivial favorisant une alimentation calme et une atmosphère paisible.',
  roomsTag: 'Sanctuaire Paisible',
  roomsTitle: 'Confort Patrimonial & Sérénité',
  roomsDesc1: 'Détendez-vous dans des chambres conçues avec des matériaux naturels et une vue apaisante sur la verdure tropicale.',
  roomsDesc2: 'Choisissez entre les chambres du palais ou les cottages avec vue sur la colline.',
  roomsBullet1: 'Salle de bain privée attenante',
  roomsBullet2: 'Ménage quotidien et linge frais',
  roomsBullet3: 'Balcon avec vue sur les collines ou jardin',
  roomsBullet4: 'Atmosphère calme et sereine',
  activity: 'Activité Hebdomadaire',
  complimentary: 'Inclus dans le séjour',
  includedTitle: 'Ce qui est Inclus dans Votre Séjour de Retraite'
};

de.dayAtChamundi = {
  label: 'Tagesablauf & Inklusivleistungen',
  title: 'Ein Tag im Chamundi Hill Palace',
  description: 'Erleben Sie einen ausgewogenen Tagesrhythmus, strukturiert um authentische Ayurveda-Heilung, Bio-Ernährung, Yoga und Entspannung.',
  tabs: {
    schedule: 'Tagesablauf',
    nourishment: 'Bio-Essen & Ernährung',
    rooms: 'Unterkunft',
    excursions: 'Ausflüge & Inklusivleistungen'
  },
  nourishmentTag: 'Vom Feld auf den Tisch',
  nourishmentTitle: 'Frische ayurvedische Bio-Mahlzeiten',
  nourishmentDesc: 'Genießen Sie köstliche vegetarische Gerichte aus Kerala, zubereitet nach ayurvedischen Prinzipien mit biologischen Zutaten aus eigenem Anbau.',
  nourishmentBullet1: '100% vegetarische Bio-Mahlzeiten, individuell auf Ihren vom Arzt verordneten Diätplan abgestimmt.',
  nourishmentBullet2: 'Frisch geerntete Kräuter, Heiltees und Kräuterwasser den ganzen Tag über.',
  nourishmentBullet3: 'Freundlicher Speisebereich, der ein ruhiges Essverhalten und Entspannung fördert.',
  roomsTag: 'Ruhiges Refugium',
  roomsTitle: 'Traditioneller Komfort & Gelassenheit',
  roomsDesc1: 'Entspannen Sie in ruhigen Zimmern mit natürlichen Materialien und einem wohltuenden Blick ins Grüne.',
  roomsDesc2: 'Wählen Sie zwischen Palast-Gästezimmern und Cottages mit Blick auf die Hügel.',
  roomsBullet1: 'Eigenes Bad en suite',
  roomsBullet2: 'Tägliche Reinigung & frische Bettwäsche',
  roomsBullet3: 'Balkon mit Hügel- oder Gartenblick',
  roomsBullet4: 'Ruhige, friedliche Atmosphäre',
  activity: 'Wöchentliche Aktivität',
  complimentary: 'Im Aufenthalt enthalten',
  includedTitle: 'Was in Ihrem Retraite-Aufenthalt enthalten ist'
};

en.dayAtChamundi.schedule = [
  { time: "07:00 AM – 08:00 AM", title: "Morning Yoga & Meditation", desc: "Start your day in our peaceful nature shala. Gentle Hatha yoga, pranayama, and guided meditation to prepare your body and mind for healing." },
  { time: "08:00 AM – 10:00 AM", title: "Fresh Organic Breakfast", desc: "A freshly cooked, organic vegetarian breakfast served in our communal dining area, fostering connections with fellow seekers." },
  { time: "09:00 AM – 12:00 PM", title: "Morning Treatment Session", desc: "Your first personalized Ayurvedic therapy of the day (e.g. Abhyanga or Body Detoxification), precisely prescribed by the resident doctor." },
  { time: "01:00 PM – 02:00 PM", title: "Ayurvedic Lunch & Herbal Water", desc: "Sumptuous Keralan vegetarian cuisine matched to your diet plan. Infused Ayurvedic herbal water is served throughout the day." },
  { time: "02:30 PM Onwards", title: "Doctor Consultation & Rest", desc: "Meet with our resident doctor, always available to monitor your progress and tailor your treatment plan." },
  { time: "03:00 PM – 06:00 PM", title: "Evening Treatment & Care", desc: "Your second daily therapy session, supporting deep biological purification. Cleanse your channels and release blockages." },
  { time: "06:15 PM – 07:15 PM", title: "Evening Meditation & Sunset Yoga", desc: "A restorative evening session to integrate the physical benefits of the day's treatments and quiet the nervous system." },
  { time: "07:30 PM – 08:30 PM", title: "Community Vegetarian Dinner", desc: "Wind down with a nourishing dinner. Share experiences and mingle with the regular clientele in our friendly dining space." },
  { time: "08:30 PM Onwards", title: "Medication & Night Rest", desc: "Administration of prescribed Ayurvedic evening herbal medications followed by quiet rest to promote overnight deep healing and restorative sleep." }
];

en.dayAtChamundi.inclusionsList = [
  "Spacious ensuite room with private bathroom (in the main palace or quiet hillside view cottages)",
  "All freshly cooked vegetarian meals sourced from our organic gardens and spice plantations",
  "Tailored Ayurvedic diet plans supervised directly by our resident doctors",
  "Daily Ayurvedic treatments twice a day, plus natural medicines included in your plan",
  "Abdominal cleansing every 8th day of treatment (or as recommended by doctor)",
  "Detailed Ayurvedic consultation upon arrival and 24/7 doctor availability",
  "Specific take-home diet chart provided by the doctor on your departure day",
  "Daily morning & evening Yoga sessions (6 days a week, free for all residents)",
  "Airport pick up and drop (free one way for minimum 1 week, free both ways for min 2 weeks stay)",
  "Loving staff assistance 24 hours a day during your entire stay",
  "Complimentary Wi-Fi access available 24/7 throughout the premises",
  "Assistance with travel planning before and after your stay at the centre"
];

en.dayAtChamundi.activitiesList = [
  { title: "Spice Tour", desc: "Explore spice tours directly within our lush centre premises, discovering fresh cardamom, pepper, and local herbs." },
  { title: "Rubber Plantation Visit", desc: "Walk through the serene local rubber plantations, learning about the local agriculture and agricultural heritage." },
  { title: "Ancient Temple Excursion", desc: "Visit a historic, more than 100-year-old Hindu temple nearby to experience traditional spirituality and local culture." },
  { title: "Cooking Demonstration", desc: "Join our interactive Ayurvedic cooking classes held once every 15 days to learn how to prepare healthy meals back home." }
];

fr.dayAtChamundi.schedule = [
  { time: "07:00 – 08:00", title: "Yoga & Méditation du Matin", desc: "Commencez votre journée dans notre shala en pleine nature. Yoga Hatha doux, pranayama et méditation guidée pour préparer votre corps et votre esprit." },
  { time: "08:00 – 10:00", title: "Petit-Déjeuner Bio Frais", desc: "Un petit-déjeuner végétarien biologique fraîchement préparé, servi dans notre salle à manger conviviale." },
  { time: "09:00 – 12:00", title: "Session de Soin du Matin", desc: "Votre première thérapie ayurvédique personnalisée de la journée (ex. Abhyanga ou Détoxification), prescrite par le médecin." },
  { time: "13:00 – 14:00", title: "Déjeuner Ayurvédique & Eau aux Plantes", desc: "Somptueuse cuisine végétarienne du Kerala adaptée à votre régime. Eau d herbes ayurvédiques servie toute la journée." },
  { time: "14:30 Et la suite", title: "Consultation Médicale & Repos", desc: "Rencontrez notre médecin résident, toujours disponible pour suivre vos progrès et adapter vos soins." },
  { time: "15:00 – 18:00", title: "Soin du Soir & Soins", desc: "Votre deuxième session quotidienne de thérapie favorisant une purification biologique en profondeur." },
  { time: "18:15 – 19:15", title: "Méditation du Soir & Yoga au Coucher du Soleil", desc: "Une séance réparatrice pour intégrer les bienfaits des soins et apaiser le système nerveux." },
  { time: "19:30 – 20:30", title: "Dîner Végétarien Convivial", desc: "Terminez la journée avec un dîner nourrissant. Partagez vos expériences dans une atmosphère amicale." },
  { time: "20:30 Et la suite", title: "Médication & Repos Nocturne", desc: "Prise des remèdes ayurvédiques du soir suivis d un repos paisible pour favoriser la régénération nocturne." }
];

fr.dayAtChamundi.inclusionsList = [
  "Chambre spacieuse avec salle de bain privée (dans le palais principal ou cottages vue colline)",
  "Tous les repas végétariens frais issus de nos jardins et plantations biologiques",
  "Plans de régime ayurvédique sur mesure supervisés par nos médecins résidents",
  "Soins ayurvédiques quotidiens deux fois par jour et médicaments naturels inclus",
  "Nettoyage abdominal tous les 8 jours de traitement (ou selon recommandation médicale)",
  "Consultation ayurvédique détaillée à l arrivée et disponibilité médicale 24h/24",
  "Plan de régime personnalisé à emporter fourni par le médecin le jour du départ",
  "Sessions de Yoga quotidiennes matin et soir (6 jours par semaine, gratuites)",
  "Transfert aéroport aller ou retour offert (dès 1 semaine de séjour) ou aller-retour (dès 2 semaines)",
  "Assistance chaleureuse du personnel 24 heures sur 24 durant tout votre séjour",
  "Accès Wi-Fi gratuit disponible 24h/24 dans tout l établissement",
  "Aide à l organisation des déplacements avant et après votre séjour"
];

fr.dayAtChamundi.activitiesList = [
  { title: "Visite des Épices", desc: "Découvrez nos plantations d épices bio (cardamome, poivre, herbes locales) directement sur le domaine." },
  { title: "Visite de la Plantation de Caoutchouc", desc: "Promenez-vous dans les plantations de caoutchouc environnantes pour découvrir l agriculture locale." },
  { title: "Excursion au Temple Ancien", desc: "Visitez un temple hindou centenaire pour vivre la spiritualité et la culture traditionnelles." },
  { title: "Démonstration de Cuisine Ayurvédique", desc: "Participez à nos cours de cuisine ayurvédique tous les 15 jours pour apprendre à cuisiner sainement chez vous." }
];

de.dayAtChamundi.schedule = [
  { time: "07:00 – 08:00 Uhr", title: "Morgen-Yoga & Meditation", desc: "Beginnen Sie den Tag in unserer friedvollen Natur-Shala mit sanftem Hatha Yoga, Pranayama und geführter Meditation." },
  { time: "08:00 – 10:00 Uhr", title: "Frisches Bio-Frühstück", desc: "Zubereitetes vegetarisches Bio-Frühstück im gemeinsamen Speisebereich." },
  { time: "09:00 – 12:00 Uhr", title: "Vormittags-Behandlung", desc: "Ihre erste individuelle Ayurveda-Therapie des Tages (z. B. Abhyanga oder Entgiftung), verordnet vom Arzt." },
  { time: "13:00 – 14:00 Uhr", title: "Ayurvedisches Mittagessen", desc: "Köchliche vegetarische Küche aus Kerala, abgestimmt auf Ihren Diätplan. Kräuterwasser steht den ganzen Tag bereit." },
  { time: "Ab 14:30 Uhr", title: "Arztkonsultation & Ruhe", desc: "Gespräch mit unserem Resident-Arzt zur Überwachung Ihres Fortschritts und Anpassung des Behandlungsplans." },
  { time: "15:00 – 18:00 Uhr", title: "Nachmittags-Behandlung", desc: "Ihre zweite tägliche Therapieeinheit zur tiefen biologischen Reinigung und Entlastung des Körpers." },
  { time: "18:15 – 19:15 Uhr", title: "Abend-Meditation & Sonnenuntergangs-Yoga", desc: "Sanfte Regeneration zur Beruhigung des Nervensystems und Festigung der Tageserfolge." },
  { time: "19:30 – 20:30 Uhr", title: "Gemeinsames vegetarisches Abendessen", desc: "Klingen Sie den Tag bei einem nahrhaften Abendessen und guten Gesprächen aus." },
  { time: "Ab 20:30 Uhr", title: "Medikation & Nachtruhe", desc: "Einnahme verordneter Kräutermedizin und anschließende Nachtruhe für optimale Erholung." }
];

de.dayAtChamundi.inclusionsList = [
  "Geräumiges Zimmer mit eigenem Bad (im Hauptpalast oder in ruhigen Cottages)",
  "Alle frisch zubereiteten vegetarischen Mahlzeiten aus eigenem Bio-Anbau",
  "Individuelle ayurvedische Ernährungspläne unter ärztlicher Leitung",
  "Zweimal tägliche Ayurveda-Behandlungen inkl. aller verordneten Naturarzneien",
  "Darmreinigung an jedem 8. Behandlungstag (oder nach ärztlicher Empfehlung)",
  "Ausführliche Erstkonsultation bei Anreise und 24/7 ärztliche Betreuung",
  "Individueller Ernährungsplan für zu Hause am Abreisetag",
  "Tägliche Yoga-Einheiten morgens & abends (6 Tage pro Woche, kostenlos)",
  "Kostenloser Flughafentransfer (einfach ab 1 Woche Aufenthalt, hin & zurück ab 2 Wochen)",
  "Liebevolle Betreuung durch das Personal rund um die Uhr",
  "Kostenfreies WLAN 24/7 auf dem gesamten Gelände",
  "Unterstützung bei der Reiseplanung vor und nach Ihrem Aufenthalt"
];

de.dayAtChamundi.activitiesList = [
  { title: "Gewürztour", desc: "Erkunden Sie unsere Bio-Gewürzgärten mit frischem Kardamom, Pfeffer und einheimischen Kräutern." },
  { title: "Kautschuk-Plantagen-Besuch", desc: "Spazieren Sie durch die ruhigen Kautschukplantagen und lernen Sie die lokale Landwirtschaft kennen." },
  { title: "Ausflug zum alten Tempel", desc: "Besuchen Sie einen über 100 Jahre alten Hindu-Tempel und erleben Sie traditionelle Kultur." },
  { title: "Koch-Demonstration", desc: "Nehmen Sie alle 15 Tage an interaktiven ayurvedischen Kochkursen teil." }
];

en.leadership = {
  label: "Leadership & Visionaries",
  title: "The Pillars of Chamundi Hill Palace",
  subtitle: "Meet our founding visionary, renowned Chief Vaidya, and operational leadership guiding 25+ years of authentic Ayurvedic healing and excellence.",
  members: {
    saroja: {
      name: "Mrs. Saroja Thampi",
      role: "Founder & Visionary",
      badge: "Founding Visionary",
      desc: "The visionary founder who established Chamundi Hill Palace, laying down the foundation of authentic Kerala Ayurveda, warm hospitality, and timeless heritage care."
    },
    sheela: {
      name: "Dr. Sheela V.G (BAMS)",
      role: "Chief Vaidya / Chief Doctor",
      badge: "23 Years of Excellence at Chamundi",
      desc: "Guiding our medical team with 23 years of dedicated Ayurvedic excellence at Chamundi, personalizing authentic Panchakarma & healing therapies for international guests."
    },
    jibu: {
      name: "Jibu C Joseph",
      role: "General Manager / Leadership",
      badge: "25 Years of Dedicated Leadership at Chamundi",
      desc: "Directing retreat operations and guest experience with 25 years of steadfast leadership, ensuring every seeker receives royalty-grade care and seamless hospitality."
    }
  }
};

fr.leadership = {
  label: "Direction & Visionnaires",
  title: "Les Piliers du Chamundi Hill Palace",
  subtitle: "Découvrez notre fondatrice visionnaire, notre célèbre Vaidya en Chef et notre équipe de direction dévoués à l excellence ayurvédique depuis 25 ans.",
  members: {
    saroja: {
      name: "Mme Saroja Thampi",
      role: "Fondatrice & Visionnaire",
      badge: "Fondatrice Visionnaire",
      desc: "La fondatrice visionnaire qui a créé le Chamundi Hill Palace, instaurant les valeurs fondamentales de l Ayurveda authentique du Kerala et du bien-être holistique."
    },
    sheela: {
      name: "Dr Sheela V.G (BAMS)",
      role: "Vaidya en Chef / Médecin-Chef",
      badge: "23 Ans d'Excellence au Chamundi",
      desc: "Dirige notre équipe médicale avec 23 ans d excellence ayurvédique dédiée au Chamundi, prescrivant des soins Panchakarma et des thérapies sur mesure."
    },
    jibu: {
      name: "Jibu C Joseph",
      role: "Directeur Général / Leadership",
      badge: "25 Ans de Leadership Dévoué au Chamundi",
      desc: "Supervise les opérations de la retraite et l expérience client avec 25 ans de leadership dévoué, garantissant un séjour serein et un accueil princier."
    }
  }
};

de.leadership = {
  label: "Führung & Visionäre",
  title: "Die Säulen von Chamundi Hill Palace",
  subtitle: "Lernen Sie unsere visionäre Gründerin, unsere renommierte Chef-Vaidya und unsere Betriebsleitung kennen, die seit über 25 Jahren für Spitzenleistung stehen.",
  members: {
    saroja: {
      name: "Frau Saroja Thampi",
      role: "Gründerin & Visionärin",
      badge: "Visionäre Gründerin",
      desc: "Die visionäre Gründerin von Chamundi Hill Palace, die den Grundstein für authentische Kerala-Ayurveda-Traditionen und ganzheitliche Pflege legte."
    },
    sheela: {
      name: "Dr. Sheela V.G (BAMS)",
      role: "Chef-Vaidya / Leitende Ärztin",
      badge: "23 Jahre Spitzenleistung bei Chamundi",
      desc: "Leitet unser medizinisches Team mit 23 Jahren engagierter Ayurveda-Erfahrung bei Chamundi und verschreibt maßgeschneiderte Panchakarma-Kuren."
    },
    jibu: {
      name: "Jibu C Joseph",
      role: "General Manager / Führung",
      badge: "25 Jahre engagierte Führung bei Chamundi",
      desc: "Verantwortet den Betrieb und die Gästebetreuung mit 25 Jahren engagierter Führung für ein erstklassiges Aufenthaltserlebnis."
    }
  }
};

en.testimonialsList = [
  {
    quote: "I had 3 wonderful weeks at Chamundi Hills Palace in July 2022, a beautiful place in the hills, the view is stunning and the sounds of the birds capture you. I was met with genuine warm hospitality, even before I arrived. After 3 weeks I achieved a change for my life, loving myself again after some difficult years, I am happy, positive and calm.",
    name: "Tina J",
    location: "Copenhagen, Denmark",
    date: "Aug 2022",
    initials: "TJ"
  },
  {
    quote: "More than a hotel, it's living in a large plantation house which provides ayurvedic treatment. It was really like staying with friends. The treatments are of quality and the food is flavourful and perfectly adapted to non-Indian taste buds.",
    name: "Sergio K",
    location: "Marseille, France",
    date: "Dec 2019",
    initials: "SK"
  },
  {
    quote: "A hidden gem. I have visited this place 5 or 6 times. It is my favourite Centre in Kerala. Very authentic. The entire staff (or rather family) are wonderful and really cannot do enough for you.",
    name: "Maria Caroline",
    location: "London, United Kingdom",
    date: "Dec 2019",
    initials: "MC"
  }
];

fr.testimonialsList = [
  {
    quote: "J'ai passé 3 semaines magnifiques au Chamundi Hill Palace en juillet 2022, un endroit merveilleux dans les collines, la vue est splendide et le chant des oiseaux vous émerveille. J'ai été accueillie avec une hospitalité chaleureuse et authentique. Après 3 semaines, j'ai accompli un vrai changement dans ma vie : m'aimer à nouveau après des années difficiles. Je suis heureuse, positive et apaisée.",
    name: "Tina J",
    location: "Copenhague, Danemark",
    date: "Août 2022",
    initials: "TJ"
  },
  {
    quote: "Plus qu'un hôtel, c'est comme vivre dans une grande demeure de plantation offrant des soins ayurvédiques. C'était vraiment comme séjourner chez des amis. Les soins sont de haute qualité et la cuisine est savoureuse, parfaitement adaptée aux palais occidentaux.",
    name: "Sergio K",
    location: "Marseille, France",
    date: "Déc 2019",
    initials: "SK"
  },
  {
    quote: "Un joyau caché. J'ai visité cet endroit 5 ou 6 fois. C'est mon centre préféré au Kerala. Très authentique. Tout le personnel (ou plutôt la famille) est merveilleux et aux petits soins pour vous.",
    name: "Maria Caroline",
    location: "Londres, Royaume-Uni",
    date: "Déc 2019",
    initials: "MC"
  }
];

de.testimonialsList = [
  {
    quote: "Ich hatte im Juli 2022 3 wunderbare Wochen im Chamundi Hill Palace, einem wunderschönen Ort in den Hügeln. Die Aussicht ist atemberaubend und der Gesang der Vögel verzaubert einen. Schon vor meiner Ankunft wurde ich mit echter Herzlichkeit empfangen. Nach 3 Wochen habe ich eine Lebensveränderung erreicht: Ich liebe mich nach einigen schwierigen Jahren wieder selbst und bin glücklich, positiv und ruhig.",
    name: "Tina J",
    location: "Kopenhagen, Dänemark",
    date: "Aug 2022",
    initials: "TJ"
  },
  {
    quote: "Mehr als ein Hotel: Es ist das Leben in einem großen Plantagenhaus, das ayurvedische Behandlungen anbietet. Es war wirklich wie ein Aufenthalt bei Freunden. Die Behandlungen sind von höchster Qualität und das Essen ist schmackhaft und perfekt auf westliche Gaumen abgestimmt.",
    name: "Sergio K",
    location: "Marseille, Frankreich",
    date: "Dez 2019",
    initials: "SK"
  },
  {
    quote: "Ein verstecktes Juwel. Ich habe diesen Ort 5 oder 6 Mal besucht. Es ist mein Lieblingszentrum in Kerala. Sehr authentisch. Das gesamte Team (oder vielmehr die Familie) ist wunderbar und tut wirklich alles für einen.",
    name: "Maria Caroline",
    location: "London, Vereinigtes Königreich",
    date: "Dez 2019",
    initials: "MC"
  }
];

en.feedbackCards = [
  {
    name: 'Wander23307748133',
    date: 'July 2023',
    title: 'A blessing in disguise',
    quote: "I was initially apprehensive about going to Chamundi Hill Palace as I knew absolutely nothing about it prior to going. I now write this on my 21st day here, and I can say that coming here was such a blessing. The location is absolutely scenic with breathtaking views. I walked in the jungle pathways almost every day. The staff was so kind and helpful, and they ensured that every need of mine was met. Dr. Sheela checked in on me daily. I came mainly for an eczema issue, and my skin has much improved since my arrival three weeks ago. Overall it was a rejuvenating experience, and I hope to return one day.",
  },
  {
    name: 'Barbs H',
    date: 'Jan 2023',
    title: 'Healthy, happy and homely',
    quote: "Thank you for making my second visit to Chamundi Hill Palace even more memorable than the first. I am in awe of the dedication and kindness of everyone there. The Ayurveda treatments are carried out with precision, and always with a smile. The yoga teacher has great knowledge and techniques that allow all the guests to participate whatever their level. The hilltop setting provides magnificent views. But it's the family atmosphere that Jibu, Dr. Sheela and all the team create that makes it so special. I feel rejuvenated and replenished!",
  },
  {
    name: 'Guest Review',
    date: 'Dec 2022',
    title: 'Getting near to paradise!',
    quote: "Great and best place to recover and relax from all stress caused from speeding in this new world. Go back to earth with your soul and body. Gaining back your health with healing Ayurveda therapy and enjoying the beautiful tropical forest from Chamundi Hill Palace. A great team from Ayurveda Dr Sheela, whose experience and knowledge in this 5000 yrs old natural medicine brings the whole visit a worth of traveling half of the world for it. I am returning home with a happy heart.",
  },
  {
    name: 'Tina J',
    date: 'Aug 2022',
    title: 'I achieved a beautiful change in my life',
    quote: "I had 3 wonderful weeks at Chamundi Hills Palace in July 2022, a beautiful place in the hills, the view is stunning and the sounds of the birds capture you. I was met with genuine warm hospitality, even before I arrived. The team around you are heartfelt, competent, helpful and supportive. After 3 weeks I achieved a change for my life, loving myself again after some difficult years, I am happy, positive and calm. My skin and eyes are pure and I have lost kilos.",
  },
  {
    name: 'Sergio K',
    date: 'Dec 2019',
    location: 'Marseille',
    title: 'A miraculous haven of peace',
    quote: "This is not our first ayurvedic stay in Kerala but the contrast with our previous experiences could not be greater. During our stay we were alone and this was wonderful! Total peace, with the staff doing wonders for our welfare. It was really like staying with friends. More than a hotel, it's living in a large plantation house which provides ayurvedic treatment. The treatments are of quality and the food is flavourful and perfectly adapted to non Indian taste buds.",
  },
  {
    name: 'Maria Caroline',
    date: 'Dec 2019',
    title: 'This place should have a waiting list',
    quote: "A hidden gem. I have visited this place 5 or 6 times. It is my favourite Centre in Kerala. Very authentic. The entire staff (or rather family) are wonderful and really cannot do enough for you. The treatments are powerful and unlike other centres they take their time. You have two treatments a day at least one 90mins to 2 hour treatment. Also 2x a day yoga/meditation. If you want some serious R&R in beautiful peaceful grounds in the hills then this is your place.",
  }
];

fr.feedbackCards = [
  {
    name: 'Wander23307748133',
    date: 'Juillet 2023',
    title: 'Une vraie bénédiction',
    quote: "Venir au Chamundi Hill Palace a été une véritable bénédiction. Le cadre est absolument magnifique avec des vues à couper le souffle. Le personnel est d'une grande bienveillance et le Dr Sheela m'a suivi quotidiennement. Une expérience merveilleusement régénérante.",
  },
  {
    name: 'Barbs H',
    date: 'Janv 2023',
    title: 'Sain, heureux et chaleureux',
    quote: "Merci d'avoir rendu mon second séjour au Chamundi Hill Palace encore plus mémorable. L'attention et la gentillesse de toute l'équipe sont exceptionnelles. Les soins ayurvédiques sont exécutés avec précision et sourire. L'atmosphère familiale créée par Jibu et le Dr Sheela est fantastique !",
  },
  {
    name: 'Avis Client',
    date: 'Déc 2022',
    title: 'Proche du paradis !',
    quote: "Le meilleur endroit pour se ressourcer et éliminer le stress. Retrouvez la santé grâce aux soins ayurvédiques authentiques au cœur de la forêt tropicale. L'expérience du Dr Sheela rend ce voyage inestimable.",
  },
  {
    name: 'Tina J',
    date: 'Août 2022',
    title: 'Un magnifique changement dans ma vie',
    quote: "J'ai passé 3 semaines magnifiques au Chamundi Hill Palace en juillet 2022, un endroit superbe dans les collines. J'ai été accueillie avec une hospitalité sincère. L'équipe est compétente et attentionnée. Après 3 semaines, j'ai retrouvé la sérénité, la positivité et le bonheur d'aimer ma vie.",
  },
  {
    name: 'Sergio K',
    date: 'Déc 2019',
    location: 'Marseille',
    title: 'Un havre de paix miraculeux',
    quote: "Plus qu'un hôtel, c'est comme vivre dans une grande demeure de plantation offrant des soins ayurvédiques. C'était vraiment comme séjourner chez des amis. Les soins sont de haute qualité et la cuisine est savoureuse, parfaitement adaptée aux palais occidentaux.",
  },
  {
    name: 'Maria Caroline',
    date: 'Déc 2019',
    title: 'Un lieu d exception',
    quote: "Un joyau caché. J'ai visité cet endroit 5 ou 6 fois. C'est mon centre préféré au Kerala. Très authentique. Tout le personnel (or plutôt la famille) est merveilleux et aux petits soins pour vous.",
  }
];

de.feedbackCards = [
  {
    name: 'Wander23307748133',
    date: 'Juli 2023',
    title: 'Ein wahrer Segen',
    quote: "Der Aufenthalt im Chamundi Hill Palace war ein echter Segen. Die Lage ist absolut malerisch mit atemberaubender Aussicht. Das Team war so herzlich und hilfsbereit. Dr. Sheela hat sich täglich um mich gekümmert. Eine rundum verjüngende Erfahrung!",
  },
  {
    name: 'Barbs H',
    date: 'Jan 2023',
    title: 'Gesund, glücklich und familiär',
    quote: "Vielen Dank, dass Sie meinen zweiten Besuch im Chamundi Hill Palace noch unvergesslicher gemacht haben. Die Ayurveda-Therapien werden mit Präzision und stets mit einem Lächeln durchgeführt. Die familiäre Atmosphäre von Jibu, Dr. Sheela und dem gesamten Team ist einmalig!",
  },
  {
    name: 'Gästebewertung',
    date: 'Dez 2022',
    title: 'Dem Paradies so nah!',
    quote: "Der beste Ort, um sich vom Alltagsstress zu erholen. Erlangen Sie Ihre Gesundheit mit heilender Ayurveda-Therapie inmitten des tropischen Waldes zurück. Die langjährige Erfahrung von Dr. Sheela macht diesen Aufenthalt unbezahlbar.",
  },
  {
    name: 'Tina J',
    date: 'Aug 2022',
    title: 'Eine wunderschöne Lebensveränderung',
    quote: "Ich hatte im Juli 2022 3 wunderbare Wochen im Chamundi Hill Palace. Ein wunderschöner Ort in den Hügeln. Schon vor meiner Ankunft wurde ich mit echter Herzlichkeit empfangen. Nach 3 Wochen fühle ich mich glücklich, positiv und voller innerer Ruhe.",
  },
  {
    name: 'Sergio K',
    date: 'Dez 2019',
    location: 'Marseille',
    title: 'Ein fantastischer Ort der Ruhe',
    quote: "Mehr als ein Hotel: Es ist das Leben in einem großen Plantagenhaus, das ayurvedische Behandlungen anbietet. Es war wirklich wie ein Aufenthalt bei Freunden. Die Behandlungen sind von höchster Qualität und das Essen ist schmackhaft und perfekt abgestimmt.",
  },
  {
    name: 'Maria Caroline',
    date: 'Dez 2019',
    title: 'Ein echter Geheimtipp',
    quote: "Ein verstecktes Juwel. Ich habe diesen Ort 5 oder 6 Mal besucht. Es ist mein Lieblingszentrum in Kerala. Sehr authentisch. Das gesamte Team (oder vielmehr die Familie) ist wunderbar und tut wirklich alles für einen.",
  }
];

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(frPath, JSON.stringify(fr, null, 2), 'utf8');
fs.writeFileSync(dePath, JSON.stringify(de, null, 2), 'utf8');

console.log('Successfully updated JSON files.');
