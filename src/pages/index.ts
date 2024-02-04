import React from 'react'


    export { HomePage } from './home'

    export const LoginPage = React.lazy(() => import('./login'))
    export const ProductPage = React.lazy(() => import('./product'))