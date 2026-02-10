// app/data.ts

export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface SemesterData {
  [semesterName: string]: Subject[];
}

export interface YearData {
  [yearName: string]: SemesterData;
}

export interface Major {
  name: string;
  years: YearData;
}

export interface Curriculum {
  [majorKey: string]: Major;
}

// ==========================================
// 1. SHARED FIRST YEAR (L1) DATA
// ==========================================

const L1_CSVT = {
  "S1": [
    { code: "B1100", name: "Cytology & Histology", credits: 6 },
    { code: "C1100", name: "General Chemistry", credits: 6 },
    { code: "M1109", name: "Analysis", credits: 6 },
    { code: "P1104", name: "Mechanics & Thermo", credits: 6 },
    { code: "B1101", name: "Botany & V Repro", credits: 3 },
    { code: "B1102", name: "Genetics&Anatomie", credits: 3 },
  ],
  "S2": [
    { code: "C1102", name: "Organic Chemistry", credits: 6 },
    { code: "C1103", name: "Chemistry of Solutions", credits: 6 },
    { code: "P1105", name: "Elec, Mag & Optics", credits: 6 },
    { code: "M1106", name: "Linear Algebra I", credits: 3 },
    { code: "S1100", name: "Statistics", credits: 3 },
    { code: "B1103", name: "Ecology & Geology", credits: 3 },
    { code: "B1105", name: "A Repro & Embryology", credits: 3 },
  ],
};

const L1_MIS = {
  "S1": [
    { code: "M1100", name: "Algebra I", credits: 6 },
    { code: "M1101", name: "Analysis I", credits: 6 },
    { code: "P1100", name: "Mechanics", credits: 6 },
    { code: "P1101", name: "Electricity & Mag", credits: 6 },
    { code: "I1100", name: "Intro to Informatics", credits: 3 },
    { code: "S1101", name: "Statistics", credits: 3 },
  ],
  "S2": [
    { code: "I1101", name: "Algo & Programming", credits: 6 },
    { code: "M1103", name: "Algebra III", credits: 6 },
    { code: "M1104", name: "Analysis II", credits: 6 },
    { code: "M1105", name: "Analysis III", credits: 6 },
    { code: "M1102", name: "Algebra II", credits: 3 },
    { code: "M1106", name: "Analysis IV", credits: 3 },
  ],
};

const L1_PE = {
  "S1": [
    { code: "M1100", name: "Algebra I", credits: 6 },
    { code: "M1101", name: "Analysis", credits: 6 },
    { code: "P1100", name: "Mechanics", credits: 6 },
    { code: "P1101", name: "Electricity & Mag", credits: 6 },
    { code: "I1100", name: "Intro to Informatics", credits: 3 },
    { code: "S1101", name: "Statistics", credits: 3 },
  ],
  "S2": [
    { code: "C1101", name: "General Chemistry", credits: 6 },
    { code: "M1107", name: "Analysis V", credits: 6 },
    { code: "M1108", name: "Algebra IV", credits: 6 },
    { code: "P1102", name: "Vib, Waves & Optics", credits: 6 },
    { code: "P1103", name: "Thermo & Fluids", credits: 6 },
  ],
};

// ==========================================
// 2. FULL CURRICULUM (L1 + L2 + L3)
// ==========================================

