export type Publication = {
  id: number;              // 38, 37 ... 같은 번호
  year: string;            // "2025"
  title: string;
  authors: string;         // "Hongchul Shin, ..."
  venue: string;           // "Modern Physics Letters B"
  doiUrl?: string;         // "https://doi.org/..."
  cover?: string;          // "/journals/xxx.jpg" (없으면 placeholder)
  note?: string;           // "(under review)" 같은 추가 정보
};

export const publications: Publication[] = [
  {
    id: 38,
    year: "2025",
    authors: "Hongchul Shin, Taeyoung Yoon, Sungmin Yoon",
    title: "Closed-form physics-informed extension of Griffith’s law for HDPEC-retarded crack growth",
    venue: "Modern Physics Letters B",
    doiUrl: "https://doi.org/10.1142/S0217984925502720",
    cover: "/journals/mplb.jpg"
  },
  {
    id: 37,
    year: "2025",
    authors: "Chanui Park, Dogyun Byeon, Sungmin Yoon",
    title: "Molecular dynamics based nano-structural failure evaluation of the effect of grain size in CoCrCuFeNi high-entropy alloy at high temperature",
    venue: "Engineering Failure Analysis",
    doiUrl: "https://doi.org/10.1016/j.engfailanal.2025.110351",
    cover: "/journals/efa.jpg"
  },
  {
    id: 36,
    year: "2025",
    authors: "Sungmin Yoon, Dogyun Byeon, Yasuhiro Kimura, Yong Suk Oh, Yuhki Toku, Yang Ju",
    title: "Effect of MA–SPS–PA processing on the microstructure and compression-compression fatigue behavior of a CoCrFeMnNi high entropy alloy",
    venue: "Journal of Materials Research and Technology",
    doiUrl: "https://doi.org/10.1016/j.jmrt.2025.09.098",
    cover: "/journals/jmrt.jpg"
  },
  {
    id: 35,
    year: "2025",
    authors: "Shaojie Gu, Daisuke Kobayashi, Sungmin Yoon, Chang Liu, Yanhong Peng, Yi Cui, Yasuhiro Kimura, Yuhki Toku, Yasuyuki Morita, Yang Ju",
    title: "Electric current-induced crack healing: mechanisms and scale-specific insights",
    venue: "International Journal of Fatigue",
    doiUrl: "https://doi.org/10.1016/j.ijfatigue.2025.109171",
    cover: "/journals/ijf.jpg"
  },
  {
    id: 34,
    year: "2025",
    authors: "Hongchul Shin, Taeyoung Yoon, Sungmin Yoon",
    title: "Fatigue life predictor: predicting fatigue life of metallic material using LSTM with a contextual attention model",
    venue: "RSC Advances",
    doiUrl: "https://doi.org/10.1039/d5ra01578b",
    cover: "/journals/rsca.jpg"
  },
  {
    id: 33,
    year: "2024",
    authors: "Xinming Yan, Shaojie Gu, Sungmin Yoon, Yasuhiro Kimura, Daisuke Kobayashi, Yang Ju, Yuhki Toku",
    title: "Restoring Plasticity in Nickel-Based Superalloy Using High-Density Pulsed Electric Current",
    venue: "Advanced Engineering Materials",
    doiUrl: "https://doi.org/10.1002/adem.202401409",
    cover: "/journals/aem.jpg"
  },
  {
    id: 32,
    year: "2024",
    authors: "Xinming Yan, Sungmin Yoon, Shaojie Gu, Yasuhiro Kimura, Daisuke Kobayashi, Yang Ju, Yuhki Toku",
    title: "Elevating fatigue life in nickel-based superalloys through suppression of persistent slip bands/markings via high-density pulsed electric current treatment",
    venue: "JSME Mechanical Engineering Journal",
    doiUrl: "https://doi.org/10.1299/mej.24-00178",
    cover: "/journals/jsme.jpg"
  },
  {
    id: 31,
    year: "2024",
    authors: "Sungmin Yoon, Yasuhiro Kimura, Yang Ju, Yuhki Toku",
    title: "Fatigue damage recovery and enhanced fatigue limit of austenitic stainless steel using multiple high-density pulsed electric currents",
    venue: "International Journal of Pressure Vessels and Piping",
    doiUrl: "https://doi.org/10.1016/j.ijpvp.2024.105178",
    cover: "/journals/ijpvp.jpg"
  },
  {
    id: 30,
    year: "2024",
    authors: "Md Sultan Mahmud, Shaojie Gu, Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Titanium-coated high-density Fe2O3 single crystal nanowire array for solar water splitting",
    venue: "Materials Express",
    doiUrl: "https://doi.org/10.1166/mex.2024.2704",
    cover: "/journals/mex.jpg"
  },
  {
    id: 29,
    year: "2024",
    authors: "Xiaoming Yu, Shaojie Gu, Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Annealing Effect of High-Density Pulsed Electric Current Treatment on Cold-Rolled 6061 Aluminum Alloy",
    venue: "Journal of Materials Engineering and Performance",
    doiUrl: "https://doi.org/10.1007/s11665-023-08522-z",
    cover: "/journals/jmep.jpg"
  },
  {
    id: 28,
    year: "2024",
    authors: "Sungmin Yoon, Yasuhiro Kimura, Motoki Uchida, Yang Ju, Yuhki Toku",
    title: "High Temperature Tensile and Compressive Behaviors of Nanostructured Polycrystalline AlCoCrFeNi High Entropy Alloy: A Molecular Dynamics Study",
    venue: "ASME Journal of Engineering Materials and Technology",
    doiUrl: "https://doi.org/10.1115/1.4063802",
    cover: "/journals/asme_jemt.jpg"
  },
  {
    id: 27,
    year: "2024",
    authors: "Shaojie Gu, Chang Liu, Yuhki Toku, Yasuhiro Kimura, Sungmin Yoon, Shaoli Li, Yi Cui, Yang Ju",
    title: "Ultrahigh deformability of Ti-6Al-4V assisted by high-density pulsed electric current treatment",
    venue: "Journal of Alloys and Compounds",
    doiUrl: "https://doi.org/10.1016/j.jallcom.2023.172892",
    cover: "/journals/jac.jpg"
  },
  {
    id: 26,
    year: "2024",
    authors: "Seulgee Lee, Chayanaphat Chokradjaroen, Yasuyuki Sawada, Sungmin Yoon, Nagahiro Saito",
    title: "Regulated Phase Separation in Al–Ti–Cu–Co Alloys through Spark Plasma Sintering Process",
    venue: "Materials",
    doiUrl: "https://doi.org/10.3390/ma17020304",
    cover: "/journals/materials.jpg"
  },
  {
    id: 25,
    year: "2024",
    authors: "Yi Cui, Ichiro Takeuchi, Wenzhi Yang, Shaojie Gu, Sungmin Yoon, Toshiro Matsumoto",
    title: "Artificial neural network to predict the structural compliance of irregular geometries considering volume constraints",
    venue: "JSME Mechanical Engineering Journal",
    doiUrl: "https://doi.org/10.1299/mej.24-00002",
    cover: "/journals/jsme.jpg"
  },
  {
    id: 24,
    year: "2024",
    authors: "Sungmin Yoon, Masato Morii, Yasuhiro Kimura, Yuhki Toku",
    title: "Suppressing fatigue crack growth owing to welded joints of duplex stainless steel subjected to multiple high-density pulsed electric currents",
    venue: "JSME Mechanical Engineering Journal",
    doiUrl: "https://doi.org/10.1299/mej.24-00015",
    cover: "/journals/jsme.jpg"
  },
  {
    id: 23,
    year: "2024",
    authors: "Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku",
    title: "Molecular dynamics study of nanostructured polycrystalline CoCrCuFeNi high entropy alloy concerning temperature dependence of deformation-induced phase transformation",
    venue: "JSME Mechanical Engineering Journal",
    doiUrl: "https://doi.org/10.1299/mej.23-00551",
    cover: "/journals/jsme.jpg"
  },
  {
    id: 22,
    year: "2023",
    authors: "Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Overcoming the trade-off between strength and ductility in austenitic stainless steel using a high-density pulsed electric current",
    venue: "Materialia",
    doiUrl: "https://doi.org/10.1016/j.mtla.2023.101922",
    cover: "/journals/materialia.jpg"
  },
  {
    id: 21,
    year: "2023",
    authors: "Yi Cui, Sungmin Yoon, Shaojie Gu, Toru Takahashi, Toshiro Matsumoto",
    title: "A generalized exact volume constraint method for the topology optimization based on the nonlinear reaction-diffusion equation",
    venue: "Transactions of the Japan Society for Computational Methods in Engineering",
    doiUrl: "https://doi.org/10.60443/jascome.23.0_81",
    cover: "/journals/jascome.jpg"
  },
  {
    id: 20,
    year: "2023",
    authors: "Shaojie Gu, Chang Liu, Yasuhiro Kimura, Sungmin Yoon, Yi Cui, Xinming Yan, Yang Ju, Yuhki Toku",
    title: "Realizing strength–ductility synergy in a lean duplex stainless steel through enhanced TRIP effect via pulsed electric current treatment",
    venue: "Materials Science and Engineering: A",
    doiUrl: "https://doi.org/10.1016/j.msea.2023.145534",
    cover: "/journals/msea.jpg"
  },
  {
    id: 19,
    year: "2023",
    authors: "Jaewoong Jung, Shaojie Gu, Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Effect of high-density pulsed electric current on the formability of aluminum alloy",
    venue: "The International Journal of Advanced Manufacturing Technology",
    doiUrl: "https://doi.org/10.1007/s00170-023-11841-z",
    cover: "/journals/ijamt.jpg"
  },
  {
    id: 18,
    year: "2023",
    authors: "Sungmin Yoon, Yasuhiro Kimura, Shaojie Gu, Yuhki Toku, Yang Ju, Yi Cui",
    title: "Thermal stress-assisted formation of submicron pillars from a thin film of CoCrCuFeNi high entropy alloy: experiments and simulations",
    venue: "RSC Advances",
    doiUrl: "https://doi.org/10.1039/D3RA04759H",
    cover: "/journals/rsca.jpg"
  },
  {
    id: 17,
    year: "2023",
    authors: "Chang Liu, Shaojie Gu, Xinming Yan, Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Rapid microstructure modification of laser powder-bed fused superalloy IN718 using high-density pulsed electric current",
    venue: "Materials Today Communications",
    doiUrl: "https://doi.org/10.1016/j.mtcomm.2023.106892",
    cover: "/journals/mtcomm.jpg"
  },
  {
    id: 16,
    year: "2023",
    authors: "Jaewoong Jung, Sungmin Yoon, Shaojie Gu, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Influence of a high-density pulsed electric current on the fatigue behaviour of prestrained aluminium alloys",
    venue: "Engineering Failure Analysis",
    doiUrl: "https://doi.org/10.1016/j.engfailanal.2023.107230",
    cover: "/journals/efa.jpg"
  },
  {
    id: 15,
    year: "2023",
    authors: "Sungmin Yoon, Shaojie Gu, Shaoli Li, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Efficiency improvement of fatigue crack healing by multiple high-density pulsed electric currents: Application to austenitic stainless steel",
    venue: "Engineering Fracture Mechanics",
    doiUrl: "https://doi.org/10.1016/j.engfracmech.2023.109235",
    cover: "/journals/efm.jpg"
  },
  {
    id: 14,
    year: "2023",
    authors: "Shaoli Li, Shaojie Gu, Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Bin Liu, Yang Ju",
    title: "Effect of high-density pulsed electric current on residual stress relief and microstructural modification of cold-bent commercially pure titanium",
    venue: "Materials Today Communications",
    doiUrl: "https://doi.org/10.1016/j.mtcomm.2023.107082",
    cover: "/journals/mtcomm.jpg"
  },
  {
    id: 13,
    year: "2023",
    authors: "Chang Liu, Shaojie Gu, Xinming Yan, Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Rapid Microstructure Modification of Additively Manufactured Ni-Based Superalloy Using High-Density Pulsed Electric Current",
    venue: "SSRN",
    doiUrl: "http://dx.doi.org/10.2139/ssrn.4434853",
    cover: "/journals/ssrn.jpg"
  },
  {
    id: 12,
    year: "2023",
    authors: "Yang Ju, Shaojie Gu, Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku",
    title: "Rapid Texture Alleviation and Grain Refinement of Ni-Based Superalloy IN718 Induced by High-Density Pulsed Electric Current",
    venue: "ICEM20 Proceedings",
    doiUrl: "https://www.up.pt/arquivoweb/paginas.fe.up.pt/_icem20/proceedings_icem20/data/papers/20128.pdf",
    cover: "/journals/proceedings.jpg"
  },
  {
    id: 11,
    year: "2022",
    authors: "Sungmin Yoon, Yi Cui, Yasuhiro Kimura, Shaojie Gu, Yuhki Toku, Yang Ju",
    title: "Improvement of low-cycle fatigue life of austenitic stainless steel by multiple high-density pulsed electric currents",
    venue: "International Journal of Fatigue",
    doiUrl: "https://doi.org/10.1016/j.ijfatigue.2021.106639",
    cover: "/journals/ijf.jpg"
  },
  {
    id: 10,
    year: "2022",
    authors: "Shaojie Gu, Yi Cui, Sungmin Yoon, Zizheng Wang, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
    title: "Rapid anisotropy recovery in deformed FCC metals by high-density pulsed electric current treatment",
    venue: "Vacuum",
    doiUrl: "https://doi.org/10.1016/j.vacuum.2021.110855",
    cover: "/journals/vacuum.jpg"
  },
  {
    id: 9,
    year: "2021",
    authors: "Sungmin Yoon, Yasuhiro Kimura, Yi Cui, Yuhki Toku, Yang Ju",
    title: "Evaluation of Electric Current-Induced Improvement of Fracture Characteristics in SUS316",
    venue: "Materials Transactions",
    doiUrl: "https://doi.org/10.2320/matertrans.MT-M2020333",
    cover: "/journals/matertrans.jpg"
  },
  {
    id: 8,
    year: "2021",
    authors: "Soo-Jeong Park, Sung-Min Yoon, Yun-Hae Kim",
    title: "Performance-Based Optimal Design of Multi-Layered Hybrid Composites with Halloysite Nanoparticles",
    venue: "Advanced Composites Engineering and Its Nano-Bridging Technology",
    doiUrl: "https://doi.org/10.1142/9789811235320_0002",
    cover: "/journals/bookchapter.jpg"
  },
  {
    id: 7,
    year: "2021",
    authors: "Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Yang Ju, Soojeong Park, Yunhae Kim",
    title: "Assessment of creep behavior using a damage-coupled model for martensitic stainless steel",
    venue: "JSME Mechanical Engineering Journal",
    doiUrl: "https://doi.org/10.1299/mej.21-00178",
    cover: "/journals/jsme.jpg"
  },
  {
    id: 6,
    year: "2020",
    authors: "Sung-Min Yoon, Sung-Youl Bae, Yun-Hae Kim",
    title: "Computational study on interfacial peeling by uniformly distributed loading on aluminum hybrid anti-mechanical vibration panel",
    venue: "Modern Physics Letters B",
    doiUrl: "https://doi.org/10.1142/S0217984920400436",
    cover: "/journals/mplb.jpg"
  },
  {
    id: 5,
    year: "2020",
    authors: "Sung-Youl Bae, Sung-Min Yoon, Yun-Hae Kim",
    title: "A study on the lightweight design of lift structure by composite materials",
    venue: "Modern Physics Letters B",
    doiUrl: "https://doi.org/10.1142/S0217984920400321",
    cover: "/journals/mplb.jpg"
  },
  {
    id: 4,
    year: "2019",
    authors: "Sung-Min Yoon, Soo-Jeong Park, Yun-Hae Kim",
    title: "Influence on crack profiles of multi-layered Al/CFRP hybrid composites by using FE simulation",
    venue: "Modern Physics Letters B",
    doiUrl: "https://doi.org/10.1142/S0217984919400268",
    cover: "/journals/mplb.jpg"
  },
  {
    id: 3,
    year: "2018",
    authors: "Sung-Min Yoon, Yun-Hae Kim",
    title: "Prediction of healing efficiency of carbon-based nanocomposites under modified environment",
    venue: "International Journal of Modern Physics B",
    doiUrl: "https://doi.org/10.1142/S0217979218400519",
    cover: "/journals/ijmpb.jpg"
  },
  {
    id: 2,
    year: "2011",
    authors: "Ki-Su Kim, Choon-Sik Shin, Sung-Min Yoon, Chang-Kyu Park, Kyeong-Hoon Kang",
    title: "Influence of Projectile Surface Defects on the Trajectory",
    venue: "KSPE",
    doiUrl: "https://koreascience.kr/article/CFKO201132164220194.page",
    cover: "/journals/kspe.jpg"
  },
  {
    id: 1,
    year: "2009",
    authors: "Chang-Min Suh, Sung-Min Yoon, Ju-Ho Jang, Min-Soo Suh, Young-Sik Pyoun, Tatsuo Sakai",
    title: "Very high cycle fatigue characteristics of SCM435 under load variation by ultrasonic nanocrystal surface modification treatment",
    venue: "KSME Proceeding",
    doiUrl: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE01291549",
    cover: "/journals/ksme.jpg"
  },
];
