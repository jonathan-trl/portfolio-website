export type CareerExperienceItem = {
  id: number
  company: string
  position: string
  time_period: string
  responsibilities: { id: number; description: string }[]
}

export type CareerExperienceProps = {
  items: CareerExperienceItem[]
}
