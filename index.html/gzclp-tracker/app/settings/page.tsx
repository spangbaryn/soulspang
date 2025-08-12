import { AppContainer } from '@/components/app-container'
import { getOrCreateUser } from '@/lib/user'
import { SettingsForm } from '@/components/settings-form'
import { workouts } from '@/lib/constants'

export default async function SettingsPage() {
  const user = await getOrCreateUser()
  const currentWorkoutIndex = user.settings?.currentWorkout || 0
  const workoutKeys = ['A1', 'B1', 'A2', 'B2'] as const
  const currentWorkout = workouts[workoutKeys[currentWorkoutIndex]]

  return (
    <AppContainer>
      <SettingsForm settings={user.settings!} />
    </AppContainer>
  )
}