import React, { Component } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'


class Note extends Component {
    render() {
        return (
            <div className="note">
             <p>Learn to Code</p>
              <span>
                    <button>< FaPencilAlt /></button>
                    <button><FaTrash /></button>
              </span>
            </div>
        )
    }
}

export default Note