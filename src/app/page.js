import { generateContacts } from '@/lib/generateContacts'
import ContactDirectory from '@/components/ContactDirectory'

export default function Home() {
  const contacts = generateContacts(10000)

  return <ContactDirectory contacts={contacts} />
}