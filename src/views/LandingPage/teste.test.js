import { render, screen } from '@testing-library/react'

import LandingPage from './index'

test(('Testando itens da landing page'), () => {

    const landingPage = render(<LandingPage />)

    const header = landingPage.find('#header')

    expect(header).toHaveLength(1);

    const apresentation = landingPage.find('#apresentation')

    expect(apresentation).toHaveLength(1);

})

test(('Testando itens da landing page - apresentation'), () => {

    const landingPage = render(<LandingPage />)

    const apresentation = screen.getByTestId('apresentation')

    expect(screen.getByTestId('apresentation')).toBeInTheDocument()

})