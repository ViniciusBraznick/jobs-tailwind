import { sidebarItens } from '../../../app/config/sidebarLinks';
import logo from '../../../assets/logo.svg';
import { useAuth } from '../../../app/hooks/useAuth';
import { SidebarLink } from './SidebarLink';
import { cn } from '../../../app/utils/cn';
import { useSideBar } from '../../../app/hooks/useSidebarContext';

export function Sidebar() {
  const { user } = useAuth();
  const links = sidebarItens[user?.isCompany ? 'candidate' : 'candidate'];
  const { sidebarIsOpen, handleToggleSidebar } = useSideBar();

  return (
    <div className={cn(
      'w-full bg-white transition-all',
      sidebarIsOpen ? 'max-w-72' : 'max-w-20',
    )}>
      <div onClick={handleToggleSidebar} className='h-20 flex items-center p-4'>
        <img src={logo} />
      </div>

      <nav className='px-4 bg-white h-full'>
        <div className='w-full '>
          {links.map(({ name, children, icon: IconComponent, link }) => (
            <SidebarLink key={link} name={name} link={link} children={children} hasChildren={children.length > 0} icon={IconComponent}  />                
          ))}
        </div>
      </nav>
    </div>
  );
}
