import React from "react";
import {GridList,GridListTile,GridListTileBar,IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import stall from '../../assets/images/stall.jpg';
import kurta from '../../assets/images/kurta.jpg';
import dupatta from '../../assets/images/dupatta.jpg';
import suit from '../../assets/images/suit.jpg';
import gown from '../../assets/images/gown.jpg';
import bag from '../../assets/images/bag.jpg';
import plazosuit from '../../assets/images/plazosuit.jpg';
import kajal from '../../assets/images/kajal.jpg';
import pinkdress from '../../assets/images/pinkdress.JPG';
import blueshirt from '../../assets/images/blueshirt.jpg';

function AllDetailPage(){
	const tileData = [
		{ id:1, img: stall, title: 'stall', price:'200/- Rs' },
		{ id:2, img: kurta, title: 'kurta', price:'300/- Rs'},
		{ id:3, img: dupatta, title: 'dupatta', price:'250/- Rs'},
		{ id:4, img: suit, title: 'suit', price:'600/- Rs'},
		{ id:5, img: gown, title: 'gown', price:'1000/- Rs'},
		{ id:6, img: bag, title: 'bag', price:'300/- Rs'},
		{ id:7, img: plazosuit, title: 'plazosuit', price:'700/- Rs'},
		{ id:8, img: kajal, title: 'kajal', price:'200/- Rs'},
		{ id:9, img: pinkdress, title: 'pinkdress', price:'800/- Rs'},
		{ id:10, img: blueshirt, title: 'blueshirt', price:'200/- Rs'}
	];
	const addToCart = (a)=>{
		const cartItem = [];
		tileData.forEach(function(item){
			const itemId=item.id;
			console.log(itemId);
		});
		console.log(cartItem);
		console.log(a.getById());
	}
	
	return(
		<div>
			<GridList cellHeight={180} cols={4} style={{marginTop:"15px"}}>
				{tileData.map((tile) => (
				<GridListTile key={tile.img} style={{height: "330px"}}>
					<img src={tile.img} alt={tile.title} />
					<GridListTileBar
					  title={tile.title}
					  subtitle={<span>{tile.price}</span>}
					  actionIcon={
						<IconButton 
							aria-label={tile.title}
							color="secondary" 								
							onClick={addToCart}>
							<AddShoppingCartIcon />
						</IconButton>
					  }
					/>
				</GridListTile>
				))}
			</GridList>
			
		</div>
	)

}

export default AllDetailPage;




/*
		gridListItem =({item})=>{
		return(
			<GridListTile key={item.img} style={{height: "330px"}}>
				<img src={item.img} alt={item.title} />
				<GridListTileBar
					title={item.title}
					actionIcon={
						<IconButton 
							aria-label={item.title} 
							color="secondary" 								
							onClick={addToCart}>
							<AddShoppingCartIcon />
						</IconButton>
					}
				/>
			</GridListTile>
		)
	}
	
	return(
		<div>
			<GridList cellHeight={180} cols={4} style={{marginTop:"15px"}}>
				{gridListItem(tileData)}
			</GridList>
			
		</div>
	)
*/
