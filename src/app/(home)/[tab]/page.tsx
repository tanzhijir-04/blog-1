import { staticPage } from '@/app/static-page'
export const generateStaticParams = () =>
  staticPage.slice(1).map(name => ({ tab: name.toLowerCase() }))

export const dynamic = 'error'
export default function Page() {
  return null
}
