import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from '../../../app/utils/cn';
import { useSideBarController } from './useSideBarController';

interface sidebarLinkProps {
  name: string;
  link: string;
  hasChildren?: boolean;
  icon?: React.ComponentType;
  children?: { name: string; link: string; }[] | undefined;
  isSubLink?: boolean;
}

export function SidebarLink({ name, link: urlPath, hasChildren, icon: IconComponent, children, isSubLink  }: sidebarLinkProps) {
  const { isOpen, handleToggleLinkOpen, isCurrentLink, navigateTo } = useSideBarController({urlPath, isSubLink});
  
  return (
    <Collapsible.Root open={isOpen} key={name} onOpenChange={handleToggleLinkOpen}>
      <Collapsible.Trigger asChild className={cn(
        isSubLink && "before:content-['-']",
        (isCurrentLink && !isSubLink) && 'bg-blue-500 text-white',
        (isSubLink && isCurrentLink) && 'font-bold',
      )}>
        <div onClick={navigateTo} className={cn(
          'flex items-center justify-between p-2 rounded-lg cursor-pointer',
          isSubLink && "justify-start gap-1 pl-0",
          (!isCurrentLink && !hasChildren) && 'hover:bg-gray-50',
        )}>
          <div className='flex items-center gap-3'>
            {IconComponent && <IconComponent />}
            {name}
          </div>

          {hasChildren && (
            <div className='flex items-center gap-1'>
              <ChevronDownIcon className={cn(
                'transition-all',
                isOpen && 'rotate-180 transition-all'
              )} />
            </div>
          )}
        </div>                
      </Collapsible.Trigger>

      {hasChildren && (
        <Collapsible.Content className="overflow-hidden transition-[height] duration-500 ease-in-out">
          <ul className="ml-4 relative before:content-[''] before:absolute before:h-[88%] before:w-[0.5px] before:bg-gray-900"> 
            {children?.map((child) => (
              <li key={child.link}>
                <SidebarLink name={child.name} link={child.link} isSubLink /> 
              </li>
            ))}
          </ul>
        </Collapsible.Content>
      )}
  </Collapsible.Root>
  );
}