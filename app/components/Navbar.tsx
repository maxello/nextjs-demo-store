import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, GiftTopIcon } from '@heroicons/react/24/outline';
import Cart from '@/app/components/cart';
import NavLink from './NavLink';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' }
]

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky z-10 top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center text-indigo-500">
              <GiftTopIcon aria-hidden="true" className="size-9" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink key={item.name} link={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Cart />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <div key={item.name} className="flex flex-col text-center">
              {/* <DisclosureButton>{item.name}</DisclosureButton> */}
              <NavLink link={item} />
            </div>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
