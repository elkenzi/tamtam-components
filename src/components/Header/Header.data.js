export const user = {
  firstName: "Emmanuel",
  lastName: "Degrève",
  mainEmail: "emmanuel.degreve@degandpartners.com",
  avatarUrl:
    "https://s3.tamtam.pro/v2/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png"
};

export const settings = [
  {
    label: "APPROBATIONS",
    url: "/approvers-setting"
  },
  {
    label: "UTILISATEURS",
    url: "/settings"
  }
];

const APP_LOGOS_BASE_URL = "https://s3.tamtam.pro/v2/apps";
export const apps = [
  {
    id: "event",
    activated: 1,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/event.png`,
    name: "Event"
  },
  {
    id: "talk",
    activated: 0,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/talk.png`,
    name: "Talk"
  },
  {
    id: "survey",
    activated: 0,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/survey.png`,
    name: "Survey"
  },
  {
    id: "sms",
    activated: 1,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/sms.png`,
    name: "SMS"
  },
  {
    id: "emailing",
    activated: 1,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/emailing.png`,
    name: "Emailing"
  },
  {
    id: "blog",
    activated: 1,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/blog.png`,
    name: "Blog"
  },
  {
    id: "ebox",
    activated: 0,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/ebox.png`,
    name: "E-Box"
  },
  {
    id: "directory",
    activated: 1,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/directory.png`,
    name: "Directory"
  },
  {
    id: "webtools",
    activated: 0,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/webtools.png`,
    name: "Webtools"
  },
  {
    id: "media",
    activated: 1,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/media.png`,
    name: "Media"
  },
  {
    id: "forum",
    activated: 1,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/forum.png`,
    name: "Forum"
  },
  {
    id: "payment",
    activated: 1,
    url: "#",
    order: 1,
    logo: `${APP_LOGOS_BASE_URL}/payment.png`,
    name: "Payment"
  }
];

export const notifications = [
  {
    id: 5,
    appName: "SMS",
    subjectEn: "Emailing Release Note 1.4",
    subjectFr: "Notes de publication de la nouvelle version d’Emailing 1.4",
    subjectNl: "Emailing Release Note 1.4",
    contentEn: "",
    contentFr: "",
    contentNl: "",
    type: "RELEASE",
    isPersonal: 0,
    isAuto: 0,
    targetsCounts: 0,
    targetsListCreated: false,
    createdAt: "2018-10-29 17:31:48",
    expiredAt: null,
    updatedAt: "14/11/2019",
    status: "UNREAD"
  },
  {
    id: 4,
    appName: "SMS",
    subjectEn:
      "The approver organization has changed, now you can define multiple approval groups to better manage the validation of your campaigns.",
    subjectFr:
      "Nouvelle fonctionnalité : L’organisation des approbateurs a changé, maintenant vous pouvez définir plusieurs groupes d’approbation pour mieux gérer la validation de vos campagnes.",
    subjectNl:
      "Nieuwe functionaliteit : de organisatie van de goedkeurders is gewijzigd, nu kunt u meerdere goedkeuringsgroepen instellen om uw campagnevalidatie beter te beheren.",
    isPersonal: 0,
    isAuto: 0,
    targetsCounts: 0,
    targetsListCreated: false,
    contentEn: null,
    contentFr: null,
    contentNl: null,
    type: null,
    createdAt: "2018-10-26 08:54:36",
    expiredAt: null,
    updatedAt: "14/11/2019",
    status: "READ"
  },
  {
    id: 2,
    appName: "SMS",
    subjectEn:
      "Here is our new service e-Box, it will help you to find all the email you have received from your communities.",
    subjectFr:
      "Découvrez e-Box la nouvelle fonctionnalité vous permettant d’accéder à votre boîte de réception et revoir tous les messages reçus de la part de vos communautés.",
    subjectNl:
      "Ontdek e-Box de nieuwe functionaliteit waarmee je je inbox kunt openen en alle berichten kunt bekijken die je van je community's hebt ontvangen.",
    isPersonal: 0,
    isAuto: 0,
    targetsCounts: 0,
    targetsListCreated: false,
    contentEn: null,
    contentFr: null,
    contentNl: null,
    type: null,
    createdAt: "2018-10-24 14:58:41",
    expiredAt: null,
    updatedAt: "14/11/2019",
    status: "READ"
  }
];

export const communities = [
  {
    id: 8,
    name:
      "Instituut van de Accountants en de Belastingconsulenten - Institut des Experts-comptables et des Conseils fiscaux",
    abbreviation: "IEC-IAB",
    avatarUrl:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/2753/AVATAR_a726d59d13c723f15343ae75ead939fdd1f0895f.png"
  },
  {
    id: 9,
    name: "Forum For The Future",
    abbreviation: "F.F.F.",
    avatarUrl:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/2174/AVATAR_a55cc7155830b08e45678b3bc4ed02f3e190fc96.png"
  },
  {
    id: 4,
    name: "DEG & PARTNERS CONSULTING COMPANY",
    abbreviation: "Deg & Partners",
    avatarUrl:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/34/AVATAR_00e0170bb5fc8a8cae3fd79abdc36c943669673b.png"
  }
];
