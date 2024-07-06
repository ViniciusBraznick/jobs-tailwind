import { BackpackIcon, DashboardIcon, MixerVerticalIcon, PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons";

const commons = [
  {
    icon: DashboardIcon,
    name: 'Dashboard',
    link: '/',
    children: [],
  },
  {
    icon: PaperPlaneIcon,
    name: 'Chat',
    link: '/chat',
    children: [],
  },
];

export const sidebarItens = {
  company: [
    ...commons,
  ],
  candidate: [
    ...commons,
    {
      icon: PersonIcon,
      name: 'Minha Conta',
      link: '',
      children: [
        {name: 'Currículo', link: '/account/curriculum'},
        {name: 'Segurança', link: '/account/security'},
        {name: 'Dados da Conta', link: '/account/data'},
        {name: 'Privacidade', link: '/account/privacy'},
      ],
    },
    {
      icon: BackpackIcon,
      name: 'Candidaturas',
      link: '/applications',
      children: [],
    },
    {
      icon: MixerVerticalIcon,
      name: 'Preferências',
      link: '/preferences',
      children: [],
    },
  ]
}