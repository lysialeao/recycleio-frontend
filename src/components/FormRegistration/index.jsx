import React from 'react'

import { Form, Item } from './styles'
import Input from '../Input'

const FormRegistration = ({ inputs }) => {
    return (
        <Form>
            {
                inputs && inputs.map((item) => {
                    return (
                        <Item>
                            <label>{item.label}</label>
                            <Input type={item.type} id={item.id} />
                        </Item>
                    )
                })
            }
            <label>{}</label>
        </Form>
    )
}

export default FormRegistration