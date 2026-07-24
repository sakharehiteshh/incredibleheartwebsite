import aetnaLogo from "@/assets/logo-aetna.svg";
import emblemHealthLogo from "@/assets/logo-emblemhealth.png";
import ambetterLogo from "@/assets/logo-ambetter.png";
import devotedHealthLogo from "@/assets/logo-devoted-health.svg";
import essenceLogo from "@/assets/logo-essence.png";
import medicareLogo from "@/assets/logo-medicare.png";
import unitedHealthcareLogo from "@/assets/logo-unitedhealthcare.svg";
import moHealthNetLogo from "@/assets/logo-mohealthnet.png";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const nav: NavItem[] = [

  { label: "Patient Portal", href: "https://27550-1.portal.athenahealth.com/?section=welcome" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Programs & Care",
    children: [
      { label: "Incredible Heart", href: "/" },
      { label: "Weight Management", href: "/weight-management" },
    ],
  },
  { label: "Immigration Exam", href: "/immigrationexam" },
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
  { label: "Express Heart Care", href: "https://www.expressheartcare.com" },
  { label: "Blog", href: "https://nuvoair.com/incredible-heart" },
];

export type Insurer = { name: string; logo: string; darkTile?: boolean };

export const insurers: Insurer[] = [
  { name: "Aetna", logo: aetnaLogo },
  { name: "EmblemHealth", logo: emblemHealthLogo },
  { name: "Ambetter", logo: ambetterLogo },
  { name: "Devoted Health", logo: devotedHealthLogo },
  { name: "Essence Healthcare", logo: essenceLogo },
  { name: "MO HealthNet (Medicaid)", logo: moHealthNetLogo },
  { name: "Medicare", logo: medicareLogo },
  { name: "UnitedHealthcare", logo: unitedHealthcareLogo },
];
