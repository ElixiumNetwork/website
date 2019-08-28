import React from 'react'
import Link from 'next/link'
import ColorHash from '../components/ColorHash'

const styles = {
  container: {
    borderRadius: '3px',
    background: '#f0f0f0',
    padding: '10px'
  },
  utxo: {
    borderRadius: '3px',
    background: '#fff',
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #c0c0c0',
    display: 'flex',
    justifyContent: 'space-between'
  },
  utxoContainer: {
    width: '45%',
    overflow: 'hidden',
    display: 'inline-block'
  },
  transactionContent: {
    justifyContent: 'space-between',
    display: 'flex'
  },
  confirmations: {
    borderRadius: '3px',
    background: '#45EDAA',
    color: '#fff',
    padding: '5px',
    fontSize: '12px',
    display: 'inline-block'
  }
}

const Utxo = ({ utxo }) => (
  <div style={styles.utxo}>
    <p style={{ margin: '0px', color: '#2CBFC7', display: 'inline-block', margin: '0px' }}>{utxo.addr.substring(0, 30)}...</p>
    <p style={{ color: '#1b1b1b', display: 'inline-block', margin: '0px' }}>
      {utxo.amount} XEX
    </p>
  </div>
)

export default ({ transaction, latestBlockIndex, currBlockIndex }) => (
  <div style={styles.container}>
    <Link href=''><ColorHash hash={transaction.id} /></Link>
    <div style={styles.transactionContent}>
      <div style={styles.utxoContainer}>
        {transaction.inputs.length
          ? transaction.inputs.map(input => <Utxo utxo={input} />)
          : <div style={{ marginTop: '10px' }}>No inputs (token generation)</div>
        }
      </div>
      <div style={styles.utxoContainer}>
        {transaction.outputs.map(output => <Utxo utxo={output} />)}
      </div>
    </div>
    <div style={styles.confirmations}>
      {latestBlockIndex - currBlockIndex} Confirmations
    </div>
  </div>
)
