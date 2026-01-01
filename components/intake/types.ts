export interface BodyMarker {
  id: string;
  x: number;
  y: number;
  view: "front" | "back" | "left" | "right";
  description: string;
}

export interface IntakeFormData {
  // Contact Information
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthMonth: string;
  birthDay: string;
  birthYear: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  howDidYouHear: string;

  // Massage Experience
  previousMassageExperience: string;
  areasToFocus: string;
  areasToAvoid: string;
  numbnessOrTingling: string;

  // Medical Conditions (checkboxes)
  medicalConditions: string[];
  allergyList: string;
  surgeryHistory: string;
  jointIssueAreas: string;

  // Medications
  currentMedications: string;
  bloodPressureMeds: string;
  skinAllergies: string;

  // Body Diagram
  bodyMarkers: BodyMarker[];
  causeOfInjury: string;

  // Pain Assessment
  painScale: string;
  painWorse: string;
  painRelief: string;
  treatmentGoals: string;
  howLongSinceNoticed: string;
  pastTreatments: string;

  // Recent History
  recentlyBeenSick: string;
  currentNumbness: string;
  alcoholLast24Hours: string;
  marijuanaLast30Days: string;
  painMedsLast24Hours: string;
  recentSurgeries: string;
  difficultyLayingDown: string;
  recentTattoos: string;

  // Consent
  glutesPermission: string;
  glutesSignature: string | null;
  chestPermission: string;
  chestSignature: string | null;
  communicationSignature: string | null;

  // Waiver
  waiverSignature: string | null;
  waiverAgreed: boolean;
  waiverDate: string;
}

export const initialFormData: IntakeFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  birthMonth: "",
  birthDay: "",
  birthYear: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  howDidYouHear: "",

  previousMassageExperience: "",
  areasToFocus: "",
  areasToAvoid: "",
  numbnessOrTingling: "",

  medicalConditions: [],
  allergyList: "",
  surgeryHistory: "",
  jointIssueAreas: "",

  currentMedications: "",
  bloodPressureMeds: "",
  skinAllergies: "",

  bodyMarkers: [],
  causeOfInjury: "",

  painScale: "",
  painWorse: "",
  painRelief: "",
  treatmentGoals: "",
  howLongSinceNoticed: "",
  pastTreatments: "",

  recentlyBeenSick: "",
  currentNumbness: "",
  alcoholLast24Hours: "",
  marijuanaLast30Days: "",
  painMedsLast24Hours: "",
  recentSurgeries: "",
  difficultyLayingDown: "",
  recentTattoos: "",

  glutesPermission: "",
  glutesSignature: null,
  chestPermission: "",
  chestSignature: null,
  communicationSignature: null,

  waiverSignature: null,
  waiverAgreed: false,
  waiverDate: "",
};

export const medicalConditionsList = [
  // Respiratory
  { category: "Respiratory", items: ["Asthma", "Shortness of Breath", "Bronchitis", "Chronic Cough", "Emphysema", "Contagious Respiratory Conditions"] },
  // Cardiovascular
  { category: "Cardiovascular", items: ["Blood Clots", "Cold Hands", "High Blood Pressure", "Low Blood Pressure", "Pacemaker", "Varicose Veins or Spider Veins", "Cardiovascular Accident", "Congestive Heart Failure", "Phlebitis", "Cerebral-vascular Accident", "Heart Attack", "Stroke", "Cold Feet", "Heart Disease", "Thrombosis/Embolism", "Myocardial Infarction"] },
  // Skin
  { category: "Skin", items: ["Bruise Easily", "Skin Irritations", "Hypersensitive Reaction", "Skin Conditions", "Melanoma", "Hepatitis", "Herpes", "HIV"] },
  // Neurological
  { category: "Neurological", items: ["Migraines", "Headaches", "Jaw Pain (TMJD)", "Vision Problems", "Vision Loss", "Ear Problems", "Hearing Loss", "Sinus Problems", "Burning", "Numbness", "Tingling", "Stabbing Pain", "Cerebral Palsy", "Parkinsons", "Multiple Sclerosis", "Herniated Disc", "Dizziness", "Loss of Sensation", "Epilepsy"] },
  // Musculoskeletal
  { category: "Musculoskeletal", items: ["Arthritis", "Osteoarthritis", "Rheumatoid Arthritis", "Joint swelling", "Artificial Joints/Special Equipment", "Fibromyalgia", "Osteoporosis", "Chronic back pain", "Surgical Pins or Wire", "Lymphedema"] },
  // Metabolic & Other
  { category: "Metabolic & Other", items: ["Diabetes type 1", "Diabetes type 2", "Thyroid problems", "Hypoglycemia", "Anemia", "Gout", "Lupus", "Crohn's Disease", "Digestive Conditions", "Shingles", "Athlete's Foot"] },
  // Serious Conditions
  { category: "Serious Conditions", items: ["Cancer", "Hemophilia", "Mental Illness", "Anaphylaxis", "Pregnancy", "Reproductive Issues", "Allergies"] },
  // Other
  { category: "Other", items: ["Stress", "Insomnia", "Other Diagnosed Diseases", "Other Medical Conditions"] },
];

export const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];


