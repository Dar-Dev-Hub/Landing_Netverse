import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Rejoindre Notre Site ou Application",
    desc1: `- Si vous êtes invité par une personne, inscrivez-vous avec son ID. Notez que l'inscription ne se fait
    pas uniquement par invitation.`,
    desc2: `- Si vous n'avez pas de parrain, trouvez un lien de support pour remplir un formulaire et être
    contacté par la société pour vous aider à vous inscrire.`,
    desc3:'',
    image: "/images/features/1.svg",
    imageDark: "/images/features/1.svg",
  },
  {
    id: "tabTwo",
    title: "Démarrage avec le Pack de Démarrage ou Achat des Packs Souhaités :",
    desc1: `- La société Netverse propose 5 packs successifs, accessibles uniquement via l'upgrade.(Exemple : Pack Startup, puis Pack 1, puis Pack 2, puis Pack 3.)`,
    desc2: `- Enregistrez-vous avec votre parrain et remplissez votre formulaire d'inscription.`,
    desc3:'',
    image: "/images/features/2.svg",
    imageDark: "/images/features/2.svg",
  },
  {
    id: "tabThree",
    title: "Accédez à Votre Espace Partenaire & Explorez Vos Formations",
    desc1: `- Connectez-vous à votre espace partenaire personnalisé.`,
    desc2: `- Démarrez vos cours de formation en ligne, avec un contenu spécifique à chaque pack pour
    développer vos compétences et atteindre vos objectifs.`,
    desc3:'',
    image: "/images/features/3.svg",
    imageDark: "/images/features/3.svg",
  },
  {
    id: "tabFour",
    title: "Démarrez Votre Réseau & Suivez Vos Progrès:",
    desc1: `- Passez à l'action en développant votre réseau. Parrainez de nouveaux partenaires et créez des
    connexions qui contribuent à votre succès et à celui de la communauté. (Note : Visualisez les publicités dans l'application pour que la commission de parrainage entre dans
    votre wallet.)`,
    desc2: `- Utilisez nos tableaux de bord intuitifs pour suivre vos progrès, vos revenus et l'évolution de votre
    réseau.`,
    desc3:' - Obtenez les grades et les cadeaux associés et commencez votre histoire de succès.',
    image: "/images/features/4.svg",
    imageDark: "/images/features/4.svg",
  },
  
];

export default featuresTabData;
