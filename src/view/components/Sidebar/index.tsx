import { sidebarItens } from '../../../app/config/sidebarLinks';
import logo from '../../../assets/logo.svg';
import { useAuth } from '../../../app/hooks/useAuth';
import { SidebarLink } from './SidebarLink';
import { cn } from '../../../app/utils/cn';
import { useSideBar } from '../../../app/hooks/useSidebarContext';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

export function Sidebar() {
  const { user } = useAuth();
  const links = sidebarItens[user?.isCompany ? 'company' : 'candidate'];
  const { sidebarIsOpen, handleToggleSidebar } = useSideBar();

  return (
    <aside className={cn(
      'w-full bg-white transition-all z-10',
      sidebarIsOpen ? 'max-w-72' : 'max-w-20',
      'absolute top-0 -translate-x-[100%] h-full',
      'md:relative  md:translate-x-0',
      sidebarIsOpen && 'translate-x-0',
    )}>
      <div className='h-20 flex items-center p-4 relative'>
        <img src={logo} />

        <button
          onClick={handleToggleSidebar} 
          className="max-sm:hidden w-6 h-12 rounded-md rounded-tl-none rounded-bl-none flex items-center justify-center bg-gray-200 cursor-pointer absolute -right-6 top-[100%]"
        >
          <DoubleArrowRightIcon className={cn(sidebarIsOpen && 'rotate-180 transition-all' )} />
        </button>
      </div>

      <nav className='px-4 bg-white h-full'>
        <div className='w-full '>
          {links.map(({ name, children, icon: IconComponent, link }) => (
            <SidebarLink key={link} name={name} link={link} children={children} hasChildren={children.length > 0} icon={IconComponent}  />                
          ))}
        </div>
      </nav>
    </aside>
  );
}