export const curriculum: Curriculum = {
  
  // --- BIOLOGY & CHEMISTRY BRANCH (CSVT) ---
  
  biology: {
    name: "Biology (Sciences de la Vie)",
    years: {
      "L1": L1_CSVT,
      "L2": {
        "S3": [
          { code: "B2200", name: "Plant Reproductive Structures", credits: 4 },
          { code: "B2201", name: "Animal Biology (Vert/Invert)", credits: 4 },
          { code: "B2202", name: "Lab: Animal Biology", credits: 2 },
          { code: "B2203", name: "Ecology", credits: 3 },
          { code: "B2204", name: "Organ Histology", credits: 4 },
          { code: "S2270", name: "Biostatistics", credits: 3 },
          { code: "B2205", name: "Microbiology", credits: 3 },
          { code: "B2206", name: "Lab: Microbiology", credits: 2 },
          { code: "B2207", name: "Lab: Animal Reproduction", credits: 2 },
          { code: "B2208", name: "External Dynamics of Earth", credits: 3 }
        ],
        "S4": [
          { code: "BC2250", name: "Biochemistry (Struct/Metabolic)", credits: 5 },
          { code: "B2100", name: "Plant Vegetative Structures", credits: 4 },
          { code: "B2101", name: "Cell Physiology", credits: 4 },
          { code: "B2102", name: "Mineralogy & Petrography", credits: 4 },
          { code: "B2103", name: "Lab: Cytology & Histology", credits: 2 },
          { code: "C2250", name: "Laboratory of Chemistry", credits: 3 },
          { code: "P2270", name: "Laboratory of Physics", credits: 2 },
          { code: "I2150", name: "Computer Skills of Biologists", credits: 3 },
          { code: "B2106", name: "Lab: Management & Bio-Safety", credits: 3 },
          { code: "B2107", name: "Algae and Fungi", credits: 3 }
        ]
      },
      "L3": {
        "S5": [
          { code: "B3100", name: "Plant Physiology", credits: 4 },
          { code: "B3101", name: "Fundamental Genetics", credits: 4 },
          { code: "B3102", name: "Physiology of Functions", credits: 5 },
          { code: "B3103", name: "Basics of Immunology", credits: 4 },
          { code: "DRH300", name: "Human Rights", credits: 3 },
          { code: "B3106", name: "Biophysics", credits: 4 },
          { code: "B3107", name: "Nutrition", credits: 4 }
        ],
        "S6": [
          { code: "B3200", name: "Bases of Molecular Biology", credits: 4 },
          { code: "B3201", name: "Lab: Molecular Biology", credits: 2 },
          { code: "B3202", name: "Physiology (Nervous/Endocrine)", credits: 4 },
          { code: "B3203", name: "Environment and Pollution", credits: 3 },
          { code: "B3204", name: "Pedology", credits: 3 },
          { code: "L3300", name: "Foreign Language", credits: 3 },
          { code: "B3205", name: "Developmental Biology", credits: 4 },
          { code: "B3206", name: "Microbial Genetics", credits: 4 },
          { code: "B3212", name: "Biotechnology", credits: 4 },
          { code: "B3208", name: "Natural Sources of Energy", credits: 3 },
          { code: "B3209", name: "Introduction to Genomics", credits: 3 }
        ]
      }
    }
  },

  biochemistry: {
    name: "Biochemistry",
    years: {
      "L1": L1_CSVT,
      "L2": {
        "S3": [
          { code: "B2212", name: "Basic Cellular Physiology", credits: 4 },
          { code: "B2230", name: "General Microbiology", credits: 4 },
          { code: "B2231", name: "Experimental Biology", credits: 2 },
          { code: "BC2201", name: "Structural Biochemistry", credits: 5 },
          { code: "BC2203", name: "Basic Experimental Biochemistry", credits: 3 },
          { code: "C2201", name: "Organic Chem of Funct Groups", credits: 4 },
          { code: "C2211", name: "Basic Analytical Chemistry", credits: 3 },
          { code: "I2260", name: "Informatics Skills for Chemists", credits: 2 },
          { code: "BC2230", name: "Radioactivity & Radiation Prot", credits: 3 },
          { code: "C2240", name: "Inorganic Chem for Biochemists", credits: 3 }
        ],
        "S4": [
          { code: "B2214", name: "Physiology of Large Systems", credits: 3 },
          { code: "B2232", name: "Molecular Genetics", credits: 4 },
          { code: "BC2205", name: "Structural/Functional Biochem", credits: 4 },
          { code: "BC2206", name: "Food Biochemistry", credits: 4 },
          { code: "BC2207", name: "Food Biochemistry Lab", credits: 2 },
          { code: "C2206", name: "Chemical Kinetics and Catalysis", credits: 4 },
          { code: "C2212", name: "Exp. Chemistry for Biochemists", credits: 3 },
          { code: "C2236", name: "Medicinal Chemistry", credits: 3 },
          { code: "BC2231", name: "Extracellular Macromolecules", credits: 3 }
        ],
      },
      "L3": {
        "S5": [
          { code: "BC3300", name: "Enzymology", credits: 5 },
          { code: "BC3301", name: "Enzymology Laboratory", credits: 2 },
          { code: "BC3302", name: "Analytical Techniques in Biochem", credits: 5 },
          { code: "BC3303", name: "Lab: Analytical Techniques", credits: 2 },
          { code: "B3330", name: "General Immunology", credits: 4 },
          { code: "DRH300", name: "Human Rights", credits: 3 },
          { code: "BC3304", name: "Modulation of Protein Functions", credits: 3 },
          { code: "BC3330", name: "Endocrinology", credits: 3 },
          { code: "BC3331", name: "Epidemiology", credits: 3 }
        ],
        "S6": [
          { code: "BC3305", name: "Metabolic Biochemistry", credits: 4 },
          { code: "B3331", name: "Molecular Biology", credits: 4 },
          { code: "B3332", name: "Advanced Experimental Biology", credits: 3 },
          { code: "L3300", name: "Foreign Language", credits: 3 },
          { code: "C3340", name: "Spectroscopic Analysis Methods", credits: 4 },
          { code: "BC3307", name: "Clinical Biochemistry", credits: 4 },
          { code: "BC3308", name: "Clinical Biochemistry Lab", credits: 2 },
          { code: "BC3332", name: "Intro to Bioinformatics", credits: 3 },
          { code: "BC3234", name: "Industrial Apps of Biomolecules", credits: 3 }
        ],
      },
    },
  },

  chemistry: {
    name: "Chemistry",
    years: {
      "L1": L1_CSVT,
      "L2": {
        "S3": [
          { code: "C2201", name: "Organic Chem of Funct Groups", credits: 4 },
          { code: "C2202", name: "Chemical Thermodynamic", credits: 4 },
          { code: "C2203", name: "Environmental Chemistry", credits: 3 },
          { code: "C2205", name: "Basic Experimental Chemistry", credits: 4 },
          { code: "C2200", name: "Descriptive Inorganic Chemistry", credits: 4 },
          { code: "I2260", name: "Informatics Skills for Chemists", credits: 2 },
          { code: "P2271", name: "Math and Physics for Chemists", credits: 6 },
          { code: "C2230", name: "Nuclear Chemistry", credits: 3 },
          { code: "C2235", name: "Daily Chemistry", credits: 3 }
        ],
        "S4": [
          { code: "BC2200", name: "Basic Structural Biochemistry", credits: 3 },
          { code: "C2206", name: "Chemical Kinetics and Catalysis", credits: 4 },
          { code: "C2207", name: "Analytical Chemistry", credits: 4 },
          { code: "C2208", name: "Polymer Chemistry", credits: 4 },
          { code: "C2209", name: "Industrial Chemistry", credits: 4 },
          { code: "C2210", name: "Experimental Laboratory", credits: 5 },
          { code: "C2236", name: "Medicinal Chemistry", credits: 3 },
          { code: "C2234", name: "Metallurgy", credits: 3 },
          { code: "C2233", name: "Catalysis", credits: 3 }
        ],
      },
      "L3": {
        "S5": [
          { code: "C3300", name: "Rearrangements and Mechanisms", credits: 4 },
          { code: "C3301", name: "Atomistic", credits: 4 },
          { code: "C3302", name: "Separation/Instrumental Analysis", credits: 5 },
          { code: "C3303", name: "Symmetry & Crystallography", credits: 5 },
          { code: "C3304", name: "Experimental Chemistry Lab", credits: 3 },
          { code: "DRH300", name: "Human Rights", credits: 3 },
          { code: "C3331", name: "Green Chemistry", credits: 3 },
          { code: "C3339", name: "Rheology and Applications", credits: 3 }
        ],
        "S6": [
          { code: "C3305", name: "Spectrochemistry", credits: 4 },
          { code: "C3306", name: "Coordination Chemistry", credits: 4 },
          { code: "C3307", name: "Spectroscopic Methods", credits: 3 },
          { code: "C3308", name: "Electrochemistry", credits: 3 },
          { code: "C3309", name: "Adv. Experimental Chemistry", credits: 4 },
          { code: "L3300", name: "Foreign Language", credits: 3 },
          { code: "C3330", name: "Radical Chemistry", credits: 3 },
          { code: "C3332", name: "Bio-Organic", credits: 3 },
          { code: "C3335", name: "Natural Substances", credits: 3 }
        ]
      }
    }
  },

  geology: {
    name: "Geology",
    years: {
      "L1": L1_CSVT, // Shared First Year
      "L2": {
        "S3": [
          { code: "Geol201", name: "Géologie Générale", credits: 4 },
          { code: "Geol202", name: "Laboratoire du Géologie Générale", credits: 2 },
          { code: "Geol203", name: "Géosciences Environnement", credits: 4 },
          { code: "Geol204", name: "Laboratoire de Géosciences Environnement", credits: 2 },
          { code: "Geol205", name: "Informatiques et Statistiques", credits: 4 },
          { code: "Geol207", name: "Géosciences Organiques et Minérales I", credits: 4 },
          { code: "Geol208", name: "Laboratoire de Géosciences Org/Min I", credits: 2 },
          { code: "Geol209", name: "Mécanique des Fluides", credits: 4 },
          { code: "Geol210", name: "Laboratoire de Mécanique des Fluides", credits: 2 },
          { code: "Lang201", name: "Anglais", credits: 2 }
        ],
        "S4": [
          { code: "Geol211", name: "Paléontologie, Stratigraphie, Paléoenvironnement", credits: 4 },
          { code: "Geol212", name: "Laboratoire de Paléo/Stratigraphie", credits: 2 },
          { code: "Geol213", name: "Géochimie Organique et Minérale", credits: 6 },
          { code: "Geol215", name: "Tectonique analytique", credits: 6 },
          { code: "Geol217", name: "Pédologie", credits: 4 },
          { code: "Geol218", name: "Laboratoire de Pédologie", credits: 2 },
          { code: "Geol219", name: "Géophysique I", credits: 3 },
          { code: "Geol220", name: "Laboratoire de Géophysique I", credits: 1 },
          { code: "Lang202", name: "Anglais 2", credits: 2 }
        ]
      },
      "L3": {
        "S5": [
          { code: "Geol301", name: "Biogeochemical Analysis", credits: 3 },
          { code: "Geol302", name: "Biogeochemical Analysis Lab", credits: 2 },
          { code: "Geol303", name: "Fossil Fuel Geology", credits: 3 },
          { code: "Geol304", name: "Fossil Fuel Geology Lab", credits: 2 },
          { code: "Geol305", name: "Geophysics and Geomatic II", credits: 3 },
          { code: "Geol306", name: "Geophysics and Geomatic II Lab", credits: 2 },
          { code: "Geol307", name: "Petrology/Isotopic Geochem", credits: 3 },
          { code: "Geol308", name: "Lab: Petrology/Isotopic Geochem", credits: 1 },
          { code: "Geol309", name: "Programming C+ and C++", credits: 4 },
          { code: "Geol311", name: "Differential Equations", credits: 3 },
          { code: "Geol313", name: "Report Writing", credits: 4 },
          { code: "DRH0300", name: "Human Rights", credits: 2 }
        ],
        "S6": [
          { code: "Geol315", name: "Hydrogeology", credits: 3 },
          { code: "Geol316", name: "Hydrogeology Laboratory", credits: 1 },
          { code: "Geol317", name: "Sediment Petrography", credits: 3 },
          { code: "Geol318", name: "Sediment Petrography Lab", credits: 2 },
          { code: "Geol319", name: "Mineral Recourses", credits: 3 },
          { code: "Geol320", name: "Mineral Recourses Laboratory", credits: 1 },
          { code: "Geol321", name: "Petrochemistry I", credits: 3 },
          { code: "Geol322", name: "Petrochemistry I Laboratory", credits: 1 },
          { code: "Geol325", name: "Training", credits: 7 },
          { code: "Geol326", name: "Natural and Gravitational Risks", credits: 4 },
          { code: "Geol327", name: "Natural/Gravitational Risks Lab", credits: 2 }
        ]
      }
    }
  },

  // --- MATH & INFORMATICS BRANCH (MIS) ---

  informatics: {
    name: "Informatics",
    years: {
      "L1": L1_MIS, // Shared First Year
      "L2": {
        "S3": [
          { code: "I2201", name: "Client-side Web Development", credits: 4 },
          { code: "I2202", name: "Computer Organization", credits: 4 },
          { code: "I2203", name: "Operating System I", credits: 4 },
          { code: "I2204", name: "Imperative Programming", credits: 5 },
          { code: "I2205", name: "Graph Theory", credits: 3 },
          { code: "S2250", name: "Introduction to Probability", credits: 4 },
          { code: "M2250", name: "Mathematics for Computer Science", credits: 3 },
          { code: "M2251", name: "Numerical Analysis (Elective)", credits: 3 },
          { code: "I2231", name: "Operational Research (Elective)", credits: 3 },
          { code: "I2232", name: "Functional Programming (Elective)", credits: 3 }
        ],
        "S4": [
          { code: "I2206", name: "Data Structures", credits: 5 },
          { code: "I2207", name: "Computer Architecture", credits: 4 },
          { code: "I2208", name: "Computer Networks", credits: 4 },
          { code: "I2209", name: "Logical Programming", credits: 4 },
          { code: "I2210", name: "Database I", credits: 5 },
          { code: "I2211", name: "Object Oriented Programming", credits: 5 },
          { code: "I2233", name: "Computer Graphics (Elective)", credits: 3 },
          { code: "I2234", name: "Image Processing (Elective)", credits: 3 }
        ]
      },
      "L3": {
        "S5": [
          { code: "I3301", name: "Software Engineering", credits: 4 },
          { code: "I3302", name: "Server-side Web Development", credits: 4 },
          { code: "I3303", name: "Computer Systems II", credits: 4 },
          { code: "I3304", name: "Network Administration & Security", credits: 4 },
          { code: "I3305", name: "GUI and Applications", credits: 3 },
          { code: "I3306", name: "Database II", credits: 3 },
          { code: "DHR300", name: "Human Rights", credits: 3 },
          { code: "I3350", name: "Mobile App Development (Elective)", credits: 5 },
          { code: "I3351", name: "Systems Administration (Elective)", credits: 5 }
        ],
        "S6": [
          { code: "I3307", name: "Theory of Languages", credits: 4 },
          { code: "I3308", name: "Project", credits: 4 },
          { code: "L3300", name: "Foreign Language", credits: 3 },
          { code: "S3306", name: "Probability Theory", credits: 4 },
          { code: "S3355", name: "Generalized Linear Model", credits: 3 },
          { code: "I3330", name: "IT Project Management (Elective)", credits: 3 },
          { code: "I3331", name: "Informatics and Society (Elective)", credits: 3 },
          { code: "I3332", name: "New Gen. Programming Language (Elective)", credits: 3 },
          { code: "I3333", name: "Image Synthesis (Elective)", credits: 3 },
          { code: "I3340", name: "Parallel Programming (Elective)", credits: 4 },
          { code: "I3341", name: "Advanced Algorithms (Elective)", credits: 4 },
          { code: "I3342", name: "Advanced Logic Circuits (Elective)", credits: 3 },
          { code: "I3343", name: "Environment and Pollution (Elective)", credits: 3 },
          { code: "I3344", name: "Numerical Simulation & Modeling (Elective)", credits: 6 }
        ]
      }
    }
  },
  mathematics: {
    name: "Mathematics",
    years: {
      "L1": L1_MIS, // Shared First Year
      "L2": {
        "S3": [
          { code: "M2200", name: "Bilinear Algebra", credits: 6 },
          { code: "M2201", name: "Metric Topology", credits: 6 },
          { code: "M2202", name: "Vector Functions & Multiply Integrals", credits: 6 },
          { code: "S2200", name: "Introduction to Probability", credits: 6 },
          { code: "M2203", name: "Ordinary Differential Equations", credits: 3 },
          { code: "M2204", name: "Discrete Mathematics", credits: 3 }
        ],
        "S4": [
          { code: "M2205", name: "Algebra and Arithmetics", credits: 6 },
          { code: "M2206", name: "Introduction to Functional Analysis", credits: 6 },
          { code: "M2207", name: "Numerical Analysis & Sci. Computations", credits: 6 },
          { code: "M2208", name: "Sequences and Series of Functions", credits: 3 },
          { code: "M2209", name: "Complex Analysis", credits: 3 },
          { code: "M2210", name: "Introduction to Mechanics", credits: 3 },
          { code: "M2213", name: "Differential Equations & Apps (Elective)", credits: 3 }
        ]
      },
      "L3": {
        "S5": [
          { code: "M3300", name: "Groups Theory", credits: 6 },
          { code: "M3301", name: "Theory of Measure and Integration", credits: 6 },
          { code: "M3302", name: "Differential Calculus", credits: 6 },
          { code: "M3303", name: "Geometry of Curves and Surfaces", credits: 3 },
          { code: "DHR300", name: "Human Rights", credits: 3 },
          { code: "M3311", name: "Theory of Bounded Operators (Elective)", credits: 3 },
          { code: "M3312", name: "Theory of Differential Equation (Elective)", credits: 3 },
          { code: "M3315", name: "General Topology (Elective)", credits: 3 }
        ],
        "S6": [
          { code: "M3305", name: "Rings", credits: 6 },
          { code: "M3316", name: "Numerical Methods", credits: 6 },
          { code: "M3318", name: "Lagrangian Mechanics", credits: 6 },
          { code: "L3300", name: "Foreign Language", credits: 3 },
          { code: "M3304", name: "Holomorphic Functions", credits: 3 },
          { code: "M3306", name: "Integration and Fourier Analysis", credits: 3 },
          { code: "M3319", name: "Geometry (Elective)", credits: 3 },
          { code: "M3320", name: "Intro to Partial Diff. Equations (Elective)", credits: 3 }
        ]
      }
    }
  },

  statistics: {
    name: "Statistics",
    years: {
      "L1": L1_MIS,
      "L2": {
        "S3": [
          { code: "M2200", name: "Bilinear Algebra", credits: 6 },
          { code: "M2201", name: "Metric Topology", credits: 6 },
          { code: "M2202", name: "Vector Functions & Integrals", credits: 6 },
          { code: "M2203", name: "Ordinary Differential Equations", credits: 3 },
          { code: "M2204", name: "Discrete Mathematics", credits: 3 },
          { code: "S2200", name: "Introduction to Probability", credits: 6 }
        ],
        "S4": [
          { code: "S2201", name: "Statistical Inference 1", credits: 6 },
          { code: "S2202", name: "Time Series Analysis", credits: 3 },
          { code: "M2207", name: "Numerical Analysis & Sci Computing", credits: 6 },
          { code: "M2208", name: "Sequences and Series of Functions", credits: 3 },
          { code: "M2252", name: "Norms", credits: 3 },
          { code: "S2251", name: "Linear Optimization Methods", credits: 3 },
          { code: "I2250", name: "Database", credits: 6 }
        ]
      },
      "L3": {
        "S5": [
          { code: "S3301", name: "Inferential Statistics 2", credits: 5 },
          { code: "S3302", name: "Sampling Methods", credits: 4 },
          { code: "S3303", name: "Regression Models & Variance", credits: 5 },
          { code: "S3350", name: "Time Series 2", credits: 3 },
          { code: "DHR300", name: "Human Rights", credits: 3 },
          { code: "M3380", name: "Measure and Integration", credits: 4 },
          { code: "M3313", name: "Logic", credits: 3 },
          { code: "M3314", name: "Financial Mathematics", credits: 3 },
          { code: "S3351", name: "Optimization Methods", credits: 3 }
        ],
        "S6": [
          { code: "L3300", name: "Foreign Language", credits: 3 },
          { code: "S3304", name: "Surveys and Techniques of Sampling", credits: 4 },
          { code: "S3305", name: "Statistical Software", credits: 4 },
          { code: "S3306", name: "Probability Theory", credits: 4 },
          { code: "S3355", name: "Generalized Linear Model", credits: 3 },
          { code: "I3345", name: "Development of Web", credits: 3 },
          { code: "S3353", name: "Analytical Demography", credits: 3 },
          { code: "S3354", name: "Operation Research", credits: 3 },
          { code: "S3356", name: "Techniques of Insurance", credits: 3 },
          { code: "S3357", name: "Extensions of the Linear Model", credits: 3 }
        ]
      },
    },
  },

  // --- PHYSICS & ELECTRONICS BRANCH (PE) ---

  electronics: {
    name: "Electronics",
    years: {
      "L1": L1_PE,
      "L2": {
        "S3": [], // Often courses are shared or user didn't provide specific S3 list distinct from PE
        "S4": [
          { code: "P2200", name: "Électromagnétisme", credits: 6 },
          { code: "E2203", name: "Composants Semi-Conducteurs", credits: 4 },
          { code: "E2200", name: "Circuits", credits: 5 },
          { code: "E2204", name: "Électronique I", credits: 5 },
          { code: "E2201", name: "Circuits Numériques", credits: 5 },
          { code: "E2205", name: "Analyse Avancée des Circuits", credits: 4 },
          { code: "M2270", name: "Mathématiques Appliquées", credits: 5 },
          { code: "M2273", name: "Mathématiques Pour l'électronique", credits: 4 },
          { code: "I2270", name: "Programmation en C", credits: 5 },
          { code: "M2274", name: "Analyse num Pour l'électronique", credits: 4 },
          { code: "P2203", name: "Laboratoire de Physique Générale", credits: 2 },
          { code: "E2211", name: "Réseaux électriques", credits: 3 },
          { code: "E2202", name: "Lab: Circuits Numérique", credits: 2 },
          { code: "E2212", name: "Systèmes Numériques Avancés", credits: 3 },
          { code: "E2206", name: "Laboratoire d'électronique", credits: 3 }
        ]
      },
      "L3": {
        "S5": [
          { code: "E3300", name: "Théorie du Signal", credits: 5 },
          { code: "E3301", name: "Circuits Electroniques", credits: 5 },
          { code: "E3302", name: "Microprocesseur", credits: 5 },
          { code: "E3303", name: "Automatique", credits: 5 },
          { code: "E3311", name: "Informatique Industrielle", credits: 3 },
          { code: "E3321", name: "Electrotechnique", credits: 3 },
          { code: "12273", name: "Programmation pour l'Electronique", credits: 6 },
          { code: "E3304", name: "Syst de Communications Analogiques", credits: 5 },
          { code: "DHR300", name: "Droits de l'Homme", credits: 3 },
          { code: "E3305", name: "Laboratoire Electronique Avancé", credits: 3 },
          { code: "E3306", name: "Travaux Personnalisés (TPE)", credits: 2 },
          { code: "E3322", name: "Instrumentation", credits: 3 },
          { code: "E3323", name: "Outils et Modélisation", credits: 3 },
          { code: "E3324", name: "Propagation Guidée des Ondes", credits: 6 }
        ],
        "S6": [
          { code: "L3300", name: "Langue Etrangère", credits: 3 }
        ]
      }
    }
  },

  physics: {
    name: "Physics",
    years: {
      "L1": L1_PE, // Shared First Year
      "L2": {
        "S3": [
          { code: "I2270", name: "C/C++ Language", credits: 5 },
          { code: "M2270", name: "Applied Mathematics", credits: 5 },
          { code: "P2200", name: "Electromagnetism", credits: 6 },
          { code: "P2201", name: "Modern Physics", credits: 6 },
          { code: "E2270", name: "Electronics for Physics", credits: 6 },
          { code: "P2203", name: "General Physics Laboratory", credits: 2 }
        ],
        "S4": [
          { code: "M2271", name: "Mathematics for Physics", credits: 5 },
          { code: "M2272", name: "Numerical Analysis for Physics", credits: 5 },
          { code: "P2204", name: "Analytical Mechanics", credits: 6 },
          { code: "P2205", name: "Optics and Electromagnetism", credits: 6 },
          { code: "P2206", name: "Experimental Physics Laboratory", credits: 2 },
          { code: "P2211", name: "Waves and Vibrations (Elective)", credits: 3 },
          { code: "P2212", name: "Astrophysics (Elective)", credits: 3 },
          { code: "P2213", name: "Fluid Mechanics (Elective)", credits: 3 }
        ]
      },
      "L3": {
        "S5": [
          { code: "P3300", name: "Thermodynamics", credits: 3 },
          { code: "P3301", name: "Solid State Physics", credits: 5 },
          { code: "P3302", name: "Quantum Mechanics", credits: 5 },
          { code: "P3303", name: "Optics and Thermodynamics Lab", credits: 2 },
          { code: "P3316", name: "Programming for Physicists (C++)", credits: 6 },
          { code: "DHR300", name: "Human Rights", credits: 3 },
          { code: "P3311", name: "Semi-Conductors Physics (Elective)", credits: 3 },
          { code: "P3312", name: "Laser and Applications (Elective)", credits: 3 },
          { code: "P3313", name: "Heat Transfer 2 (Elective)", credits: 3 },
          { code: "P3314", name: "Acoustics (Elective)", credits: 3 }
        ],
        "S6": [
          { code: "L3300", name: "Foreign Language", credits: 3 },
          { code: "P3304", name: "Nuclear Physics", credits: 4 },
          { code: "P3305", name: "Atomic Physics", credits: 4 },
          { code: "P3306", name: "Statistical Physics", credits: 5 },
          { code: "P3307", name: "Atomic and Nuclear Lab", credits: 2 },
          { code: "P3326", name: "Material Science", credits: 6 },
          { code: "P3327", name: "Information Quantum Theory", credits: 6 },
          { code: "P3321", name: "Molecular Physics (Elective)", credits: 3 },
          { code: "P3322", name: "Adv. Electronics for Physicists (Elective)", credits: 3 },
          { code: "P3325", name: "Medical Imaging (Elective)", credits: 3 }
        ]
      }
    }
  },
};