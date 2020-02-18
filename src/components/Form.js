import React from 'react'

const Form = ({submit, data, change}) => {
    return (
        <form onSubmit={submit}>
        <p>
          name: <input value={data.name} onChange={e=>change(e, 'name')}/>
        </p>
        <p>
          number: <input value={data.number} onChange={e=>change(e, 'number')}/>
        </p>
        <p>
          <button type="submit">add</button>
        </p>
      </form>
    )
}

export default Form
