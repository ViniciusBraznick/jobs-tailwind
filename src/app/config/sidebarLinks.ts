import { BackpackIcon, DashboardIcon, MixerVerticalIcon, PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons";

const commons = [
  {
    icon: PaperPlaneIcon,
    name: 'Chat',
    link: '/chat',
    children: [],
  },
];

export const sidebarItens = {
  company: [
    {
      icon: DashboardIcon,
      name: 'Dashboard',
      link: '/company/',
      children: [],
    },
    {
      icon: PersonIcon,
      name: 'Minha Conta',
      link: '',
      children: [
        {name: 'Segurança', link: '/company/account/security'},
        {name: 'Dados da Conta', link: '/company/account/data'},
        {name: 'Privacidade', link: '/company/account/privacy'},
      ],
    },
    ...commons,
  ],
  candidate: [
    ...commons,
    {
      icon: DashboardIcon,
      name: 'Dashboard',
      link: '/candidate/',
      children: [],
    },
    {
      icon: PersonIcon,
      name: 'Minha Conta',
      link: '',
      children: [
        {name: 'Currículo', link: '/account/curriculum'},
        {name: 'Segurança', link: '/account/security'},
        {name: 'Dados da Conta', link: '/candidate/account/data'},
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