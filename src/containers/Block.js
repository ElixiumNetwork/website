import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Transaction from '../components/Transaction'
import ColorHash from '../components/ColorHash'

const styles = {
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '250px',
    fontSize: '14px',
    marginTop: '10px',
    marginBottom: '10px',
    color: '#1b1b1b'
  },
  hash: {
    background: '#f0f0f0',
    borderRadius: '3px',
    padding: '10px',
    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .2)',
    marginBottom: '50px'
  },
  summaryContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '80px'
  }
}

class Block extends Component {
  state = {}

  componentDidMount() {
    this.getBlock(this.props.match.params.hash)
  }

  getBlock(hash) {
    fetch(`http://144.202.29.48:32123/block_by_hash/${hash}`)
    .then(d => d.json())
    .then(block => this.setState({ block }, () => fetch(`http://192.34.60.157:32123/latest_block`)
    .then(d => d.json())
    .then(latestBlock => this.setState({ latestBlock }))))
  }

  componentWillReceiveProps(props) {
    this.getBlock(props.match.params.hash)
  }

  render() {
    const { block, latestBlock } = this.state

    if (!block || !latestBlock) return null

    return (
      <div style={{ paddingLeft: '200px', paddingRight: '200px', boxSizing: 'border-box', width: '100%' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>
          <Link to='/blockexplorer'>Blocks</Link> / &nbsp;
          <h1 style={{ fontSize: '24px', display: 'inline-block' }}>Block #{ block.index }</h1>
        </span>

        <div style={ styles.hash }>
          Hash
          <span style={{ color: '#808080', marginLeft: '20px' }}>
            { block.hash.toLowerCase() }
          </span>
        </div>

        <ColorHash hash={ block.hash } />

        <h2>Summary</h2>
        <div style={ styles.summaryContainer }>
          <div style={{ width: '48%', display: 'inline-block', float: 'left' }}>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Number of Transactions</strong></p>
              <p style={ styles.text }>{ block.transactions.length }</p>
            </div>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Height</strong></p>
              <p style={ styles.text }>{ block.index }</p>
            </div>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Block Reward</strong></p>
              <p style={ styles.text }>{ parseFloat(block.transactions[0].outputs[0].amount.coef.toString().substring(0, 10)) * 100 } XEX</p>
            </div>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Timestamp</strong></p>
              <p style={ styles.text }>{ moment.unix(block.timestamp).format('MMM DD, YYYY hh:mm:ss A') }</p>
            </div>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Merkle Root</strong></p>
              <p style={ styles.text }><ColorHash hash={ block.merkle_root } /></p>
            </div>
          </div>
          <div style={{ width: '48%', display: 'inline-block', float: 'left' }}>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Previous Block</strong></p>
              <Link style={ styles.text } to={`/blockexplorer/block/${block.previous_hash}`}><ColorHash hash={ block.previous_hash } /></Link>
            </div>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Difficulty</strong></p>
              <p style={ styles.text }>{ block.difficulty }</p>
            </div>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Nonce</strong></p>
              <p style={ styles.text }>{ block.nonce }</p>
            </div>
            <div style={{ borderTop: '1px solid #c0c0c0', display: 'flex', justifyContent: 'space-between' }}>
              <p style={ styles.text }><strong>Version</strong></p>
              <p style={ styles.text }>{ block.version }</p>
            </div>
          </div>
        </div>

        <h2>Transactions</h2>
        { block.transactions.map(transaction => (
          <Transaction
            transaction={ transaction }
            currBlockIndex={ block.index }
            latestBlockIndex={ latestBlock.index }
          />
        )) }
      </div>
    )
  }
}

export default Block
