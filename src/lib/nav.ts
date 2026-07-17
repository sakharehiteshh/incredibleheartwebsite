export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Pay Your Bill" },
  { label: "About Us" },
  {
    label: "Programs & Care",
    children: [
      { label: "Incredible Heart", href: "/" },
      { label: "Weight Management", href: "/weight-management" },
    ],
  },
  { label: "Immigration Exam", href: "/immigration-exam" },
  {
    label: "Specialities",
    children: [
      "Aortic Aneurysms", "Aortic Valve Stenosis", "Arrhythmia", "Atrial Fibrillation",
      "Blood Clotting", "Bradycardia", "Broken Heart Syndrome", "Carotid Artery Stenosis",
      "Chest Pain", "Coronary Artery Disease", "Deep Vein Thrombosis", "Heart Attack",
      "Heart Failure", "Heart Murmur", "Heart Palpitations", "High Blood Pressure",
      "High Cholesterol", "Low Blood Pressure", "Mitral Valve Prolapse", "Mitral Regurgitation",
      "Pericarditis", "Peripheral Arterial Disease", "Postural Orthostatic Tachycardia Syndrome (POTS)",
      "Shortness of Breath", "Sleep Apnea", "Stroke", "Sudden Cardiac Death",
      "Tachycardia", "Transient Ischemic Attack", "Varicose Vein", "Vertigo",
    ].map((label) => ({ label, href: "#" })),
  },
  {
    label: "Services Offered",
    children: [
      "Holter Monitors", "Cholesterol Test",
      "Echocardiogram", "EKG Monitoring", "Exercise Stress Test", "Heart Health Screening",
      "Mobile Cardiac Telemetry", "Nuclear Stress Test", "Preop Clearance", "Remote Patient Monitoring",
    ].map((label) => ({ label, href: "#" })),
  },
  { label: "Blog", href: "https://nuvoair.com/incredible-heart" },
];

export const insurers = ["Aetna", "EmblemHealth", "Ambetter", "ACC", "Devoted Health", "Essence", "Medicaid", "Medicare", "UnitedHealthcare"];
