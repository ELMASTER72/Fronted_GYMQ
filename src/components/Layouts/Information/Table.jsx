import React from 'react'
import styles from './styles.module.scss'

const Table = () => {
  return (
    <div className={styles.table}>
        <table>
            <thead>
                <tr>
                <th>Día</th>
                <th>Mañana</th>
                <th>Tarde</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Lunes</td>
                <td>8:00 - 12:00</td>
                <td>16:00 - 20:00</td>
                </tr>
                <tr>
                <td style={{color: 'black'}}>Martes</td>
                <td style={{color: 'black'}}>8:00 - 12:00</td>
                <td style={{color: 'black'}}>16:00 - 20:00</td>
                </tr>
                <tr>
                <td>Miércoles</td>
                <td>8:00 - 12:00</td>
                <td>16:00 - 20:00</td>
                </tr>
                <tr>
                <td style={{color: 'black'}}>Jueves</td>
                <td style={{color: 'black'}}>8:00 - 12:00</td>
                <td style={{color: 'black'}}>16:00 - 20:00</td>
                </tr>
                <tr>
                <td>Viernes</td>
                <td>8:00 - 12:00</td>
                <td>16:00 - 20:00</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table;