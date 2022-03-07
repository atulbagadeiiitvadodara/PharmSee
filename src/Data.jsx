const DATA = [
  {
    id: 1,
    title: "Emcof Junior Cough Syrup 100 ml",
    price: 750,
    description:
      "Emcof is a 100% natural product with 11 powerful herbs. Exported to 8 Countries. Antimicrobial property Anti-allergic property Analgesic property.",
    image: "https://www.netmeds.com/images/product-v1/600x600/885319/emcof_junior_cough_syrup_100_ml_0.jpg",
    category: "Cold",
    rating: "4.3",
  },
  {
    id: 2,
    title: "Kapiva Wheat Grass Juice 1 ltr",
    price: 460,
    description:
      "Detoxifier. Rejuvenates ageing cells and boosts metabolism. Skin Cleanser.",
    image: "https://www.netmeds.com/images/product-v1/600x600/821307/kapiva_wheat_grass_juice_1_ltr_0_2.jpg",
    category: "Ayush",
    rating: "3.8",
  },
  {
    id: 3,
    title: "Kapiva Wheat Grass Juice 1 ltr",
    price: 497.50,
    description:
      "Wellbeing Nutrition Melts All Natural Restful Sleep is a Clinically Proven sleep supplement formula that supports the natural process of the body to fall asleep. With patented German Nano Technology Melts is 100% bioactive, Non-Habit Forming, Fast-acting and Drug-Free. Made with Plant-Based Melatonin, Suntheanine L-Theanine, Valerian Root, Himalayan Tagara, GABA, Passion Flower, 5-HTP, Chamomile and Vitamin B6.",
    image: "https://www.netmeds.com/images/product-v1/600x600/954870/wellbeing_nutrition_melts_into_a_restful_sleep_oral_thin_strip_30s_0_0.jpg",
    category: "Fitness",
    rating: "4.9",
  },
  {
    id: 4,
    title: "Nutrafirst Salmon Fish Oil Omega-3 Capsule 60's",
    price: 5974.08,
    description:
      "Wellbeing Nutrition Melts All Natural Restful Sleep is a Clinically Proven sleep supplement formula that supports the natural process of the body to fall asleep. With patented German Nano Technology Melts is 100% bioactive, Valerian Root, Himalayan Tagara, GABA, Passion Flower, 5-HTP, Chamomile and Vitamin B6.",
    image: "https://www.netmeds.com/images/product-v1/600x600/906366/nutrafirst_salmon_fish_oil_omega_3_capsule_60s_0_1.jpg",
    category: "Fitness",
    rating: "5",
  },
  {
    id: 5,
    title: "Bioderma Sebium Gel Moussant 100 ml",
    price: 840,
    description:
      "A facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne.",
    image: "https://www.netmeds.com/images/product-v1/600x600/411655/bioderma_sebium_gel_moussant_100_ml_0.jpg",
    category: "Beauty",
    rating: "4.7",
  },
  {
    id: 6,
    title: "Bioderma Sensibio H2O Micellar Solution 250 ml",
    price: 900,
    description:
      "A micellar solution consists of a dispersion of micelles in a solvent (most usually water). Micelles consist of aggregated amphiphiles, and in a micellar solution these are in equilibrium with free, unaggregated amphiphiles.",
    image: "https://www.netmeds.com/images/product-v1/600x600/857265/bioderma_sensibio_h2o_micellar_solution_250_ml_0.jpg",
    category: "Beauty",
    rating: "2.7",
  },
  {
    id: 7,
    title: "Dr. Vaidya's Herbo24Turbo Capsule (Pack of 3 x 30's)",
    price: 340.60,
    description:
      "Herbo 24 Turbo Plus is a natural Ayurvedic supplement for male wellness, it contains a blend of potent Ayurvedic herbs such as Shuddha Shilajit, Kaunch Beej, Ashwagandha, Salam Panja, Gokhru, and Swarna Bhasma has proven to have therapeutic benefits. Regular supplementation with such herbs is known to improve overall wellness in males and its polyherbal formulation promotes vitality and vigor in men. Herbo 24 Turbo Plus should be used strictly in accordance with the dosage guidelines.",
    image: "https://www.netmeds.com/images/product-v1/600x600/919949/dr_vaidyas_herbo_24_turbo_plus_capsule_30s_0_0.jpg",
    category: "Ayush",
    rating: "4.7",
  },
  {
    id: 8,
    title: "Xlear Adult Natural Saline Nasal Spray for Sinus and Allergy Relief (Pack of 5 x 10 ml)",
    price: 1215,
    description:
      "Xlear Nasal Spray is World’s No. 1 Sinus Relief Natural product imported from the USA. Normal saline nasal sprays can dry out the nasal passage, actually leaving it more irritated and susceptible to external contaminants. But with the addition of Xylitol, Xlear Saline Nasal Spray with Xylitol will moisturize and soothe your sinus and nasal passages. Xylitol also has cleansing benefits; it almost acts like soap for your nose. Xlear effectively and safely alleviates congestion, open up the airway, and moisturizes and cleans the nose.",
    image: "https://www.netmeds.com/images/product-v1/600x600/906359/xlear_adult_natural_saline_nasal_spray_for_sinus_and_allergy_relief_pack_of_5_x_10_ml_0_0.jpg",
    category: "Cold",
    rating: "4.1",
  },
  {
    id: 9,
    title: "Bioderma Sensibio H2O Micellar Solution 250 ml",
    price: 255,
    description:
      "A micellar solution consists of a dispersion of micelles in a solvent (most usually water). Micelles consist of aggregated amphiphiles, and in a micellar solution these are in equilibrium with free, unaggregated amphiphiles.",
    image: "https://www.netmeds.com/images/product-v1/600x600/409486/cofsils_lozenges_ginger_lemon_10_s_0.jpg",
    category: "Cold",
    rating: "3.5",
  },
  {
    id: 10,
    title: "Renu Fresh Multi Purpose Solution 500 ml",
    price: 519.10,
    description:
      "Renu Fresh multi-purpose solution is specially formulated to work with your natural tears. Experience the feeling of wearing a fresh pair of lenses cushioned in moisture. Cleans loosens and removes accumulations of film, protein, other deposits, and debris from soft contact lenses. Removes protein most effectively when used daily. Destroys harmful micro-organisms on the surface of the lens. Rinses, stores, and wets lenses before insertion.",
    image: "https://www.netmeds.com/images/product-v1/600x600/108961/renu_fresh_multi_purpose_solution_500_ml_0_1.jpg",
    category: "Beauty",
    rating: "4.9",
  },
];

export default DATA;
