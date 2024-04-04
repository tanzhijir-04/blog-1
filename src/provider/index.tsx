'use client'
import { useRouter } from 'next/navigation'

import { I18nProvider, RouterProvider } from 'react-aria-components'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  return (
    <I18nProvider locale='en-US'>
      <RouterProvider navigate={router.push}>{children}</RouterProvider>
    </I18nProvider>
  )
}
