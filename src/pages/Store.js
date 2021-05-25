import React, { Component } from 'react';
import { CardList } from '../components/CardList/CardList'
import './Store.css'
import { SearchBox } from '../components/SearchBox/SearchBox'


class StorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    this.setState({ products: products })
  }

  render() {
    return (
      <div className='color-gradient'>
        <h1>Store Page</h1>
        <div className="center">
          <SearchBox
            placeholder='Search Products'
            handleChange={this.handleChange}
          />

        </div>
        <CardList products={this.state.products} />
      </div>
    )
  }
}


let products = [
  {
    item: "454209-P",
    description: 'Blood Collection Tube K2 EDTA',
    title: 'Lavender top',
    packageQty: 50,
    category: 'Container',
    volume: '4ml',
    dimensions: "13x75",
    image: '/products/454209.jpeg'
  },
  {
    item: "455092-P",
    description: 'Red Top with black-ring Serum Clot Activator Serum Tube',
    title: 'Red Top Black-Ring',
    packageQty: 50,
    category: 'Container',
    volume: "9ml",
    dimensions: "16x100",
    image: '/products/455092.jpeg'
  },
  {
    item: "456087-P",
    description: 'Green Top with yellow ring Lithium Heparin Tube',
    title: 'Green top',
    packageQty: 50,
    category: 'Container',
    volume: '5ml',
    dimensions: "13x100",
    image: '/products/456087.jpeg'
  },
  {
    item: "BD367814-P",
    description: 'Red Top BD Vacutainer Plus Plastic Serum Tube',
    title: 'Red top',
    packageQty: 100,
    category: 'Container',
    volume: '5ml',
    dimensions: "13x100",
    image: '/products/BD367814.jpeg'
  },
  {
    item: "SWW3210B",
    description: 'Blue Cap Transport Tube',
    title: 'Transport Tube',
    packageQty: 25,
    category: 'Container',
    volume: '10ml',
    dimensions: "13x100",
    image: '/products/SWW3210B.jpeg'
  },
  {
    item: "450230-P",
    description: 'Vacuette Quickshield Safety Tube Holder',
    title: 'Needle Guard',
    packageQty: 50,
    category: 'Collection',
    image: '/products/450230.jpeg'
  },

  {
    item: "450082-B",
    description: 'Safety Blood Collection (butterfly) with Luer Adapter',
    title: '23G Butterfly Collection',
    packageQty: 50,
    category: 'Collection',
    dimensions: "23G x .75”",
    image: '/products/450082.jpeg'
  },
  {
    item: "450072-B",
    description: '21 Gauge Sample Needle',
    title: 'Collection Needle',
    packageQty: 50,
    category: 'Collection',
    dimensions: "21G x  1”",
    image: '/products/450072.jpeg'
  },

  {
    item: "BD367281-P",
    description: 'Butterfly Safety Blood Collection with Luer Adapter ',
    title: '21G Butterfly Collection Set',
    packageQty: 50,
    category: 'Collection',
    dimensions: "21G x 0.75”",
    image: '/products/BD367281.jpeg'
  },

  {
    item: "9809443",
    description: 'Curad Sensitive Skin Paper Tape, 2’x10 yds per roll (6 rolls per pkg)',
    title: 'Adhesive Tape',
    packageQty: 6,
    category: 'Collection',
    dimensions: "2”x10yds",
    image: '/products/884389809443.jpeg'
  },
  {
    item: "840053-R",
    description: 'Disposable Tourniquet. Latex Free. Synthetic Rubber (25 strips per pkg)',
    title: 'Tourniquet',
    packageQty: 25,
    category: 'Collection',
    image: '/products/840053.jpeg'
  },
  {
    item: "PRM25500-B",
    description: 'Sterile Adhesive Bandage',
    title: 'Sterile Adhesive Bandage',
    packageQty: 100,
    category: 'Collection',
    dimensions: "¾” x 3”",
    image: '/products/PRM25500.jpeg'
  },
  {
    item: "MDS089001-R",
    description: 'Tan CoFlex/Coban Bandage 1”x5yrs. Latex free. Tan',
    title: 'Cohesive Foam Bandage',
    packageQty: 5,
    category: 'Collection',
    dimensions: "1”x5yds",
    image: '/products/MDS089001.jpeg'
  },

  {
    item: "PRM21224-B",
    description: '12 ply Sterile Sponge Gauze 2x2',
    title: 'Sterile Sponge Gauze',
    packageQty: 50,
    category: 'Collection',
    dimensions: "2”x2”",
    image: '/products/PRM21224.jpeg'
  },
  {
    item: "724310-E",
    description: 'Urine Collection Cup. Vacuette w/ integrated transfer device',
    title: 'Urine Collection Cup',
    packageQty: 25,
    category: 'Container',
    volume: "100ml",
    image: '/products/724310.jpeg'
  },
  {
    item: "455007-P",
    description: 'No additive Urine Tube 10 ml. Yellow top.',
    title: 'Yellow Top Urine Tube',
    packageQty: 50,
    category: 'Container',
    volume: "10ml",
    dimensions: "16x100",
    image: '/products/455007.jpeg'
  },
  {
    item: "TNR-HXK-263MER-E",
    description: 'Sterile Urine Specimen Cup w/ temperature strip (25 per pkg)',
    title: 'Temperature Urine Cup',
    packageQty: 25,
    category: 'Container',
    image: '/products/tnrhxk.jpg'
  },
  {
    item: "CHBIWUS100",
    description: 'Sterile Urine Transfer Device, individually wrapped.',
    title: 'Urine Transfer Device',
    packageQty: 100,
    category: 'Container',
    image: '/products/CHBIWUS100-C.jpeg'
  },
  {
    item: "DYND36600",
    description: 'Graduated Specimen Pan. Urine or stool.',
    title: 'Specimen Collector Pan',
    packageQty: 10,
    category: 'Container',
    image: '/products/DYND36600.jpeg'
  },
  {
    item: "CT2000-CUT-P",
    description: 'Large mouth Transfer Pipette',
    title: 'Transfer Pipette',
    packageQty: 100,
    volume: "3ml",
    category: 'Lab',
    image: '/products/CT2000-CUT.jpeg'
  },
  {
    item: "P25-3606-U-E",
    description: 'DNA Swab w NTM, Sterile. Elongated tip. Polystyrene handle w/ molded break point. 30mm from end of tip',
    title: 'Sterile Collection Swab',
    packageQty: 50,
    category: 'Collection',
    image: '/products/P25-3606-2.jpeg'
  },






]

export default StorePage;