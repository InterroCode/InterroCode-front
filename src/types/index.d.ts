declare module '@/routes' {
  export type RouteType = {
    path: string
    element: React.ReactNode
  }

  export const authRoutes: RouteType[]
}
