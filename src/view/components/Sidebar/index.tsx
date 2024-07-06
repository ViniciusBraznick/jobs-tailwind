import { sidebarItens } from '../../../app/config/sidebarLinks';
import logo from '../../../assets/logo.svg';
import { useAuth } from '../../../app/hooks/useAuth';
import { SidebarLink } from './SidebarLink';

export function Sidebar() {
  const { user } = useAuth();
  const links = sidebarItens[user?.isCompany ? 'candidate' : 'candidate'];

  return (
    <div className="w-full max-w-72 bg-white">
      <div className='h-20 flex items-center p-4'>
        <img src={logo} />
      </div>

      <nav className='px-4 bg-white h-full'>
        <div>
          {links.map(({ name, children, icon: IconComponent, link }) => (
            <SidebarLink name={name} link={link} children={children} hasChildren={children.length > 0} icon={IconComponent}  />                
          ))}
        </div>
      </nav>
    </div>
  );
}
