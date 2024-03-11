import EmptyState from '@/app/components/EmptyState'
import ClientOnly from '@/app/components/ClientOnly'

import getCurrentUser from '@/app/actions/getCurrentUser'
import getReservations from '@/app/actions/getReservations'

import TripsClient from './TripsClient'

const TripsPage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title='Sin Autorizacion'
          subtitle='Porfavor inicie sesion'
        />
      </ClientOnly>
    )
  }

  const reservations = await getReservations({ userId: currentUser.id })

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='Sin propiedades guardas'
          subtitle='Mira las propiedades que tienes agendadas'
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default TripsPage
