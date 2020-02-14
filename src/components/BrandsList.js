import React from 'react';
import Bradns from './Brands';

const BrandsList = ({ brands }) => {
	return (
		<div>
			{
			  brands.map((user, i) => {
			  	return (
			  	  <Bradns
			  	    key={i}
			  	    id={brands[i].id}
			  	    name={brands[i].name}
			  	  />
			  	);
			  })
			}
		</div>
	);
}

export default BrandsList;