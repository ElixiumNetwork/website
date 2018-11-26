import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import moment from 'moment'
import 'react-table/react-table.css'
import ColorHash from '../components/ColorHash'

class BlockExplorer extends Component {
  state = {
    blocks: []
  }

  componentDidMount() {
    this.fetchBlocks(50)
  }

  fetchBlocks = count => {
    console.log('Fetching Blocks!')

    fetch(`http://ec2-35-162-9-215.us-west-2.compute.amazonaws.com:32123/last_n_blocks/${count}`)
    .then(d => d.json())
    .then(blocks => this.setState({ blocks }))
  }

  render() {
    let { blocks } = this.state

    const columns = [{
      Header: 'Height',
      accessor: 'index',
      maxWidth: 100
    }, {
      Header: 'Hash',
      accessor: 'hash',
      Cell: ({ value }) => <Link to={`/blockexplorer/block/${value}`}><ColorHash hash={ value } /></Link>,
      width: 150
    }, {
      Header: 'Time (UTC)',
      accessor: 'timestamp',
      Cell: ({ value }) => moment.unix(value).format('YYYY-MM-DD H:mm'),
      width: 150
    }, {
      Header: 'TX Count',
      accessor: 'transactions',
      Cell: ({ value }) => value.length,
      maxWidth: 100
    }, {
      Header: 'Output (XEX)',
      accessor: 'transactions',
      Cell: ({ value }) => value.reduce((txac, tx) => {
        return txac + tx.outputs.reduce((acc, o) => acc + (o.amount.sign * o.amount.coef * Math.pow(10, o.amount.exp)), 0)
      }, 0).toFixed(6)
    }, {
      Header: 'Fees (XEX)',
      accessor: 'reward',
      Cell: ({ value, original }) => {
        let totalOut = original.transactions[0].outputs.reduce((acc, o) => acc + (o.amount.sign * o.amount.coef * Math.pow(10, o.amount.exp)), 0)
        return (totalOut - (value.sign * value.coef * Math.pow(10, value.exp))).toFixed(6)
      }
    }, {
      Header: 'Fee/kB (XEX)',
      accessor: 'transactions',
      Cell: ({ value, original }) => {
        let transactions = value.slice(1)

        let fpb = transactions.map(tx => {
          let totalIn = tx.inputs.reduce((a, { amount }) => a + (amount.sign * amount.coef * Math.pow(10, amount.exp)), 0)
          let totalOut = tx.outputs.reduce((a, { amount }) => a + (amount.sign * amount.coef * Math.pow(10, amount.exp)), 0)

          return ((totalIn - totalOut) / tx.size) / 1024
        })

        return ((fpb.reduce((acc, f) => acc + f, 0) / fpb.length) || 0).toFixed(6)
      }
    }, {
      Header: 'Difficulty',
      accessor: 'difficulty',
      Cell: ({ value }) => value.toFixed(3)
    }, {
      Header: 'Size (kB)',
      accessor: 'size',
      Cell: ({ value }) => (value / 1024).toFixed(3)
    }, {
      Header: 'Nonce',
      accessor: 'nonce'
    }]

    return (
      <div style={{ width: '80%', marginLeft: '10%' }}>
        <ReactTable
          data={ blocks.reverse() }
          columns={ columns }
          defaultPageSize={ 50 }
          resizeable={ false }
        />
      </div>
    )
  }
}

export default BlockExplorer
