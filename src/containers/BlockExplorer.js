import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import moment from 'moment'
import 'react-table/react-table.css'

class BlockExplorer extends Component {
  state = {
    blocks: []
  }

  componentDidMount() {
    this.fetchBlocks(50)
  }

  fetchBlocks = count => {
    console.log('Fetching Blocks!')

    fetch(`http://localhost:32123/last_n_blocks/${count}`)
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
      Cell: ({ value }) => <Link to={`/blockexplorer/block/${value}`}><span style={{ fontFamily: 'monospace' }}>{ value }</span></Link>,
      minWidth: 525
    }, {
      Header: 'Timestamp',
      accessor: 'timestamp',
      Cell: ({ value }) => moment.unix(value).format('MMM DD, YYYY hh:mm:ss A'),
      width: 220
    }, {
      Header: 'Transactions',
      accessor: 'transactions',
      Cell: ({ value }) => value.length,
      maxWidth: 200
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
